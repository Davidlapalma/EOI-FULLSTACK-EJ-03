function setPage(page) {
    $("#Apartamentos").html('');
    var newPage = (page + 1) * 20;
    findPage(filtro,page);
}

function findPage(apartamentos,page) {
    var otherPage = apartamentos.slice(page * 20, ((page * 20)+ 20));
    currentPage = page;
    apartamentosdibujo(otherPage);
    //buttonOfpagination(apartamentos);
}

function nextPage() {
    if (Math.round(filtro.length / 20)-1 != currentPage) {
        currentPage++;
        setPage(currentPage);
    }
}

function beforePage() {
    if (currentPage != 0) {
        currentPage--;
        setPage(currentPage);
    }
}

function initializeButtons(){
    currentPage = 0;
    previousPage = 0;
}