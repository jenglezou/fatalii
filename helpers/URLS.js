var Urls = (function () {
    function Urls() {}
    Urls.prototype.load = function (dict) {
        dict.set('SYSTEST', 'https://www.google.co.uk/');
        dict.set('LIVE', 'https://www.google.co.uk/');
        dict.set('UAT', 'https://www.google.co.uk/');
        dict.set('LOCAL', 'http://www.google.co.uk/');
        dict.set('LOCALHOST', 'http://www.google.co.uk/');
    };
    return Urls;
})();
module.exports = Urls;

