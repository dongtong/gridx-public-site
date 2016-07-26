import { Component, OnInit} from '@angular/core';
import { NGB_COLLAPSE_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'navs',
  templateUrl: 'src/app/templates/nav.component.html',
  styleUrls: [
    'src/app/stylesheets/fonts.css',
    'src/app/stylesheets/nav.component.css'
  ],
  directives: [NGB_COLLAPSE_DIRECTIVES]
})

export class NavComponent implements OnInit {
   errorMessage: string;
   private isCollapsed: boolean = true;
   
  ngOnInit(): void {
       
  }
}