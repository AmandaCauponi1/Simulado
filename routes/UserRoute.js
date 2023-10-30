const express = require("express")
const router = express.Router()

const UserController = require('../controllers/UserController')


router.get('/cadastro', UserController.cadastroUser)
router.post('/cadastroSave', UserController.cadastroSave)
router.get('/logout', UserController.logout)
router.get('/login', UserController.login)
router.post('/loginSave', UserController.loginSave)

module.exports = router
