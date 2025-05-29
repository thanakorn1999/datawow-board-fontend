const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";
let accessToken: string | null = null;
let refreshToken: string | null = null;
export function setAccessToken(token) {
  accessToken = token;
}
export function setRefreshToken(token) {
  refreshToken = token;
}

export interface ResponseAPI<T> {
  message?: T | string;
  error?: string;
  statusCode?: number;
}
async function api<T>(
  url: string,
  options: RequestInit = {}
): Promise<T | null> {
  const res = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      ...options.headers,
    },
    cache: "no-store",
  });
  const text = await res.text(); // อ่าน raw body ก่อน
  const data: ResponseAPI<T> = text ? JSON.parse(text) : {};
  if (!res.ok) {
    throw new Error(
      String(data?.message ?? `Request failed with status ${res.status}`)
    );
  } else {
    console.log(`res pass ,token is`, accessToken);
  }

  return (data.message ?? null) as T | null;
}

export default api;
