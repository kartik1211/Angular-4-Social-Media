import { Component, OnInit } from '@angular/core'; 
import { Subject } from 'rxjs/Subject';
import {Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CurrentUserService } from '../services/current-user.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit() {
  }
  loggedIn:boolean= false;
  show:boolean=false;
  myCookie:any;
  subject = new Subject<any>();
  constructor( private http:HttpClient,private router:Router, currentUserService:CurrentUserService
  ) { 
 

this.myCookie=Cookie.get('token');

  console.log(this.myCookie);  
    
        }


  toggleIt(){
    this.show=!this.show;
  }
 
  
  logOut(){
    this.router.navigate(['/login']);
    location.reload();
    Cookie.delete('token');
    Cookie.delete('userdata');
  }
 
}
