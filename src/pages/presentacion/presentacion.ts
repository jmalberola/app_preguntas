import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
	templateUrl: 'presentacion.html'
})

export class Presentacion{

	constructor(private nav: NavController){

	}

	nextPage(){
		this.nav.push(HomePage,{
			'indice': "0",
			'tipo': "radio"
		});
	}


}
