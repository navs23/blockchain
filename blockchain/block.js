const sha256 = require("sha256");

// contains transactions and hash to previous block along with other important stuff
class Block{
    
    constructor (timestamp,transactions,previousHash=''){
        
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = '';
        this.nonce =0; 
        
    }
    // caclulate hash using sha256
    calcuateHash(){
        
        return sha256( this.previousHash + this.timestamp + JSON.stringify(this.transactions)+ this.nonce).toString();
    }
    // mine new block
     mineBlock(difficulty){
         
         let leadingZeros ='';
         
         for(let i =0;i<difficulty;i++){leadingZeros +='0';}
        
            while(!this.hash.startsWith(leadingZeros)){
            
            this.hash = this.calcuateHash();
            // keep incrementing nonce until you get a the one what starts with number of leading zeros
            this.nonce++;
        }
        
        console.log("block mined %s",this.hash);
    }
}

module.exports = Block;