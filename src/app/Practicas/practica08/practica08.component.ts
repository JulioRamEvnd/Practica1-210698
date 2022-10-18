import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica08',
  templateUrl: './practica08.component.html',
  styleUrls: ['./practica08.component.css']
})
export class Practica08Component {

  listEstudiantes: any[]=[
    {nombre:'Julio Ramirez', estado:'Aprobado'},
    {nombre:'Josue Ramirez', estado:'Aprobado'},
    {nombre:'Angel Ramirez', estado:'Aprobado'},
    {nombre:'Montzerrath Guerrero', estado:'Aprobado'},
    {nombre:'Emmanuel Rivera', estado:'Aprobado'},
    {nombre:'Yery Martinez', estado:'Aprobado'},
    {nombre:'Jose Fernandez', estado:'Aprobado'},
    {nombre:'Abigail Amador', estado:'Aprobado'},
    {nombre:'Nadia Hernandez', estado:'Aprobado'},
    {nombre:'Annia Macedonio', estado:'Aprobado'}
  ]
mostrar=false;
mostrarEstudiantes():void{
  this.mostrar=!this.mostrar;
}
  constructor() { }

  
  

}
