var data = require('../config/connect')
var mysql = require('mysql')

exports.getLogin = (req, res, next) => {
    res.render('login')
}

exports.authenticationLogin = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password
    data.query('SELECT * FROM account WHERE username = ? AND password = ?', [username, password], (err, rows, fields) => {
        if ( rows.length > 0) {
            res.send('LOGIN SUCCESS')
        }
        else {
            res.send('LOGIN FAIL')
        }
    })
}

exports.getRegister = (req, res, next) => {
    res.render('register')
}

exports.registerAccount = (req, res, next) => {
    dataInsert = [req.body.username, req.body.password]
    data.query('INSERT INTO account (username, password) VALUES (?, ?)', dataInsert, (err, rows, fields) => {
        if (err) {
            res.send('REGISTER FAIL')
        } else {
            res.redirect('/')
        }
    })
}