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
  showCreate: boolean=true;
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
    this.showSetup = false;
    this.showMessageSetup = false;
  }

  // change states os Select Game
  toggleSelect(){
    this.showSelect = !this.showSelect;
    this.showCreate = false;
    this.showP1 = false;
    this.showP2 = false;
    this.showPlayers = false;
    this.showMessageSetup = false;
    this.showSetup = false;
  }

  // receive response if setupgame board or not
  receiveResponse(response: any){
    this.showMessageSetup = false;
    // if user already setup board then show playerboard
    if(response == 2){
      if(this.userSelect == 1){
        this.showP1 = true;
      } else if (this.userSelect == 2){
        this.showP2 = true;
      }
      // if user did not setupboard then show player1 setup ( player1 setup is miss named and used by both players)
    } else if (response == 1){
      this.showSetup = true;
    }
  }

  // selectUser
  selectedUser(user: number){
    this.userSelect = user;
    this.showPlayers = false;
    this.showMessageSetup = true;
  }

  //  onInit/useEffect
  ngOnInit(){
    this.http.get("https://battleapi.herokuapp.com/api/games").subscribe((games: any)=>{
      this.games = games;
      console.log(this.games);
    })
  }
  // get reqquest
   loadGames(){
    console.log("works")
    this.http.get("https://battleapi.herokuapp.com/api/games").subscribe((games: any)=>{
      this.games = games;
      this.currentGame = this.games.find((a) => {return a.id === this.currentGame.id})
    });
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


  selectGame(game: any){
    this.currentGame = game;
    this.showPlayers = true;
    this.showSelect = false;
  }

  // PUT Request/ set the current game from selected
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
