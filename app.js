// var http = require('http');

// var servidor = http.createServer(function(peticion, respuesta){
//     console.log('Peticion web');
// });

// servidor.listen(3000);
var fetch = require('node-fetch');
var wbk = require('wikidata-sdk');
var md5 = require('blueimp-md5'); 

function buscarEntidadJson(entidad){
    
    const urlentidad = wbk.searchEntities(entidad);   
    fetch(urlentidad)
        .then(res => res.json())
        .then(json => {
            var idsEntidades = [];
            for (var i = 0, fila; fila = json.search[i]; i++) {
                idsEntidades.push(fila.id);
            }

            const urlids = wbk.getEntities({
                ids: idsEntidades,
                languages: [ 'es' ]
              });
            
              fetch(urlids)
                .then(resids => resids.json())
                .then(wbk.parse.wb.entities)
                .then(entities => {

                    for(var propertyName in entities) {
                        var listadoPropiedades = entities[propertyName];
                        var descripcionPropiedad = (listadoPropiedades.descriptions.es === undefined? '-':listadoPropiedades.descriptions.es);
                        var labelPropiedad = (listadoPropiedades.labels.es === undefined?'Sin Información': listadoPropiedades.labels.es);
                        
                        for(var propertyTopic in listadoPropiedades.claims)
                        {
                            var urlImagen;
                            
                            var nombrePais;
                            if(propertyTopic == 'P17')
                            {
                                var objeto = listadoPropiedades.claims[propertyTopic];
                                nombrePais = objeto[0];
                            }

                            if(propertyTopic == 'P18')
                            {
                                var objeto = listadoPropiedades.claims[propertyTopic];
                                var nombreImagen = objeto[0];
                                nombreImagen = nombreImagen.split(' ').join('_')
                                var md5sum = md5(nombreImagen);
                                var a = md5sum[0];
                                var b = md5sum[1];
                                urlImagen = 'https://upload.wikimedia.org/wikipedia/commons/'+a+'/'+a+''+b+'/'+nombreImagen;                                
                            }                            
                        }

                        if(descripcionPropiedad != '-')
                        {
                            console.log('('+propertyName+') ' + descripcionPropiedad + ' - '+ labelPropiedad + '  = URL('+urlImagen+')');
                        }                        
                        
                     }
        
                });
        });
}
buscarEntidadJson("colombia");

