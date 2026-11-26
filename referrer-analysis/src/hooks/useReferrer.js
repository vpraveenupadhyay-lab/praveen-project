function parseUrlParts(urlString) {
  if (!urlString) return null
  if (!URL.canParse(urlString, window.location.origin)) return null

  const parsed = new URL(urlString, window.location.origin)
  const queryEntries = [...parsed.searchParams.entries()]

  return {
    fullUrl: parsed.href,
    origin: parsed.origin,
    pathname: parsed.pathname,
    search: parsed.search,
    hash: parsed.hash,
    queryParams: Object.fromEntries(queryEntries),
  }
}

export function useReferrer() {
  const currentUrl = window.location.href
  const documentReferrer = document.referrer || ''
  const queryReferrer = new URLSearchParams(window.location.search).get('referrer') || ''

  return {
    currentUrl: parseUrlParts(currentUrl),
    documentReferrer: parseUrlParts(documentReferrer),
    queryReferrer: parseUrlParts(queryReferrer),
    rawDocumentReferrer: documentReferrer,
    rawQueryReferrer: queryReferrer,
  }
}
