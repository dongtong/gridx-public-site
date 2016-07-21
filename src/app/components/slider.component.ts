import { Component, OnInit} from '@angular/core';
import { NGB_CAROUSEL_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'slider',
  templateUrl: 'src/app/templates/slider.component.html',
  styleUrls: ['src/app/stylesheets/slider.component.css'],
  directives: [NGB_CAROUSEL_DIRECTIVES]
})

export class SliderComponent implements OnInit {
   logoUrl: string = '';
   errorMessage: string;
   
  ngOnInit(): void {
      console.log('slider...');   
  }
}