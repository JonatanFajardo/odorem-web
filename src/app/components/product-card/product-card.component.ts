import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() imageUrl: string="";
  @Input() title: string="";
  @Input() precio: number=0;

  loading = true;

  public onImageLoad() {
    // console.log("3");
    
    this.loading = false;
    const precio=document.getElementById("id-product-title");
    precio?.classList.add("loading")
  }

}
