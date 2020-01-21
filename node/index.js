"use strict";
exports.__esModule = true;
var Primrose = /** @class */ (function () {
    function Primrose() {
        var _this = this;
        this.promise = new Promise(function (_resolve, _reject) {
            _this._resolve = _resolve;
            _this._reject = _reject;
        });
    }
    Primrose.prototype.resolve = function (resolution) {
        this._resolve(resolution);
    };
    Primrose.prototype.reject = function (rejection) {
        this._reject(rejection);
    };
    return Primrose;
}());
exports.Primrose = Primrose;
