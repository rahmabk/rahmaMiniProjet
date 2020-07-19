import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { GuardGuard } from './service/guard.guard';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'newArticle',component:AddArticleComponent,canActivate:[GuardGuard]},
  {path:'articles',component:ListArticleComponent},
  {path:'',redirectTo:'articles',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
