import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  lastUpdateDate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
        reject('something gone wrong');
      }, 4000);

  });


  appareils = [
    {
      name: 'machine à laver',
      status: 'éteint'
    },
    {
      name: 'télévision',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'H-S'
    }

  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('on allume tout');
  }

}
