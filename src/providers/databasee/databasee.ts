/*
Copyright
Gustavo Nakaura R.A: 816253667
*/ 



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseeProvider {

  constructor(public db: SQLite) {
    console.log('Hello DatabaseeProvider Provider');
  }

  openDatabase(){
    return this.db.create({
      name:"filmes.db",
      location:"default"
    });
  }


  createDatabase (){
    return this.openDatabase ().
    then((db:	SQLiteObject)	=>{
    this.createTabelaFilmes(db);
    });
    }
    createTabelaFilmes (db:	SQLiteObject){
    let sql:	string =	"CREATE	TABLE	IF	NOT	EXISTS	filme	(id	INTEGER	PRIMARY	KEY	AUTOINCREMENT,	" +
    "	titulo	VARCHAR	(200),	genero	VARCHAR(200))";
    db.executeSql (sql);//{poderia	conter	parâmetros,	por	isso	o	{}}
    }
}
