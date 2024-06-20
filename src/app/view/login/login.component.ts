import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UnsplashService } from 'src/app/service/unsplash.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  backgroundUrl: string = 'rainy';

  formGroup!:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private unsplashService: UnsplashService
  ){}

  ngOnInit(): void {
    this.unsplashService.getRandomPhoto().subscribe(response => {
      this.backgroundUrl = response.urls.full;
    });
    this.initForm()
  }

  initForm(){
    // try{
    // this.userService.getUsers()
    // .subscribe(item => this.productlist= new MatTableDataSource(item))
    // console.log(this.productlist.data)

    // }catch(error){
    // console.log(error)
    // }

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
