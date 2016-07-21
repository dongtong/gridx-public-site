import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: 'src/app/templates/slider.component.html',
  styleUrls: ['src/app/stylesheets/slider.component.css']
})

export class SliderComponent implements OnInit {
   logoUrl: string = '';
   errorMessage: string;
   
  ngOnInit(): void {
      console.log('slider...');   
  }
}