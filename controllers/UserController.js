
const User = require('../models/User')

module.exports = class UserController {
    static async logout(req, res){
        return res.redirect('/')
    }
    static async cadastroUser(req, res) {
        return res.render('auth/cadastro')
    }
    static async cadastroSave(req, res) {
        const { name,email,password,confirmpassword} = req.body
        if(password != confirmpassword){
            req.flash('message', 'As senhas não conferem')
            return res.redirect('/cadastro')
        }
        const user = {
            name,
            email,
            password
            
        }

        try{
            await User.create(user)
            req.flash('message', 'Cadastro realizado com sucesso')
            return res.redirect('/')
        }
        catch{
            console.log(Error)
        }
        
    }

    static async logout(req, res){
        req.session.destroy()
        return res.redirect('/') 
    }
    static async login(req, res){
        return res.render('auth/login')
    }
    static async loginSave(req, res){
        // const user = 
        // { 
        //     name: req.body.name,
        //     password: req.body.password
        // } 
        const {name, password} = req.body
        const user = await User.findOne({where: {name: name, password: password}})
        req.session.userId = user.userId
        req.flash('message', 'Login realizado com sucesso!')
        req.session.save(() => {
            return  res.redirect('/') 
        })
        
    }
}