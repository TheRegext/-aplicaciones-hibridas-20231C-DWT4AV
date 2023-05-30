import * as controller from '../controllers/account.api.controllers.js'
import { validateAccount } from '../../middlewares/account.validete.middleware.js'
import { Router } from 'express'

const router = Router()

/// account/register
/// register
router.post('/account', [validateAccount], controller.createAccount)

router.post('/account/login', [validateAccount], controller.login)



export default router
