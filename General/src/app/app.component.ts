import { Component } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  lista = _.map([1,2,3], (n) => `# ${n}`);

  constructor() {
    
  }
}
