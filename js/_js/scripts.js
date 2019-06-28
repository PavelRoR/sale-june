let moreButtons = document.querySelectorAll('.button-more'),
    closeButtons = document.querySelectorAll('.close'),
    modalWrappers = document.querySelectorAll('.modal-wrapper'),
    modalWindows = document.querySelectorAll('.modal-window'),
    body = document.querySelector('body');
// Показать окно

for (let i=0;i<moreButtons.length;i++){
    moreButtons[i].onclick = modalShow;
}
// Скрыть окно по кнопке X

for (let i=0;i<closeButtons.length;i++){
    closeButtons[i].onclick = modalClose;
}
// Скрыть окно по клике за пределами окна

for (let i=0;i<modalWrappers.length;i++){
    modalWrappers[i].onclick = modalClose;
}


// Показывает окно
function modalShow() {
    let modalIds = this.dataset.modal,
        modals = document.querySelector(modalIds);
    body.classList.add('body-scroll');
    modals.classList.remove('customHidden');
    // modals.firstChild.classList.remove('fadeOut');
    // modals.firstChild.classList.add('fadeIn');
    document.onkeydown = function (e) {
        if (e.keyCode == 27) modalClose();
    }
}
// Скрываем окно
function modalClose() {
    for (let i=0;i<modalWrappers.length;i++){
        // modalWrappers[i].firstChild.classList.add('fadeOut');
        // modalWrappers[i].firstChild.classList.remove('fadeIn');
        modalWrappers[i].classList.add('customHidden');
        body.classList.remove('body-scroll');
        // setTimeout(function(){
        // },200)
        // setTimeout(function(){
        //     modalWrappers[i].classList.add('customHidden');
        //     body.classList.remove('body-scroll');
        // },200)
    }

    document.onkeydown = null;
}

for (let i=0;i<modalWindows.length;i++) {
    modalWindows[i].onclick = function (){
        event.stopPropagation();
    }
}

var isIE = false || !!document.documentMode;

if (isIE) {
    let head = document.getElementsByTagName("head")[0],
        link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/ie.min.css";
    head.appendChild(link);
}