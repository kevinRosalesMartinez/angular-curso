import { Component } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ["Spiderman","Ironman","Thor","Hulk"]
  heroeborrado: string = "";

  borrarHeroe(){
    console.log("Borrando...");
    this.heroeborrado = this.heroes.shift() || "";
  }
}


