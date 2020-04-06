export default async function xhr(url, params = {}) {
  if (!params.headers) params.headers = {};
  params.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...params.headers,
  };
  try {
    return await fetch(url, params);
  } catch (e) {
    throw new Error(e);
  }
}
