![dfgfdgfs](https://user-images.githubusercontent.com/73972922/171724995-693220fd-32d5-40bc-9b8c-7606961bfde1.gif)


### Redux simples
**#####################**
### `Foi usado uma api e para consumir usei Fetch()`
### `Loading na pagina caso a api demore pra dar resposta`
### `Rotas usei o React-Router-Dom v6`
### `Rotas dinamicas usando o useParems(), para um único id da api`
### `Filtro de categórias para cada tipo de item da api`
### `Se o carrinho estiver vazio aparece uma mensagem "carrinho vazio"`
### `Redux com addItem para adicionar no carrinho e delItem para excluir do carrinho`
### `Redux + função para mostrar o preço total a ser pago`
### `Redux para mostrar a quantidade de item no carrinho sendo mostrada no header e pag de finalização`
### `Função para o scrollY apenas, quando for > 1 faz o menu hamburguer ser recolhido`
### `Função apos clicar em algum link do header navbar o menu hamburguer desaparece`
### `O formulário divide em varias partes de componentes`

**#####################**


**#####################**
### `Função mostra dois zero no final para preços, tive que converter com parseFlot() e parseInt(), isso só foi feito em um lugar apenas no carrinho foi onde deu problema, nós outro não precisei disso `
**#####################**


### 1° Erros que apareceu e tive que corrigir(no styled NavA era tag a, passei ela pra uma div)

**#####################**
### `Tinha posto link dentro de outro link no caso a tag (a) solução abaixo que fiz`
### `<Link to="/produtos"><NavA href='#'><SiC className='Si' />Produtos</NavA></Link>`

### `Antes estava assim no qual estava gerando erro`
### `<NavA href='#'><Link to="/produtos"><SiC className='Si' />Produtos</Link></NavA>`
**#####################**
