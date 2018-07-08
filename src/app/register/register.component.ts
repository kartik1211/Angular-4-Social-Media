import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm=new FormGroup({  
    name:new FormControl('enter name',Validators.required),
    password:new FormControl('',Validators.required),
    email:new FormControl('', Validators.required),
    phone:new FormControl('',Validators.required),
    // age:new FormControl('',Validators.required.minLength>18 &&Validators.required.maxLength<55)
  });


  constructor(private router:Router, private http:HttpClient) { }

  alreadyexists:boolean=true;
  exists:boolean=false;
  ngOnInit() {
  }
  onSubmit(){
    // console.log(this.registerForm.value);
    this.http.post('http://localhost:4100/post',this.registerForm.value).subscribe((data)=>{
      console.log(data);
    });
    this.router.navigate(['/login']);
  }
  alreadyExists(){
    // console.log(this.registerForm.value.name)
    let name = {name:this.registerForm.value.name}
    // console.log('blur')
    this.http.post('http://localhost:4100/getName',name).subscribe((data)=>{
      console.log(data.exists);
      if(data.exists){
        this.exists=true;
        alert('Username is already taken');
      }


    })
  }
   
}
