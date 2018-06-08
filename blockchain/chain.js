const Transaction = require("./transaction.js");
const Block = require("./block.js");
// has blocks
class Blockchain{
    
    constructor(){
        
        let genesisBlock = this.createGenesisBlock();
        genesisBlock.hash = genesisBlock.calcuateHash();
        this.chain =[genesisBlock];
        this.difficulty = 2;
        this.pendingTransactions=[];
        this.miningReward=100;
    }
    
    createGenesisBlock(){
        
        return new Block(0,new Date().toUTCString(),"Genesis block","0" );
    }
    
    getLatestBlock(){
        
        return this.chain[this.chain.length - 1];
    }
    
   
    minePendingTransaction(miningRewardAddress){
        
        let block = new Block(new Date().toUTCString(),this.pendingTransactions);
        block.mineBlock(this.difficulty);
        
        console.log("block successfully mined");
        block.previousHash = this.chain[this.chain.length-1].hash;
        this.chain.push(block);
        
        this.pendingTransactions = [new Transaction(null,miningRewardAddress,this.miningReward)];
    }
    // create new transaction
    createTransaction(transaction){
        
        this.pendingTransactions.push(transaction);
    }
    // get balance for an address
    getBalanceOfAddress(address){
        
        let balance=0;
        
        for(const block of this.chain){
            for(const trans of block.transactions){
                
                //debit balance
                if (trans.fromAddress == address) 
                balance -=trans.amount;
                //credit balance
                if (trans.toAddress == address)
                balance +=trans.amount;
            }
        }
        
        return balance;
    }
    // simple check to ensure chain is not tempered with
    isChainValid(){
        
        for(let i =1;i<this.chain.length;i++){
            const cb = this.chain[i];
            const pb = this.chain[i-1];
          
            if(cb.hash !== cb.calcuateHash()) return false;
            if (cb.previousHash !== pb.hash) return false;
        }
        
        // if we reached here , all good 
        return true;
    }
    
   
}

module.exports = Blockchain;