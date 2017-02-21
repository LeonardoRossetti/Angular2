import { Pipe, PipeTransform } from '@angular/core';

import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'filtroArrayImpuro',
  //indica que esse pipe é impuro
  pure: false
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe {

  
}
