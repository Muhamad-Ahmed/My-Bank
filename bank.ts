export class Bank {
  private accountNumber: number;
  private balance: number;
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public gender: string,
    public phoneNumber: number
  ) {
    this.balance = 100;
    this.accountNumber=123456;
  }
  //Credit and Debit methods for transaction of money
  get Balance(){
    return this.balance;
  }
  credit(amount:number){
    if(amount>=100){
        this.balance+=amount
        this.balance-=1;
        console.log(`Transaction successful.`);
        console.log(`Your current balance is: ${this.balance}$.`);
    }
    else{
        this.balance+=amount
        console.log(`Transaction successful.`);
        console.log(`Your current balance is: ${this.balance}$.`);
        
    }
  }
  debit(amount:number){
    if(amount>this.balance){
        console.log(`Balance is not sufficient.`);
        console.log(`Your current balance is: ${this.balance}$.`);
        
        
    }
    else{
        this.balance-=amount;
        console.log(`Transaction succsessful.`);
        console.log(`Your current balance is ${this.balance}$.`);
        
    }
  }
}
