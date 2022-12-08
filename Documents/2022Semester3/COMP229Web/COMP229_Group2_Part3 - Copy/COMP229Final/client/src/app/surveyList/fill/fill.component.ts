import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.service';
import { SurveyAnswer } from 'src/app/model/surveyAnswer.model';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.css']
})
export class FillComponent implements OnInit {
  public user: User;
  public survey: Survey = new Survey();
  public surveyAnswer: SurveyAnswer
  constructor(
    private repository: SurveyRepository,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.surveyAnswer = new SurveyAnswer();
    this.surveyAnswer.id = this.route.snapshot.paramMap.get('id');
    this.repository.getSurvey(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.survey = data;
    });
    
  }

  fillSurvey(form: NgForm): void {
    if (form.valid) {
      this.repository.fillSurvey(this.surveyAnswer).subscribe(() => this.router.navigateByUrl('/surveylist'));
    }
  }

}
