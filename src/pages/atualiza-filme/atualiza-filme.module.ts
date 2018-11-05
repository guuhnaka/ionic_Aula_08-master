/*
Copyright
Gustavo Nakaura R.A: 816253667
*/ 

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtualizaFilmePage } from './atualiza-filme';

@NgModule({
  declarations: [
    AtualizaFilmePage,
  ],
  imports: [
    IonicPageModule.forChild(AtualizaFilmePage),
  ],
})
export class AtualizaFilmePageModule {}
