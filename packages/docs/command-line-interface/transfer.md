# `celocli transfer`

Transfer CELO and Celo Dollars


## `celocli transfer:celo`

Transfer CELO to a specified address. (Note: this is the equivalent of the old transfer:gold)

```
Transfer CELO to a specified address. (Note: this is the equivalent of the old transfer:gold)

USAGE
  $ celocli transfer:celo

OPTIONS
  --comment=comment                                  Transfer comment
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Address of the sender
  --to=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d    (required) Address of the receiver

  --value=value                                      (required) Amount to transfer (in
                                                     wei)

EXAMPLE
  celo --from 0xa0Af2E71cECc248f4a7fD606F203467B500Dd53B --to
  0x5409ed021d9299bf6814279a6a1411a7e866a631 --value 10000000000000000000
```

_See code: [src/commands/transfer/celo.ts](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/transfer/celo.ts)_

## `celocli transfer:dollars`

Transfer Celo Dollars (cUSD) to a specified address.

```
Transfer Celo Dollars (cUSD) to a specified address.

USAGE
  $ celocli transfer:dollars

OPTIONS
  --comment=comment                                  Transfer comment
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Address of the sender
  --to=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d    (required) Address of the receiver

  --value=value                                      (required) Amount to transfer (in
                                                     wei)

EXAMPLE
  dollars --from 0xa0Af2E71cECc248f4a7fD606F203467B500Dd53B --to
  0x5409ed021d9299bf6814279a6a1411a7e866a631 --value 1000000000000000000
```

_See code: [src/commands/transfer/dollars.ts](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/transfer/dollars.ts)_

## `celocli transfer:euros`

Transfer Celo Euros (cEUR) to a specified address.

```
Transfer Celo Euros (cEUR) to a specified address.

USAGE
  $ celocli transfer:euros

OPTIONS
  --comment=comment                                  Transfer comment
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Address of the sender
  --to=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d    (required) Address of the receiver

  --value=value                                      (required) Amount to transfer (in
                                                     wei)

EXAMPLE
  euros --from 0xa0Af2E71cECc248f4a7fD606F203467B500Dd53B --to
  0x5409ed021d9299bf6814279a6a1411a7e866a631 --value 1000000000000000000
```

_See code: [src/commands/transfer/euros.ts](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/transfer/euros.ts)_

## `celocli transfer:gold`

Transfer CELO to a specified address. _DEPRECATION WARNING_ Use the "transfer:celo" command instead

```
Transfer CELO to a specified address. *DEPRECATION WARNING* Use the "transfer:celo" command instead

USAGE
  $ celocli transfer:gold

OPTIONS
  --comment=comment                                  Transfer comment
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Address of the sender
  --to=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d    (required) Address of the receiver

  --value=value                                      (required) Amount to transfer (in
                                                     wei)

EXAMPLE
  gold --from 0xa0Af2E71cECc248f4a7fD606F203467B500Dd53B --to
  0x5409ed021d9299bf6814279a6a1411a7e866a631 --value 10000000000000000000
```

_See code: [src/commands/transfer/gold.ts](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/transfer/gold.ts)_

## `celocli transfer:stable`

Transfer a stable token to a specified address.

```
Transfer a stable token to a specified address.

USAGE
  $ celocli transfer:stable

OPTIONS
  --comment=comment                                  Transfer comment
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Address of the sender
  --stableToken=(cUSD|cusd|cEUR|ceur)                Name of the stable to be transfered
  --to=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d    (required) Address of the receiver

  --value=value                                      (required) Amount to transfer (in
                                                     wei)

EXAMPLE
  stable --from 0xa0Af2E71cECc248f4a7fD606F203467B500Dd53B --to
  0x5409ed021d9299bf6814279a6a1411a7e866a631 --value 1000000000000000000 --stableToken
  cStableTokenSymbol
```

_See code: [src/commands/transfer/stable.ts](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/transfer/stable.ts)_
