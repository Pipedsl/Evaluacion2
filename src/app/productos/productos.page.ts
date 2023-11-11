import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor(
  public productos : ProductosService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(): void {
    this.productos.consultarProductos();
  }

}
