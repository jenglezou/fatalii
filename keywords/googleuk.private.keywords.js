var webdriver = require('selenium-webdriver')
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();


var GoogleUKPrivateKeywords = {
	
    "GoogleUKPrivate.Start": function(next, sUrl) {
		driver.get(sUrl).then(function(){
			next();
		});
    },
  
	"GoogleUKPrivate.VerifyURL": function(next, sURL) {
		driver.getCurrentUrl().then(function(value) {
			console.log("value:" + value)
			expect(value).toContain(sURL);
			next();
		});    
	},

	"GoogleUKPrivate.EnterText": function(next, sText) {
		driver.findElement(By.id('lst-ib')).then(function(textbox){
			textbox.clear();
			textbox.sendKeys(sText + webdriver.Key.ENTER);
			//textbox.sendKeys(webdriver.Key.ENTER);
			next();
		});
    },

    "GoogleUKPrivate.Search": function(next) {
        driver.findElement(By.name('btnK')).then(function(btnSubmit){
			btnSubmit.click;
			next();
		});
    },
	
	"GoogleUKPrivate.End": function(next) {
        setTimeout(function(){			
			driver.quit().then(function() {
				next();
			});
		}, 3000)
    },
};

module.exports = GoogleUKPrivateKeywords;