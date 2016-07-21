import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: 'src/app/templates/footer.component.html',
  styleUrls: ['src/app/stylesheets/footer.component.css']
})

export class FooterComponent implements OnInit {
   logoUrl: string = '';
   errorMessage: string;
   
  ngOnInit(): void {
      console.log('footer...');   
  }
}