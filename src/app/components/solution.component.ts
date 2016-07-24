import { Component, OnInit} from '@angular/core';
import { IChallengesAndSolutions } from '../interfaces/ichallenges.and.solutions';
import { ChallengesAndSolutions } from '../data/datasource';

@Component({
  selector: 'solution',
  templateUrl: 'src/app/templates/solution.component.html',
  styleUrls: ['src/app/stylesheets/solution.component.css']
})

export class SolutionComponent implements OnInit {
  errorMessage: string;
  challengesAndSolutions: IChallengesAndSolutions[];
  showTab: number = 0;
   
  ngOnInit(): void {
      this.challengesAndSolutions = ChallengesAndSolutions;
  }

  switchTab(num): void {
    this.showTab = num;
  }
}