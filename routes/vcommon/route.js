/**
 * Created by suraj on 23/05/15.
 */

(function (module) {
    'use strict';
    var appUtil = require('./../../helpers/util');

    module.exports = {
        init: function (app) {
            app.post('/v1/learn', function (req, res) {
                // curl http://localhost:4000/v1/learn -X POST -H"Content-Type: application/json" -d'{"foo":"bar"}'
                var data = req.body;
                var json = new (appUtil.jsonView)();
                // some basic validation
                if (!(data && data.foo)) {
                    json.setMsg('Invalid Input');
                    res.status(400);
                    res.setHeader('Content-Type', 'application/json');
                    res.end(json.render());
                    return;
                }

                json.setErrorCode(0);
                json.data(data);
                res.status(200);
                res.setHeader('Content-Type', 'application/json');
                res.end(json.render());

            });
        }
    };
})(module);