import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  //vai escutar o evento 'mouseenter' do componente
  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'white';

  @Input() highlightColor: string = 'yellow';

  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}
