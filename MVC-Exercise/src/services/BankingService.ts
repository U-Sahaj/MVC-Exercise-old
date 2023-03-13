import { Account } from "../model/Account"
import { Transaction } from "../model/Transaction"

const minBalanceHighValueCustomer = 5000

export class BankingService {
    private accounts: Account[]
  
    constructor() {
      this.accounts = []
    }
  
    createAccount(accountNumber: string, customerName: string): Account {
      const account = new Account(accountNumber, customerName)
      this.accounts.push(account)
      return account
    }

    getAccountWithCustomerName(customerName: string): Account | undefined {
      return this.accounts.find(account => account.getCustomerName() === customerName)
    }

    getAccountWithAccountNumber(accountNumber: string): Account | undefined {
      return this.accounts.find(account => account.getAccountNumber() === accountNumber)
    }

    getHighValueCustomers(): Account[] {
      return this.accounts.filter(account => account.getBalance() > minBalanceHighValueCustomer)
                          .sort((a, b) => b.getBalance() - a.getBalance())
    }

    getRecentTransactions(customerName: string): Transaction[]{
      const theAccount = this.accounts.find(account => account.getCustomerName() === customerName)
      if (!theAccount) {
        return []
      }
      return theAccount.getRecentTransactions()
    }

}

// class BankingService {
//     //   private accountRepo: AccountRepository
//         constructor() { accountRepo: AccountRepository) {
//             // this.accountRepo = accountRepo;
//         } 
// }