import supertest from 'supertest';
import app from '../../src/app.js';
import server from '../../src/server.js';

const chai = await import('chai');

global.app = app;
global.request = supertest(server);
global.expect = chai.expect;