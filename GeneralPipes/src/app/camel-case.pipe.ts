import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let values = value.split(' ');
    let resultado = "";

    for(let val of values){
      resultado += this.capitalize(val) + ' ';
    }

    return resultado;
  }

  capitalize(value:string) {
    return value.substring(0,1).toUpperCase() + 
      value.substr(1).toLowerCase();
  }

}
