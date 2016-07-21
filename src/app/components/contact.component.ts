import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: 'src/app/templates/contact.component.html',
  styleUrls: ['src/app/stylesheets/contact.component.css']
})

export class ContactComponent implements OnInit {
   logoUrl: string = '';
   errorMessage: string;
   
  ngOnInit(): void {
      console.log('contact...');   
  }
}