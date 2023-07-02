# RPG Maker MV - Plugin DeathCounter.

Este é um plugin para RPG Maker MV que permite atribuir um contador de mortes ao jogador, rastreando o número de eliminações feitas durante o jogo.

## Recursos

- Contador de mortes para rastrear o número de eliminações do jogador.
- Modos de dificuldade para ajustar o número máximo de mortes permitidas e a penalidade por morte.
- Recompensas por atingir certos marcos de mortes.
- Comandos de plugin para incrementar o contador de mortes e alterar o modo de dificuldade durante o jogo.

## Instalação

1. Faça o download do arquivo `deathcounter.js`.
2. Coloque o arquivo `deathcounter.js` na pasta `js/plugins` do seu projeto RPG Maker MV.
3. No RPG Maker MV, abra o Gerenciador de Plugins e ative o "Death Counter Plugin".

## Uso

- Use o comando de plugin `IncrementDeathCounter` para incrementar o contador de mortes.
- Use o comando de plugin `SetDeathCounterMode` para alterar o modo de dificuldade.
- Personalize as configurações de modos de dificuldade, recompensas e marcos de mortes no código do plugin.

## Exemplo de Uso

Suponha que você queira incrementar o contador de mortes toda vez que um inimigo for derrotado. Você pode usar um evento comum para isso:

1. Crie um evento comum no RPG Maker MV.
2. Adicione um comando de script no evento comum.
3. No comando de script, insira o seguinte código: `DeathCounter.increment();`
4. Chame esse evento comum sempre que um inimigo for derrotado.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar solicitações de pull (pull requests) para melhorar este plugin.

## Licença

Este plugin está licenciado sob a [MIT License](LICENSE.md).

