import { Component, OnInit } from '@angular/core';
import { Survey } from '../model/survey.model';
import { SurveyRepository } from '../model/survey.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-surveyList',
  templateUrl: './surveyList.component.html',
  styleUrls: ['./surveyList.component.css']
})
export class SurveyListComponent implements OnInit {
  public user: User;
  public surveyList: Survey[];
  public title: string = 'Survey List';

  constructor(
    private repository: SurveyRepository,
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.refresh();
  }

  deleteSurvey(survey: Survey): void
  {
    this.repository.deleteSurvey(survey).subscribe(data => this.refresh());
  }

  refresh(){
    this.repository.getSurveys().subscribe(data => {
      this.surveyList = data;
    });
  }
}