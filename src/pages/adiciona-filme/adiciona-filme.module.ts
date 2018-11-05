/*
Copyright
Gustavo Nakaura R.A: 816253667
*/ 

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionaFilmePage } from './adiciona-filme';

@NgModule({
  declarations: [
    AdicionaFilmePage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionaFilmePage),
  ],
})
export class AdicionaFilmePageModule {}
