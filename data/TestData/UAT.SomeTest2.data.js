var TestData = (function () {
	   function TestData() {}
	    TestData.prototype.load = function (dictData) {
		dictData.set('#USERNAME#', 'testuser1');
		dictData.set('#PASSWORD#', '3X4mpl3');
		dictData.set('#DATAITEM1#', 'data1');
		dictData.set('#DATAITEM2#', 'data2');
		dictData.set('#SESSION1.USERNAME#', 'John');
		dictData.set('#NAME#', 'value');
		dictData.set('#RANDOM1#', '{RANDOM(100, 20000, 10)}');
		dictData.set('#{RANDOM1}#', 'RANDOM(100, 20000, 10)');
		dictData.set('#RANDOM2#', '{RANDOM(10, 9999, 1)}');
		dictData.set('#{RANDOM2}#', 'RANDOM(10, 9999, 1)');
		dictData.set('#SEQUENCE1#', '{SEQUENCE(100, 2)}');
		dictData.set('#{SEQUENCE1}#', 'SEQUENCE(100, 2)');
		dictData.set('#ENVIRONMENT#', 'UAT');
		dictData.set('#VERSION#', '1');
		dictData.set('#CREATEME#', 'True');
		dictData.set('#SESSION1.USERNAME#', 'Jane');
	};
		return TestData;
})();
module.exports = TestData;
