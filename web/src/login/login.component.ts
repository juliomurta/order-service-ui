import { Component } from '@angular/core';
import { LoginService } from '../model/login.service';
import { Login } from '../model/login.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBaseComponent } from '../form-base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent extends FormBaseComponent {
  login: Login = new Login();
  showError: boolean = false;
  messageError: string = '';

  constructor(private loginService: LoginService, 
              private router: Router) { 
    super();
  }

  doLogin(form: NgForm) {
    if(form.valid) {
      this.loginService.login(this.login)
                       .subscribe(result => {
                          this.router.navigateByUrl("/home");
                       },
                       error => {                        
                        this.showError = true;  
                        if (error.status === 401) {
                          this.messageError = "Invalid username or password.";
                        } else {                        
                           this.messageError = "An unexpected error occurred.";
                        }
                      });
    } else {
      super.checkFormValidation(form);
    }
  }  
}
