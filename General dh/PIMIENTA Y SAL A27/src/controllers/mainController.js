const controller = {
    index: function (req, res) {
        res.render('index')
    },
    detallePlato: function (req, res) {
        res.send('detallePlato')
    }
}

module.exports = controller;