import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
nombre='Julio';
textPlaceholder='Escriba algo aqui';
deshabilitado=true;
texto="";
constructor(){
  setInterval(()=> this.nombre='Jesus',3000);
  setInterval(()=> this.deshabilitado=false,5000);
}
getSuma(numero1: number, numero2: number){
  return numero1+numero2;
}
}
