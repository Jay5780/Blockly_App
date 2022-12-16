Blockly.Blocks['light_switch'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldLabelSerializable("Turn"), "NAME")
          .appendField(new Blockly.FieldDropdown([["red","red"], ["yellow","yellow"], ["green","green"]]), "color")
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['light_switch'] = function(block) {
    var dropdown_color = block.getFieldValue('color');
    var code = '\n colorChange("'+ dropdown_color +'")';
    return code;
  };