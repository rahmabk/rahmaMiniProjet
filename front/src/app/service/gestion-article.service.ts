import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Http } from "@angular/http"
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GestionArticleService {

  constructor(private http:Http) { }
  tabArticles=[
    {nom:"article1",description:"description1",image:"image1"},
    {nom:"article2",description:"description2",image:"image2"},
    {nom:"article3",description:"description3",image:"image3"},
    {nom:"article1",description:"description1",image:"image1"},
    {nom:"article2",description:"description2",image:"image2"},
    {nom:"article3",description:"description3",image:"image3"}
]
var=false
log=new BehaviorSubject(this.var)
logchange=this.log.asObservable()  


loggIn(bool){
this.log.next(bool)
}

createImg(formData){

  return this.http.post("http://localhost:3000/article/upload",formData).pipe(map(res=>{
    return res.json()
  }))
}
newArticle(formData){

  return this.http.post("http://localhost:3000/article/newArticle",formData).pipe(map(res=>{
    return res.json()
  }))
}
listArticle(){

  return this.http.get("http://localhost:3000/article/listArticle").pipe(map(res=>{
    return res.json()
  }))
}
}
