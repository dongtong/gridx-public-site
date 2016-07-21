import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'leadership-team',
  templateUrl: 'src/app/templates/leadership.team.component.html',
  styleUrls: ['src/app/stylesheets/leadership.team.component.css']
})

export class LeadershipTeamComponent implements OnInit {
   logoUrl: string = '';
   errorMessage: string;
   
  ngOnInit(): void {
      console.log('leadership team...');   
  }
}