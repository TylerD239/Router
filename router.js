const app = require('express')()
const proxy = require('http-proxy').createProxyServer({})

app.use('/', (req, res) => {
    console.log(req.hostname)
    // switch (path) {
    //     case '/chess':
    //         proxy.web(req, res, {
    //             target: 'http://localhost:5000'
    //         })
    //         break
    //     case '/mail':
    //         proxy.web(req, res, {
    //             target: 'http://localhost:80'
    //         })
    //         break
    //     default: res.send('123')
    //
    // }

})

app.listen(80, () => console.log('started on 80'))

