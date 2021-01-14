# LSP -Princípio da substituição de Liskov


Simplificando, se a classe A for um subtipo da classe B , poderemos substituir B por A sem interromper o comportamento do nosso programa.Isso pode ser formulado matematicamente como
Se F(x) é uma propriedade demonstrável sobre objetos x de tipo B .
Então F(y) deve ser verdadeiro para objetos y de tipo A , em que A é um subtipo de B .
De maneira mais geral, afirma que os objetos em um programa devem ser substituíveis por instâncias de seus subtipos sem alterar a correção desse programa.

Vamos dar uma olhada em um exemplo de como violar esse princípio

<img src="https://miro.medium.com/max/417/1*gEuGIYKOOBNraNkcYh2vsQ.png"></img>

<img src="https://miro.medium.com/max/427/1*0D8bMu8xd9humRr_5_a5nQ.png"></img>

Uma classe pessoaJuridica herdando de PessoaFisica violaria o LSP, pois uma pessoa jurídica não pode executar o Metodo Andar().

Porém se adicionarmos no conceito a classe Pessoa.cs

<img src="https://miro.medium.com/max/404/1*vgBrKOVFx8-p-CYNz0CjlQ.png"></img>

<img src="https://miro.medium.com/max/334/1*qnxZgX-b1Ml3YCYJsqIdyw.png"></img>

<img src="https://miro.medium.com/max/404/1*vgBrKOVFx8-p-CYNz0CjlQ.png"></img>

Pessoa — classe Pai, classe Base ou SuperClasse
PessoaFisica — classe Filha ou sub-classe
PessoaJuridica — classe Filha ou sub-classe
- A classe Pessoa é a classe genérica;
- As classes PessoaJuridica e PessoaFisica são especializações;
- PessoaFisica É uma pessoa;
- PessoaJuridica É uma pessoa;

<img src="https://miro.medium.com/max/465/1*FhjI8BTpfeyJbMMndu1paQ.png"></img>

Vamos lembrar os conceitos de herança: Quando uma classe herda de outra classe dissemos que temos a relação “É Um”.
Quando a classe PessoaJuridica ou PessoaFisica herda da classe Pessoa, ela passa a ser uma classe Pessoa estendida, pois contém todos os métodos e propriedades de Pessoa (nome e endereço) e mais as suas próprias funcionalidades (CPF ou CNPJ).
O método Andar() passou a ser uma especialização da classe PessoaFisica.
Tentei ser o mais simples possível para explicar, porém esse principio é um pouco mais complicado que os outros.


## <a href="https://medium.com/xp-inc/os-princ%C3%ADpios-do-solid-lsp-princ%C3%ADpio-da-substitui%C3%A7%C3%A3o-de-liskov-35bcff93cd86">link artigo original</a>
