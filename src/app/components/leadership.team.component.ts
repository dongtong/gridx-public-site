import { Component, OnInit} from '@angular/core';
import { ILeadship } from '../interfaces/ileadship';
// import dummy data
import { leadshipTeams } from '../data/datasource';

@Component({
  selector: 'leadership-team',
  templateUrl: 'src/app/templates/leadership.team.component.html',
  styleUrls: [
    'src/app/stylesheets/fonts.css',
    'src/app/stylesheets/leadership.team.component.css'
    ]
})

export class LeadershipTeamComponent implements OnInit {
   errorMessage: string;
   leadships: any[];
   
  ngOnInit(): void {
    console.log('leadership team...');   
    this.leadships = leadshipTeams.people;
  }
}