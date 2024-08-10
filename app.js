const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000


// use ejs 

app.set('view engine', 'ejs')
app.use(expressLayouts)



app.get('/', (req, res) => {

    const mahasiswa = [
        {
            nama : "azmi",
            email : "azmi8017@gmail.com"
        },
        {
            nama : "asep",
            email : "asep@gmail.com"
        }
    ]



    res.render('index', {
        layout : 'layouts/main-layout',
        title : "Home",
        nama : "azmi",
        mahasiswa : mahasiswa
    })
})
app.get('/about', (req, res) => {

    res.render('about', {
        layout : 'layouts/main-layout',
        title : "About"
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        layout : 'layouts/main-layout',
        title : "Contact"
    })
})

app.get('/produk/:id', (req,res) => {
    res.send(`Produk ID ${req.params.id} <br> Category ID : ${req.query.categori}`)
})


app.use('/', (req,res) => {
    res.send("<h1>404</h1>")
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






















// const http = require('http');
// const fs = require('fs');
// const port = 3000;


// const renderHTML = (path,res) => {
//     fs.readFile(path, (err, data) => {
//         if(err){
//             res.writeHead(404)
//         }else {
//             res.write(data)
//         }

//         res.end()
//     })
// }
// http.createServer((req,res) => {
    
//     res.writeHead(200, {
//         'Content-Type' : 'text/html'
//     })

//     const url = req.url
//     // if(url === '/about'){
//     //     renderHTML('./about.html', res)
    
//     // }else if(url === '/contact'){
//     //     renderHTML('./contact.html', res)
//     // }
//     // else {
//     //     renderHTML('./index.html', res)
//     // }
//     switch(url){
//         case '/about':
//             renderHTML('./about.html', res)
//             break
//         case '/contact':
//             renderHTML('./contact.html', res)
//             break
//         default:
//             renderHTML('./index.html', res)
//             break
//     }


    
// })
// .listen(port, () => {
//     console.log(`Listening is on Port ${port}....`)
// })


