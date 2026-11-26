function ReferrerField({ label, value, emptyLabel = 'None' }) {
  const displayValue = value?.trim() ? value : emptyLabel
  const hasValue = Boolean(value?.trim())

  return (
    <div className="referrer-field">
      <span className="referrer-field__label">{label}</span>
      <code className={`referrer-field__value${hasValue ? '' : ' is-empty'}`}>
        {displayValue}
      </code>
    </div>
  )
}

export default ReferrerField
