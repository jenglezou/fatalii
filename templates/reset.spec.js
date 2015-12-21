var Dictionary = require('dictionaryjs');
var dictData = new Dictionary();

try {
    var TestData = require("../../data/TestData/" + browser.params.testEnv + ".vanillaTestName.data.js");
    var testData = new TestData();
    testData.load(dictData);
} catch(err) {
    console.log(err)

}// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
describe('Post-test reset for vanillaTestName', function () {

    it("Reset PLACEHOLDERs for vanillaTestName test script", function () {
        var replace = require("replace");

        var sKey = "";
        var sReplacement = "";

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
                        paths: ["./data/TestData/" + browser.params.testEnv + ".vanillaTestName.data.js"],
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
