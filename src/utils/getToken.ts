export async function getToken() {
  const res = await fetch("http://localhost:3000/api/token");
  const data = await res.json();
  if (data.token) return data.token;
  return null;
}
