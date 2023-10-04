const CryptocurrencyList = props => {
  const {each} = props
  return (
    <div>
      <div>
        <img src={each.currency_logo} />
      </div>
    </div>
  )
}

export default CryptocurrencyList
