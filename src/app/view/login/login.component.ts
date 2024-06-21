import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { UnsplashService } from 'src/app/service/unsplash.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  backgroundUrl: string = '';

  formGroup!:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private unsplashService: UnsplashService,
    private authService: LoginService,
  ){}

  ngOnInit(): void {
    this.unsplashService.getRandomPhoto().subscribe(response => {
      this.backgroundUrl = response.urls.full;
    });
    this.initForm()
  }

  initForm(){
    this.formGroup=this.formBuilder.group({
      username:["",Validators.required],
      password:["",Validators.required]
      })
  }

  login1(): void{
    let login ={
      username: this.formGroup.value.username,
      password: this.formGroup.value.password,
    }
  this.authService.login(login)
  .subscribe(item=>console.log(item.token));
    }
    unsplashClass() {
      return {
        'background-image': `url(${this.backgroundUrl})`,
        'background-size': 'cover',
        'background-position': 'center'
      };
    }


  login(event: Event) : any{

  }
}
