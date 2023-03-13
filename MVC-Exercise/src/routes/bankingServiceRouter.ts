
import { balanceReqHandler, createAccountReqHandler, depositReqHandler, highValueReqHandler, transactionsReqHandler, withdrawalReqHandler } from '../controller/controllers';
import { Router } from 'express'

const bankingServiceRouter: Router = Router({strict:false})
// TODO: Controller can be a singleton
// const controller = new Controller(new BankingService())

// Create a new account
bankingServiceRouter.post('/create-account', createAccountReqHandler);
  
// Deposit money to an account
bankingServiceRouter.post('/:accountNumber/deposit', depositReqHandler );

// Withdraw money from an account
bankingServiceRouter.post('/:accountNumber/withdraw', withdrawalReqHandler);

// Get recent transactions for an account
bankingServiceRouter.get('/:accountNumber/transactions', transactionsReqHandler);

// Get balance for an account
bankingServiceRouter.get('/:accountNumber/balance', balanceReqHandler);
  
// Get high-value customers
bankingServiceRouter.get('/high-value', highValueReqHandler);
  
export default bankingServiceRouter
