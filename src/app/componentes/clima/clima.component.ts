import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  formulario!: FormGroup;
  clima: any;
  name: any;
  temperatura: any;
  humedad: any;
  latitud: any;
  longitud: any;
  descripcion: any;
  showError!: boolean;
  mensajeError!: string;
  fecha = new Date();

  constructor(private fb: FormBuilder, private _clima: ClimaService) {
    this.iniciaFormulario();
  }


  ngOnInit(): void {
    
  }

  // método que crea e inicia un formulario

  iniciaFormulario(){

    this.formulario = this.fb.group({
      ciudad: ['', [Validators.required,Validators.pattern('^[a-zA-Z] *$')]],
      código: ['', [Validators.required,Validators.pattern('^[a-zA-Z] *$')]]
    })
  }
  consultar() {
    this.showError = false ;
    console.log("Formulario: ", this.formulario);

    this._clima.getEstadoClima( this.formulario.get('ciudad')?.value, this.formulario.get('codigo')?.value)
        .subscribe( respuesta => {
          this.clima = respuesta;
          this.name = this.clima.name;
          this.temperatura = this.clima.main.temp;
          this.humedad = this.clima.main.humidity;
          this.latitud = this.clima.coord.lat;
          this.longitud = this.clima.coord.lon;
          this.descripcion = this.clima.weather[0].description;

          console.log("respuesta: ", respuesta);
        
        },
        (err) => {
          this.showError =  true;
          this.mensajeError = "Error al consultar el clima. Intentelo nuevamente";
        }
        )
        
  }
}
