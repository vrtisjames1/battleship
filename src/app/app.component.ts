import { Component ,SimpleChange,ViewChild } from '@angular/core';
import { battleapiService } from './services/battleapi.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'battleships';
  constructor(private http: HttpClient){};
  // variables
  // // games API
  games: any[]=[];
  // // PUT REQUEST
  currentGame: any={}={};
  // // SHOW/HIDE CREATE GAME
  showCreate: boolean=false;

  // show/hide Create game state
  toggleCreate(){
    this.showCreate = !this.showCreate
  }


  // get reqquest
   loadGames(){
    this.http.get("https://battleapi.herokuapp.com/api/games").subscribe((games: any)=>{
      this.games = games;
    })
   }

  //  post request
  createGame(game: {game_name: string, username1: string, username2: string}){
    this.toggleCreate();

    this.http.post("https://battleapi.herokuapp.com/api/games", game).subscribe({
      next: this.loadGames.bind(this)
   });

  }

  // delete request
  deleteGame(id: number){
    this.http.delete("https://battleapi.herokuapp.com/api/games/" + id).subscribe({
      next: this.loadGames.bind(this)
   });
  }

  // put Request
  editClicked(id: number){
    this.currentGame = this.games.find((a) => {return a.id === id})
    console.log(this.currentGame)
  }

  submitEdit(game: {game_name: string, username1: string, username2: string}){
    this.currentGame = {...this.currentGame,
      game_name: game.game_name,
      username1: game.username1,
      username2: game.username2,
    }

      this.http.put("https://battleapi.herokuapp.com/api/games/" + this.currentGame.id, this.currentGame).subscribe({
        next: this.loadGames.bind(this)
      });

  }



}
