import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'navs',
  templateUrl: 'src/app/templates/nav.component.html',
  styleUrls: ['src/app/stylesheets/nav.component.css']
})

export class NavComponent implements OnInit {
   logoUrl: string = '';
   errorMessage: string;
   
  ngOnInit(): void {
      console.log('navs...');   
  }
}