import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursosRoutes: Routes = [
    //não estamos passando o path: 'curso' pois já estamos declarando essa rota no app.routing.module, então aqui podemos passar vazio
    { path: '', component: CursosComponent },
    { path: ':id', component:CursoDetalheComponent },
    { path: 'cursonaoencontrado', component: CursoNaoEncontradoComponent }
];

@NgModule({
    imports:[RouterModule.forChild(cursosRoutes)],
    exports:[RouterModule]
})
export class CursosRoutingModule {}