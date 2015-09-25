/**
 * Created by suraj on 23/05/15.
 */

(function (module) {
    'use strict';
    var appUtil = require('./../../helpers/util');

    module.exports = {
        init: function (app) {
            app.post('/v1/learn', function(req, res){

                var jsonView = new (appUtil.jsonView)();
                jsonView.setErrorCode(0);
                jsonView.setMsg('Shit Works!');

                res.status(200);
                res.setHeader('Content-Type', 'application/json');
                res.end(jsonView.render());

            });
        }
    };
})(module);