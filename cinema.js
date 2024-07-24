const prompt = require('prompt-sync')()

let sessao = []
menuCinema()

function menuCinema(){
    console.log(`
     _____________________________
    |_______🍿 CINEMINHA 🍿_______|
    | 🎫 1. Adicionar nova sessão |
    | 🎫 2. Listar sessões        |
    | 🎫 3. Atualizar             |
    | 🎫 4. Cancelar uma sessão   |
    |_🎫 5. SAIR__________________|

    `)

    let opção = prompt('Escolha uma opção: ')
    switch(opção){
        case '1':
            adicionarSessao()
            break
        case '2':
            listarSessoes()
            menuCinema()
            break
        case '3':
            atualizar()
            break
        case '4':
            cancelarSessao()
            break
        case '5':
            break
        default:
            console.log('Essa opção não existe, tente novamente!')
            menuCinema()
            break
    }
}

function adicionarSessao(){
    let filme = prompt('🎬 Digite o nome do filme: ')
    let data = prompt('📅 Digite a data da sessão(DD/MM/YYYY): ')
    let horario = prompt('🕗 Digite o horário da sessão(00:00): ')
    let sala = prompt('🔢 Digite o número da sala(00): ')
        sessao.push({filme: filme, data: data, horario: horario, sala: sala})
            console.log(`
🎫 Sessão marcada com sucesso!! 🎫
      Aproveite o filme🍿`)
            menuCinema()
}

function listarSessoes(){
    if(sessao.length == 0){
     console.log('Nenhuma sessão marcada')
    }else{
    console.log('Lista de Sessões: ')
        sessao.forEach((cinema, index) => {
            console.log(`${index + 1}. 🎬 Filme: ${cinema.filme}
   📅 Data da sessão: ${cinema.data}
   🕗 Horário: ${cinema.horario}
   🔢 Sala ${cinema.sala}
            `)
        })
    }
}

function atualizar() {
    listarSessoes()
    let numero = parseInt(prompt(`
    Digite número da sessão que queira atualizar:`))
        if (numero > 0 && numero <= sessao.length) {
            let filme = prompt('🎬 Digite o novo nome do filme: ')
            let data = prompt('📅 Digite a nova data da sessão(DD/MM/YYYY): ')
            let horario = prompt('🕗 Digite o novo horário(00:00): ')
            let sala = prompt('🔢 Digite a nova a sala(00): ')
        sessao[numero - 1] = {filme,
            data,
            horario,
            sala}
            console.log(`
            🎫 Sessão atualizada com sucesso!! 🎫`)
            menuCinema()
        } else{
            console.log("Por favor, tente novamente")
            menuCinema()
        }
}

function cancelarSessao(){
    listarSessoes()
    let numero = prompt('Digite o número da sessão que deseja cancelar: ')
    if(numero > 0 && numero <= sessao.length){
         sessao.splice(numero - 1,1)
         console.log('🎫 Sessão cancelada com sucesso!! 🎫')
    } else {
        console.log('Número inválido, tente novamente!')
    }
    menuCinema()
}