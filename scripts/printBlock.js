Blockly.Blocks['printblock'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Print Number");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.JavaScript['printblock'] = function(block) {
    var code = '\n printNumber(value) ';
    return code;
  };