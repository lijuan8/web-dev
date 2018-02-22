import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: String;
  password: String;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onRegister(){
    console.log(this.username);
    console.log(this.password);
    this.userService.findUserByUserName(this.username)
      .subscribe((user) => {
        console.log(user);
        if (user === null){
          const newUser = {
            username: this.username,
            password: this.password
          }
          this.userService.createUser(newUser)
            .subscribe((responseUser) => {
              //console.log(responseUser);
              this.router.navigate(['/profile', responseUser._id])
            });
        }
        this.router.navigate(['/profile', user._id]);
      })
  }

}
