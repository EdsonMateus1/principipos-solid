# LSP -Princípio da substituição de Liskov


Simplificando, se a classe A for um subtipo da classe B , poderemos substituir B por A sem interromper o comportamento do nosso programa.Isso pode ser formulado matematicamente como
Se F(x) é uma propriedade demonstrável sobre objetos x de tipo B .
Então F(y) deve ser verdadeiro para objetos y de tipo A , em que A é um subtipo de B .
De maneira mais geral, afirma que os objetos em um programa devem ser substituíveis por instâncias de seus subtipos sem alterar a correção desse programa.

>Vamos dar uma olhada em um exemplo de como violar esse princípio

<img src="https://miro.medium.com/max/417/1*gEuGIYKOOBNraNkcYh2vsQ.png"></img>

<img src="https://miro.medium.com/max/427/1*0D8bMu8xd9humRr_5_a5nQ.png"></img>

>Uma classe pessoaJuridica herdando de PessoaFisica violaria o LSP, pois uma pessoa jurídica não pode executar o Metodo Andar().