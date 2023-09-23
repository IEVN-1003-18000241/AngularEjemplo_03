import { Component } from '@angular/core';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  mostrarImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.mostrarImg=!this.mostrarImg;
  }
  
  productos: IProductos[]=[
    {
      "Modelo":'Sentra',
      "Descripcion":"4 puertas familiar",
      "year":"febrero 2 2022",
      "Precio":120000,
      "Marca":"Nissan",
      "Color":"Azul",
      "ImagenUrl":"https://www.nissanforum.mx/static/agency-go-virtual/Nissan/Sentra/2020/360-color-picker/color1/color1_1.jpeg"
    },
    {
      "Modelo":'A4',
      "Descripcion":"4 puertas familiar",
      "year":"marzo 5 2020",
      "Precio":180000,
      "Marca":"Audi",
      "Color":"Blanco",
      "ImagenUrl":"https://assets.maxterauto.com/vo/imagenes/h_img_6_18246_01_1693107237.jpg"
    },
    {
      "Modelo":'Rio',
      "Descripcion":"4 puertas familiar",
      "year":"febrero 2 2019",
      "Precio":130000,
      "Marca":"Kia",
      "Color":"Negro",
      "ImagenUrl":"https://kia-frontera.com/wp-content/uploads/2019/08/URBAN-GREY-1.png"
    }
  ]
}
