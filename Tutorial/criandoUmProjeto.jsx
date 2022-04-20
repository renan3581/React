//Damos o comando 'npm install -g create-react-app', para baixar o criado de projetos react.
//Depois o comando 'npm create-react-app nome_do_projeto', sera criado uma pasta com todos os arquivos do react já instalados.
//Depois 'cd nome_do_projeto'.
//Então npm start, se tudo estiver correto irá abrir uma pagina com o logo do react.


/*Arquivos JSX permitem atribuir elementos html a variaveis/funções.
    Exemplo:
    const elemento = <h1>Hello World</h1>;

    Na hora de chamar essa variavel ou função devemos colocar-la entre {}.
*/

//Para ver como isso funciona crie um projeto e olha na pasta 'src' o arquivo 'app.js'.

//Para usar o css basta importar o arquivo css no jsx.


//O navegador não interpreta o JSX, ele precisa ser convertido para o JS para isso usamos transpiladores como o babel.


/*A redenrização do react é feita através do react-dom e são feitas através do nó raiz.
 - A renderização é feita em tempo real, ou seja, ao alterar o JSX/JS ele é automaticamente renderizado no navegador.

 //Elementos e componentes
    - Elemento são as menores partes do react, como por exemplo: h1, p, div, etc.
    - Componentes são junções de elementos.
    - Componentes são funções que retornam elementos para chamar-los usamos <NomeDoComponente />.
    - Eles podem estar dentro do seu arquivo js principal ou em outro arquivo js.
    - O componente principal da nossa aplicação é geralmente chamada de app.
    - Uma boa pratica é criar componentes que não sejam muito grandes e que não sejam muito complexos.
    - Componentes sempre começam com letra maiuscula.
    - É possivel importar componentes dentro de outros componentes.
*/



/*Webpack - Empacotador de modulos para aplicações JS.
    - Ele gera um pacote que sera utilizado no HTML.
    - Ele gera um arquivo que contem todos os modulos JS que foram importados.
    - Webpack esta inserido no react-scripts tambem, então caso você use ele, não é necessario instalar o webpack.
    - O webpack suporta não apenas o JS mas tambem CSS, imagens, html, etc.

Instalação(Caso não utilize o react-scripts):
    - Criamos um arquivo com o nome webpack.config.js.
    - Dentro dele colocamos:

        const path = require('path');
        module.exports = {
            entry: './src/index.js',
            output: {
                path: path.resolve(__dirname, 'dist'), //Dist é o nome do diretorio que será criado, pode ser qualquer nome.
                filename: 'bundle.js' //É o nome do arquivo que será gerado.
            },
        };

    - Depois instalamos o webpack usando o comando 'npm i -D  webpack webpack-cli'.
    - Adicionamos o comando "build":"webpack --mode production" no package.json.
    - Depois intalamos o babel "npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react".
        - Babel é um transpilador de codigo JS para JS de versões antigas.

    - Depois de instalar o babel modificamos o arquivo 'webpack.config.js'.
        const path = require('path');
        module.exports = {
                entry: './src/index.js',
                output: {
                    path: path.resolve(__dirname, 'dist'), //Dist é o nome do diretorio que será criado, pode ser qualquer nome.
                    filename: 'bundle.js' //É o nome do arquivo que será gerado.
                },
                module: {
                    rules: [
                        {
                            test: /\.{js|jsx}$/,
                            exclude: /node_modules/,
                            use: {
                                loader: 'babel-loader',
                            }
                        }
                    ]
                }
            };

    - Depois criamos um arquivo .babelrc com o seguinte conteudo:
        {
            "presets": [
                "@babel/preset-env",
                "@babel/preset-react"
            ]
        }
*/