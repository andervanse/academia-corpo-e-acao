import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeInOutAnimation } from '../../services/animation';
@Component({
  selector: 'app-avaliacao-fisica',
  templateUrl: './avaliacao-fisica.component.html',
  styleUrls: ['./avaliacao-fisica.component.css'],
  animations: [fadeInOutAnimation]
})
export class AvaliacaoFisicaComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }  

}
