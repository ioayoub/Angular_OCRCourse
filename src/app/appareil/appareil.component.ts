import { AppareilService } from './../services/appareil.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName?: string;
  @Input() appareilStatus?: string;
  @Input() indexOfAppareil!: number;
  @Input() id !: number;


  constructor(private AppareilService: AppareilService) {
    //..


  }

  ngOnInit(): void {
    //..
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    }
    else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
    else if (this.appareilStatus === 'HS') {
      return 'orange';
    }
    else {
      return 'black';
    }

  }

  onSwitchOn() {
    this.AppareilService.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOff() {
    this.AppareilService.switchOffOne(this.indexOfAppareil);
  }

}

