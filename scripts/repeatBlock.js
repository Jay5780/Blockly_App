Blockly.Blocks['repeatblock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Repeat")
        .appendField(new Blockly.FieldNumber(0), "NAME")
        .appendField("Times");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['repeatblock'] = function(block) {
  var number_name = block.getFieldValue('NAME');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = "";
  code += 'var loop = async() =>{ \n let i=0;  \n while ( i<'+number_name+'){\n i++ \n' +statements_do+'\n await sleep(delayInSeconds) \n}\n}';
  return code;
};