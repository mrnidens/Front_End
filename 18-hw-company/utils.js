// function createInfoElement(content, tag) {
//     const element = document.createElement(tag);
//     const text = document.createTextNode(content);
//     element.appendChild(text);
//     return element;
// }

// function createButtonDel(callBack) {
//     const buttonDel = document.createElement('button');
//     buttonDel.appendChild(document.createTextNode('X'));
//     buttonDel.classList.add('del');
//     buttonDel.onclick = ({target}) => {
//         target.parentElement.remove();
//         if(typeof callBack === 'function'){
//             callBack();
//         }
//     }
//     return buttonDel;
// }

function displayPersons(array) {
    const result = document.getElementById('personsList');
    result.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('li');
        li.textContent = array[i].toString(); 

        const deleteButton = document.createElement('button');
        deleteButton.textContent = ' ✖ ';

        deleteButton.onclick = function (index) {
            return function () {
                deletePerson(index);
            };
        }(i);

        li.appendChild(deleteButton);

        result.appendChild(li);
    }
}

function deletePerson(index) {
    const container = document.getElementById('statsContainer');
    container.innerHTML = '';
    firm.removeEmployee(index); 
    displayPersons(firm.employees); 
}