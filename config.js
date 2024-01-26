
import { stringToPath } from '@cosmjs/crypto'

export default {
    port: 8081, // http port 
    db: {
        path: "./db/faucet.db" // save request states 
    },
    project: {
        name: "Bitcoin VM Testnet",
        logo: "https://test.bitcoinvm.network/wbtc.png",
        deployer: `<a href="#">Bitcoin VM</a>`
    },
    blockchains: [
        {
            type: 'Ethermint',
            ids: {
                chainId: 1573,
                cosmosChainId: 'bitcoinvm_1573-1',
            },
            name: "BticoinVM Testnet",
            endpoint: {
                // make sure that CORS is enabled in rpc section in config.toml
                // cors_allowed_origins = ["*"]
                rpc_endpoint: "http://localhost:26657/",
                evm_endpoint: "http://localhost:8545/",
            },
            sender: {
                mnemonic: "begin recall ghost monster cabin romance tail exit fiction cheese into resist search grunt roast pioneer people high tower sphere prize journey nice abstract",
                option: {
                    hdPaths: [stringToPath("m/44'/60'/0'/0/0")],
                    prefix: "btc"
                }
            },
            tx: {
                amount: {
                    denom: "awbtc",
                    amount: "5000000000000000000"
                },
                fee: {
                    amount: [
                        {
                            amount: "100000",
                            denom: "awbtc"
                        }
                    ],
                    gas: "10000000000000"
                },
            },
            limit: {
                // how many times each wallet address is allowed in a window(24h)
                address: 1000, 
                // how many times each ip is allowed in a window(24h),
                // if you use proxy, double check if the req.ip is return client's ip.
                ip: 10000 
            }
        },


    ]    
}
