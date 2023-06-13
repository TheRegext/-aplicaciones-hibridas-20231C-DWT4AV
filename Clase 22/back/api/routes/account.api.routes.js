import * as controller from '../controllers/account.api.controllers.js'
import { validateAccount, validateProfile } from '../../middlewares/account.validete.middleware.js'
import { tokenVerify } from '../../middlewares/token.validate.middleware.js'
import { Router } from 'express'

const router = Router()

/// account/register
/// register
router.post('/account', [validateAccount], controller.createAccount)

router.get('/profile', [tokenVerify], controller.getProfile)
router.post('/profile', [tokenVerify, validateProfile], controller.createProfile)



router.post('/session', [validateAccount], controller.login)
router.delete('/session', [tokenVerify], controller.logout)



export default router
