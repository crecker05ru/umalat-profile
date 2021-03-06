// server.js
const path = require('path')
const express = require('express')
const layout = require('express-layout')
const routes = require('./routes')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const middleware = [
  layout(),
  express.static(path.join(__dirname, 'public')),
]
app.use(middleware)

app.use('/', routes)

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000, () => {
  console.log(`App running at //localhost:3000`)
})