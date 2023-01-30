import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  ciudades = ['Barcelona', 'Buenos Aires', 'Madrid', 'Valencia'];
  showCiudad: boolean = true;
  changeCss: boolean =true;


  constructor() { }



  ngOnInit(): void {
    
  }

  mostrar () {
    this.showCiudad = !this.showCiudad;
  }

  cambioCss() {
    this.changeCss = !this.changeCss;
  }
}

//que una variable se llene con los elementos elegidos?
// declare global {
//     interface Window { MyNamespace: any; }
// }

// window.MyNamespace = window.MyNamespace || {};









