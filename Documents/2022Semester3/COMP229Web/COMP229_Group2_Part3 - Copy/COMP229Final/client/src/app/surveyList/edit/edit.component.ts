import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.service';
import { SurveyAnswer } from 'src/app/model/surveyAnswer.model';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public user: User;
  public survey: Survey;
  public title: string;
  constructor(
    private repository: SurveyRepository,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.survey = new Survey();
    this.survey.OwnerName = this.user.displayName;
    this.title = "Create A Survey";
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.title = "Edit Survey";
      this.repository.getSurvey(this.route.snapshot.paramMap.get('id')).subscribe(data => {
        this.survey = data;
      });
    }
    
  }

  editSurvey(form: NgForm): void {
    if (form.valid) {
      this.repository.editSurvey(this.survey).subscribe(() => this.router.navigateByUrl('/surveylist'));
    }
  }

}
