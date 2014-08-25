/* global describe, it */

(function () {
  'use strict';

  // three different style to test something. Choose what you prefer.
  describe('app.MyApp', function () {

    // expect style. My preferred
    it('should doSomething', function () {
      var myApp = new app.MyApp();
      expect(myApp.doSomething()).to.be.equal('something');
    });

    // should style
    it('should doSomething', function () {
      var myApp = new app.MyApp();
      myApp.doSomething().should.be.equal('something')
    });

    // assert style
    it('should doSomething', function () {
      var myApp = new app.MyApp();
      assert.equal(myApp.doSomething(), 'something');
    });



  });
})();
