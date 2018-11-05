/*
Copyright
Gustavo Nakaura R.A: 816253667
*/ 

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExibeFilmesPage } from './exibe-filmes';

@NgModule({
  declarations: [
    ExibeFilmesPage,
  ],
  imports: [
    IonicPageModule.forChild(ExibeFilmesPage),
  ],
})
export class ExibeFilmesPageModule {}
