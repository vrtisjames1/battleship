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
  // // SHOW/HIDE SELECT GAME
  showSelect: boolean=false;
  // show/hide Create game state
  userSelect: number;
  // show/hide players
  showPlayers: boolean=false;
  // show/hide player1
   showP1: boolean=false;
  // show/hide player2
  showP2: boolean=false;
  //show/hide setup
  showSetup: boolean=false;
  //show/hide setupmessage
  showMessageSetup: boolean=false;

  // change state of create game
  toggleCreate(){
    this.showCreate = !this.showCreate;
    this.showSelect = false;
    this.showP1 = false;
    this.showP2 = false;
    this.showPlayers = false;
    this.showMessageSetup = false;
  }

  // change states os Select Game
  toggleSelect(){
    this.showSelect = !this.showSelect;
    this.loadGames();
    this.showCreate = false;
    this.showP1 = false;
    this.showP2 = false;
    this.showPlayers = false;
    this.showMessageSetup = false;
  }

  receiveResponse(response: any){
    this.showMessageSetup = false;
    if(response == 2){
      if(this.userSelect === 1){
        this.showP1 = true;
      } else if (this.userSelect === 2){
        this.showP2 = true;
      }
    } else if (response == 1){
      this.showSetup = true;
    }
  }

  // selectUser
  selectedUser(user: number){
    this.userSelect = user;
    this.showPlayers = false;
    this.showMessageSetup = true;
    // if(this.userSelect === 1){
    //   this.showP1 = true
    // } else if (this.userSelect === 2){
    //   this.showP2 = true
    // }
  }

  // get reqquest
   loadGames(){
    this.http.get("https://battleapi.herokuapp.com/api/games").subscribe((games: any)=>{
      this.games = games;
      console.log(this.games);
    })
   }

  //  post request
  createGame(game: {game_name: string, username1: string, username2: string}){
    this.showCreate = false;
    this.showSelect = true;
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
  // editClicked(id: number){
  //   this.currentGame = this.games.find((a) => {return a.id === id})
  //   console.log(this.currentGame)
  // }
  selectGame(game: any){
    this.currentGame = game;
    this.showPlayers = true;
    this.showSelect = false;

  }

  // submitEdit(game: {game_name: string, username1: string, username2: string}){
  //   this.currentGame = {...this.currentGame,
  //     game_name: game.game_name,
  //     username1: game.username1,
  //     username2: game.username2,
  //   }
  setCurrentGame(newCurrentGame: any){
    this.currentGame = newCurrentGame
    this.showSetup = false;
    if(this.userSelect === 1){
      this.showP1 = true;
    } else if (this.userSelect === 2){
      this.showP2 = true;
    }

      this.http.put("https://battleapi.herokuapp.com/api/games/" + this.currentGame.id, this.currentGame).subscribe({
        next: this.loadGames.bind(this)
      });

  }



}
