import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algoritms',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2017, 0, 18),
    url: 'http://a.co/glgjpRP'
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro: string;

  //isso serve para quando estamos fazendo uma chamada no servidor
  //podemos fazer dessas duas formas, com o Promise ou com o Observable
  //2000 -> intervalo de 2 segundos
  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  });

  valorAsync2 = Observable.interval(2000).
    map(valor => 'valor assíncrono 2');

  constructor() { }

  ngOnInit() {
  }

  addCurso(curso){
    this.livros.push(curso);
  }

  obterCursos(){
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });    
  }
}
