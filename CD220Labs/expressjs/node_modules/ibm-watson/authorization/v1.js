"use strict";
/**
 * (C) Copyright IBM Corp. 2015, 2019.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ibm_cloud_sdk_core_1 = require("ibm-cloud-sdk-core");
var url = require("url");
var AuthorizationV1 = /** @class */ (function (_super) {
    __extends(AuthorizationV1, _super);
    /**
     * Authorization Service
     *
     * Generates temporary auth tokens for use in untrusted environments.
     * Tokens expire after one hour.
     *
     * @param {Object} options
     * @constructor
     */
    function AuthorizationV1(options) {
        var _this = _super.call(this, options) || this;
        _this.targetUrl = options.url;
        // replace the url to always point to /authorization/api
        var hostname = url.parse(_this.baseOptions.url);
        hostname.pathname = '/authorization/api';
        _this.baseOptions.url = url.format(hostname);
        return _this;
    }
    /**
     * If using an RC service, get an IAM access token. If using a CF service,
     * get a percent-encoded authorization token based on resource query string param
     *
     * @param {Object} [options]
     * @param {String} [options.url] defaults to url supplied to constructor (if any)
     * @param {Function(err, token)} callback - called with a %-encoded token if CF
     */
    AuthorizationV1.prototype.getToken = function (params, callback) {
        if (typeof params === 'function') {
            callback = params;
            params = { url: this.targetUrl };
        }
        var authenticator = this.getAuthenticator();
        // if the authenticator is managing a token, return that token
        if (authenticator instanceof ibm_cloud_sdk_core_1.TokenRequestBasedAuthenticator) {
            var options_1 = { headers: {} };
            return authenticator.authenticate(options_1).then(function () {
                callback(null, parseTokenFromHeader(options_1.headers));
            }, function (err) {
                callback(err);
            });
        }
        // otherwise, return a CF Watson token
        if (!params.url) {
            callback(new Error('Missing required parameters: url'));
            return;
        }
        var parameters = {
            options: {
                method: 'GET',
                url: '/v1/token?url=' + params.url
            },
            defaultOptions: this.baseOptions
        };
        return this.createRequest(parameters).then(function (res) {
            callback(null, res);
            return res;
        }, function (err) {
            callback(err);
        });
    };
    AuthorizationV1.URL = 'https://api.us-south.speech-to-text.watson.cloud.ibm.com/authorization/api';
    return AuthorizationV1;
}(ibm_cloud_sdk_core_1.BaseService));
AuthorizationV1.prototype.name = 'authorization';
AuthorizationV1.prototype.serviceVersion = 'v1';
function parseTokenFromHeader(headers) {
    // get token from format `basic TOKEN` or `bearer TOKEN`
    return headers.Authorization ? headers.Authorization.split(' ')[1] : null;
}
module.exports = AuthorizationV1;
