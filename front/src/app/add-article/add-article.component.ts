import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GestionArticleService } from '../service/gestion-article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  tabArticles
  formC:FormGroup
  selectedFile = null

  constructor(private fb:FormBuilder,private serv:GestionArticleService){
    this.formC=this.fb.group({
      nom:['',[Validators.required]],
      prix:['',[Validators.required]],
      categorie:['',[Validators.required]],
      image:['',[Validators.required]],

    })
  }
  
  ngOnInit(){
    this.tabArticles=this.serv.tabArticles
  }

  multiImage
  selectedM(event) {
    this.multiImage = event.target.files;

    console.log(this.multiImage)
  }

  ajout(){
    console.log(this.formC.value)
    
    const formData = new FormData();
    for (let img of this.multiImage)
      formData.append('myFiles', img)
    console.log(formData)
    this.serv.createImg(formData).subscribe(res => {

      let obj = this.formC.value
      obj.image = res[0]
      this.serv.newArticle(obj).subscribe(res => {
        console.log(res)
        if(res.status){
          alert("article ajouter")
          this.formC.reset()
        }
      })
    })
  }


  

}
