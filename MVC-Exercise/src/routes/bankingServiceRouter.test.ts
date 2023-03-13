// import request from 'supertest'
// import { app } from '../app'
// import { Account } from '../model/Account'
// import { BankingService } from '../services/BankingService'
import bankingServiceRouter from './bankingServiceRouter'

test('has routes', () => {
  const routes = [
    { path: '/create-account', method: 'post' },
    { path: '/:accountNumber/deposit', method: 'post' },
    { path: '/:accountNumber/withdraw', method: 'post' },
    { path: '/:accountNumber/transactions', method: 'get' },
    { path: '/:accountNumber/balance', method: 'get' },
    { path: '/high-value', method: 'get' },
  ]

  // it.each(routes)('`$method` exists on $path', (route) => {
  //   expect(bankingServiceRouter.stack.some((s) => Object.keys(s.route.methods).includes(route.method))).toBe(true)
  //   expect(bankingServiceRouter.stack.some((s) => s.route.path === route.path)).toBe(true)
  // })
  routes.forEach((route) => {
    const match = bankingServiceRouter.stack.find(
      (s) => s.route.path === route.path && s.route.methods[route.method]
    );
    expect(match).toBeTruthy();
  });
})
// const aBankingService = new BankingService()

// beforeAll(() => {
//   aBankingService.createAccount('1001', 'Alice')
//   aBankingService.createAccount('1002', 'Bob')
// })

// describe('POST /bank/create-accounts', () => {
//   test('creates a new account', async () => {
//     const response = await request(app)
//       .post('/bank/create-account')
//       .send({ accountNumber: '1003', customerName: 'Charlie' })
//     expect(response.status).toBe(200);
//     expect(response.text).toEqual('Account created successfully')
//   });
// });

// describe('POST /bank/:accountNumber/deposit', () => {
//     test('deposits money into an account', async () => {
//       const response = await request(app)
//         .post('/bank/1001/deposit')
//         .send({ amount: 100, description: 'Test deposit' })
//       expect(response.status).toBe(200)
//       expect(response.text).toEqual('Deposit successful')
//       const account = aBankingService.getAccountWithAccountNumber('1001') as Account
//       // expect(account.getBalance()).toEqual(100)
//       expect(account.getCustomerName()).toEqual('Alice')

//     })
// })

// describe('POST /bank/:accountNumber/withdraw', () => {
//   test('withdraws money from an account', async () => {
//     const response = await request(app)
//       .post('/bank/1002/withdraw')
//       .send({ amount: 50, description: 'Test withdrawal' })
//     expect(response.status).toBe(200)
//     expect(response.text).toEqual('Withdrawal successful')
//     const account = aBankingService.getAccountWithAccountNumber('1002') as Account
//     // expect(account.getBalance()).toEqual(-50)
//     expect(account.getCustomerName()).toEqual('Bob')

//   })
// })

// describe('GET /bank/:accountNumber/transactions', () => {
//   test('returns recent transactions for an account', async () => {
//     const account = aBankingService.getAccountWithAccountNumber('1001') as Account
//     account.deposit(100, 'Test deposit 1')
//     account.deposit(200, 'Test deposit 2')
//     account.withdraw(50, 'Test withdrawal 1')
//     const response = await request(app)
//       .get('/bank/1001/transactions')
//     expect(response.status).toBe(200)
//     expect(response.body).toEqual([
//       { description: 'Test deposit 2', date: new Date().toLocaleDateString(), amount: '200' },
//       { description: 'Test deposit 1', date: new Date().toLocaleDateString(), amount: '100' },
//       { description: 'Test withdrawal 1', date: new Date().toLocaleDateString(), amount: '-50' },
//       { description: 'Account created', date: new Date().toLocaleDateString(), amount: '-200' },
//       { description: 'Account created', date: new Date().toLocaleDateString(), amount: '-200' }
//     ])
//   })
// })

// describe('GET /bank/high-value', () => {
//   it('should return a list of high value customers', async () => {
//     const account3 = aBankingService.createAccount('789', 'Charlie')
//     const account4 = aBankingService.createAccount('101', 'Dave')
//     const account5 = aBankingService.createAccount('112', 'Eve')
//     account3.deposit(7000, 'Test Deposit3')
//     account4.deposit(4000, 'Test Deposit3')
//     account5.deposit(6000, 'Test Deposit3')

//     const res = await request(app).get('/bank/high-value')
//     expect(res.statusCode).toEqual(200)
//     expect(res.body).toEqual([
//       { accountNumber: '789', customerName: 'Charlie', balance: 7000 },
//       { accountNumber: '112', customerName: 'Eve', balance: 6000 }
//     ])
//   })
// })

