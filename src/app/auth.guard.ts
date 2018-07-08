import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable() 
export class AuthGuard implements CanActivate{
    myCookie: any;
    usrdatacookie:any;

    constructor(private router:Router){
    }
    public isLoggedIn:boolean=false;
    public redirectUrl:string;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<any>| Promise<boolean>  {
        // this.redirectUrl=state.url;
        // return this.chkLogin(this.redirectUrl);

        return this.chkLogin();
    }

    // chkLogin(url:string):boolean{
        chkLogin():boolean{
        this.myCookie=Cookie.get('token');
        if(this.isLoggedIn){
            return true
        }else
        { 
            if(this.myCookie){
                return true
                // this.router.navigateByUrl(url);
            }else 
            {
                this.router.navigate(['/login']);
              
                return false
                // this.redirectUrl=url;
                }
        }
        }
    

}