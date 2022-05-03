import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  logForm=new FormGroup({
    uemail:new FormControl("",[Validators.required,Validators.email]),
    upass:new FormControl("",[Validators.required])
})
get uemail(){
  return this.logForm.get('uemail')
}
get upass(){
  return this.logForm.get('upass')
}
Submit(){
  console.log(this.logForm.value);
}
  ngOnInit(): void {
  }

}
