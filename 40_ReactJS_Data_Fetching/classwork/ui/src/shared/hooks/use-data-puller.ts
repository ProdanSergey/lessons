import { useEffect, useState } from "react";

type THandler<TData> = {
  (): Promise<{
    data: TData;
    completed?: boolean;
    timeout?: number;
  }>;
};

export const useDataPuller = <TData = unknown, TError = unknown>(
  handler: THandler<TData>
) => {
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<TError | null>(null);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    const pull = async () => {
      try {
        const { data, completed = false, timeout = 5 * 1000 } = await handler();

        setData(data);

        if (!completed) {
          timerId = setTimeout(pull, timeout);
        }
      } catch (error) {
        setError(error as TError);
      }
    };

    pull();

    return () => {
      clearTimeout(timerId);
    };
  }, [handler]);

  return { data, error };
};
