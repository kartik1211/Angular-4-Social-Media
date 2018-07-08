import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  // createpostAndauthor:any;
  usrdatacookie:any;
  comments:any=[];
  likes:number=0;
  author:any;
  postTitle:any;
  postDescription:any;
  // show:boolean=false;
  constructor(private http:HttpClient,private router:Router,
    private cookie:CookieService) {
      this.usrdatacookie= this.cookie.getObject('userdata');
     }

  ngOnInit() {
    this.author=this.usrdatacookie.name;
  }
  submitPost(val){
    // console.log(val);
    // val=val+this.author;
    // console.log(val);  
      
    this.http.post('http://localhost:4100/createPost',{postTitle:val.postTitle,postDescription:val.postDescription,author:this.author,
    comments:this.comments,likes:this.likes}).subscribe((data)=>{
      console.log(data);
    })
    this.router.navigate(['/homepage']);
  }
}
