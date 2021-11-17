const AuthenticationError = require('../AuthenticationError');

describe('AuthenticationError', () => {
    it('should create an error correctly', () => {
        const invariantError = new AuthenticationError('an error has occurs');

        expect(invariantError.statusCode).toEqual(401);
        expect(invariantError.message).toEqual('an error has occurs');
        expect(invariantError.name).toEqual('AuthenticationError');
    })
})