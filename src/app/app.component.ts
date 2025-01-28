import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, 
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos';

  //propiedades
  nombre = 'Palomeque';
  aniosServicio = 30;
  email = 'carlospd.ti22@utsjr.edu.mx';
  activo = true;
  alumnos = [24,25,26];
  contador = 0;
  numero = 5;
  desactivarBoton = true; //es booleana

  productos = [
    {
      id: 1,
      descripcion: 'Gansito Marinela',
      precio: 15.50
    },
    {
      id: 2,
      descripcion: 'Sabritas Doritos',
      precio: 20.50
    },
    {
      id: 3,
      descripcion: 'Kilo de Azucar',
      precio: 35.50
    }

  ];

  //función que muestra un mensaje dependiendo del 
  //valor de la propiedad activa

  estaActivo (){
    if (this.activo){
      return 'Empleado activo';

    }else{
      return 'Empleado inactivo';
    }
  }

  //metodo que suma los valores del arreglo de alumnos

  sumarAlumnos(){
    let suma = 0;
    for(let i=0; i<this.alumnos.length;i++){
      suma += this.alumnos[i];
      
    }
    return suma;
  }

  //función que genera un número aleatorio
  //entre 1 y 3

  generarNumero(){
    return Math.floor(Math.random() * 3) + 1;
  }

  //función para incrementar el contador
  incrementarContador(){
    this.contador ++;
  }

  //función para decrementar el contador
  decrementarContador(){
    this.contador --;
  }

  //función que cambia el valor de desactivar botón
  cambiarValor(){
    this.desactivarBoton = false;
  }

}
