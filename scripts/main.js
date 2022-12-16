/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 * 
 */
// made by Jay


(function() {

  let delayInSeconds = 0;                                        //watBlock input seconds to delay
 
    const  mainFunctionCall = () => {                                                                     // main function to run the final code
        let code = Blockly.JavaScript.workspaceToCode(Blockly.common.getMainWorkspace());    
        
        //taking initial value as -1 
        let value  = -1;
        
        eval(code);

        loop();
       
      //setting the value t0 -1 again
       value = -1;
    }
    
    
    //code to access the run button and add a click on it
    const button = document.querySelector("button");
    button.addEventListener('click', mainFunctionCall);
    
    
    //function to change the color of the box based on input : called in printBlock 
    const colorChange = (colorName) =>{
      let light = document.getElementById("light");
      light.style.backgroundColor = colorName;
    }
    
    //function to check even or odd number : called in if else block
    const checkEvenOdd = (number) =>{
        return  number %2 === 0 ? "even":"false"; 
    }

    //function to access html and display the number passed : printNumber block
    const printNumber = (number) =>{
      const numberElement = document.getElementById("number");
      numberElement.innerHTML = number;
      console.log(number);
      
    }

     // function to pause the program using asyn/await and promise for a given number of seconds
     const sleep = async (seconds) =>{
          return new Promise((resolve)=>setTimeout(resolve,seconds*1000));
    }
    
    // to set pause time in seconds : waitBlock
    const setDelayTime = (seconds) =>{
      delayInSeconds = seconds;
    }

    const toolbox = {
      'kind': 'flyoutToolbox',
      'contents': [
         {
            "kind":"block",
            "type":"repeatblock"
         },
        
       
        {
          "kind":"block",
          "type":"light_switch"
        },
        {
            "kind":"block",
            "type":"randomblock"
        },
        {
          "kind":"block",
          "type":"ifelseblock"
        },
        {
          "kind":"block",
          "type":"printblock"
        },
        {
          "kind":"block",
          "type":"waitblock"
        }
      ]
    }
  
    Blockly.inject('blocklyDiv', {
      toolbox: toolbox,
      scrollbars: false
    });
  
  
  })();
  