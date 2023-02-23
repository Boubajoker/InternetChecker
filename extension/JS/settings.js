let back_arrow_btn = document.querySelector('#back_arrow_btn');
let check_box_01 = document.querySelector('#check_box_01');
let check_box_02 = document.querySelector('#check_box_02')

back_arrow_btn.addEventListener('click', ()=>{
    window.location = "./index.html";
});

if (localStorage.getItem(navigator.userAgent)) {
    check_box_01.setAttribute('checked', 'true');
};

check_box_01.addEventListener('change', ()=>{
    if (check_box_01.checked) {
        localStorage.setItem(navigator.userAgent, true);
    } else if (check_box_01.checked === false) {
        localStorage.removeItem(navigator.userAgent);
    };
});

check_box_02.addEventListener('change', ()=>{
    if (check_box_02.checked) {
        console.warn('Not aividable 1');
    } else if (check_box_02.checked === false) {
        console.warn('Not aividable 2');
    };
});