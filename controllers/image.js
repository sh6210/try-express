module.exports = {
    index: (req, res) => {
        res.render('image');
    },
    /* index(req, res) {
        res.send(`The image:index controller ${req.params.image_id}`);
    }, */
    create(req, res) {
        res.send(`The imag:create POST controller`);
    },
    like(req, res) {
        res.send(`The image:like POST controller`);
    },
    comment(req, res) {
        res.send(`The image:comment POST controller`);
    }
};