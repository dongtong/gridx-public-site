import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'vision',
  templateUrl: 'src/app/templates/vision.component.html',
  styleUrls: ['src/app/stylesheets/vision.component.css']
})

export class VisionComponent implements OnInit {
   logoUrl: string = '';
   errorMessage: string;
   
  ngOnInit(): void {
      console.log('vision...');   
  }
}