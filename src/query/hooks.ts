import {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  useQuery,
} from "@tanstack/react-query";

export const useAppQuery = (
  queryKey: QueryKey,
  queryFn: QueryFunction,
  options?: Omit<
    UseQueryOptions<unknown, Error, unknown, QueryKey>,
    "queryKey" | "queryFn" | "initialData"
  > & { initialData?: () => undefined }
) => useQuery(queryKey, queryFn, options);
