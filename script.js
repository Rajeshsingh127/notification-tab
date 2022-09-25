const counter = document.querySelector(".nf-count-box");
const activeNf = document.querySelectorAll('.nf-container.nf-unread')
const dot = document.querySelectorAll('.nf-container.nf-unread .red-dot');

const allReadBtn = document.querySelector(".mk-read");


allReadBtn.addEventListener('click',() =>{
    counter.textContent = 0;
    activeNf.forEach((elm) =>{
        elm.classList.remove('nf-unread')
        elm.querySelector('.red-dot').classList.remove('red-dot');

    })
})