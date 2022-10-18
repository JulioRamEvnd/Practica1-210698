import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica09',
  templateUrl: './practica09.component.html',
  styleUrls: ['./practica09.component.css']
})
export class Practica09Component {

  listEstudiantes: any[]=[
    {nombre:'Julio Ramirez', estado:'Aprobado'},
    {nombre:'Josue Ramirez', estado:'Aprobado'},
    {nombre:'Angel Ramirez', estado:'Reprobado'},
    {nombre:'Montzerrath Guerrero', estado:'Aprobada'},
    {nombre:'Emmanuel Rivera', estado:'Aprobado'},
    {nombre:'Yery Martinez', estado:'Reprobada'},
    {nombre:'Jose Fernandez', estado:'Reprobado'},
    {nombre:'Abigail Amador', estado:'Aprobada'},
    {nombre:'Nadia Hernandez', estado:'Reprobada'},
    {nombre:'Annia Macedonio', estado:'Aprobada'}
  ]
mostrar=false;
mostrarEstudiantes():void{
  this.mostrar=!this.mostrar;
}
  constructor() { }

  
  

}

