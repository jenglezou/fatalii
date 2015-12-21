var replace = require("replace");

var Dictionary = require('dictionaryjs');
var dictData = new Dictionary();

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
describe('Pre-test setup for vanillaTestName', function () {
    it("Reset PLACEHOLDERs for vanillaTestName test script", function () {
        var sKey = "";
        var sReplacement = "";

        try {
            var TestData = require("../../tests/TestData/" + browser.params.testEnv + ".vanillaTestName.data.js");
            var testData = new TestData();
            testData.load(dictData);
        } catch(err) {
            console.log(err)
        }

        dictData.forEach(function(dicKey, dicValue) {
            switch(dicKey.substr(1, 1).toUpperCase()){
                case "{":
                    //{PARAMETER)) --> replacement
                    sKey = "'#" + dicKey.substr(2, dicKey.length-4) + "#'" ;
                    sReplacement = sKey + ", '{" + dicValue + "}');";
                    console.log ("Reset Placeholder " + sKey + " to " + sReplacement);

                    replace({
                        regex: sKey + ', .*',
                        replacement: sReplacement,
                        paths: ["./tests/TestData/" + browser.params.testEnv + ".vanillaTestName.data.js"],
                        recursive: false,
                        silent: true
                    });

                    break;
                default:
                    break;
            }
        });
    }, 600000);

    it("Set PLACEHOLDERs for vanillaTestName test script", function () {
        var sReplacement = "";

        var iMinValue = 0;
        var iMaxValue = 0;
        var iInterval = 0;

        var iStartValue = 0;
        var iIncrement = 0;
        var sResetOrigLine = "";
        var sResetNewLine = "";

        try {
            delete require.cache[require.resolve("../../tests/TestData/" + browser.params.testEnv + ".vanillaTestName.data.js")];
            var TestData = require("../../tests/TestData/" + browser.params.testEnv + ".vanillaTestName.data.js");
            var testData = new TestData();
            testData.load(dictData);
        } catch(err) {
            console.log(err)
        }

        dictData.forEach(function(dicKey, dicValue) {
            switch(dicValue.substr(1,4).toUpperCase()){
                case "RAND":
                    iMinValue = Number((dicValue.substr(dicValue.indexOf("(")+1, dicValue.indexOf(")") - dicValue.indexOf("(")-1).split(",")[0]).trim());
                    iMaxValue = Number((dicValue.substr(dicValue.indexOf("(")+1, dicValue.indexOf(")") - dicValue.indexOf("(")-1).split(",")[1]).trim());
                    iInterval = Number((dicValue.substr(dicValue.indexOf("(")+1, dicValue.indexOf(")") - dicValue.indexOf("(")-1).split(",")[2]).trim());
                    sReplacement = Math.floor((Math.random()*(iMaxValue - iMinValue +1) + iMinValue)/iInterval)*iInterval;
                    console.log ("Placeholder " + dicKey + " = " + dicValue + " (" + dicValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ") set to " + sReplacement);

                    replace({
                        regex: dicValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                        replacement: sReplacement,
                        paths: ["./tests/TestData/" + browser.params.testEnv + ".vanillaTestName.data.js"],
                        recursive: false,
                        silent: true
                    });

                    break;
                case "SEQU":
                case 'INCR':
                	//{SEQUENCE()) --> replacement
                    iStartValue = Number((dicValue.substr(dicValue.indexOf("(")+1, dicValue.indexOf(")") - dicValue.indexOf("(")-1).split(",")[0]).trim());
                    iIncrement = Number((dicValue.substr(dicValue.indexOf("(")+1, dicValue.indexOf(")") - dicValue.indexOf("(")-1).split(",")[1]).trim());
                    sReplacement = iStartValue+iIncrement;
                    console.log ("Placeholder " + dicKey + " = " + dicValue + " (" + dicValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ") set to " + sReplacement);

                    replace({
                        regex: dicValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                        replacement: sReplacement,
                        paths: ["./tests/TestData/" + browser.params.testEnv + ".vanillaTestName.data.js"],
                        recursive: false,
                        silent: true
                    });

                    //------ now increment the reset version ----
                    sResetOrigLine = "'#{" + dicKey.replace(/#/g, '') + "}#', '" + dicValue.substr(1, dicValue.length-2) + "'";
                    sResetNewLine = sResetOrigLine.replace(iStartValue, sReplacement);
                    console.log ("Placeholder orig line " + sResetOrigLine + " set to " + sResetNewLine);

                    replace({
                        regex: sResetOrigLine.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                        replacement: sResetNewLine,
                        paths: ["./tests/TestData/" + browser.params.testEnv + ".vanillaTestName.data.js"],
                        recursive: false,
                        silent: true
                    });
                    break;
                default:
                    break;
            }
        });
    }, 600000);

}, 600000);