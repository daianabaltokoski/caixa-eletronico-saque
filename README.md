Terceiro período - Desenvolvimento de Aplicações Front-End com Frameworks e Componentes

# Atividade 02 - JavaScript Pleno

Crie uma página HTML com formulário para simular um caixa eletrônico. 
A aplicação deverá perguntar ao usuário o valor do saque e depois informar quantas notas de cada valor serão fornecidas, apresentando o menor número de notas possível. 
Não é preciso mostrar as imagens das notas. 
As notas disponíveis serão as de 2, 5, 10, 20, 50 e 100 reais, podendo opcionalmente incluir a nota de 1 real para facilitar a lógica de contagem das notas (em valores com final 1 e 3). 
O valor mínimo para saque é de 10 reais e o máximo de 600 reais. 
A aplicação não deve se preocupar com a quantidade de notas existentes na máquina.

Exemplo 1: Para sacar a quantia de 256 reais, a aplicação fornece duas notas de 100, uma nota de 50 e três notas de 2;

Exemplo 2: Para sacar a quantia de 399 reais, a aplicação fornece três notas de 100, uma nota de 50, duas notas de 20, uma nota de 5 e duas notas de 2.

O código JavaScript precisa ser escrito em um arquivo com extensão .js e ser referenciado no arquivo com extensão .html.

# Observações:

- Caso o usuário tente digitar letras não será possível pois o input é tipo number;
- Caso tente incluir qualquer caractere que não seja número (como vírgula ou ponto) receberá um aviso (alert) informando que o número deve ser inteiro;
- Caso o campo esteja vazio receberá o mesmo aviso pois verefico se há um número válido (através de um isNaN);