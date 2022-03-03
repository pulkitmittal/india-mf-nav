export function getBaseUrl() {
  const protocol = process.env.VERCEL ? 'https' : 'http';
  const host = process.env.VERCEL_URL || 'localhost:4000';
  return `${protocol}://${host}`;
}
