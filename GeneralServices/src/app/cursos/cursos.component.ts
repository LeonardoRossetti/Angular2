import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  //além do app.module e do cursos.module, é possível declarar os providers aqui. Quando declarar aqui será uma instancia 
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursosService: CursosService) { 
    
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    
    //com o 'subscribe' estamos fazendo a inscrição no evento 'emitirCursoCriado' e sempre seremos notificados quando ele emitir um novo valor.
    //this.cursosService.emitirCursoCriado.subscribe(
      
    //como é um atributo statico devemos acessar sem ter uma instancia da classe
    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)

      //essa linha de cima é equivalente a essa funcion de baixo. Isso é ecmascript 2015.
      // function (curso){
      //   this.cursos.push(curso)
      // }
    );
  }

}
