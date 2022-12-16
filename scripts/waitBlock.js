Blockly.Blocks['waitblock'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Time to Wait (s)")
          .appendField(new Blockly.FieldNumber(0), "time");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(165);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.JavaScript['waitblock'] = function(block) {
    var number_time = block.getFieldValue('time');
    var code = '\n setDelayTime('+number_time+')';
    return code;
  };