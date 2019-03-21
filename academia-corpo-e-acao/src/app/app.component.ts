import { Component, AfterViewChecked, OnInit, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeInOutAnimation } from './services/animation';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInOutAnimation]
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'Academia';
  loading: boolean = false;

  constructor(
    private loadingService: LoadingService,
    private cdRef :ChangeDetectorRef) {}


  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {    
  }

  ngAfterContentInit(): void {
      this.loadingService.loading.subscribe((l) => { 
        this.loading = l;
        this.cdRef.detectChanges();
      });  
      
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }  
}
