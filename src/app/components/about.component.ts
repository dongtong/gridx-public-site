import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: 'src/app/templates/about.component.html',
  styleUrls: [
    'src/app/stylesheets/fonts.css',
    'src/app/stylesheets/about.component.css'
    ]
})

export class AboutComponent implements OnInit {
   logoUrl: string = '';
   errorMessage: string;
   
  ngOnInit(): void {
      console.log('about...');   
  }
}