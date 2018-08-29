const Wallet = require('../wallet');
const Transaction = require('../wallet/transaction');

class Miner{
    constructor(blockchain, transactionPool, wallet, p2pServer){
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.p2pServer = p2pServer;
    }

    mine(){
        const validTransactions = this.transactionPool.validTransactions()
        validTransactions.push(
            Transaction.rewardTransaction(this.wallet, Wallet.blockchainWallet())
    );
        // include a reward for miner
        // create a block consisting of the valid transactions
        const block = this.blockchain.addBlock(validTransactions);
        // synchronizr the chains in the p2p server
        this.p2pServer.syncChains();
        // clear the transaction pool
        this.transactionPool.clear();
        this.p2pServer.broadcastClearTransactions();
        //broadcast to eveery miner to clear their transaction pools
        return block;
    }
}

module.exports = Miner;