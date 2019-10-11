const alunas = require("../model/alunas.json")

exports.get = (req, res) => {
    console.log(req. url)
    res.status(200).send(alunas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    if(id > 17 || id <= 0) {
        res.send('id não é válido')
        //res.redirect(301, 'http://mercadolivre.com.br/')
    }
    // console.log(id)
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
    const alunaSp = alunas.filter(item => {
        console.log(item)
        return item.nasceuEmSp == "true"
    })
    const alunasNascidaSp = alunaSp.map(item => item.nome)
    res.status(200).send(alunasNascidaSp)
}

exports.getIdade = (req, res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)
    const infoData = aluna.dateOfBirth
    const arrData = infoData.split("/")
    const dia = arrData[0]
    const mes = arrData[1]
    const ano = arrData[2]
    const idade = calcularIdade(ano, mes, dia)
    res.status(200).send({ idade })
}

function calcularIdade(anoDeNasc, mesDeNasc, diaDeNasc) {
      const now = new Date() // constancia de data
      const anoAtual = now.getFullYear()
      const mesAtual = now.getMonth() + 1
      const hoje = now.getDate()
    
      let idade = anoAtual - anoDeNasc //calcular a idade
    
      if (mesAtual < mesDeNasc || (mesAtual == mesDeNasc && hoje < diaDeNasc)) {
        idade -= 1
      }
      return idade
    }
    
    