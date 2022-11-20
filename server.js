const express = require('express');
const app = express();
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true})) 

app.listen(8080, (req, res) => {
    console.log('listening on 8080');
});

app.get('/pet', (req, res) => {
    res.send('펫 용품 쇼핑을 할 수 있는 사이트 입니다.');
});

app.get('/', (req, res) => {
   res.sendFile(__dirname+'/index.html')
});

app.get('/write', (req, res) => {
    res.sendFile(__dirname+'/write.html')
 });
 
app.post('/add', (req, res)=>{
    res.send('전송완료');
    console.log(res.body.title);
    console.log(res.body.date);
})

