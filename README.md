  > EXTENSIONS:
	> Angular 2 TypeScript Snippets
	> HTML Snippets
	> Auto Import
	> vscode-icons
		> Para colocar icones no VCCode, após baixar a extensão vscode-icons: Go to File > Preferences > File Icon Theme > VSCode Icons.

	
  > Para compilar o projeto e ver se tem alguma coisa que precisa ser acertada: 
	> ng lint

 > Instalado o Node.Js para poder utilizar o comando "npm"
 
 > Instalar o typescript: 
	> npm install -g typescript
	
 > Instalar o Typings (para que o compilador do typescript entenda o código):
	> npm install typings --global
	
 > Instalar o cliente de linha de comando do Angular (permite executar comandos do angular na linha de comando, por exemplo "ng new PROJECT_NAME" para criar um novo projeto ou "ng serve" para rodar a aplicação):
  > npm install -g angular-cli
		
 > Podemos ver no arquivo "package.json" quais são todas as dependencias necessárias para rodar a aplicação. Para instalar todas as dependencias é só abrir uma linha de comando dentro do diretório do projeto e executar o comando:
  > npm install
		
 > Para compilar e executar o projeto no browser é só executar o comando:
	> npm start
		
 > No VSCode, adicionar a extensão Angular 2 TypeScript Snippets. Pois assim a nossa produtividade pode aumentar bastante. Existem atalhos para gerar componentes, como o "ng2-component" + TAB, que gera a estrutura basica de um componente dentro de um arquivo .ts.
 
 
 
  > Para atualizar o Angular-cli, primeiro desatualizar o angular-cli anterior, executar o cmd como administrador.
   > npm uninstall -g angular-cli
   > npm cache clean
   > npm install -g angular-cli@webpack
  
  > APÓS INSTALAR O ANGULAR-CLI É POSSÍVEL CRIAR COMPONENTES PELOS COMANDOS SEGUINTES:
	> ng g c <nome componente> (g: generate, c: component)
	> quando cria um componente dessa forma já é criada automaticamente o import no app.module
  
  > Para deixar os arquivos de css com padrão scss: 
	> ng set defaults.styleExt scss
    
  
  > Para atualizar o build na pasta "dist" (de distribuição) é só rodar o comando: 
   > ng build
  > Para criar o build final é possível rodar o comando: 
   > ng build --prod
  > Nesse build ele alterará o nome das variáveis e métodos para economizar espaço.  
  > Para poder rodar os fontes compilados na pasta "dist" é preciso instalar o http-server:
   > npm install http-server -g
  > Necessário rodar os fontes da pasta dist é só rodar o comando: "http-server"
  
  > Para instalar o bootstrap: npm install --save bootstrap@next
  > Ver doc.: https://github.com/angular/angular-cli
  
  > Para instalar o angular2-materilize:
   > npm install angular2-materialize -save
  > Ver doc.: https://www.npmjs.com/package/angular2-materialize
   
  > Para instalar o jQuery e deixa-lo também no package.json:
   > npm install jquery@^2.2.4 --save
   
  > PARA INSTALAR O LODASH:
	> npm i --save lodash
  > Para poder fazer o import do lodash: "import * as _ from 'lodash';" é preciso instalar de mandeira global:
	> npm i --save @types/lodash
	
  > Para criar uma diretiva que será usada por toda a aplicação:
	> ng g d <caminho/nome diretiva>
	> exemplo: ng g d diretivas/fundo-amarelo
	
  > Para criar um serviço com Angular-CLI:
	> ng g s <caminho/nome serviço>
	> exemplo: ng g s shared/log

  @Injectable() torna essa classe injetável, ou seja, ela pode ser tratada como um provider (irá prover os dados). E pode ser instanciada no app.module como um provider.
  
  > emitirCursoCriado = new EventEmitter<string>();
  com esse objeto podemos emitir eventos para que a nossa aplicação escute esses eventos e a gente possa se inscrever nesse evento para que sempre que houver mudança ou sempre que um novo evento for emitido a gente pode notificar o código para que ele escute e faça alguma ciosa com aquela informação estamos recebendo só o nome do curso, então é uma string, estemos tipando como uma string.  
	> this.emitirCursoCriado.emit(curso);
	emite o evento que será ouvido 
    
  > static criouNovoCurso = new EventEmitter<string>();
  quando declaramos um atributo como 'static' significa que não precisamos de uma instancia da classe para acessa-lo quando tivermos mais de uma instancia dessa classe, essa variável será compartilhada entre as instancias e permanecerá com o mesmo valor em todas as instancias.
	> CursosService.criouNovoCurso.emit(curso);
	emite o evento que será ouvido     
  
  > PIPES 
  > Para ver a documentação de Pipes do Angular:
	> Entrar no site: angular.io
	> Docs
	> Search docs... > Pipes > Pipes - TS
	> Pesquisar no texto por API Reference > Clicar no link
	> Filter > Pipe

  > Para criar um Pipe com Angular-CLI:
	> ng g p <nome pipe>
	> exemplo: ng g p camel-case
	> Assim podemos criar um Pipe e usá-lo igual qualquer outro do angular
	
  > FORMATO BRASILEIRO DE DATAS
	  > É possível configurar o formato brasileiro para datas e números (numeros com virgula ao invez de ponto) ao usar Pipes
	  > para isso é preciso adicionar esse código na tag Providers do app.module
		{
		  provide: LOCALE_ID,
		  useValue: 'pr-BR'
		}
	  > Não esquecer de importar o 'LOCALE_ID' do '@angular/core'
	
	
	


  
  
  
  
  
  
  
  
  