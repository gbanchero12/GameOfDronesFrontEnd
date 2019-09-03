import { Component, OnInit } from '@angular/core';
import { GambleModel } from '../models/gamble.model';
import { NgForm } from '@angular/forms';
import { GambleService } from '../services/gamble.service';
import { Turn } from '../models/turn.model';
import {trigger, state, style, animate, transition } from '@angular/animations';
import { $ } from 'protractor';

@Component({
  selector: 'app-gamble',
  templateUrl: './gamble.component.html',
  styleUrls: ['./gamble.component.css']
})

export class GambleComponent implements OnInit {

  constructor(private gambleService: GambleService) {
  }


  gamble = new GambleModel();
  turn = new Turn();
  player = 'Player 1';
  param = '';
  scorePlayer1: number;
  scorePlayer2: number;

  ngOnInit() {

  }

  send(form: NgForm) {
    console.log(form);
  }

  sendResponse(event: { target: any; srcElement: any; currentTarget: any; }): void {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    this.param += '/' + value;


    this.player = 'Player 2';

    if (this.param.length === 4) {
      this.gambleService.getGambleByParams(this.param)
        .subscribe(resp => this.gamble = resp);

      this.param = '';
      this.player = 'Player 1';
      this.scorePlayer1 = this.gamble.turn.scorePlayerOne;
      this.scorePlayer2 = this.gamble.turn.scorePlayerTwo;
    }
  }


  playAgain(): void {
    location.reload();
  }
}
