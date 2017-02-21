import { AlunosModule } from './../../../../../_07-rotas/src/app/alunos/alunos.module';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.aluno = this.alunosService.getAluno(params['id']);
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }


}
