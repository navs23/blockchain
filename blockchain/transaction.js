// smallest entity in blockchain eco system
class Transaction{
    
    constructor (fromAddress,toAddress,amount){
        
        this.fromAddress=fromAddress;
        this.toAddress=toAddress;
        this.amount=amount;
    }
}

module.exports= Transaction;