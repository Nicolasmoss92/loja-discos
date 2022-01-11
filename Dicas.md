Segundo o padrão REST, geralmente se cria as rotas no plural, ex.: GET compras, GET compras/:id, etc.

É uma boa já começar a escrever um README, com algumas informações sobre o projeto e também instruções para informar como rodar o projeto em si, como rodar o banco de dados, etc.

Outra boa é exportar a collection do Postman/Insomnia/afins que você usa em testes para o projeto, para que os colegas possam importar e utilizar mais facilmente

Talvez também colocar o script que você está usando para fazer consultas, inserções, etc. no banco, para servir como referência

É uma boa prática definir constantes para números mágicos. Por exemplo, você pode definir constantes para os status de retorno:

```javascript
const OK = 200
const ERRO = 400
```

Assim, você não corre o risco de errar o número na hora de escrever, além de que não vai esquecer o que diabos significa aquele número no meio do código (e caso algum colega vá olhar o código, ele também sabe o que é)

Tentar escrever em inglês. Agora talvez não seja tão necessário, mas no futuro a maioria dos projetos serão escritos 100% em inglês, desde variáveis e classes até comentários. É bom já ir pegando a prática

Criar .gitignore também é uma boa prática para colocar arquivos que não devem ser commitados