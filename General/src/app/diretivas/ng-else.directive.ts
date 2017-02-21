import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

//TemplateRef -> faz referencia ao template
//ViewContainerRef -> faz referencia ao elemento que iremos renderizar

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

//usa o 'set' para executar esse input toda vez que ele for setado/modificado
@Input() set ngElse(condition: boolean) {
  if (!condition){
    //irá mostrar o elemento
    this._viewContainerRef.createEmbeddedView(this._templateRef);
  } else {
    //irá destruir o elemento
    this._viewContainerRef.clear();
  }
}

  constructor(private _templateRef: TemplateRef<any>, private _viewContainerRef: ViewContainerRef) { 

  }
}
