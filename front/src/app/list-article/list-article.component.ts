import { Component, OnInit ,ChangeDetectionStrategy,
  ChangeDetectorRef} from '@angular/core';
import { GestionArticleService } from '../service/gestion-article.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent implements OnInit {
  tabA=[]
  search=""
  tabF: any[];
  constructor(private serv:GestionArticleService,private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.tabA=this.serv.tabArticles
    this.serv.listArticle().subscribe(res=>{
      this.tabA=res.resultat
      this.tabF=this.tabA
    })
  }
  


 change(cat){
  console.log(cat)
this.tabF=this.tabA.filter(x=> x.categorie === cat)
this.cd.detectChanges();


}
all()
{
  this.serv.listArticle().subscribe(res=>{
    this.tabF=res.resultat
  })
}
}
