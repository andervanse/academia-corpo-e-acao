import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeInOutAnimation } from '../../../services/animation';

@Component({
  selector: 'app-home-postagens',
  templateUrl: './home-postagens.component.html',
  styleUrls: ['./home-postagens.component.css'],
  animations: [fadeInOutAnimation]
})
export class HomePostagensComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }  

}
