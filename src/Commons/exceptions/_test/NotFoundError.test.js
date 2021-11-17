const NotFoundError = require('../NotFoundError');

describe('NotFoundError', () => {
    it('should create an error correctly', () => {
        const notFoundError = new NotFoundError('the data did not found');

        expect(notFoundError.statusCode).toEqual(404);
        expect(notFoundError.message).toEqual('the data did not found');
        expect(notFoundError.name).toEqual('NotFoundError');
    })
})