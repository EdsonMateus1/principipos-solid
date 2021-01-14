#  I.S.P — Interface Segregation Principle

>O Interface Segregation Principle (ISP) ou Princípio da Segregação de Interface trata das desvantagens da implementação de interfaces “gordas”.


>De forma mais clara, podemos dizer que o principio prega que uma interface não deve forçar uma classe a implementar coisas que ela não irá utilizar.

>Em outras palavras, podemos entender que as classes que implementam interfaces, ou são filhas de classes abstratas, devem implementar todos os métodos, e todos os métodos devem fazer sentido dentro do contexto da classe.

<br>

<hr>
<br>
<br>
<br>
<br>

Vamos à prática. Um estagiário é um colaborador de uma empresa, com direitos como qualquer funcionário CLT. Entretanto, os estagiários não possuem todos os “direitos”, como por exemplo, o 13º salário.

<br>

<pre class="ix iy iz ja jb jc jd je"><span id="2cc1" class="gn jf jg fr jh b dj ji jj s jk" data-selectable-paragraph="">&lt;?php</span><span id="1ecc" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">interface Funcionario<br>{<br>    public function getCargo();<br>    public function calculaSalario();<br>    public function calcula13o();<br>}</span><span id="4de1" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">class Gerente implements Funcionario<br>{<br>    public function getCargo()<br>    {<br>        return "Gerente";<br>    }</span><span id="85a5" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">    public function calculaSalario()<br>    {<br>        //logica para calculo salário<br>    }</span><span id="e72c" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">    public function calcula13o()<br>    {<br>        //logica para calculo do 13<br>    }<br>}</span><span id="05cc" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">class Programador implements Funcionario<br>{<br>    public function getCargo()<br>    {<br>        return "Programador";<br>    }</span><span id="85f0" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">    public function calculaSalario()<br>    {<br>        //logica para calculo salário<br>    }</span><span id="f081" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">    public function calcula13o()<br>    {<br>        //logica para calculo do 13<br>    }<br>}</span><span id="8b56" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">class Estagiario implements Funcionario<br>{<br>    public function getCargo()<br>    {<br>        return "Estagiário";<br>    }</span><span id="3954" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">    public function calculaSalario()<br>    {<br>        //logica para calculo salário<br>    }</span><span id="65da" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">    public function calcula13o()<br>    {<br>        throw new Exception("Estagiário não pode receber 13o");<br>    }<br>}</span></pre>


Neste exemplo, temos uma violação do ISP, pois um funcionário contratado pela CLT recebe 13º salário, já o estagiário não. Então, o código deveria prever isso de forma que a classe não precise implementar um método não utilizado, apenas para cumprir o contrato da interface.



<pre class="ix iy iz ja jb jc jd je"><span id="777b" class="gn jf jg fr jh b dj ji jj s jk" data-selectable-paragraph="">&lt;?php</span><span id="1766" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">interface Funcionario<br>{<br>    public function getCargo();<br>    public function calculaSalario();<br>}</span><span id="0e36" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">interface FuncionarioCeletista extends Funcionario<br>{<br>    public function calcula13o();<br>}</span><span id="f530" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">interface FuncionarioEstagiario extends Funcionario<br>{<br>    public function setInstituicaoEnsino();<br>}</span><span id="19fb" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">class Gerente implements FuncionarioCeletista<br>{<br>    public function getCargo()<br>    {<br>        return "Gerente";<br>    }</span><span id="f6ae" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">    public function calculaSalario()<br>    {<br>        //logica para calculo salário<br>    }</span><span id="0b57" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">    public function calcula13o()<br>    {<br>        //logica para calculo do 13<br>    }<br>}</span><span id="1fe7" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">class Programador implements FuncionarioCeletista<br>{<br>    public function getCargo()<br>    {<br>        return "Programador";<br>    }</span><span id="0f0a" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">    public function calculaSalario()<br>    {<br>        //logica para calculo salário<br>    }</span><span id="6af6" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">    public function calcula13o()<br>    {<br>        //logica para calculo do 13<br>    }<br>}</span><span id="eb9b" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">class Estagiario implements FuncionarioEstagiario<br>{<br>    public function getCargo()<br>    {<br>        return "Estagiário";<br>    }</span><span id="f667" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">    public function calculaSalario()<br>    {<br>        //logica para calculo salário (bolsa)<br>    }</span><span id="ee4c" class="gn jf jg fr jh b dj jl jm jn jo jp jj s jk" data-selectable-paragraph="">    public function setInstituicaoEnsino()<br>    {<br>        //logica para definir instituição de ensino do estagiário<br>    }<br>}</span></pre>



Ao modificarmos as interfaces, agora temos os contratos corretos para cada situação, estagiário e celetista. A aplicação, quando receber uma instância de Funcionario saberá quais métodos poderá executar. Para a situação do 13º salário, precisará necessariamente de uma instância de FuncionarioCeletista , uma vez que somente este possui esta função, e assim não precisando se preocupar em fazer validações extras.

<br>
<br>

<a href="https://medium.com/@felippeduarte/os-princ%C3%ADpios-solid-isp-f98fba444ad9">Artigo original</a>