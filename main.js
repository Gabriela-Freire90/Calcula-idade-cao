const inputStart = document.querySelector('#start')
const button = document.querySelector('#button')
const resposta = document.querySelector('#resposta')


//selecao do peso
function atualizoupeso() {
    let select = document.querySelector('#peso').value

    return select
}

//calcula idade (ano do cachorro)
function calculaidade() {
    let start = inputStart.value
    let end = new Date()
    if (inputStart.value === '') {
        alert('Por favor, coloque a data de nascimento do seu cachorro')
    } else {

        start = new Date(start)
        end = new Date(end)

        let diferencatempo = Math.abs(end - start)
        let tempoemanos = 1000 * 60 * 60 * 24 * 30 * 12
        let diferencaanos = (diferencatempo / tempoemanos)

        return diferencaanos
    }
}

//converte a idade do animal para a humana
function conversao() {
    const resultadoanimal = calculaidade()
    const peso = atualizoupeso()

    //para peso de 0 a 10kg
    if (0 < resultadoanimal && resultadoanimal < 1 && peso == "0-10") {
        resposta.innerHTML = `<h1>Seu cachorro ainda não tem 1 ano, espere completar para calcular</h1>`
    } else if (1 <= resultadoanimal && resultadoanimal < 2 && peso == "0-10") {
        let resultadofinal = (resultadoanimal * 7)
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (2 <= resultadoanimal && resultadoanimal < 3 && peso == "0-10") {
        let resultadofinal = resultadoanimal * 13
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (3 <= resultadoanimal && resultadoanimal < 4 && peso == "0-10") {
        let resultadofinal = resultadoanimal * 20
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (4 <= resultadoanimal && resultadoanimal < 5 && peso == "0-10") {
        let resultadofinal = (resultadoanimal * 26)
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (5 <= resultadoanimal && resultadoanimal < 6 && peso == "0-10") {
        let resultadofinal = resultadoanimal * 33
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (6 <= resultadoanimal && resultadoanimal < 7 && peso == "0-10") {
        let resultadofinal = resultadoanimal * 40
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (7 <= resultadoanimal && resultadoanimal < 8 && peso == "0-10") {
        let resultadofinal = resultadoanimal * 44
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (8 <= resultadoanimal && resultadoanimal < 9 && peso == "0-10") {
        let resultadofinal = resultadoanimal * 48
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (9 <= resultadoanimal && resultadoanimal < 10 && peso == "0-10") {
        let resultadofinal = (resultadoanimal * 52)
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (10 <= resultadoanimal && resultadoanimal < 11 && peso == "0-10") {
        let resultadofinal = resultadoanimal * 56
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (11 <= resultadoanimal && resultadoanimal < 12 && peso == "0-10") {
        let resultadofinal = resultadoanimal * 60
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (12 <= resultadoanimal && resultadoanimal < 13 && peso == "0-10") {
        let resultadofinal = (resultadoanimal * 64)
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (13 <= resultadoanimal && resultadoanimal < 14 && peso == "0-10") {
        let resultadofinal = resultadoanimal * 68
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (14 <= resultadoanimal && resultadoanimal < 15 && peso == "0-10") {
        let resultadofinal = resultadoanimal * 72
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (15 <= resultadoanimal && resultadoanimal < 16 && peso == "0-10") {
        let resultadofinal = resultadoanimal * 76
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (16 <= resultadoanimal && resultadoanimal < 17 && peso == "0-10") {
        let resultadofinal = resultadoanimal * 80
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (17 <= resultadoanimal && resultadoanimal < 18 && peso == "0-10") {
        let resultadofinal = resultadoanimal * 84
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (18 <= resultadoanimal && resultadoanimal < 19 && peso == "0-10") {
        let resultadofinal = resultadoanimal * 88
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    }

    //para peso de 10 a 20kg
    if (0 < resultadoanimal && resultadoanimal < 1 && peso == "10-20") {
        resposta.innerHTML = `<h1>Seu cachorro ainda não tem 1 ano, espere ele completar para calcular</h1>`
    } else if (1 <= resultadoanimal && resultadoanimal < 2 && peso == "10-20") {
        let resultadofinal = (resultadoanimal * 7)
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (2 <= resultadoanimal && resultadoanimal < 3 && peso == "10-20") {
        let resultadofinal = resultadoanimal * 14
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (3 <= resultadoanimal && resultadoanimal < 4 && peso == "10-20") {
        let resultadofinal = resultadoanimal * 21
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (4 <= resultadoanimal && resultadoanimal < 5 && peso == "10-20") {
        let resultadofinal = (resultadoanimal * 27)
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (5 <= resultadoanimal && resultadoanimal < 6 && peso == "10-20") {
        let resultadofinal = resultadoanimal * 34
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (6 <= resultadoanimal && resultadoanimal < 7 && peso == "10-20") {
        let resultadofinal = resultadoanimal * 42
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (7 <= resultadoanimal && resultadoanimal < 8 && peso == "10-20") {
        let resultadofinal = resultadoanimal * 47
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (8 <= resultadoanimal && resultadoanimal < 9 && peso == "10-20") {
        let resultadofinal = resultadoanimal * 51
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (9 <= resultadoanimal && resultadoanimal < 10 && peso == "10-20") {
        let resultadofinal = (resultadoanimal * 56)
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (10 <= resultadoanimal && resultadoanimal < 11 && peso == "10-20") {
        let resultadofinal = resultadoanimal * 60
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (11 <= resultadoanimal && resultadoanimal < 12 && peso == "10-20") {
        let resultadofinal = resultadoanimal * 65
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (12 <= resultadoanimal && resultadoanimal < 13 && peso == "10-20") {
        let resultadofinal = (resultadoanimal * 69)
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (13 <= resultadoanimal && resultadoanimal < 14 && peso == "10-20") {
        let resultadofinal = resultadoanimal * 74
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (14 <= resultadoanimal && resultadoanimal < 15 && peso == "10-20") {
        let resultadofinal = resultadoanimal * 78
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (15 <= resultadoanimal && resultadoanimal < 16 && peso == "10-20") {
        let resultadofinal = resultadoanimal * 83
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (16 <= resultadoanimal && resultadoanimal < 17 && peso == "10-20") {
        let resultadofinal = resultadoanimal * 87
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (17 <= resultadoanimal && resultadoanimal < 18 && peso == "10-20") {
        let resultadofinal = resultadoanimal * 92
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (18 <= resultadoanimal && resultadoanimal < 19 && peso == "10-20") {
        let resultadofinal = resultadoanimal * 96
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    }

    //para peso de 20 a 40kg
    if (0 < resultadoanimal && resultadoanimal < 1 && peso == "20-40") {
        resposta.innerHTML = `<h1>Seu cachorro ainda não tem 1 ano, espere ele completar para calcular</h1>`
    } else if (1 <= resultadoanimal && resultadoanimal < 2 && peso == "20-40") {
        let resultadofinal = (resultadoanimal * 8)
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (2 <= resultadoanimal && resultadoanimal < 3 && peso == "20-40") {
        let resultadofinal = resultadoanimal * 16
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (3 <= resultadoanimal && resultadoanimal < 4 && peso == "20-40") {
        let resultadofinal = resultadoanimal * 24
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (4 <= resultadoanimal && resultadoanimal < 5 && peso == "20-40") {
        let resultadofinal = (resultadoanimal * 31)
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (5 <= resultadoanimal && resultadoanimal < 6 && peso == "20-40") {
        let resultadofinal = resultadoanimal * 38
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (6 <= resultadoanimal && resultadoanimal < 7 && peso == "20-40") {
        let resultadofinal = resultadoanimal * 45
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (7 <= resultadoanimal && resultadoanimal < 8 && peso == "20-40") {
        let resultadofinal = resultadoanimal * 50
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (8 <= resultadoanimal && resultadoanimal < 9 && peso == "20-40") {
        let resultadofinal = resultadoanimal * 55
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (9 <= resultadoanimal && resultadoanimal < 10 && peso == "20-40") {
        let resultadofinal = (resultadoanimal * 61)
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (10 <= resultadoanimal && resultadoanimal < 11 && peso == "20-40") {
        let resultadofinal = resultadoanimal * 66
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (11 <= resultadoanimal && resultadoanimal < 12 && peso == "20-40") {
        let resultadofinal = resultadoanimal * 72
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (12 <= resultadoanimal && resultadoanimal < 13 && peso == "20-40") {
        let resultadofinal = (resultadoanimal * 77)
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (13 <= resultadoanimal && resultadoanimal < 14 && peso == "20-40") {
        let resultadofinal = resultadoanimal * 82
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (14 <= resultadoanimal && resultadoanimal < 15 && peso == "10-20") {
        let resultadofinal = resultadoanimal * 88
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (15 <= resultadoanimal && resultadoanimal < 16 && peso == "20-40") {
        let resultadofinal = resultadoanimal * 93
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (16 <= resultadoanimal && resultadoanimal < 17 && peso == "20-40") {
        let resultadofinal = resultadoanimal * 99
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (17 <= resultadoanimal && resultadoanimal < 18 && peso == "20-40") {
        let resultadofinal = resultadoanimal * 104
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (18 <= resultadoanimal && resultadoanimal < 19 && peso == "20-40") {
        let resultadofinal = resultadoanimal * 109
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    }

    //para peso de acima de 40kg
    if (0 < resultadoanimal && resultadoanimal < 1 && peso == "40+") {
        resposta.innerHTML = `<h1>Seu cachorro ainda não tem 1 ano, espere ele completar para calcular</h1>`
    } else if (1 <= resultadoanimal && resultadoanimal < 2 && peso == "40+") {
        let resultadofinal = (resultadoanimal * 9)
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (2 <= resultadoanimal && resultadoanimal < 3 && peso == "40+") {
        let resultadofinal = resultadoanimal * 18
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (3 <= resultadoanimal && resultadoanimal < 4 && peso == "40+") {
        let resultadofinal = resultadoanimal * 26
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (4 <= resultadoanimal && resultadoanimal < 5 && peso == "40+") {
        let resultadofinal = (resultadoanimal * 34)
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (5 <= resultadoanimal && resultadoanimal < 6 && peso == "40+") {
        let resultadofinal = resultadoanimal * 41
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (6 <= resultadoanimal && resultadoanimal < 7 && peso == "40+") {
        let resultadofinal = resultadoanimal * 49
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (7 <= resultadoanimal && resultadoanimal < 8 && peso == "40+") {
        let resultadofinal = resultadoanimal * 56
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (8 <= resultadoanimal && resultadoanimal < 9 && peso == "40+") {
        let resultadofinal = resultadoanimal * 64
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (9 <= resultadoanimal && resultadoanimal < 10 && peso == "40+") {
        let resultadofinal = (resultadoanimal * 71)
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (10 <= resultadoanimal && resultadoanimal < 11 && peso == "40+") {
        let resultadofinal = resultadoanimal * 78
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (11 <= resultadoanimal && resultadoanimal < 12 && peso == "40+") {
        let resultadofinal = resultadoanimal * 86
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (12 <= resultadoanimal && resultadoanimal < 13 && peso == "40+") {
        let resultadofinal = (resultadoanimal * 93)
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (13 <= resultadoanimal && resultadoanimal < 14 && peso == "40+") {
        let resultadofinal = resultadoanimal * 101
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (14 <= resultadoanimal && resultadoanimal < 15 && peso == "40+") {
        let resultadofinal = resultadoanimal * 108
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (15 <= resultadoanimal && resultadoanimal < 16 && peso == "40+") {
        let resultadofinal = resultadoanimal * 115
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (16 <= resultadoanimal && resultadoanimal < 17 && peso == "40+") {
        let resultadofinal = resultadoanimal * 123
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (17 <= resultadoanimal && resultadoanimal < 18 && peso == "40+") {
        let resultadofinal = resultadoanimal * 131
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    } else if (18 <= resultadoanimal && resultadoanimal < 19 && peso == "40+") {
        let resultadofinal = resultadoanimal * 139
        resposta.innerHTML = `<h1>Seu cachorro tem ${parseInt(resultadofinal)} anos humano</h1>`
    }

    //para mais de 19 anos
    if (resultadoanimal >= 19) {
        resposta.innerHTML = `<h1>Seu cachorro tem muitos anos humano, parabéns!</h1>`
    }
}