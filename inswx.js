const express = require('express')
const body_parse = require('body-parser')

const app = express();
app.use(body_parse.json());

//deve-se baixart o thunder client para melhor vizualiação do resultado do código

app.get('/',function(req,res){
    res.send('Olá meu nome é Ravel e curso programação fullstack')
})

// app.get('/dados',function(req,res){
//     res.send('Nome: Ravel, Idade: 26, Cel: (XX)XXXX-XXXX')
// })

// app.get('/filmes',function(req,res){
//     res.send('Vingadores, Batman O cavaleiro das trevas, Forrest Gump')
// });
let jsonData =[]
app.get('/lista',function(req,res){
    res.send(jsonData)
})

app.post('/formulario',function(req,res){
    const data = req.body
    jsonData.push(data)
    res.send('dados enviados')
})


app.listen(3000,
    console.log(`O servidor está rodando na porta http://localhost:3000`)
)