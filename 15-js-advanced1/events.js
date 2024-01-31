// button.onclick = show;
// button.onclick = e => console.log(e.timeStamp);
const button = document.getElementById('button');
button.addEventListener('click', show);
button.addEventListener('click',  e => console.log(e.timeStamp));



const nameBox = document.getElementById('nameBox');
const names = nameBox.children;

nameBox.addEventListener('keyup', valueToUpperCase);

for (let i = 0; i < nameBox.children.length; i++) {
    nameBox.children[i].onkeyup = valueToUpperCase;
}

function show(e) {
    for (let i = 0; i < names.length; i++) {
        if (names[i].firstElementChild.value.trim()) {
            const p = document.createElement('p');
            p.appendChild(document.createTextNode(names[i].firstElementChild.value));
            document.body.appendChild(p);
            names[i].firstElementChild.value = '';
        }
    }
}

function valueToUpperCase(event) {

    event.target.value = event.target.value.toUpperCase();
}
