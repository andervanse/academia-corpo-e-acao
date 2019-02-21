import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  usuario :Usuario;
  @ViewChild('navBarBurger') navBarBurger :ElementRef;
  @ViewChild('navBarMenu') navBarMenu :ElementRef;

  constructor(private authService :AuthService) { }

  ngOnInit() {
  }

  isAuthenticated() :boolean {
    this.usuario = this.authService.usuario;
    return this.authService.isAuthenticated();
  }

  isAdmin() :boolean {
    return this.authService.isAdmin();
  }  

  onNavBarClick() {
      this.navBarBurger.nativeElement.classList.toggle('is-active');
      this.navBarMenu.nativeElement.classList.toggle('is-active');
  }

}
