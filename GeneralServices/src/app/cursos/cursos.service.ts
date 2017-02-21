import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from '../shared/log.service';

//@Injectable() torna essa classe injetável, ou seja, ela pode ser tratada como um provider (irá prover os dados). E pode ser instanciada no app.module como um provider.
@Injectable()
export class CursosService {

    //com esse objeto podemos emitir eventos para que a nossa aplicação escute esses eventos e a gente possa se inscrever nesse evento para que sempre que houver mudança 
    //ou sempre que um novo evento for emitido a gente pode notificar o código para que ele escute e faça alguma ciosa com aquela informação
    //estamos recebendo só o nome do curso, então é uma string, estemos tipando como uma string.
    emitirCursoCriado = new EventEmitter<string>();

    //quando declaramos um atributo como 'static' significa que não precisamos de uma instancia da classe para acessa-lo
    //quando tivermos mais de uma instancia dessa classe, essa variável será compartilhada entre as instancias e permanecerá com o mesmo valor em todas as instancias
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] =  ['Angular 2', 'Java', 'C#'];

    constructor(private logService: LogService) {
        
    }

    getCursos(){
        this.logService.consoleLog('Obtendo lista de cursos.');
        return this.cursos;
    }

    addCursos(curso) {
        this.logService.consoleLog(`Add curso: ${curso}`);
        this.cursos.push(curso);

        //emite o evento que será ouvido 
        this.emitirCursoCriado.emit(curso);

        //emite o evento que será ouvido 
        CursosService.criouNovoCurso.emit(curso);
    }
}