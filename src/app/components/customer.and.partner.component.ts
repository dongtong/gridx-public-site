import { Component, OnInit} from '@angular/core';
import { ICustomerAndPartner } from '../interfaces/icustomer.and.partner';
// import dummy data
import { CusomtersAndPartners, RelatedUtilities } from '../data/datasource';

@Component({
  selector: 'customer-partner',
  templateUrl: 'src/app/templates/customer.and.partner.component.html',
  styleUrls: ['src/app/stylesheets/customer.and.partner.component.css']
})

export class CustomerAndPartnerComponent implements OnInit {
   errorMessage: string;
   customersAndPartners: ICustomerAndPartner[];
   relatedUtilities: ICustomerAndPartner[];
   showTab: number = 0;
   
  ngOnInit(): void {
      console.log('customer.and.partner...');   
      this.customersAndPartners = CusomtersAndPartners;
      this.relatedUtilities = RelatedUtilities;
  }

  switchTab(tabNum: number): void {
    this.showTab = tabNum;
  }
}