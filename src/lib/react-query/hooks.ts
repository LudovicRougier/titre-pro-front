import {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  useQuery,
  QueryObserverResult,
  useMutation,
} from "@tanstack/react-query";

export const useAppQuery = <TData = unknown, TError = Error>(
  queryKey: QueryKey,
  queryFn: QueryFunction<TData>,
  options?: Omit<
    UseQueryOptions<TData, TError>,
    "queryKey" | "queryFn" | "initialData"
  > & { initialData?: TData }
): QueryObserverResult<TData, TError> => {
  return useQuery<TData, TError>(queryKey, queryFn, options);
};

export const useAppMutation = useMutation;
