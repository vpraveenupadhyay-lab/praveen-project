import ReferrerField from './components/ReferrerField'
import QueryParamsList from './components/QueryParamsList'
import { useReferrer } from './hooks/useReferrer'
import './App.css'

function App() {
  const {
    currentUrl,
    documentReferrer,
    queryReferrer,
    rawDocumentReferrer,
    rawQueryReferrer,
  } = useReferrer()

  const primaryReferrer = rawQueryReferrer || rawDocumentReferrer
  const primaryParsed = queryReferrer || documentReferrer

  return (
    <main className="referrer-page">
      <header className="referrer-page__header">
        <p className="referrer-page__brand">Referrer Analysis</p>
        <h1>Who sent you here</h1>
        <p className="referrer-page__subtitle">
          Full referrer URL, including query params
        </p>
      </header>

      <section className="referrer-panel" aria-labelledby="primary-referrer">
        <h2 id="primary-referrer">Referrer</h2>
        <ReferrerField label="Full URL" value={primaryReferrer} />
        {primaryParsed && (
          <>
            <ReferrerField label="Origin" value={primaryParsed.origin} />
            <ReferrerField label="Path" value={primaryParsed.pathname} />
            <ReferrerField label="Search" value={primaryParsed.search} emptyLabel="(none)" />
            <div className="referrer-panel__block">
              <span className="referrer-field__label">Query params</span>
              <QueryParamsList params={primaryParsed.queryParams} />
            </div>
          </>
        )}
      </section>

      <section className="referrer-panel" aria-labelledby="sources">
        <h2 id="sources">Sources</h2>
        <ReferrerField
          label="?referrer= query param"
          value={rawQueryReferrer}
          emptyLabel="Not set — add ?referrer=https://example.com/page?utm=1"
        />
        <ReferrerField
          label="document.referrer"
          value={rawDocumentReferrer}
          emptyLabel="Empty (direct visit, privacy strip, or same-tab typed URL)"
        />
      </section>

      <section className="referrer-panel" aria-labelledby="current-page">
        <h2 id="current-page">Current page</h2>
        <ReferrerField label="Full URL" value={currentUrl?.fullUrl} />
        <div className="referrer-panel__block">
          <span className="referrer-field__label">Query params</span>
          <QueryParamsList params={currentUrl?.queryParams} />
        </div>
      </section>
    </main>
  )
}

export default App
