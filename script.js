let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY
    console.log(value);

    text.style.marginTop = value * 2.5 + 'px'
    if (value > 400) {
   text.style.display = 'none'
    } else {
        text.style.display = 'block'
    }
})