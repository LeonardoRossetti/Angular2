import { AlunosModule } from './alunos.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';



const alunosRoutes = [
    // { path:'alunos', component: AlunosComponent },
    // { path:'alunos/novo', component: AlunoFormularioComponent },
    // { path:'alunos/:id', component: AlunoDetalheComponent },
    // { path:'alunos/:id/editar', component: AlunoFormularioComponent }

    /*
        Esse código faz o mesmo que o código ascima, porém com os componentes filhos é possível abrir os dois componentes ao mesmo tempo na tela.
        Para isso é preciso ir no alunos.component e adicionar a tag: <router-outlet></router-outlet>
        Quando for chamada a url: http://localhost:4200/alunos/novo o resultado vai ser:
            alunos works!

            aluno-formulario works!

        Ou seja, o componente aluno-formulario vai aparecer dentro do componente alunos.
    */
    //{ path:'alunos', component: AlunosComponent, children: [
    //não estamos passando o path: 'alunos' pois já estamos declarando essa rota no app.routing.module, então aqui podemos passar vazio
    { path:'', component: AlunosComponent, children: [
        { path:'novo', component: AlunoFormularioComponent },
        { path:':id', component: AlunoDetalheComponent },
        { path:':id/editar', component: AlunoFormularioComponent }
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}