import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dades = [{
    "Room" : [ {
      "Content" : "Una encuensta sobre el nivel de estudio de una clase Universitaria.",
      "Preguntas" : [ {
        "component" : "questionCheckbox",
        "encuensta" : {
          "id" : 0,
          "respuesta" : [ {
            "id" : 0,
            "texto" : "mal"
          }, {
            "id" : 1,
            "texto" : "bien"
          }, {
            "id" : 2,
            "texto" : "muy bien"
          }, {
            "id" : 3,
            "texto" : "Sobresaliente"
          } ],
          "title" : "Satisfacicion sobre el profesor"
        },
        "tipo" : "checkbox"
      }, {
        "encuensta" : {
          "id" : 1,
          "respuesta" : [ {
            "id" : 0,
            "texto" : "Si"
          }, {
            "id" : 1,
            "texto" : "No"
          }, {
            "id" : 2,
            "texto" : "regular"
          }, {
            "id" : 3,
            "texto" : "Aceptable"
          } ],
          "title" : "¿ Te has gustado la Clase?"
        },
        "tipo" : "respuesta corta"
      } ],
      "Title" : "Encuensta clase",
      "id" : 0,
      "img" : "https://ndnatural.files.wordpress.com/2017/01/encuesta.jpg",
      "pin" : 1234
    }, {
      "Content" : "Una encuensta sobre de una clase Universitaria.",
      "Preguntas" : [ {
        "encuensta" : {
          "id" : 0,
          "respuesta" : [ {
            "id" : 0,
            "texto" : "mal"
          }, {
            "id" : 1,
            "texto" : "bien"
          }, {
            "id" : 2,
            "texto" : "muy muy bien"
          }, {
            "id" : 3,
            "texto" : "Sobresaliente"
          } ],
          "title" : "Satisfacicion sobre la asignatura"
        },
        "tipo" : "checkbox"
      }, {
        "encuensta" : {
          "id" : 1,
          "respuesta" : [ {
            "id" : 0,
            "texto" : "Si"
          }, {
            "id" : 1,
            "texto" : "No"
          }, {
            "id" : 2,
            "texto" : "regular"
          }, {
            "id" : 3,
            "texto" : "Aceptable"
          } ],
          "title" : "¿ Te has gustado el conocimiento?"
        },
        "tipo" : "respuesta corta"
      } ],
      "Title" : "Encuensta clase",
      "id" : 1,
      "img" : "http://www.definicionabc.com/wp-content/uploads/historia/Tecnica-de-Estudio.jpg",
      "pin" : 1235
    } ]
  }
];

tipo = "radio";
indice: number;

//si no li dic any[], el ngfor no funciona perquè no detecta que és un array i tampoc deixa traure el length
respuestas: any[] = [ {
  "id" : 0,
  "texto" : "Si"
}, {
  "id" : 1,
  "texto" : "No"
}, {
  "id" : 2,
  "texto" : "regular"
}, {
  "id" : 3,
  "texto" : "Aceptable"
} ];

pin:string;

  constructor(public navCtrl: NavController, private navParams: NavParams) {

    this.pin="1234";
    //recuperem a través del servei, l'element que toca, que és el 1
    //de l'element 1, anem a recorrer les preguntes començant per la 0
    this.indice = this.navParams.get('indice');
    this.tipo = this.navParams.get('tipo');
}

itemSelected($event,billete,val: string){
  let t = "radio";
  if(this.tipo == "radio")
    t="checkbox";

			this.navCtrl.push(HomePage,{
				'indice': this.indice,
        'tipo': t
			});
	}


}
