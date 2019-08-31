import { Component, OnInit } from '@angular/core';
import { GambleModel } from '../models/gamble.model';
import { NgForm } from '@angular/forms';
import { GambleService } from '../services/gamble.service';

@Component({
  selector: 'app-gamble',
  templateUrl: './gamble.component.html',
  styleUrls: ['./gamble.component.css']
})

export class GambleComponent implements OnInit {

  gamble = new GambleModel();

  constructor( private gambleService: GambleService) { }

  param = '';

  ngOnInit() {
  }

  send( form: NgForm ) {
    console.log(form);
  }

  onClick(event: { target: any; srcElement: any; currentTarget: any; }) {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;
    console.log(value);
    this.param += '/' + value;
    console.log(this.param);

    if (this.param.length === 4){
      this.gambleService.getGambleByParams(this.param)
      .subscribe ( resp => console.log(resp));
      this.param = '';
    }

  }
}
