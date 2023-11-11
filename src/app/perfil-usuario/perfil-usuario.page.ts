import { Component, OnInit } from '@angular/core';
import { UsuarioLogeado } from './../model/UsuarioLogeado';
import { AuthService } from '../servicios/auth.service';
import { ViewDidEnter, ViewDidLeave, ViewWillEnter } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit, ViewWillEnter, ViewDidLeave {

  public usuarioActivo : UsuarioLogeado | null = null;
  private suscripcion : Subscription | null = null;

  constructor(
    private auth : AuthService
  ) { }
  ionViewWillEnter(): void {
    this.suscripcion = this.auth.$usuarioActivo.subscribe( usuario => {
      this.usuarioActivo = usuario;
    });
  }
  ionViewDidLeave(): void {
    this.suscripcion?.unsubscribe;
  }

  ngOnInit() {
  }

}
