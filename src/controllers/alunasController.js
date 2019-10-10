const alunas = require("../model/alunas.json")

exports.get = (req, res) => {
    console.log(req,url)
    res.status(200).send(alunas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    if(id > 17 || id <= 0) {
        res.send("Não encontrei esse id. Tente um id >= 17.")
        //res.redirect(301, "http://mercadolivre.com.br")
    }
    console.log(id)
    res.status(200).send(alunas.find(aluna => aluna.id == id))    
}

exports.getBooks = (req, res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)
    // if(!aluna) {
    //     res.send("Não encontrei essa aluna")
    // }
    const livrosAluna = aluna.livros
    const livrosLidos = livrosAluna.filter(livro => livro.leu == "true")
    const tituloLivros = livrosLidos.map(livro => livro.titulo)
    res.status(200).send(tituloLivros)
}      
    
exports.getSp = (req, res) => {
    const alunaSp = alunas.nasceuEmSp.filter(x => aluna.NasceuEmSp == "true")
    const alunasNascidaSP = alunaSp.map(x => aluna.nome)
    res.status(200).send(alunasNascidaSP)
}