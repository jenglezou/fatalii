var key = require('keyword'); // keyword functionality
try { key(require('./googleuk.private.keywords')); } catch(err) { console.log(err) }
try { key(require('./Just.private.keywords')); } catch(err) { }

var GoogleUKTestKeywords = {
    "GoogleUK.Start":[
		"Just.GetValueFromParams", ["$1","url"],"=> $url",
        "GoogleUKPrivate.Start", ["$url"]
    ],

    "GoogleUK.VerifyURL":[
		"Just.GetValueFromParams", ["$1","url"],"=> $url",
        "GoogleUKPrivate.VerifyURL", ["$url"]
    ],

    "GoogleUK.EnterText":[
		"Just.GetValueFromParams", ["$1","text"],"=> $text",
        "GoogleUKPrivate.EnterText", ["$text"]
    ],

    "GoogleUK.Search":[
        "GoogleUKPrivate.Search"
    ],

    "GoogleUK.End":[
        "GoogleUKPrivate.End"
    ],
};

module.exports = GoogleUKTestKeywords;
