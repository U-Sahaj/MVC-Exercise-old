import { string } from "yargs"

export function mockRequest () {
    const req = {body: string, params: string}
    req.body = jest.fn().mockReturnValue(req)
    req.params = jest.fn().mockReturnValue(req)
    return req
}

export function mockResponse () {
    const res = {send: string, status: string, json: string}
    res.send = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    return res
}


// module.exports = {
//     mockRequest: () => {
//       const req = {body: string, params: string}
//       req.body = jest.fn().mockReturnValue(req)
//       req.params = jest.fn().mockReturnValue(req)
//       return req
//     },
  
//     mockResponse: () => {
//       const res = {}
//       res.send = jest.fn().mockReturnValue(res)
//       res.status = jest.fn().mockReturnValue(res)
//       res.json = jest.fn().mockReturnValue(res)
//       return res
//     },
//     // mockNext: () => jest.fn()
//   }