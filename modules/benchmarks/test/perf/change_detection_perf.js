"use strict";
var util = require('../../../../tools/perf/util.js');

describe('ng2 change detection benchmark', function () {

  var URL = 'benchmarks/web/change_detection/change_detection_benchmark.html';

  afterEach(util.verifyNoErrors);

  it('should log ng stats', function() {
    browser.get(URL);
    util.runClickBenchmark({
      buttons: ['#ng2DetectChanges'],
      name: browser.params.lang+'.ng2.changeDetection'
    });
  });

  it('should log baseline stats', function() {
    browser.get(URL);
    util.runClickBenchmark({
      buttons: ['#baselineDetectChanges'],
      name: browser.params.lang+'.baseline.changeDetection'
    });
  });

});
