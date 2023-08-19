const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

const account = {
    username:"ahmed",
    password:"suhail"
}


app.get('/',(req,res)=>{
    res.render('login', { message: null });
})

app.get('/style.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, '\\views', 'style.css'));
  });

  app.get('/function.js', function(req, res) {
    res.set('Content-Type', 'application/javascript');
    res.sendFile(__dirname + '\\function.js');
  });
  

app.post('/bmi', (req, res) => {
    
    const username = req.body.username;
    const password = req.body.password;

    if (username == account.username && password == account.password)
    {
        res.render('index', { message: null })
    }
    else
    {
        const message = 'Invalid username or password';
        res.render('login', { message });
    }

  })  

app.listen(3000, () => {
    console.log('Server started on port 3000')
})