const questions = [
    "Qual o seu nome?",
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu posso fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] + " >")
}

ask()

const answers = []

process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if(answers.length < questions.length){
        ask(answers.length)
    }else{
        process.exit()
    }
})

process.on('exit', () => {
    console.log(
        `
        Bacana ${answers[0]}!

        O que você aprendeu hoje foi:
        ${answers[1]}

        O que te aborreceu hoje foi:
        ${answers[2]}

        O que você pode melhorar é:
        ${answers[3]}

        O que te deixou feliz hoje foi:
        ${answers[4]}

        Você ajudou ${answers[5]} pessoas hoje

        Volte amanhã para novas reflexões!
        `
    )
})