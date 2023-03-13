import { Request, Response } from 'express'
import { BankingService } from '../services/BankingService'

export class Controller{
    bankingService:  BankingService

    constructor(bankingService:BankingService){
        this.bankingService= bankingService
    }

    createAccountReqHandler (req: Request, res: Response) {
        console.log("Reached createAccountReqHandler", req.body)
        const { accountNumber, customerName } = req.body
        const account = bankingService.createAccount(accountNumber, customerName)
        res.send('Account ${account.accountNumber} created successfully');
    }
}


const bankingService = new BankingService()

// export const createAccountReqHandler = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const { accountNumber, customerName } = req.body
//         const account = bankingService.createAccount(accountNumber, customerName)
//         res.send('Account ${account.accountNumber} created successfully');
//     } catch (error) {
//         throw error
//     }

// }

export function createAccountReqHandler (req: Request, res: Response) {
    console.log("Reached createAccountReqHandler", req.body)
    const { accountNumber, customerName } = req.body
    const account = bankingService.createAccount(accountNumber, customerName)
    res.send('Account ${account.accountNumber} created successfully');
}

export function depositReqHandler (req: Request, res: Response) {
    const { accountNumber } = req.params;
    const { amount, description } = req.body;
    const account = bankingService.getAccountWithAccountNumber(accountNumber)
    account?.deposit(amount, description);
    res.send('Deposit successful');
}

export function withdrawalReqHandler (req: Request, res: Response) {
    const { accountNumber } = req.params;
    const { amount, description } = req.body;
    const account = bankingService.getAccountWithAccountNumber(accountNumber);
    account?.withdraw(amount, description);
    res.send('Withdrawal successful');
}

export function transactionsReqHandler (req: Request, res: Response) {
    const { accountNumber } = req.params;
    const account = bankingService.getAccountWithAccountNumber(accountNumber);
    const recentTransactions = account?.getRecentTransactions();
    const formattedTransactions = recentTransactions?.map(transaction => {
        const description = transaction.getDescription();
        const date = transaction.getDate().toLocaleDateString();
        const amount = transaction.getAmount().toString();
        return { description, date, amount };
    });
    res.send(formattedTransactions);
}

export function balanceReqHandler (req: Request, res: Response) {
    const { accountNumber } = req.params;
    const account = bankingService.getAccountWithAccountNumber(accountNumber);
    const balance = account?.getBalance();
    res.send(`Balance: ${balance}`);
}


export function highValueReqHandler (req: Request, res: Response) {
    const highValueCustomers = bankingService.getHighValueCustomers();
    const formattedCustomers = highValueCustomers.map(customer => {
      return { accountNumber: customer.getAccountNumber(), customerName: customer.getCustomerName(), balance: customer.getBalance() };
    });
    res.send(formattedCustomers);
}




