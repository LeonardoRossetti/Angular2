import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
    // {
    //   //ao fazer isso, o formato brasileiro de datas e números (numeros com virgula ao invez de ponto) será adotado ao usar Pipes
    //   provide: LOCALE_ID,
    //   useValue: 'pr-BR'
    // }
    
    //esse código abaixo faz a mesma coisa. Porém, caso for preciso chamar através de um serviço, existe essa forma abaixo (neste caso eu criei o serviço 'setings'):
    providers: [
    SettingsService, {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService) => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
