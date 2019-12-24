const ngrok = require('ngrok');

module.exports = function(app) {
  // 인증기관 메인페이지
  app.get('/', function(req, res) {
    res.render('index.html');
  });

  // 매장 메인페이지
  app.get('/store', function(req, res) {
    res.render('store.html');
  });

  // user to 매장
  app.get('/usersendverify', function(req, res) {
    res.render('usersendverify.html');
  });

  // 매장확인 요청
  app.get('/storereqverify', function(req, res) {
    res.render('storereqverify.html');
  });

  app.get('/userauth', async function(req, res) {
    res.render('userauth.html');

    let vaild = '';

    console.log('/userauth');

    await ngrok.disconnect();

    // run the app server and tunneling service

    ngrok.connect(8088).then(ngrokUrl => {
      endpoint = ngrokUrl;
      console.log(
        `Your dApp is being served!, open at ${endpoint} and scan the QR to login!`
      );
    });
  });
};
