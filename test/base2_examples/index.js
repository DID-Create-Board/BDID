let express = require('express');
const ChromeLauncher = require('chrome-launcher');
let app = express();
let router = require('./router/main')(app);
let port = 3000;

const ngrok = require('ngrok');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

let server = app.listen(port, function() {
  console.log('Express server has started on port ' + port);
});

// const server = app.listen(8088, () => {
//   ngrok.connect(8088).then(ngrokUrl => {
//     endpoint = ngrokUrl;
//     console.log(
//       `Your dApp is being served!, open at ${endpoint} and scan the QR to login!`
//     );
//   });
// });
