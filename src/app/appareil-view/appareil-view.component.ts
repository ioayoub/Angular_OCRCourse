import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;

  lastUpdateDate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
        reject('something gone wrong');
      }, 4000);

  });


  appareils!: any[];
  appareilSubscription!: Subscription;

  constructor(private AppareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareilSubscription = this.AppareilService.appareilSubject.subscribe(
      (appareil: any[]) => {
        this.appareils = appareil;
      }
    );
    this.AppareilService.emitAppareilSubject();
  }

  onAllumer() {
    this.AppareilService.switchOnAll();
  }

  onEteindre() {
    this.AppareilService.switchOffAll();
  }



}
