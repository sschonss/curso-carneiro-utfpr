function salvarTarefa(){
    let nome_tarefa = document.getElementById('tarefa').value;
    
    if (nome_tarefa == '') {
        alert('Informe o nome da tarefa!');
        return false;
    } else {
        let html = gerarLinhaTabela(nome_tarefa);
        document.getElementById("tabela_tarefas").innerHTML += html;
        document.getElementById('tarefa').value = '';
    }
}


function gerarLinhaTabela(nome_tarefa) {
    
    let html = '<tr>';
    html += '<td>' + nome_tarefa + '</td>';
    html += '<td>';
    html += '<button type="button" onclick="editarTarefa(this)">Editar</button>';
    html += '<button type="button" onclick="excluirTarefa(this)">Excluir</button>';
    html += '</td>';
    html += '</tr>';

    return html;
}

function editarTarefa(elemento) {
    let tarefa = elemento.parentNode.parentNode.cells[0].innerHTML;
    document.getElementById('tarefa').value = tarefa;
    elemento.parentNode.parentNode.remove();
}


function excluirTarefa(elemento) {
    elemento.parentNode.parentNode.remove();
}
