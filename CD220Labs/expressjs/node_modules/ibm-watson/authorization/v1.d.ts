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
/// <reference types="node" />
import { IncomingHttpHeaders } from 'http';
import { BaseService, UserOptions } from 'ibm-cloud-sdk-core';
declare class AuthorizationV1 extends BaseService {
    static URL: string;
    name: string;
    serviceVersion: string;
    targetUrl?: string;
    /**
     * Authorization Service
     *
     * Generates temporary auth tokens for use in untrusted environments.
     * Tokens expire after one hour.
     *
     * @param {Object} options
     * @constructor
     */
    constructor(options: UserOptions);
    /**
     * If using an RC service, get an IAM access token. If using a CF service,
     * get a percent-encoded authorization token based on resource query string param
     *
     * @param {Object} [options]
     * @param {String} [options.url] defaults to url supplied to constructor (if any)
     * @param {Function(err, token)} callback - called with a %-encoded token if CF
     */
    getToken(params: AuthorizationV1.GetTokenParams | AuthorizationV1.GetTokenCallback, callback?: AuthorizationV1.GetTokenCallback): Promise<any>;
}
/*************************
 * interfaces
 ************************/
declare namespace AuthorizationV1 {
    interface GetTokenResponse {
        result: string;
        status?: number;
        statusText?: string;
        headers?: IncomingHttpHeaders;
    }
    /** The callback for the getToken request. */
    type GetTokenCallback = (error?: Error, response?: string | GetTokenResponse) => void;
    /** Parameters for the `getToken` operation */
    interface GetTokenParams {
        url?: string;
    }
}
export = AuthorizationV1;
