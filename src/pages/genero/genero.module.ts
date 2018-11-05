/*
Copyright
Gustavo Nakaura R.A: 816253667
*/ 

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneroPage } from './genero';

@NgModule({
  declarations: [
    GeneroPage,
  ],
  imports: [
    IonicPageModule.forChild(GeneroPage),
  ],
})
export class GeneroPageModule {}