var studentList = document.querySelector('.table__body');
var currentItem = null;

document.querySelector('.table__body').addEventListener("click", (e) => {
    let target = e.target;
    let selectedItem = target.parentElement.parentElement;

    if (target.classList.contains('table__btn_delete')) {
        selectedItem.remove();
    }
});

document.querySelector('.table__body').addEventListener("click", (e) => {
    let target = e.target;
    let selectedItem = target.parentElement.parentElement;

    if (target.classList.contains('table__btn_edit')) {
        setDataIntoFields(selectedItem);
        currentItem = selectedItem;
    }
});

function addStudentToList() {
    let name, group, e_web, e_pyt, e_pmd;

    name = document.querySelector('#name').value;
    group = document.querySelector('#group').value;
    e_web = document.querySelector('#e_web').value;
    e_pyt = document.querySelector('#e_pyt').value;
    e_pmd = document.querySelector('#e_pmd').value;

    if (name == '' || group == '' || e_web == '' || e_pyt == '' || e_pmd == '') {
        alert('Деякі поля залишились пустими. Будь-ласка, заповніть їх та спробуйте ще раз!')
    } else {
        const row = document.createElement('tr');
        row.classList.add('table__row');

        row.innerHTML = `
            <td class="table__column">${name}</td>
            <td class="table__column">${group}</td>
            <td class="table__column">${e_web}</td>
            <td class="table__column">${e_pyt}</td>
            <td class="table__column">${e_pmd}</td>
            <td class="table__column">
                <input class="table__btn table__btn_edit" type="button" value="edit">
                <input class="table__btn table__btn_delete" type="button" value="delete">
            </td>
        `;

        studentList.appendChild(row);
        clearFields();
    }

}

function setDataIntoFields(item) {
    document.querySelector('#name').value = item.children[0].textContent;
    document.querySelector('#group').value = item.children[1].textContent;
    document.querySelector('#e_web').value = item.children[2].textContent;
    document.querySelector('#e_pyt').value = item.children[3].textContent;
    document.querySelector('#e_pmd').value = item.children[4].textContent;
}

function editStudentInfo() {
    let name, group, e_web, e_pyt, e_pmd;

    name = document.querySelector('#name').value;
    group = document.querySelector('#group').value;
    e_web = document.querySelector('#e_web').value;
    e_pyt = document.querySelector('#e_pyt').value;
    e_pmd = document.querySelector('#e_pmd').value;

    if (name == '' || group == '' || e_web == '' || e_pyt == '' || e_pmd == '') {
        alert('Деякі поля залишились пустими. Будь-ласка, заповніть їх та спробуйте ще раз!')
    } else {
        currentItem.innerHTML = `
            <td class="table__column">${name}</td>
            <td class="table__column">${group}</td>
            <td class="table__column">${e_web}</td>
            <td class="table__column">${e_pyt}</td>
            <td class="table__column">${e_pmd}</td>
            <td class="table__column">
                <input class="table__btn table__btn_edit" type="button" value="edit">
                <input class="table__btn table__btn_delete" type="button" value="delete">
            </td>
        `;

        clearFields();
    }

}

function clearFields() {
    document.querySelector('#name').value = '';
    document.querySelector('#group').value = '';
    document.querySelector('#e_web').value = '';
    document.querySelector('#e_pyt').value = '';
    document.querySelector('#e_pmd').value = '';
}