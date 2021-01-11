const express = require('express')
const router = express.Router()

router.get('/post', (req,res) =>{
    res.json({
        titulo: 'meu primeiro post',
        conteudo: 'era uma vez ',
        autor: 'teste'
    })
})

module.exports = router