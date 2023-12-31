const {Router} = require('express')
const Link = require('../models/Link')
const router = Router()


router.get('/:code', async (req, res) => {
    try {

        const link = await Link.findOne({ code: req.params.code })

        if (link) {
            console.log(link)
            link.clicks++
            await link.save()
            return res.redirect('/')
        }

        res.status(404).json('Ссылка не найдена')

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})


module.exports = router