const request = require('supertest');
const express = require('express');
const app = express();

// it('should respond with a 200 status code', async () => {
//     request(app)
//         .get('/user')
//         .expect(404)
//         .end(function (err, res) {
//             if (err) throw err;
//         });
// })

describe('GET /user', function () {
    it('responds with json', function (done) {
        request(app)
            .get('/user')
            .set('Accept', 'application/json')
            // .expect('Content-Type', /json/)
            .expect(200, done);
    });
});


        // let response = await request(auth).post('/login').send({
        //     username: "menuka",
        //     password: "asdf1234"
        // })
        // expect(response.statusCode).toBe(200)
