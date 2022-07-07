import { useEffect, useState } from "react";

type THandler<TData> = {
  (): Promise<TData>;
};

export const useData = <TData = unknown, TError = unknown>(
  handler: THandler<TData>
) => {
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<TError | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const pull = async () => {
      setLoading(true);
      try {
        const data = await handler();

        setData(data);
      } catch (error) {
        setError(error as TError);
      } finally {
        setLoading(false);
      }
    };

    pull();
  }, [handler]);

  return { data, error, isLoading };
};
