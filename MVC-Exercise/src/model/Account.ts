import { Transaction } from "./Transaction";

export class Account {
    private accountNumber: string;
    private customerName: string;
    private balance: number;
    private transactions: Transaction[];
  
    constructor(accountNumber: string, customerName: string) {
      this.accountNumber = accountNumber;
      this.customerName = customerName;
      this.balance = 0;
      this.transactions = [];
    }
  
    getAccountNumber(): string {
      return this.accountNumber;
    }
  
    getCustomerName(): string {
      return this.customerName;
    }
  
    getBalance(): number {
      return this.balance;
    }
  
    getTransactions(): Transaction[] {
      return this.transactions;
    }
  
    deposit(amount: number, description: string): void {
      this.balance += amount;
      const transaction = new Transaction(description, new Date(), amount);
      this.transactions.push(transaction);
    }
  
    withdraw(amount: number, description: string): void {
      this.balance -= amount;
      const transaction = new Transaction(description, new Date(), -amount);
      this.transactions.push(transaction);
    }
  
    getRecentTransactions(): Transaction[] {
// console.log(`Jest: The most recent transaction amount ${this.transactions.length}`)

      return this.transactions.slice(-5).reverse();
    }
  }
  