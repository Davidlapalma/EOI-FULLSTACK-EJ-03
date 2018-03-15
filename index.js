var apartaments = [];
var filtro =[];
function activate() {
    getApartaments().then(apartamentos => {
  
      // A : en apartamentos estan todos 
      // B : en apartments estan todos 
      apartaments = apartamentos;
      filtro = apartamentos;
      sinpuntuacion(apartamentos);
      sincomentario(apartamentos);
      solonumeroscoment();
      mostrarpagina(apartamentos);
      pintarpagina(apartamentos);
      pintarnumeroapartamentos(apartamentos.length);
    })
  }
  
  activate()


function getApartaments() {
    return fetch('/data/london.json')
      .then(response => response.json())
      .then(apartamentos => {
        apartaments = apartamentos;
        console.log(apartaments);
        return apartamentos;
        
      })
      .catch(errorCallback => {
        console.log(errorCallback);
      })
  }
  function pintarpagina(apartamentos){
    apartamentosdibujo(apartamentos.slice(0, 20));
    console.log(apartamentos.slice(0, 20));
    }

  function ponerpagina(page) {
    $("#Apartamentos").html('');
    page = (page + 1) * 20;
    findPage(page);
  }
  
  function findPage(page) {
    if ($('#checkBoxpuntuacion').prop('checked')){
    var apart = filtradoant();
    }
    if ($('#checkBoxcomentarios').prop('checked')){
      var apart = filtradocomentant();
      }
    else{
      var apart = apartaments;
    }
    pintarpagina(apart.slice(page - 20, page));
  }
  function inicio(){
    $("#Apartamentos").html('');
    activate();
  }
   /*function puntuacion(apartamentos){
    var puntuacion = apartamentos["Reviews Core 4"].text;
    console.log(puntuacion);
    return puntuacion
  }*/

  function sinpuntuacion(apartamentos) {
    apartamentos.map(apartamento => {
      if (!apartamento['Reviews Core 4']) {
        apartamento['Reviews Core 4'] = {};
        apartamento['Reviews Core 4'].text = 0;
      }
    })
  }
  function sincomentario(apartamentos) {
    apartamentos.map(apartamento => {
      if (!apartamento['Reviews Core 3']) {
        apartamento['Reviews Core 3'] = {};
        apartamento['Reviews Core 3'].text = "0";
      }
    })
  }
 