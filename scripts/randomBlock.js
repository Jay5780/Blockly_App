
Blockly.Blocks['randomblock'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("random 0-10");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.JavaScript['randomblock'] = function(block) {
    var code = '\n value =  (Math.floor((Math.random()*10)+1)) ';
    return code;
  };

 