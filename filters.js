var filtrados = [];
var numerocomentarios = "";
function filter(events) {
    var busqueda = $("#amount").val();
    console.log(busqueda);
    var buscados = busqueda.toLowerCase();
    filtrados = apartaments.filter(apartamento => {
        var incluye = apartamento['Hotel Image'].alt.toLowerCase().includes(buscados);
        return incluye
    });
    console.log(filtrados);
}

function pintarfiltrado() {
    $("#Apartamentos").html('');
    filter();
    mostrarpagina(filtrados);
    pintarpagina(filtrados);
    pintarnumeroapartamentos(filtrados.length);
}

function filtrarpuntuacion() {
    if ($('#checkBoxpuntuacion').prop('checked')) {
        //var filtrarpuntuacion = _.orderBy(filtro, ['Reviews Core 4'].text, ['desc']);
        var filtrado = filtradoant();
        console.info("Filtro por puntuacion");
        console.log(filtrado);
        $("#Apartamentos").html('');
        mostrarpagina(filtrado);
        pintarpagina(filtrado);
        //findPage(sortedApartments, currentPage);
        //pintarnumeroapartamentos(filtrarpuntuacion.length);
    }
    else if (!($('#checkBoxpuntuacion').prop(':checked'))) {
        $("#Apartments").html('');
        mostrarpagina(filtro);
        pintarpagina(filtro);
        //findPage(sortedApartments, currentPage);
    }
}
function filtrarcomentario() {
    if ($('#checkBoxcomentarios').prop('checked')) {
        //var filtrarpuntuacion = _.orderBy(filtro, ['Reviews Core 4'].text, ['desc']);
        var filtrada = filtradocomentant();
        console.info("Filtro por comentario");
        console.log(filtrada);
        $("#Apartamentos").html('');
        mostrarpagina(filtrada);
        pintarpagina(filtrada);
        //findPage(sortedApartments, currentPage);
        //pintarnumeroapartamentos(filtrarpuntuacion.length);
    }
    else if (!$('#checkBoxcomentarios:checked').val()) {
        $("#Apartments").html('');
        mostrarpagina(filtro);
        pintarpagina(filtro);
        //findPage(sortedApartments, currentPage);
    }
}
function filtradoant() {
    var filtropuntuacion = _.sortBy(filtro, apartamento => apartamento['Reviews Core 4'].text);
    var filtradoreverse = filtropuntuacion.reverse();
    return filtradoreverse;
}

function filtradocomentant() {
    //solonumeroscoment();
    var filtradocoment = _.sortBy(filtro, apartamento => apartamento['Reviews Core 3'].text);
    var filtradocomentreverse = filtradocoment.reverse();
    console.log(filtradocomentreverse);
    return filtradocomentreverse
}

function solonumeroscoment() {
    filtro.forEach(apartamento => {
        var numerocomentarios = apartamento['Reviews Core 3'].text;
        apartamento['Reviews Core 3'].text = parseInt(numerocomentarios.replace(/[^0-9.]/g, ""));
        //comentario.text = comentario.text.replace(/\D/g,'')    
    });
    console.log(filtro);
}
