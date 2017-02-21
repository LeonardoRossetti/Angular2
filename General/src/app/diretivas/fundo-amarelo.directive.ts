import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  //podemos também passar aqui quais os elementos que serão afetados pela diretiva, ou seja, se a diretiva for usada em um outro elemento que nao seja um button, ela não produzirá efeito algum
  //selector: 'button[fundoAmarelo]'
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) { 
    //_elementRef.nativeElement.style.backgroundColor = 'yellow';
    
    //essas são duas formas de fazer a mesma coisa, porém o time do angular recomenda que seja feita da forma que podemos ver abaixo, pois é mais seguro. Da forma de cima podem haver ataques XXS por acessar diretamente o elemento do DOM.
    
    _renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
  }

}
