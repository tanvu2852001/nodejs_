const path = require('path')
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const { dirname } = require('path')
const port = 3000

//Process static file
app.use(express.static(path.join(__dirname,'public')))

//Templete engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'resources/views'))

//HTTP Logger

app.get('/', (req, res) => {
    res.render('home')
})

// 127.0.0.1 - localhost

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})