const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const router = express.Router();


const app = express() 
const port = 3000 


app.use(express.static(__dirname + '/'));
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  userName = req.query.username;
  uName = req.query.uname;
  tCode = req.query.tcode
  res.render("index", {userName: userName, uName: uName, tCode : tCode});
})	

// app.post('/', (req, res) => {
  // console.log(req.body)
  
  // res.send({
    // replies: [{
      // type: 'text',
      // content: att1,
    // }], 
    // conversation: {
      // memory: { key: 'value' }
    // }
  // })
// })

// app.post('/errors', (req, res) => {
  // console.log(req.body) 
  // res.send() 
// }) 

app.listen(process.env.PORT || port, () => { 
  console.log('Server is running on port 3000') 
})
