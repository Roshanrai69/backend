import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Survey } from '../../model/survey.model';
import { SurveyRepository } from '../../model/survey.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-mySurvey',
  templateUrl: './my-survey.component.html',
  styleUrls: ['./my-survey.component.css']
})
export class MySurveyComponent implements OnInit {
  public user: User;
  public surveyList: Survey[];
  public title: string = 'My Survey';

  constructor(
    private repository: SurveyRepository,
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.refresh();
  }
/*
  deleteSurvey(surveyTemplate: SurveyTemplate): void
  {
    this.repository.deleteSurveyTemplate(surveyTemplate).subscribe(data => this.refresh());
  }*/

  refresh(){
    this.repository.getMySurveys(this.user).subscribe(data => {
      this.surveyList = data.filter(survey => survey.OwnerName = this.user.displayName);
    });
  }
}