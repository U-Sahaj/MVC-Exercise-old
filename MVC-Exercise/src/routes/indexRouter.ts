import { indexReqHandler } from "../controller/controllers";
import { Router } from 'express'


const indexRouter: Router = Router({strict:false})
indexRouter.get('/', indexReqHandler);

export default indexRouter
