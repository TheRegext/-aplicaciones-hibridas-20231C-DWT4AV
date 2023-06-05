import * as controller from '../controllers/account.api.controllers.js'
import { validateAccount } from '../../middlewares/account.validete.middleware.js'
import { Router } from 'express'

const router = Router()

/// account/register
/// register
router.post('/account', [validateAccount], controller.createAccount)

router.post('/session', [validateAccount], controller.login)

router.delete('/session', controller.logout)



export default router
