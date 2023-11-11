import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from './../servicios/auth.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {
  public formularioInicioSesion : FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    public auth : AuthService
  ) {
    this.formularioInicioSesion = formBuilder.group({
      usuario: ['kminchelle',
                [ Validators.required,
                      Validators.minLength(3),
                      Validators.maxLength(10)
                ]],
      password: ['0lelplR',
                  [ Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(10)
                ] ]
    });
  }
  public iniciarSesion(){
    if(!this.formularioInicioSesion.valid){
      alert("Formulario esta incorrecto");
      this.formularioInicioSesion.controls['usuario'].setValue("");
      this.formularioInicioSesion.controls['password'].setValue("");
      this.formularioInicioSesion.clearValidators();
      return
    }
    this.auth.iniciarSesion(
      this.formularioInicioSesion.controls["usuario"].value, // usuario
      this.formularioInicioSesion.controls["password"].value // password
    );
  }
  ngOnInit() {
  }

}
