import http from "node:http"

const port = 3333

const server = http.createServer((req, res) => {

    const { method, url } = req

})

const startServer = () => {

    server.listen(port, () => {
        console.log("Servidor rodando")
    })

}

startServer()