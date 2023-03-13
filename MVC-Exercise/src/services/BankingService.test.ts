import assert from "assert";
import { BankingService } from "./BankingService";

describe('BankingService', () => {
    it('should return a high value customer given the threshold value has been set to 5000', () => {
        const bankingService = new BankingService()
        const johnAcc = bankingService.createAccount("12345", "John Doe")
        const janeAcc = bankingService.createAccount("67890", "Jane Smith")
        johnAcc.deposit(1000, 'Initial Deposit')
        janeAcc.deposit(6000, 'Initial Deposit')
        const highValueCustomers = bankingService.getHighValueCustomers()
        expect(highValueCustomers[0].getBalance()).toEqual(6000)
    })

    it('should return the respective bank accounts given the customer name or account number', () => {
        const bankingService = new BankingService()
        const johnAcc = bankingService.createAccount("12345", "John Doe")
        const janeAcc = bankingService.createAccount("67890", "Jane Smith")

        johnAcc.deposit(1000, 'Initial Deposit')
        janeAcc.deposit(6000, 'Initial Deposit')
        const account1 = bankingService.getAccountWithAccountNumber('12345')
        expect(account1?.getAccountNumber()).toBe('12345')

        const account2 = bankingService.getAccountWithCustomerName("Jane Smith")
        expect(account2?.getCustomerName()).toEqual('Jane Smith')

    })

    it('should return a list of the last 5 most recent transactions sorted by date formatted accordingly given the threshold value has been set to 5000', () => {
        const bankingService = new BankingService()
        const johnAcc = bankingService.createAccount("12345", "John Doe")

        johnAcc.deposit(1000, 'Initial Deposit')
        johnAcc.withdraw(100, "Electricity bill")
        johnAcc.withdraw(50, "Myki card topup")
        johnAcc.withdraw(150, "Grocery shopping")
        johnAcc.withdraw(80, "NBN bill")

        const theTransactions = bankingService.getRecentTransactions('John Doe')
        expect(theTransactions.length).toEqual(5)
        expect(theTransactions).toContainEqual({description: "Grocery shopping", date: expect.any(Date), amount: -150})
        expect(theTransactions[0].getDescription()).toEqual('NBN bill')
        expect(theTransactions[0].getAmount()).toEqual(-80)

    })
})