import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginModel } from '../../models/login.model';
import { GitubUsersService } from '../../services/gitub-users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  
  constructor(private fb: FormBuilder, private gitubUsersService:GitubUsersService) { }

  loginForm = this.fb.group({
    user: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    password: ['', [Validators.required]]
  });

  ngOnInit(): void {
    this.loginForm.get('user').valueChanges.subscribe(
      (values) => {
          console.log(values);
          console.log(this.loginForm.get('user'));
      },
      error => {

      }
    )
  }

  onSubmitLogin() {
    console.log('esta es yuna lamada desde el evento subtmi.');
    console.log(this.loginForm);
    // true ||  != undefined
    if (this.loginForm.valid) {
      console.log(this.loginForm.valid);
      console.log(this.loginForm.value);
      const loginModel: LoginModel = this.loginForm.value as LoginModel;
      console.log(loginModel);
  
      console.log(this.loginForm.value.password);
      console.log(this.loginForm.value.password2);
  
      console.log(loginModel.password);
      this.gitubUsersService.login(loginModel);
    }
  
    
  }

}
