type ApiRequestOptions = RequestInit & {
  query?: Record<string, string | number | boolean | undefined>;
};

function createUrl(path: string, query?: ApiRequestOptions["query"]) {
  const url = new URL(path, process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000/api");

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value === undefined) return;
      url.searchParams.set(key, String(value));
    });
  }

  return url.toString();
}

export async function apiRequest<T>(path: string, options: ApiRequestOptions = {}): Promise<T> {
  const { query, headers, ...restOptions } = options;

  const response = await fetch(createUrl(path, query), {
    ...restOptions,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return (await response.json()) as T;
}
