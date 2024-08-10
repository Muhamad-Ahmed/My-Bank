export class Bank {
    firstName;
    lastName;
    age;
    gender;
    phoneNumber;
    accountNumber;
    balance;
    constructor(firstName, lastName, age, gender, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.balance = 100;
        this.accountNumber = 123456;
    }
    //Credit and Debit methods for transaction of money
    get Balance() {
        return this.balance;
    }
    credit(amount) {
        if (amount >= 100) {
            this.balance += amount;
            this.balance -= 1;
            console.log(`Transaction successful.`);
            console.log(`Your current balance is: ${this.balance}$.`);
        }
        else {
            this.balance += amount;
            console.log(`Transaction successful.`);
            console.log(`Your current balance is: ${this.balance}$.`);
        }
    }
    debit(amount) {
        if (amount > this.balance) {
            console.log(`Balance is not sufficient.`);
            console.log(`Your current balance is: ${this.balance}$.`);
        }
        else {
            this.balance -= amount;
            console.log(`Transaction succsessful.`);
            console.log(`Your current balance is ${this.balance}$.`);
        }
    }
}
