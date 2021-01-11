i# SRP — Princípio da responsabilidade única
 
>Na programação, o Princípio da responsabilidade única declara que cada módulo ou classe deve ter responsabilidade sobre uma única parte da funcionalidade fornecida pelo software.
Você pode ter ouvido a citação: “ Faça uma coisa e faça bem “.
Isso se refere ao princípio da responsabilidade única.
No artigo citado acima, Robert C. Martin define uma responsabilidade como um “motivo para mudar” e conclui que uma classe ou módulo deve ter um e apenas um motivo para ser alterado.

><img src="https://miro.medium.com/max/770/1*lti3X2lRNCKOEjNz45h8Lw.png"></img>


<br>


Uncle Bob diz eu seu livro clean code, que se uma classe tem mais de um motivo para ser alterada ela já está ferindo o princípio da responsabilidade única. As classes devem ter apenas uma responsabilidade, realizar somente ela e realizá-la bem. Observe o diagrama abaixo:

<img src="https://www.devmedia.com.br/imagens/articles/233575/srpexe1.png" ></img>


O que você vê de errado na classe acima? Concorda que ela esta assumindo responsabilidades que não são suas? Concorda que ela esta fazendo coisas demais? Ela além de suas propriedades, obtem por id, obtem por nome e ainda salva; diriamos que é uma geniuna classe “canivete suiço”. E geralmente, um modelo de um sistema não tem somente uma classe, mais várias e se  todas estivessem assim? Teriamos vários problemas, para dar manutenção e evoluir. Agore veja o exemplo abaixo, refatorado e contemplando o princípio da responsabilidade única.

<img src="https://www.devmedia.com.br/imagens/articles/233575/srpexe2.png" ></img>

Note que temos um cenário completamente diferente, desacolplado e com cada “peça” realizando somente o seu papel. Temos uma classe Entidade, imaginando que estejamos seguindo as premissas do DDD( Domain Drive Design ), uma classe produto que herda de entidade e possui propriedades comuns a todos os produtos, como por exemplo nome e fabricante e classes que herdam de produto e tem suas particularidades em cada uma delas; note que estas classes possuem apenas propriedades e poderiam também, ter métodos e eventos, mais que tratassem apenas do negócio e não de persistência como vimos no exemplo anterior. Na hora de persistir, temos classes apropriadas que vão pegar este objeto de negócio e salvar no banco de dados, ou no repositório destinado a armazená-los. Lembrando que estamos utilizando um padrão de arquitetura chamado repository pattern.

## <a href="https://medium.com/xp-inc/os-princ%C3%ADpios-do-solid-srp-princ%C3%ADpio-da-responsabilidade-%C3%BAnica-7897c55694fe">Artigo </a>

