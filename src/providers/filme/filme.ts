/*
Copyright
Gustavo Nakaura R.A: 816253667
*/ 


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filme } from '../../model/filme';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseeProvider } from '../databasee/databasee';

/*
Copyright
Gustavo Nakaura R.A: 816253667
*/
@Injectable()
export class FilmeProvider {

  constructor(private dbProvider: DatabaseeProvider) {
  }

  public inserir(filme: Filme) {
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        let sql = "INSERT INTO filme (titulo, genero) VALUES (?, ?)";
        let parametros = [filme.titulo, filme.genero];
        return db.executeSql(sql, parametros).
          catch((e) => {
            console.log(e);
          });
      }).catch((e) => {
        console.log(e);
      });
  }

  public listar() {
    //abre a base
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        //faz o select
        let sql = "SELECT titulo, genero FROM filme";
        return db.executeSql(sql, []).
          then((data: any) => {
            //se tiver alguma linha na tabela
            if (data.rows.length > 0) {
              let filmes: Filme[] = [];
              //pega cada linha e coloca num vetor
              for (let i = 0; i < data.rows.length; i++) {
                filmes.push(data.rows.item(i));
              }
              return filmes;
            }
            else
              //devolve vetor vazio se a tabela estiver vazia
              return [];
          });
      }).catch((e) => {
        console.log(e);
      });
  }


  public apagar(filme: Filme) {
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        let sql = "DELETE FROM filme WHERE id = ?";
        //será colocado no lugar do ?
        let param = [filme.id];
        return db.executeSql(sql, param);
      });
  }


  public atualizar(filme: Filme) {
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        let sql = "UPDATE filme SET titulo = ?, genero = ? WHERE id = ?";
        let param = [filme.titulo, filme.genero, filme.id];
        return db.executeSql(sql, param);
      });
  }

}
