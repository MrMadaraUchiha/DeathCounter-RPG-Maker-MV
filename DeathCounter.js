//=============================================================================
// Death Counter Plugin
// by: MrMadara - https://github.com/MrMadaraUchiha/DeathCounter-RPG-Maker-MV
//=============================================================================

(function() {
  // Cria um objeto para o contador de mortes
  var DeathCounter = {
    count: 0,

    increment: function() {
      this.count++;
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
  };
})();
