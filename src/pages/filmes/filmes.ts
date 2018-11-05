/*
Copyright
Gustavo Nakaura R.A: 816253667
*/ 


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Filme } from '../../model/filmes';
import { DestinoPage } from '../destino/destino';
import { MovieProvider } from '../../providers/movie/movie';
import { AdicionaFilmePage } from '../adiciona-filme/adiciona-filme';
import { ExibeFilmesPage } from '../exibe-filmes/exibe-filmes';

/**
 * Generated class for the FilmesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()


@Component({
  selector: 'page-filmes',
  templateUrl: 'filmes.html',
  providers: [
    MovieProvider
  ]
})
export class FilmesPage {

  constructor(public navCtrl: NavController) {

  }

  

  cadastrarFilme() {
    this.navCtrl.push(AdicionaFilmePage);
  }

  //arquivo	home.ts
  exibirFilmes() {
    this.navCtrl.push(ExibeFilmesPage);
  }

  



}
