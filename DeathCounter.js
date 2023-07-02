//=============================================================================
// Death Counter Plugin versão 1.0 - 15/06/2023
// Death Counter Plugin versão 2.0 - 02/07/2023
//=============================================================================

(function() {
  // Configurações de Modo de Dificuldade
  var DifficultySettings = {
    easy: {
      maxDeaths: 10, // Número máximo de mortes permitidas no modo fácil
      penalty: 0 // Penalidade por morte no modo fácil (0 significa nenhuma penalidade)
    },
    normal: {
      maxDeaths: 5, // Número máximo de mortes permitidas no modo normal
      penalty: 1 // Penalidade por morte no modo normal (1 significa penalidade padrão)
    },
    hard: {
      maxDeaths: 3, // Número máximo de mortes permitidas no modo difícil
      penalty: 2 // Penalidade por morte no modo difícil (2 significa penalidade dupla)
    }
  };

  // Configurações de Recompensa por Marco de Mortes
  var MilestoneRewards = {
    10: { item: 1, amount: 3 }, // Exemplo de recompensa no marco de 10 mortes
    25: { skill: 2 } // Exemplo de recompensa no marco de 25 mortes
    // Adicione mais marcos de mortes e recompensas conforme necessário
  };

  // Cria um objeto para o contador de mortes
  var DeathCounter = {
    count: 0,
    mode: "normal", // Modo de dificuldade padrão
    difficulty: DifficultySettings["normal"],

    setMode: function(mode) {
      if (DifficultySettings.hasOwnProperty(mode)) {
        this.mode = mode;
        this.difficulty = DifficultySettings[mode];
      }
    },

    increment: function() {
      this.count++;
      if (this.count > this.difficulty.maxDeaths) {
        // Aplica a penalidade por morte
        // (por exemplo, diminuir a saúde do jogador, remover habilidades, etc.)
        // Aqui, vamos apenas imprimir uma mensagem de penalidade no console.
        console.log("Você sofreu uma penalidade por morte!");
      }
      this.checkMilestoneRewards();
    },

    checkMilestoneRewards: function() {
      var rewards = MilestoneRewards;
      for (var milestone in rewards) {
        if (this.count >= milestone) {
          var reward = rewards[milestone];
          if (reward.item) {
            $gameParty.gainItem($dataItems[reward.item], reward.amount || 1);
          } else if (reward.skill) {
            $gameActors.actor(1).learnSkill(reward.skill);
          }
        }
      }
    },

    getCount: function() {
      return this.count;
    }
  };

  // Expor o objeto DeathCounter para uso externo
  window.DeathCounter = DeathCounter;

  //=============================================================================
  // Game_Interpreter
  //=============================================================================

  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'IncrementDeathCounter') {
      DeathCounter.increment();
    }
    else if (command === 'SetDeathCounterMode') {
      var mode = args[0].toLowerCase();
      DeathCounter.setMode(mode);
    }
  };
})();
