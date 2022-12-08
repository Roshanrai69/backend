import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: User;
  public messages: string;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.user = new User();
  }

  authenticate(form: NgForm) {
    if(form.valid) {
      // perform registration
      this.auth.register(this.user).subscribe(createUser => {
        if (createUser.success) {
          // perform authentication
          this.auth.authenticate(this.user).subscribe(data => {
            if (data.success) {
              this.auth.storeUserData(data.token, data.user);
              this.router.navigateByUrl('/survey');
            }
          });
        }
      });
    }
    else {
      this.messages = 'Form Data Invalid';
    }
  }

}
