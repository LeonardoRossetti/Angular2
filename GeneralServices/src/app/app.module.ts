import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent        
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CriarCursoModule,
    CursosModule
  ],
  //todos os providers passados aqui serão acessados pelos componentes de toda a aplicação
  //nesse caso, foi criado um '.module' específico para cada componente e foi colocado o 'providers' lá
  //providers: [CursosService],
  providers: [LogService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
