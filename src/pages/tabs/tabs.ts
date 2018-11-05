import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FilmesPage } from '../filmes/filmes';
import { GeneroPage } from '../genero/genero';
import { PopularidadePage } from '../popularidade/popularidade';
import { LancamentoPage } from '../lancamento/lancamento';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FilmesPage;
  tab3Root = GeneroPage;
  tab4Root = PopularidadePage;
  tab5Root = LancamentoPage
  constructor() {

  }
}
