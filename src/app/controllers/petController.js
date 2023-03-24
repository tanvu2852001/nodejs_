class petController {
    //GET /pet.js
    index(req, res) {
        res.render('pet');
    }

    //GET /pet.js/:slug
    show(req, res) {
        res.send('NEW DOG');
    }
}

module.exports = new petController();
