var apartamentos = '/data/london.json';

//$.get(apartamentos)
    //.then(apartamentos)
    //.then()

    function apartamentosdibujo(apartamentos) {
        apartamentos.forEach(apartamento => {
            $("#Apartamentos").append(`<div class="card col-4" style="width: 18rem;">
            <h4>${apartamento['Hotel Image'].alt}</p>  
        <div class="card-body"><img src= "${apartamento['Hotel Image'].src}">
        <p class="card-text">${apartamento['Address Link'].text}</p>
        <p class="card-text">${apartamento['Hotel Description'].text}</p>
        <p class="card-text puntuacion">${apartamento['Reviews Core 4'].text}</p>
        <p class="card-text">${apartamento['Reviews Core 3'].text} comentarios</p>
        </div>
        </div>`);
        });
    }
    function mostrarpagina(apartamento) {
        $("#items").html('');
        var pagina = apartamento.length / 20;
        for (var i = 0; i < pagina; i++) {
            $("#items").append(`<li class="page-item">
                    <a class="page-link" id="${i}" onClick="ponerpagina(${i})">${i}</a>
                                </li>`);
        }
    }
    function pintarnumeroapartamentos(numeroapartamentos){
        $("#numero").html('');
        $("#numero").append(`<p>${numeroapartamentos} apartamentos</p>`)
    }
/*function recogernombre(trocear) {
    trocear.forEach(hotel => {

    })*/



