/*
Copyright
Gustavo Nakaura R.A: 816253667
*/


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Filme } from '../../model/filme';
import { FilmeProvider } from '../../providers/filme/filme';
import { SQLiteObject } from '@ionic-native/sqlite';
import { AtualizaFilmePage } from '../atualiza-filme/atualiza-filme';
import { DatabaseeProvider } from '../../providers/databasee/databasee';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the ExibeFilmesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exibe-filmes',
  templateUrl: 'exibe-filmes.html',
  providers: [
    MovieProvider
  ]
})
export class ExibeFilmesPage {
  public filmes: Filme[];
  public lista_filmes = new Array<any>();
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, public filmeProvider: FilmeProvider,
    public dbProvider: DatabaseeProvider, private movieProvider: MovieProvider) {

  }

  ionViewDidLoad() {

    this.movieProvider.getPopularMovies().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )

    for (const filme in this.lista_filmes) {
      if (this.lista_filmes.hasOwnProperty(filme)) {
        const element = this.lista_filmes[filme];
        this.cadastraFilme(element);
      }
    }




    this.filmeProvider.listar().
      then((filmes: Filme[]) => {
        this.filmes = filmes;
      });
  }


  cadastraFilme(filmx: Filme) {

    this.filmeProvider.inserir(filmx);
    this.exibirToast("Filme cadastrado com sucesso.");
    this.navCtrl.pop();
  }


  apagaFilme(filme: Filme) {
    this.filmeProvider.apagar(filme);
    this.exibirToast("Filme apagado com sucesso");
    //para atualizar alista que está sendo exibida
    this.filmeProvider.listar().
      then((filmes: Filme[]) => {
        this.filmes = filmes;
      });
  }


  exibirToast(dados) {
    let t = this.toastCtrl.create({
      message: dados,
      duration: 3000,
      position: "top"
    });
    t.present();
  }

  atualizaFilme(filme: Filme) {
    this.navCtrl.push(AtualizaFilmePage, filme);
  }
}
