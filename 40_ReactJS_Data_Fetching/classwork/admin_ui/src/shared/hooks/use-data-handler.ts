import { useState } from "react";

type THandler<TData, TParams> = {
  (params: TParams): Promise<TData>;
};

export const useDataHandler = <
  TData = unknown,
  TError = unknown,
  TParams = undefined
>(
  handler: THandler<TData, TParams>
) => {
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<TError | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const dataHandler = async (params: TParams) => {
    setLoading(true);

    try {
      const data = await handler(params);
      setData(data);
    } catch (error) {
      setError(error as TError);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, isLoading, dataHandler };
};
