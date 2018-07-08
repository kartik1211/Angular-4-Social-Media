import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurrentUserService {

  constructor(private http:HttpClient,private router:Router) {
    

   }
  //  get_loggedInUserDetails(){
  // return  this.http.get('http://localhost:4100/loggedInUserDetails')
  
  // }
  
      
      // if(data.success==true){
      //   this.router.navigate(['/homepage']);
    
      // }
     } 
 

