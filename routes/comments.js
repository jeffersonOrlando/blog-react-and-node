const express = require('express')
const router = express.Router()

router.get('/comments', (req,res) =>{
    res.json({
        conteudo: 'parabens',
        autor: 'desconhecido'
    })
})

module.exports = router