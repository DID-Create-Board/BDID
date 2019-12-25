const express = require('express');
const ngrok = require('ngrok');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const crypto = require('crypto');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

//setup boilerplate
let endpoint = '';
const app = express();

module.exports = function(app) {
  // 인증기관 메인페이지
  app.get('/', function(req, res) {
    res.render('index.html');
    // if (!req.session.name) res.redirect('/login');
    // else res.redirect('/');
  });

  // 매장 메인페이지
  app.get('/store', function(req, res) {
    res.render('store.html');
  });

  // 인증기관 claim요청 및 doc받기
  app.get('/userauth-dids', async function(req, res) {
    res.render('userauth-dids.html');
    console.log('/userauth-dids');

    await ngrok.disconnect();

    // run the app server and tunneling service
    ngrok.connect(8088).then(ngrokUrl => {
      endpoint = ngrokUrl;
      console.log(
        `Your dApp is being served!, open at ${endpoint} and scan the QR to login!`
      );
    });
  });

  // user to 매장
  app.get('/usersendverify', function(req, res) {
    res.render('usersendverify.html');
    console.log('/usersendverify');

    // run the app server and tunneling service
    ngrok.connect(8088).then(ngrokUrl => {
      endpoint = ngrokUrl;
      console.log(
        `Your dApp is being served!, open at ${endpoint} and scan the QR to login!`
      );
    });
  });

  // 매장 to user
  app.get('/store-reqverify', function(req, res) {
    res.render('store-reqverify.html');
    console.log('/store-reqverify');

    // run the app server and tunneling service
    ngrok.connect(8088).then(ngrokUrl => {
      endpoint = ngrokUrl;
      console.log(
        `Your dApp is being served!, open at ${endpoint} and scan the QR to login!`
      );
    });
  });

  // 매장 to user
  app.get('/login', function(req, res) {
    res.render('login.html');
    console.log('/login');
  });

  // app.use(
  //   session({
  //     secret: '!@#$%^&*',
  //     // store: new MySQLStore(dbOptions),
  //     resave: false,
  //     saveUninitialized: false,
  //   })
  // );

  // app.use(bodyParser.json()); // to support JSON-encoded bodies
  // app.use(
  //   bodyParser.urlencoded({
  //     // to support URL-encoded bodies
  //     extended: true,
  //   })
  // );

  // app.get('/login', function(req, res) {
  //   if (!req.session.name)
  //     res.render('login', { message: 'input your id and password.' });
  //   else res.redirect('/welcome');
  // });

  // app.get('/welcome', function(req, res) {
  //   if (!req.session.name) return res.redirect('/login');
  //   else res.render('welcome', { name: req.session.name });
  // });

  // app.get('/logout', function(req, res) {
  //   req.session.destroy(function(err) {
  //     res.redirect('/');
  //   });
  // });

  // app.post('/login', function(req, res) {
  //   let id = req.body.username;
  //   let password = req.body.password;

  //   let salt = '';
  //   let pw = '';

  //   crypto.randomBytes(64, (err, buf) => {
  //     if (err) throw err;
  //     salt = buf.toString('hex');
  //   });

  //   crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, derivedKey) => {
  //     if (err) throw err;
  //     pw = derivedKey.toString('hex');
  //   });

  //   // var user = results[0];
  //   crypto.pbkdf2(password, salt, 100000, 64, 'sha512', function(
  //     err,
  //     derivedKey
  //   ) {
  //     if (err) console.log(err);
  //     if (derivedKey.toString('hex') === pw) {
  //       req.session.name = id;
  //       req.session.save(function() {
  //         return res.redirect('/welcome');
  //       });
  //     } else {
  //       return res.render('login', { message: 'please check your password.' });
  //     }
  //   }); //pbkdf2
  // }); // end of app.use.session
};
