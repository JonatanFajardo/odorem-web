import { Component, OnInit } from '@angular/core';
import { NoticiasFraganciasDto } from 'src/app/models/noticias-fragancias.models';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  pageSize:number=3;
  current:number = 0;
  total:number =0;

  noticias: NoticiasFraganciasDto[] = [];
  constructor(private noticiasService: NoticiasService) {
    this.ObtenerNoticiasFragancias();
   }

  ngOnInit(): void {
  }

  ObtenerNoticiasFragancias(){
    this.noticiasService.NoticiasFragancias().subscribe((datos)=>{
      this.noticias = datos;
      this.total = datos.length;
    })
  }

}
