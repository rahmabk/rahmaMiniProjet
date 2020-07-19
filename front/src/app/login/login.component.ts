import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionArticleService } from '../service/gestion-article.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formC:FormGroup
message=""
submitted=false
  constructor(private fb:FormBuilder,private router:Router,private serv:GestionArticleService) {
    this.formC=this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  ajout(){
    this.submitted=true
    if(this.formC.value.email == "admin@gmail.com" && this.formC.value.password == "123456"){
      alert("ce bon")
      this.router.navigate(['/newArticle'])
      this.serv.loggIn(true)
    }else this.message="invalid mail or password"
  }
}
