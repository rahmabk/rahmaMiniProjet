import { Component } from '@angular/core';
import { GestionArticleService } from './service/gestion-article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  logged= false;
  auth="login"
  constructor(private ser:GestionArticleService){
    this.ser.logchange.subscribe(res=>{
      this.logged=res
    })
    this.auth= this.logged ? "Logout" :"login";
  }

  logout(){
    this.ser.log.next(false)
  }
}
