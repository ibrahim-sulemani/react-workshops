/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
 */

function toCamelCase(str){
    if (str.length == 0) return "";
    
    let words = str.split(/[\s-_]+/);
  
    let strFinal = words[0];
    
    for(let index = 1; index < words.length; index++) {
        strFinal += words[index][0].toUpperCase() + words[index].slice(1);
    }
    
    return strFinal;
  }
  