import { Component, OnInit,ViewChild } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})

export class ListPostsComponent implements OnInit {
  y: any=[];


  usrdatacookie:any;
  username:any;
  likes:number;
  comments:any=[];
  posts:any;
  postTitle:any;
  _id:any;
  x:any;
  sh:Boolean=false;
  updatedComments:any;


  constructor(private cookie:CookieService,private http:HttpClient,private change:ChangeDetectorRef) {
    this.usrdatacookie= this.cookie.getObject('userdata');
  
   }

  ngOnInit() {
    this.username=this.usrdatacookie.name;
    this.http.get('http://localhost:4100/listposts').subscribe((data:any)=>{
    for( var i=0;i<data.length;i++){  
    // console.log(data[i].postTitle);
    this.postTitle=data[i].postTitle;
    
  }   

  this.posts=data;
  // console.log(this.posts);
  for(let i=0;i<this.posts.length;i++){

     this.posts[i].sh=this.sh;
  
  }
  console.log(this.posts);


    })
  }

  Likes(id){
    this.http.post('http://localhost:4100/inclikes',{likes:this.likes,_id:id}).subscribe((data)=>{
    console.log(data.user);
//imp. step
  for(let i=0;i<this.posts.length;i++){
   if(this.posts[i]._id===id){
      this.posts[i].likes=data.user.likes;
    }
  }   
  })

 
  }

  view(id){

    for(let i=0;i<this.posts.length;i++){
      if(this.posts[i]._id===id){

        this.y.push(this.posts[i]);
    console.log(this.y);
    //       }
   
  }

  }
}

  close(){
    
    this.y=[];
  }

  Comment(id){
  //  console.log(ind);
   
   
    console.log(id);
    for(let i=0;i<this.posts.length;i++){
      if(this.posts[i]._id===id){
        this.comments=this.posts[i].comments;
        this.posts[i].sh=!this.posts[i].sh;
        

      }
   
  }
}



  postComment(comment,id){
  
    this.http.post('http://localhost:4100/postComment',{comment:comment.txt+' |comment by:'+this.username,id:id}).subscribe((data:any)=>{
      console.log(data);

      for(let i=0;i<this.posts.length;i++){
        if(this.posts[i]._id===data.data._id){
          this.posts[i]=data.data;
          // document.write('<br>');
          console.log(this.posts);
          
        }
      }


    })

  
  }

}