export function generateRandomId() {
  const random = Math.random().toString(36).substring(2, 8);
  const timestamp = Date.now().toString(36);
  return random + timestamp;
}
