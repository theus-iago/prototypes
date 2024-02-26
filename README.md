# prototypes

Precisa de Janelas interativas e personalizadas para a sua página?

Basta seguir os seguintes passos:

• Crie um arquivo de js externo.

• Na hora de chamar o seu arquivo js para a sua página html adicione o "type=module" para poder usar importações  no seu arquivo js:

<script src="caminho/arquivo.js" type="module"></script>

• Na primeira linha do seu código js, Faça a importação do cdn:

import Janela from "https://cdn.jsdelivr.net/gh/theus-iago/prototypes/window.js";

• Para mostrar a Janela use o método exibir:

Janela.exibir();

• Para personalizar a sua janela primeiro você terá que criar um objeto literal com as seguintes propriedas:

const config01 = {
 header_content = "Teste de Janela",
 main_content = "testando protótipo de janela",
 color = "#1e1e1e",
 type = "confirm"
}

• Depois use o método config passando o seu objeto literal como argumento e logo em seguida chame novamente o método exibir para ver o resultado:

Janela.config(config01);
Janela.exibir();
