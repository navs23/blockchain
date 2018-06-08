const Blockchain = require("./blockchain/chain.js");
const Transaction = require("./blockchain/transaction.js");
let navcoin = new Blockchain();


navcoin.createTransaction(new Transaction('address1','address2',100));
navcoin.createTransaction(new Transaction('address2','address1',50));

console.log('\n start the miner..');
navcoin.minePendingTransaction('naveens-address');

console.log('\n start the miner again..');
navcoin.minePendingTransaction('naveens-address');

console.log('\n current balance of naveen is %d',navcoin.getBalanceOfAddress('naveens-address'));

// show current chain

console.log(JSON.stringify(navcoin,null,4));
