import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterModule,Routes,CanActivate} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CurrentUserService } from './services/current-user.service';
// import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { CookieService } from 'angular2-cookie/services/cookies.service';
// import {PopupModule} from 'ng2-opd-popup';
// import {MaterialModule} from '@angular/material';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    CreatePostComponent,
    ListPostsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'',component:LoginComponent},
      {path:'homepage',component:HomepageComponent,canActivate:[AuthGuard]},
      {path:'Createpost',component:CreatePostComponent,canActivate:[AuthGuard]},
      {path:'listposts',component:ListPostsComponent,canActivate:[AuthGuard]}
    ]),
    NgbModule.forRoot()
    // MaterialModule,
    // BrowserAnimationsModule

  ],
  providers: [CurrentUserService,Cookie,CookieService,AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
