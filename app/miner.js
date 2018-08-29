class Miner{
    constructor(blockchain, transactionPool, wallet, p2pServer){
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.p2pServer = p2pServer;
    }

    mine(){
        const validTransactions = this.transactionPool.validTransactions()
        // include a reward for miner
        // create a block consisting of the valid transactions
        // synchronizr the chains in the p2p server
        // clear the transaction pool
        //broadcast ti eveery miner to clear their transaction pools
    }
}

module.exports = Miner;