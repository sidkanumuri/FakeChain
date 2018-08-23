const ChainUtil = require('../chail-util');
const { INITIAL_BALANCE }   =   require('../config');

class Wallet {
    constructor() {
        this.balance = INITIAL_BALANCE;
        this.keyPair = ChainUtil.genKeyPair();
        this.publickey = this.keyPair.getPublic().encode('hex');
    }

    toSTRING(){
        return `Wallet - 
        publicKey: ${this.publickey.toSTRING()}
        balance  :  ${this.balance}`
    }
}

module.exports = Wallet;