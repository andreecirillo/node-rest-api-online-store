import authMiddleWare from '../../../src/middlewares/auth';
import jwt from 'jsonwebtoken';
import config from 'config';

describe('AuthMiddleware', () => {
    it('should verifh a JWT token and call the next middleware', done => {
        const jwtToken = jwt.sign({ data: 'fake'}, config.get('auth.key'));
        const reqFake = {
            headers: {
                'x-access-token': jwtToken
            }
        };
        const resFake = {};
        authMiddleWare(reqFake, resFake, done);
    });

    it('should call the next middleware passing an error when the token validation fails', done => {
        const reqFake = {
            headers: {
                'x-access-token': 'invalid token'
            }
        };
        const resFake = {};
        authMiddleWare(reqFake, resFake, err => {
            expect(err.message).to.eql('jwt malformed');
            done();
        });
    });

    it('should call next middleware if theres no token', done => {
        const reqFake = {
            headers: {}
        };
        const resFake = {};
        authMiddleWare(reqFake, resFake, done);
    });
});