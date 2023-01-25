const {Router} = require ('express')

const router = Router()

router.get("/home", (req, res) => {
    res.render('home')
});

router.get("/Perfil", (req, res) => {
    res.render('Perfil')
});
router.get("/Contacto", (req, res) => {
    res.render('Contacto')
})


module.exports = router