import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  // e:any;
  success:boolean;
  constructor( private http:HttpClient,private router:Router
    ,private cookie:CookieService
  ) {
  
   }

  ngOnInit() {
   
  }
  loginDetails(v){
    // console.log(v);
    this.http.post('http://localhost:4100/login',v).subscribe((data:any)=>{
      console.log(data.user);

      if(data){ 
        
        // console.log(data);
        Cookie.set('token',data.token);
        this.cookie.putObject('userdata',data.user); 
        // e.preventDefault();
        // Cookie.get('token');
        // localStorage.setItem('token', data);
        location.reload();
          this.router.navigate(['/homepage']);
      
               
      }else{
        alert('Invalid Login');
      }


    })

  }

}
