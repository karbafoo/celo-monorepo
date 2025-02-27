import { ContractKit } from '@celo/contractkit'
import {
  AccountAuthResponseSuccess,
  DappKitRequestMeta,
  DappKitRequestTypes,
  DappKitResponseStatus,
  parseDappkitResponseDeeplink,
  SignTxResponseSuccess,
} from '@celo/utils'
import { Linking, Platform } from 'react-native'
import {
  ANDROID_STORE_URL,
  checkAccountAuth,
  checkSignedTxs,
  IOS_STORE_URL,
  requestAccountAddressFactory,
  requestTxSigFactory,
  TxParams,
  VALORA_APP_URL,
} from './common'
export {
  AccountAuthRequest,
  DappKitRequestMeta,
  serializeDappKitRequestDeeplink,
  SignTxRequest,
} from '@celo/utils'
// TODO: causes warnings for webpack/babel/expo, once prettier is upgraded use:
// export type { TxParams } from './common'
export { FeeCurrency, TxParams } from './common'

export function listenToAccount(callback: (account: string) => void) {
  return Linking.addEventListener('url', ({ url }: { url: string }) => {
    try {
      const dappKitResponse = parseDappkitResponseDeeplink(url)
      if (
        dappKitResponse.type === DappKitRequestTypes.ACCOUNT_ADDRESS &&
        dappKitResponse.status === DappKitResponseStatus.SUCCESS
      ) {
        callback(dappKitResponse.address)
      }
    } catch (error) {}
  })
}

export function listenToSignedTxs(callback: (signedTxs: string[]) => void) {
  return Linking.addEventListener('url', ({ url }: { url: string }) => {
    try {
      const dappKitResponse = parseDappkitResponseDeeplink(url)
      if (
        dappKitResponse.type === DappKitRequestTypes.SIGN_TX &&
        dappKitResponse.status === DappKitResponseStatus.SUCCESS
      ) {
        callback(dappKitResponse.rawTxs)
      }
    } catch (error) {}
  })
}

function waitDecorator(
  requestId: string,
  checkCallback: (requestId: string, dappKitResponse: any) => boolean
): Promise<any> {
  return new Promise((resolve, reject) => {
    const handler = ({ url }: { url: string }) => {
      try {
        const dappKitResponse = parseDappkitResponseDeeplink(url)
        if (checkCallback(requestId, dappKitResponse)) {
          Linking.removeEventListener('url', handler)
          resolve(dappKitResponse)
        }
      } catch (error) {
        reject(error)
      }
    }
    Linking.addEventListener('url', handler)
  })
}

export function waitForAccountAuth(requestId: string): Promise<AccountAuthResponseSuccess> {
  return waitDecorator(requestId, checkAccountAuth)
}

export function waitForSignedTxs(requestId: string): Promise<SignTxResponseSuccess> {
  return waitDecorator(requestId, checkSignedTxs)
}

export function requestAccountAddress(meta: DappKitRequestMeta) {
  requestAccountAddressFactory(meta, openURLOrAppStore)
}

export async function requestTxSig(
  kit: ContractKit,
  txParams: TxParams[],
  meta: DappKitRequestMeta
) {
  return requestTxSigFactory(kit, txParams, meta, openURLOrAppStore)
}

// Function to wrap Linking.openURL to try to redirect to App Store if app isn't downloaded
async function openURLOrAppStore(url: string) {
  let callURL
  if (await Linking.canOpenURL(url)) {
    callURL = url
  } else {
    switch (Platform.OS) {
      case 'ios': {
        callURL = IOS_STORE_URL
        break
      }
      case 'android': {
        callURL = ANDROID_STORE_URL
        break
      }
      default: {
        callURL = VALORA_APP_URL
        break
      }
    }
  }
  Linking.openURL(callURL)
}
