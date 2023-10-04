import {Component} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyList from '../CryptocurrenciesList'

class CryptocurrencyTraker extends Component {
  state = {crypto: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {crypto} = this.state
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    this.setState({crypto: data, isLoading: false})
  }

  render() {
    const {crypto, isLoading} = this.state
    console.log(crypto)
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div className="bg-container">
            <h1>Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <div className="top-bar">
              <p className="coin-type">Cointype</p>
              <p>USD</p>
              <p>EURO</p>
            </div>
            <ul>
              {crypto.map(each => (
                <CryptocurrencyList each={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTraker
