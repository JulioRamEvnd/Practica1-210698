import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica10',
  templateUrl: './practica10.component.html',
  styleUrls: ['./practica10.component.css']
})
export class Practica10Component {

  listEstudiantes: any[]=[
    {nombre:'Julio Ramirez', estado:'Aprobado'},
    {nombre:'Josue Ramirez', estado:'Aprobado'},
    {nombre:'Angel Ramirez', estado:'Reprobado'},
    {nombre:'Montzerrath Guerrero', estado:'Aprobada'},
    {nombre:'Emmanuel Rivera', estado:'Aprobado'},
    {nombre:'Yery Martinez', estado:'Reprobada'},
    {nombre:'Jose Fernandez', estado:'Aprobado'},
    {nombre:'Abigail Amador', estado:'Aprobada'},
    {nombre:'Nadia Hernandez', estado:'Reprobada'},
    {nombre:'Annia Macedonio', estado:'reprobada'}
  ]
mostrar=false;
mostrarEstudiantes():void{
  this.mostrar=!this.mostrar;
}
  constructor() { }

  
  

}