import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDataSource } from './rest.datasource';
import { Survey } from "./survey.model";
import { SurveyAnswer } from "./surveyAnswer.model";
import { User } from "./user.model";

@Injectable()
export class SurveyRepository {
    constructor(private dataSource: RestDataSource) {}

    getSurveys(): Observable<Survey[]> {
        return this.dataSource.getSurveys();
    }

    getMySurveys(user: User): Observable<Survey[]> {
        return this.dataSource.getMySurveys(user);
    }

    getSurvey(surveyId: string): Observable<Survey> {
        return this.dataSource.getSurvey(surveyId);
    }

    fillSurvey(surveyAnswer: SurveyAnswer): Observable<any> {
        return this.dataSource.fillSurvey(surveyAnswer);
    }

    editSurvey(survey: Survey): Observable<any> {
        return this.dataSource.editSurvey(survey);
    }

    deleteSurvey(survey: Survey): Observable<any> {
        return this.dataSource.deleteSurvey(survey);
    }
}