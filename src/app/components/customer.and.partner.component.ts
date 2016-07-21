import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'customer-partner',
  templateUrl: 'src/app/templates/customer.and.partner.component.html',
  styleUrls: ['src/app/stylesheets/customer.and.partner.component.css']
})

export class CustomerAndPartnerComponent implements OnInit {
   logoUrl: string = '';
   errorMessage: string;
   
  ngOnInit(): void {
      console.log('customer.and.partner...');   
  }
}