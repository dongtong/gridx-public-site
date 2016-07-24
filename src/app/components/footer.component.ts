import { Component, OnInit} from '@angular/core';
import { Contact } from '../data/datasource';
import { CopyRight } from '../data/datasource';

@Component({
  selector: 'footer',
  templateUrl: 'src/app/templates/footer.component.html',
  styleUrls: ['src/app/stylesheets/footer.component.css']
})

export class FooterComponent implements OnInit {
  contactInfo: string;
  copyRight: string;
  errorMessage: string;
   
  ngOnInit(): void {
    this.contactInfo = `${Contact.address} ${Contact.inquiryEmail}`;    
    this.copyRight = CopyRight.info;
  }
}