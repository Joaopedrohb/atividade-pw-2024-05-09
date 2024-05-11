var localStorageMemory = []

function salvarTarefa(e) {
    e.preventDefault()

    const titulo = document.getElementById('titulo')
    const descricao = document.getElementById('descricao')

    const formulario = e.target
    const mostrarFormulario = new FormData(formulario)

    console.log(mostrarFormulario.get('titulo'))
    console.log(mostrarFormulario.get('descricao'))

    const tarefa = { titulo: mostrarFormulario.get('titulo'), descricao: mostrarFormulario.get('descricao') }

    if (JSON.parse(localStorage.getItem('tarefas'))?.length > 0) {
        localStorageMemory = JSON.parse(localStorage.getItem('tarefas'));
    }

    localStorageMemory.push(tarefa)

    localStorage.setItem('tarefas', JSON.stringify(localStorageMemory))

    mostrarTarefa()

    titulo.value = ""
    descricao.value = ""
}

function mostrarTarefa() {
    const div = document.createElement('div')
    const main = document.querySelector('.lista')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))
    const ultimaTarefa = tarefas.length - 1
    const titulo = tarefas[ultimaTarefa].titulo
    const descricao = tarefas[ultimaTarefa].descricao

    h1.textContent = `${titulo}`;
    p.textContent = `${descricao}`;

    div.appendChild(h1);
    div.appendChild(p);

    main.appendChild(div)
}

function exibirCadastrados() {
    const tasks = JSON.parse(localStorage.getItem('tarefas'));

    tasks.forEach((task) => {

        const main = document.querySelector('main');

        const div = document.createElement('div');

        const h1 = document.createElement('h1');

        const p = document.createElement('p');

        h1.textContent = `${task.titulo}`;
        p.textContent = `${task.descricao}`;

        div.appendChild(h1);
        div.appendChild(p);

        main.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    exibirCadastrados()
});