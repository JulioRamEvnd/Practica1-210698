import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica11',
  templateUrl: './practica11.component.html',
  styleUrls: ['./practica11.component.css']
})
export class Practica11Component {

  listEstudiantes: any[]=[
    {nombre:'Julio Ramirez', estado:'Aprobado'},
    {nombre:'Josue Ramirez', estado:'Aprobado'},
    {nombre:'Angel Ramirez', estado:'Graduado'},
    {nombre:'Montzerrath Guerrero', estado:'Aprobada'},
    {nombre:'Emmanuel Rivera', estado:'Aprobado'},
    {nombre:'Yery Martinez', estado:'Reprobada'},
    {nombre:'Jose Fernandez', estado:'Aprobado'},
    {nombre:'Abigail Amador', estado:'Aspirante'},
    {nombre:'Nadia Hernandez', estado:'Reprobada'},
    {nombre:'Annia Macedonio', estado:'Reprobada'},
    {nombre:'Gael Frieven', estado:'Aspirante'},
    {nombre:'Nicolas Noel', estado:'Aspirante'},
    {nombre:'Azazel Fry', estado:'Graduado'},
    {nombre:'Mariano Perez', estado:'Baja'},
  
  ]
mostrar=false;
mostrarEstudiantes():void{
  this.mostrar=!this.mostrar;
}
  constructor() { }

  
  

}