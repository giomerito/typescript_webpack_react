/*Salvando os dados no localStorage */

var $form = () => document.querySelector('#add-form');
var $table = () => document.querySelector('#list-table');


$form = () => {
    event.preventDefault();

    var id = Math.random().toString(36).substr(2, 7);
    var row = document.createElement('tr');
    row.dataset.id = id;
    row.innerHTML = `
                <td>${conta}</td>
                <td>${data}</td>
                <td>${operacao}</td>
                <td>${valor}</td>
                <td class="actions">
                    <a href="#" data-action="edit">edit</a> |
                    <a href="#" data-action="delete">delete</a>
                </td>
            `
    $table = () => (row);

};
