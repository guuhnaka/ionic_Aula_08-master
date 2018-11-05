/*
Copyright
Gustavo Nakaura R.A: 816253667
*/ 

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Genero } from '../../model/genero';

/**
 * Generated class for the DestinoGPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-destino-g',
  templateUrl: 'destino-g.html',
})
export class DestinoGPage {
  public genero:Genero;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.genero = this.navParams.get("generoSelecionado");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DestinoGPage');
  }

}
