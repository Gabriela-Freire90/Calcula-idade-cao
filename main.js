const inputStart = document.querySelector('#start')
const button = document.querySelector('#button')
const resposta = document.querySelector('#resposta')


//selecao do peso
function atualizoupeso(){
let select = document.querySelector('#peso').value

return select
}

//calcula idade do animal
function calculaidade () {
let start = inputStart.value
let end = new Date()
    if (inputStart.value===''){
        alert ('Por favor, coloque a data de nascimento do seu cachorro')
    } else{

        start = new Date(start)
        end = new Date(end)

        let diferencatempo = Math.abs(end-start)
        let tempoemanos= 1000 * 60 * 60 * 24 * 30 * 12
        let diferencaanos = (diferencatempo / tempoemanos)
        
        return diferencaanos
    }
}

//converte a idade do animal para a humana
function conversao () {
    const resultadoanimal= calculaidade ()
    const peso = atualizoupeso ()

    //para peso de 0 a 10kg
    if (0 < resultadoanimal < 2 && peso == "0-10"){
     let resultadofinal = (resultadoanimal * 7 )
     resposta.innerHTML = `<h1>Seu cachorro tem ${resultadofinal} anos humano</h1>`
        }else if ( 2 <= resultadoanimal < 3 && peso == "0-10"){
            let resultadofinal = parseInt(resultadoanimal * 13 )
     resposta.innerHTML = `<h1>Seu cachorro tem ${resultadofinal} anos humano</h1>`
            }else if ( 3 <= resultadoanimal < 4 && peso == "0-10"){
                let resultadofinal = parseInt(resultadoanimal * 20 )
        resposta.innerHTML = `<h1>Seu cachorro tem ${resultadofinal} anos humano</h1>`
            }
    
        //para peso de 10 a 20kg
        if (0 < resultadoanimal < 2 && peso == "10-20"){
            let resultadofinal = (resultadoanimal * 7 )
            resposta.innerHTML = `<h1>Seu cachorro tem ${resultadofinal} anos humano</h1>`
               }else if ( 2 <= resultadoanimal < 3 && peso == "10-20"){
                   let resultadofinal = parseInt(resultadoanimal * 14 )
            resposta.innerHTML = `<h1>Seu cachorro tem ${resultadofinal} anos humano</h1>`
                   }else if ( 3 <= resultadoanimal < 4 && peso == "10-20"){
                       let resultadofinal = parseInt(resultadoanimal * 21 )
               resposta.innerHTML = `<h1>Seu cachorro tem ${resultadofinal} anos humano</h1>`
                   }
}