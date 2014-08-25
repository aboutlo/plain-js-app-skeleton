/* global describe, it, beforeEach */

(function(){
  'use strict';

  describe('Utils',function(){

    describe('when it logs messages',function(){

      var sandbox;
      var test_log;

      beforeEach(function(){

        sandbox = sinon.sandbox.create();
        sandbox.stub(window.console,'log');

        test_log = 'log something';
        app.Utils.log(test_log);

      });

      afterEach(function(){
        sandbox.restore();
      });

      // should style
      it('should log message',function(){

        console.log.should.have.been.called;
        console.log.should.have.been.calledWithExactly('debug:' + test_log);

      });


      // expect style
      it('expect log message',function(){

        expect(console.log.calledOnce).to.be.ok;
        expect(console.log).calledWithExactly('debug:' + test_log);

      });

      // assert style
      it('assert log message',function(){

        sinon.assert.calledOnce(console.log);
        sinon.assert.calledWithExactly(console.log, 'debug:' + test_log)


      });

    });


  });

})();