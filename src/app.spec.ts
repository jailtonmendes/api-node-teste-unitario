import request from 'supertest'
import { App } from './app'

// GRUPO DE TESTE
describe('My first test', () => {
    const app = new App().app;
    it('should test the server running', async () => {
        const response = await request(app).get('/');
        expect(response.body).toStrictEqual({ ok: true});
    });

    it('should check if create user', async () => {
        const response = await request(app).post('/user').send({
            name: 'Jailton',
            email: 'jailton@gmail.com',
            password: '123456',
        });
        console.log("🚀 ~ file: app.spec.ts:18 ~ response ~ response:", response);
        expect(response.statusCode).toEqual(201);
        // expect(response.body).toHaveProperty('id');
        
    });

    it('Should check if get user', async () => {
        const response = await request(app).get('/users');
        expect(response.statusCode).toEqual(200);
    })

});