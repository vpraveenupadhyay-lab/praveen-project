function QueryParamsList({ params }) {
  const entries = Object.entries(params || {})

  if (entries.length === 0) {
    return <p className="query-params__empty">No query params</p>
  }

  return (
    <ul className="query-params">
      {entries.map(([key, value]) => (
        <li key={key} className="query-params__item">
          <span className="query-params__key">{key}</span>
          <code className="query-params__value">{value}</code>
        </li>
      ))}
    </ul>
  )
}

export default QueryParamsList
