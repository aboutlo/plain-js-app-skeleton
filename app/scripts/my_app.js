(function(){
  'use strict';

  app.MyApp = function(){
     app.Utils.log('My app constructor');
  };

  app.MyApp.prototype = {

    doSomething: function(){
      return 'something';
    }

  };

})();