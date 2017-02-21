import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CursosService } from '../cursos/cursos.service';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CursosComponent],
  //todos os providers passados aqui serão acessados pelos componentes declarados no "declarations"
  //providers: [CursosService]
})
export class CursosModule { }
