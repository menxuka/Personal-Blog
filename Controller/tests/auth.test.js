const request = require('supertest');
const auth = require("../routes/auth")

describe("POST /login", () => {
    it('should respond with a 200 status code', async () => {
        let response = await request(auth).post('/login').send({
            username: "menuka",
            password: "asdf1234"
        })
        expect(response.statusCode).toBe(200)
    })
})

describe('GET /user', function () {
    it('responds with json', function (done) {
        request(auth)
            .post('/login')
            .send({
                username: "menuka",
                password: "asdf1234"
            })
            // .expect('Content-Type', /json/)
            .expect(200, done);
    });
});