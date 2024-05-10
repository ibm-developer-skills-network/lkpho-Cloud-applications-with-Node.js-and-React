# Migration Guide for v1

## Breaking Changes

### Node Versions
Node versions 6 and 8 are no longer supported.

### Promises replaced callbacks
None of the methods in any modules of the core accept callbacks as arguments anymore. Now, all asynchronous methods (inlcuding all `authenticate` methods) return Promises.

### Callback arguments
The old callback argument structure of `(error, body, response)` has been changed to `(error, response)`. The body is available under the `result` property of the response. The `data` property has been removed in favor of `result`.

### Authentication
Credentials are no longer passed in as constructor parameters. Rather, a single `Authenticator` is instantiated and passed in to the constructor. Example:

```js
const authenticator = new IamAuthenticator({
  apikey: 'abc-123',
});

const service = new MyService({
  authenticator,
});
```

- The method `getServiceCredentials` has been removed from the `BaseService` class. This is replaced by `getAuthenticator`, which returns the authenticator instance.
- Reading credentials from external sources (like environment variables) no longer happens for _credentials_ by default if none are passed to the `Authenticator` (The service URL can still be read automatically). The method `getAuthenticatorFromEnvironment` will return an `Authenticator` by reading from the external sources.
  - Note that this method will only read from _one external source at a time_. It will not combine credentials from multiple sources, which was the behavior previously.

#### Token Managers
- `Icp4dTokenManagerV1` renamed to `Cp4dTokenManager`
- `IamTokenManagerV1` renamed to `IamTokenManager`
- `JwtTokenManagerV1` renamed to `JwtTokenManager`
- Token managers no longer support the `accessToken` parameter. There is no need for a token manager when a user is managing their own token. This behavior is replaced by the `BearerTokenAuthenticator` class.
- In the IAM Token Manager: the method `setAuthorizationInfo` is renamed to `setClientIdAndSecret`

#### URL parameter name changed
The variable name for the stored, URL parameter has been changed from `url` to `serviceUrl`. Note that `url` can still be compatibility passed into the constructor as an alias for `serviceUrl`. However, if you try to access the `url` property directly in your code, this is a breaking change.

#### Reading Credentials File
The order of priority has changed to give a file in the current working directory higher priority than one in the home directory. This will only impact your code if you have different files in each location.
