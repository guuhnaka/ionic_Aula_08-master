/*
Copyright
Gustavo Nakaura R.A: 816253667
*/ 


import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FilmesPageModule } from '../pages/filmes/filmes.module';
import { GeneroPageModule } from '../pages/genero/genero.module';
import { PopularidadePageModule } from '../pages/popularidade/popularidade.module';
import { LancamentoPageModule } from '../pages/lancamento/lancamento.module';
import { DestinoPageModule } from '../pages/destino/destino.module';
import { DestinoGPageModule } from '../pages/destino-g/destino-g.module';

import { MovieProvider } from '../providers/movie/movie';
import {HttpModule} from "@angular/http";
import {SQLite}	from '@ionic-native/sqlite';
import { FilmeProvider } from '../providers/filme/filme';
import { AdicionaFilmePage } from '../pages/adiciona-filme/adiciona-filme';
import { ExibeFilmesPage } from '../pages/exibe-filmes/exibe-filmes';
import { AtualizaFilmePage } from '../pages/atualiza-filme/atualiza-filme';
import { GeneroPage } from '../pages/genero/genero';
import { PopularidadePage } from '../pages/popularidade/popularidade';
import { LancamentoPage } from '../pages/lancamento/lancamento';
import { FilmesPage } from '../pages/filmes/filmes';
import { DatabaseeProvider } from '../providers/databasee/databasee';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AdicionaFilmePage,
    ExibeFilmesPage,
    AtualizaFilmePage,
    GeneroPage,
    PopularidadePage,
    LancamentoPage,
    FilmesPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AdicionaFilmePage,
    ExibeFilmesPage,
    AtualizaFilmePage,
    FilmesPage,
    GeneroPage,
    LancamentoPage,
    PopularidadePage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    SQLite,
    FilmeProvider,
    DatabaseeProvider,
  ]
})
export class AppModule {}
