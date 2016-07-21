import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'solution',
  templateUrl: 'src/app/templates/solution.component.html',
  styleUrls: ['src/app/stylesheets/solution.component.css']
})

export class SolutionComponent implements OnInit {
   logoUrl: string = '';
   errorMessage: string;
   
  ngOnInit(): void {
      console.log('solution...');   
  }
}