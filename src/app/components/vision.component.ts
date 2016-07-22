import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'vision',
  templateUrl: 'src/app/templates/vision.component.html',
  styleUrls: ['src/app/stylesheets/vision.component.css']
})

export class VisionComponent implements OnInit {
   logoUrl: string = '';
   errorMessage: string;
   // default more vision is hidden
   showMoreVision: boolean = false;
   
  ngOnInit(): void {
      console.log('vision...');   
  }

  toggleMoreVision(): void {
    this.showMoreVision = !this.showMoreVision;
    if(this.showMoreVision) {
      $('.more-vision').slideDown('slow');
    } else {
      $('.more-vision').slideUp('slow');
    }
  }
}