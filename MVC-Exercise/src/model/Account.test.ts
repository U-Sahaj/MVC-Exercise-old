
import { Account } from "./Account"

describe('Account', () => {
    it('should operate accordingly', () => {
        const account = new Account("12345", "John Doe");
        expect(account).toBeDefined()

        account.deposit(1000, "Initial deposit");
        expect(account.getBalance()).toEqual(1000)

        account.withdraw(300, "Grocery shopping");
        expect(account.getBalance()).toEqual(700)

        const recentTransactions = account.getRecentTransactions();
        expect(recentTransactions[0].getAmount()).toEqual(-300)

    })

})



