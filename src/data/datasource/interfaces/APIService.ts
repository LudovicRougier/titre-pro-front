export interface APIService {
  api: {
    get: (url: string, config?: unknown) => Promise<{ data: unknown }>;
    post: (
      url: string,
      data?: unknown,
      config?: unknown
    ) => Promise<{ data: unknown }>;
    query: (query: unknown) => Promise<{ data: unknown }>;
  };
}
