const clickHandler = function(e) {
    console.log(e.currentTarget.id);
}

div1.onclick = clickHandler;
div2.onclick = clickHandler;
div3.onclick = clickHandler;
document.body.onclick = () => console.log('body');