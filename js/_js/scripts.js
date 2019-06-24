// $(document).ready(function() {
function search(el) {
    return document.querySelector(el);
}

function searchAll(el) {
    return document.querySelectorAll(el);
}

// Показать окно
searchAll('.button-more').forEach(function (e) {
    e.onclick = modalShow;
});
// Скрыть окно по кнопке X
searchAll('.close').forEach(function (e) {
    e.onclick = modalClose;
});
// Скрыть окно по клике за пределами окна
searchAll('.modal-wrapper').forEach(function (e) {
    e.onclick = modalClose;
})
// Показывает окно
function modalShow() {
    let modalIds = this.dataset.modal;
    search('body').classList.add('body-scroll');
    search(modalIds).classList.remove('hide');
    document.onkeydown = function (e) {
        if (e.keyCode = 27) {modalClose();}

    }
}
// Скрываем окно
function modalClose() {
    searchAll('.modal-wrapper').forEach(function (e) {
        search('body').classList.remove('body-scroll');
        e.classList.add('hide');
    })
    document.onkeydown = null;
}
searchAll('.modal-window').forEach(function (e) {
    e.onclick = function () {
        event.stopPropagation();
    }
})

var isIE = false || !!document.documentMode;

if (isIE) {
    let head = document.getElementsByTagName("head")[0],
        link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/ie.min.css";
    head.appendChild(link);
}


/*Конец документа*/
// });