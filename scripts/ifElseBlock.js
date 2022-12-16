Blockly.Blocks['ifelseblock'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("IF Even Number");
      this.appendStatementInput("true")
          .setCheck(null)
          .appendField("Then Do");
      this.appendStatementInput("false")
          .setCheck(null)
          .appendField("Else Do");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(105);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };



  Blockly.JavaScript['ifelseblock'] = function(block) {
    var statements_true = Blockly.JavaScript.statementToCode(block, 'true');
    var statements_false = Blockly.JavaScript.statementToCode(block, 'false');
    var code = '\n if(value !== -1) { \n  let result = checkEvenOdd(value) \n if(result ==="even"){\n'+statements_true+'}else{\n'+statements_false+'\n}\n}';
            
    return code;
  };