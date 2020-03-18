import React, { useState, useEffect } from 'react'
import AppEth from '@ledgerhq/hw-app-eth'
import TransportU2F from '@ledgerhq/hw-transport-u2f'

const HD_PATH = `44'/60'/0'/0/0`

async function makeApp () {
  const transport = await TransportU2F.create()
  return new AppEth(transport)
}

async function getAccount (path) {
  const ethApp = await makeApp()
  const result = await ethApp.getAddress(path)
  return result
}

function Main () {
  const [address, setAddress] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  
  useEffect(function () {
    async function getLedgerAddress () {
      try {
        const account = await getAccount(HD_PATH)
        setAddress(account.address)
        setErrorMessage(null)
      } catch (err) {
        setErrorMessage(err.message)
        console.error(err)
      }
    }
    getLedgerAddress()
  }, [])

  return (
    <div>
      <h1>Ledger Web Example:</h1>
      {address &&
        <p>{address}</p>
      }
      {errorMessage && [
        <p key='error-message'>{`Received the following error message: ${errorMessage}`}</p>,
        <p key='refresh-message'>{`Please make sure you have unlocked your ledger and opened the Ethereum application`}</p>
      ]}
    </div>
  )
}

export default Main