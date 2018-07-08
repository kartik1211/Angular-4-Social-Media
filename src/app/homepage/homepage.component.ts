import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
// import { Location } from '@angular/common';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  usrdatacookie:any;
  username:string;
  constructor(private cookie:CookieService) { 
    
    this.usrdatacookie= this.cookie.getObject('userdata');
   
  }

  ngOnInit() {
  this.username=this.usrdatacookie.name;
  }

}
