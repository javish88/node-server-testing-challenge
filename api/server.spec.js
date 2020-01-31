const request = require("supertest");

const server = require("./server");


describe("GET /", function() {
    it("should return status code 200", function() {
    
        return request(server)
        .get("/")
        .then(response => {
        expect(response.status).toBe(200);
        });
    });

    it("should return a JSON", function() {
    return request(server)
        .get("/")
        .then(res => {
        expect(res.type).toMatch(/json/i);
        });
    });

    it("should return {api: 'working'}", function() {
    return request(server)
        .get("/")
        .then(res => {
        expect(res.body.api).toBe("working");
        });
    });
});

describe('POST /', () => {

it('should return status code 201', () => {
    return request(server)
        .post('/')
        .send({
            id : 1,
            name: 'test'
        })
        .then(response =>{
            expect(response.status).toBe(201);
        });
    });
    it('should return {message: Unable to add user"}', ()=>{
        return request(server)
        .post('/')
        .then(response =>{
            expect(response.body.message).toBe("Unable to add user")
        });
    });
});


describe('DELETE/:id ', () => {

    it('should delete existing user', () => {
        return request(server)
        .delete('/1')
        .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.success).toBe('user successfully deleted');
        });
    });
    it("should return a JSON", function() {
        return request(server)
            .delete('/1')
            .then(res => {
            expect(res.type).toMatch(/json/i);
            });
        });
});