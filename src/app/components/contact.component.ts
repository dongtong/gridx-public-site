import { Component, OnInit} from '@angular/core';
import { Contact } from '../data/datasource';

@Component({
  selector: 'contact',
  templateUrl: 'src/app/templates/contact.component.html',
  styleUrls: [
    'src/app/stylesheets/fonts.css', 
    'src/app/stylesheets/contact.component.css'
  ]
})

export class ContactComponent implements OnInit {
   subject: string;
   phone: string;
   company: string;
   message: string;
   mailTo: string;

   address: string;
   inquiryEmail: string;
   careersEmail: string;
   supportEmail: string;
   otherWords: string;

   errorMessage: string;
   
  ngOnInit(): void {
      this.mailTo = Contact.mailTo;
      this.address = Contact.address;
      this.inquiryEmail = Contact.inquiryEmail;
      this.careersEmail = Contact.careersEmail;
      this.supportEmail = Contact.supportEmail;
      this.otherWords = Contact.otherWords;
  }

  getMessage(): string {
    return `
      ${this.message}%0D%0A
      %0D%0A
      Phone: ${this.phone}%0D%0A
      %0D%0A
      Company: ${this.company}
    `;
  }
}