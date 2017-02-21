import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  //vai escutar o evento 'mouseenter' do componente
  @HostListener('mouseenter') onMouseOver(){
    //this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    //this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;
  
  /*
  private backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor() {
    //codigo extra;
    //caso necessite de alguma tratativa antes de setar a cor no componente
    return this.backgroundColor;
  }*/

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    
  }

}
