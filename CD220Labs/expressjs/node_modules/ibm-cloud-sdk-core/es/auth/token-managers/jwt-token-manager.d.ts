import { TokenManager, TokenManagerOptions } from './token-manager';
/** Configuration options for JWT token retrieval. */
export declare type JwtTokenManagerOptions = TokenManagerOptions;
/**
 * A class for shared functionality for parsing, storing, and requesting
 * JWT tokens. Intended to be used as a parent to be extended for token
 * request management. Child classes should implement `requestToken()`
 * to retrieve the bearer token from intended sources.
 */
export declare class JwtTokenManager extends TokenManager {
    protected tokenName: string;
    protected tokenInfo: any;
    /**
     * Create a new [[JwtTokenManager]] instance.
     * @constructor
     * @param {object} options Configuration options.
     * @param {string} options.url for HTTP token requests.
     * @param {boolean} [options.disableSslVerification] A flag that indicates
     *   whether verification of the token server's SSL certificate should be
     *   disabled or not.
     * @param {object<string, string>} [options.headers] Headers to be sent with every
     *   outbound HTTP requests to token services.
     */
    constructor(options: JwtTokenManagerOptions);
    /**
     * Request a JWT using an API key.
     *
     * @returns {Promise}
     */
    protected requestToken(): Promise<any>;
    /**
     * Save the JWT service response and the calculated expiration time to the object's state.
     *
     * @param tokenResponse - Response object from JWT service request
     * @protected
     * @returns {void}
     */
    protected saveTokenInfo(tokenResponse: any): void;
}
