fs = require('fs');

var Automation = (function () {

    function Automation() {

    }

    Automation.prototype.hhmmssm = function () {
        var d = new Date();
        var t = ('0' + d.getHours()).slice(-2) + ('0' + d.getMinutes()).slice(-2) + ('0' + d.getSeconds()).slice(-2) +  ('00' + d.getMilliseconds()).slice(-3);

        return t;
    };

    Automation.prototype.using = function (name, values, func){
        for (var i = 0, count = values.length; i < count; i++) {
            if (Object.prototype.toString.call(values[i]) !== '[object Array]') {
                values[i] = [values[i]];
            }
            func.apply(this, values[i]);
            //jasmine.currentEnv_.currentSpec.description += ' (with "' + name + '" using ' + values[i].join(', ') + ')';
        }
    };

    Automation.prototype.resolveParams = function (dict, sText) {
        var retVal = sText;
        if (dict.has(sText)){   // param is #variable# and "entirely" in the dictionary
            retVal = dict.get(sText)
        } else {
            if (sText.lastIndexOf("#") > sText.indexOf("#")){ // param contains at least two #s so try replacing all #variable# in the dictionary
                dict.forEach(function(dicKey, dicValue) {
                    retVal = retVal.replace(dicKey, dicValue);
                });
            }
        }

        return retVal;
    };

    return Automation;

})();

module.exports = Automation;
