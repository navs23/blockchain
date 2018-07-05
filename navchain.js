const Blockchain = require("./blockchain/chain.js");
const Transaction = require("./blockchain/transaction.js");

let navcoin = new Blockchain();


navcoin.createTransaction(new Transaction('alex','bob',100));
navcoin.createTransaction(new Transaction('bob','alex',50));

console.log('\n start the miner..');
navcoin.minePendingTransaction('miner');

console.log('\n start the miner again..');
navcoin.minePendingTransaction('miner');

console.log('\n current balance of alex is %d',navcoin.getBalanceOfAddress('alex'));

// show current chain

console.log(JSON.stringify(navcoin,null,4));
