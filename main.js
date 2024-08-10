import { Bank } from "./bank.js";
const myAccount = new Bank("Ahmed", "Shahid", 18, "male", 123456789);
console.log(myAccount.Balance);
myAccount.credit(200);
console.log("\n");
myAccount.debit(50);
console.log("\n");
myAccount.debit(10000);
