# Things to do while bitcoind is syncing: looking at a feed of coinbase messages
```
#!/bin/bash
blockhash=$(bitcoin-cli getbestblockhash)
txid=$(bitcoin-cli getblock "$blockhash" | jq -r '.tx[0]')
timestamp=$(bitcoin-cli getblock "$blockhash" | jq -r '.time')
hexcb=$(bitcoin-cli getrawtransaction "$txid" | xargs bitcoin-cli decoderawtransaction | jq -r '.vin[0].coinbase')
echo "Block timestamp:"
date -d @"$timestamp"
echo "coinbase text"
echo $hexcb | xxd -r -p
echo
echo
```