const API_BASE = "http://localhost:5000/api";

export async function apiRequest(path, { method = "GET", body, token } = {}) {
  const headers = { "Content-Type": "application/json" };

  //   if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  // Success but no content
  if (response.status === 204) return null;

  // Parsing data
  const data = await response.json().catch(() => ({}));

  // Bad request || Internal server error
  if (!response.ok) {
    throw new Error(data.error || data.message || "Request failed");
  }

  return data;
}
