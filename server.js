const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static("build"))

app.get("/", (req, resp) => {
    resp.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, ()=>{
    console.log(`servidor iniciado en ${PORT}`)
})