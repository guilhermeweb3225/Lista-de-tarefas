
let input=document.getElementById('input-1')
let adicionar=document.getElementById('adicionar')
let box2=document.getElementById('box-2')

function adicionarTarefas(){
    adicionar.addEventListener('click',()=>{
        //criando box-2
        let tarefas=document.createElement('div.div-interna-box-2')
        tarefas.classList.add('div-interna-box-2')
        //criando paragrafo
        let paragrafo=document.createElement('p')
        paragrafo.classList.add('tarefas')
        paragrafo.textContent=input.value
        //adicionando div de conclusao ou cancelamento
        let divDeComclusao=document.createElement('div')
        divDeComclusao.classList.add('divDeConclusao')
        //apagar
        let apagar=document.createElement('i')
        apagar.classList.add('fa-solid')
        apagar.classList.add('fa-trash')
        apagar.addEventListener('click',()=>{
            tarefas.remove()
        })
        //concluido
        let concluido=document.createElement('i')
        concluido.classList.add('fa-solid')
        concluido.classList.add('fa-check')
        concluido.addEventListener('click',()=>{
            paragrafo.style.background="#00ff00"
            paragrafo.style.textDecoration="line-through"
        })
        //mostrando na tela
        box2.appendChild(tarefas)
        tarefas.appendChild(paragrafo)
        tarefas.appendChild(divDeComclusao)
        divDeComclusao.appendChild(apagar)
        divDeComclusao.appendChild(concluido)
    })
}adicionarTarefas()