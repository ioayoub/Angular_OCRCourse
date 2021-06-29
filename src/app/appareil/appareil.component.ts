import { Component, Input, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName?: string;
  @Input() appareilStatus?: string;
  constructor() {
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


}

