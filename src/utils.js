export function formatMessage(role, text) {
  return { role, parts: [{ text }] };
}

export function isEmptyMessage(text) {
  return !text || text.trim() === "";
}