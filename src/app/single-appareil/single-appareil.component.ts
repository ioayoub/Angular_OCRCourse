import { AppareilService } from './../services/appareil.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'appareil';
  status: string = 'status';


  constructor(private AppareilService: AppareilService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.AppareilService.getAppareilById(+id).name;
    this.status = this.AppareilService.getAppareilById(+id).status;

  }

}
