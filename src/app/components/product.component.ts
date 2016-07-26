import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: 'src/app/templates/product.component.html',
  styleUrls: [
    'src/app/stylesheets/fonts.css',
    'src/app/stylesheets/product.component.css'
  ]
})

export class ProductComponent implements OnInit {
   logoUrl: string = '';
   errorMessage: string;
   
  ngOnInit(): void {
      console.log('product...');   
  }
}