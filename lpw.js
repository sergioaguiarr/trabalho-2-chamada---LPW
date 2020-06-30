const express = require('express')
const app = express()
app.use(express.json())
const funcionario = [
  {
    matricula: "1",
    nome: "sdsds",
    funcao: "ssdsd",
    salario: "ssd",
    plano: 150,
    vlt: 0,
    fgts: 0,
    alimentacao: 0,
    complemento: [],
    inss: 0,
    irf: 0,
    liquido: 0,
  },
  {
    matricula: "2",
    nome: "sdsds",
    funcao: "ssdsd",
    salario: "ssd",
    plano: 150,
    vlt: 0,
    fgts: 0,
    alimentacao: 0,
    complemento: [],
    inss: 0,
    irf: 0,
    liquido: 0,
  },
]

app.get('/funcionarios', (request, response) => {
  return response.json(funcionario)
})

app.get('/funcionarios/:matricula', (request, response) => {
  const {matricula} = request.params
  let funcionarioMatricula = funcionario.filter(campo => campo.matricula === matricula)
  return response.json(funcionarioMatricula)
})

app.post('/funcionarios',(request, response) => {
  funcionario.push(request.body)
  return response.json(funcionario)

})

app.put('/funcionarios/:matricula',(request, response) => {
  const matricula = request.body.matricula
    let funcionarioMatricula = 0
    let index = 0
    funcionarioMatricula = funcionario.filter((funcionario, indice) => {
        if (funcionario.matricula === matricula) {
            index = indice
            return funcionario.matricula === matricula
            
        }

    })
    if (funcionarioMatricula.length === 0) {
        return response.status(400).json({message:`Não existe um produto com este ID!`})

    }
    funcionario[index] = request.body
    return response.json(funcionario)
    
})

app.delete("/funcionarios",(request, response) => {
  const {matricula} = request.body
    let index = 0
    let funcionarioMatricula = funcionario.filter((campo, indice) => {
        if (campo.matricula === matricula) {
            index = indice
            return campo.matricula === matricula
        }
    })
    if (funcionarioMatricula.length === 0) {
        return response.status(400).json({message:`Não existe um produto com este ID!`})

    }
    let deletar = funcionario.splice(index, 1)
    console.log(deletar)

    return response.json(funcionario)

})

app.listen(3000, () => {
  console.log("O serviço está no Ar")
})
