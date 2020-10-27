const app = require('express')()
const proxy = require('http-proxy').createProxyServer({})

app.use('/', (req, res) => {
    const hostname = req.hostname
    console.log("host: ", hostname)
    switch (hostname) {
        case 'belenkaya.website':
            proxy.web(req, res, {
                target: 'http://localhost:5000'
            })
            break
        case 'http://play-chess.online/':
            proxy.web(req, res, {
                target: 'http://localhost:3000'
            })
            break
        default:
            proxy.web(req, res, {
                target: 'http://localhost:3000'
            })

    }

})

app.listen(80, () => console.log('started on 80'))

