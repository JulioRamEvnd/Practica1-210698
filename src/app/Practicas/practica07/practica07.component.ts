import { Component } from '@angular/core';

@Component({
  selector: 'app-practica07',
  templateUrl: './practica07.component.html',
  styleUrls: ['./practica07.component.css']
})
export class Practica07Component {
lista: any[]=[
  {nombre:'Julio Ramirez', estado:'Aprobado'},
  {nombre:'Josue Ramirez', estado:'Aprobado'},
  {nombre:'Angel Ramirez', estado:'Aprobado'},
  {nombre:'Montzerrath Guerrero', estado:'Aprobado'},
  {nombre:'Emmanuel Rivera', estado:'pendiente'},
  {nombre:'Yery Martinez', estado:'Aprobado'},
  {nombre:'Jose Fernandez', estado:'Aprobado'},
  {nombre:'Abigail Amador', estado:'Aprobado'},
  {nombre:'Nadia Hernandez', estado:'Aprobado'},
  {nombre:'Annia Macedonio', estado:'Aprobado'}
]
  constructor() { }
ngOnInit():void{}
  
}
