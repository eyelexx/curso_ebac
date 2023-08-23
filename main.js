const alunos = [
    {nome: 'Leon', nota: 3},
    {nome: 'Eric', nota: 4},
    {nome: 'Sam', nota: 5},
    {nome: 'Dante', nota: 6},
    {nome: 'Moon', nota: 7},
    {nome: 'Annelise', nota: 8},
    {nome: 'Mieko', nota: 9},
]

// TAMBÉM PODERIA SER FEITA ASSIM
// function filtraAprovados(aluno) {
//     if (aluno.nota >= 6) {
//         return aluno.nota
//     }
// }
// const aprovados = alunos.filter(filtraAprovados)


const aprovados = alunos.filter(aluno => aluno.nota >= 6)

console.log(aprovados)