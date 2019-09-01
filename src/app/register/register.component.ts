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

  players: Players = new Players();

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  save(form: NgForm) {
    if (form.invalid) { return; }
    this.registerService.register(this.players)
      .subscribe(resp => { console.log(resp);});

  }
}






