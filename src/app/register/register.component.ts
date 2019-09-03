import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Players } from '../models/players.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {

  namePlayerOne: string;
  namePlayerTwo: string;
  players: Players = new Players();

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  save(form: NgForm) {
    this.players.namePlayerOne = this.namePlayerOne;
    this.players.namePlayerTwo = this.namePlayerTwo;
    if (form.invalid) { return; }
    console.log(this.players);
    this.registerService.register(this.players)
      .subscribe(resp => resp);

  }
}






