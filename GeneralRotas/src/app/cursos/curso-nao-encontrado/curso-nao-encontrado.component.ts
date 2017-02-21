import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-nao-encontrado',
  templateUrl: './curso-nao-encontrado.component.html',
  styleUrls: ['./curso-nao-encontrado.component.css']
})
export class CursoNaoEncontradoComponent implements OnInit {

  idNaoEncontrado: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.idNaoEncontrado = params['id'];
      }
    );
  }

}
