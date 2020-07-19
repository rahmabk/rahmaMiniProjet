import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GestionArticleService } from './gestion-article.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  retour
  constructor(private serv:GestionArticleService,private router:Router){}
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean{
     this.serv.logchange.subscribe(res=>{
     if(res==true){
      this.retour=true
     }else
    { this.retour=false
      this.router.navigate(['/login'])
    }
    })
    return this.retour
  }
  
}
