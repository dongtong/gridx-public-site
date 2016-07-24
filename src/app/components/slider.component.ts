import { Component, OnInit} from '@angular/core';
import { ISlider } from '../interfaces/islider';
import { Sliders } from '../data/datasource';
import { NGB_CAROUSEL_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'slider',
  templateUrl: 'src/app/templates/slider.component.html',
  styleUrls: ['src/app/stylesheets/slider.component.css'],
  directives: [NGB_CAROUSEL_DIRECTIVES]
})

export class SliderComponent implements OnInit {
  sliders: ISlider[];
  errorMessage: string;
   
  ngOnInit(): void {
    this.sliders =  Sliders; 
  }
}