// import { mockRequest, mockResponse } from '../util/interceptor'
import { expect, describe, it, jest } from '@jest/globals'
import { Response, Request } from 'express'
import { Account } from '../model/Account';
import { BankingService } from '../services/BankingService'
import { Controller } from './controllers';

// describe('BankingService', () => {
//     let controller: Controller;
//     let mockedAccount: jest.Mocked<Account>;
//     let mockedBankingService: jest.Mocked<BankingService>;
  
//     beforeEach(() => {
//       mockedBankingService = {
//         createAccount: jest.fn(),
//         getAccountWithCustomerName: jest.fn(),
//         getAccountWithAccountNumber: jest.fn(),
//         getHighValueCustomers: jest.fn(),
//         getRecentTransactions: jest.fn(),
//       };
//       bankingServiceRouter = new BankingService(mockBank);
//     });
  
//     describe('POST /accounts', () => {
//       it('should create a new account', async () => {
  




// describe("createAccountReqHandler", () => {
//   test.only('should 200 and return correct value',  () => {
//     // jest.mock('../services/BankingService');
//     // jest.mocked(BankingService).mockImplementation(() => {
//     //   return {
//     //     createAccount: jest.fn(),
//     //   };
//     // });
//     const expectedAccount = new Account("200", "Charlie")
//     const mockBankService = jest.spyOn(BankingService.prototype, 'createAccount').mockResolvedValue(expectedAccount)
//     // const mockBankService = { createAccount: jest.fn()} as unknown as BankingService
//     const reqBody = {accountNumber: "200", customerName: "Charlie"  }
//     const req = { body: reqBody} as Request
//     const res = { send: jest.fn()} as unknown as Response

//     // const controller = new Controller(mockBankService)
//     await createAccountReqHandler(req, res)

//     expect(res.send).toHaveBeenCalledWith('Account 200 created successfully')
//     expect(mockBankService.createAccount).toHaveBeenCalledWith(reqBody.accountNumber, reqBody)
//   })
// })

