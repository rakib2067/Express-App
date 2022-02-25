const request = require("supertest");
// import server
const server = require("../server");

describe("API server", () => {
  let api;
  let testPhone = {
    company: "Apple",
    model: "IPhone 5",
  };

  beforeAll(() => {
    // start the server and store it in the api variable
    api = server.listen(5000, () =>
      console.log("Test server running on port 5000")
    );
  });

  afterAll((done) => {
    // close the server, then run done
    console.log("Gracefully stopping test server");
    api.close(done);
  });

  it("responds to get / with status 200", (done) => {
    request(api).get("/phones").expect(200, done);
  });

  it("responds to post /phones with status 201", (done) => {
    request(api)
      .post("/phones")
      .send(testPhone)
      .set("Accept", /application\/json/)
      .expect(201)
      .expect({ id: 4, ...testPhone }, done);
  });

  it("retrieves a phone by id", (done) => {
    request(api)
      .get("/phones/3")
      .expect(200)
      .expect({ id: 3, company: "Google", model: "Pixel 6" }, done);
  });

  it("responds to a unknown phones id with a 404", (done) => {
    request(api).get("/phones/42").expect(404).expect({}, done);
  });

  it("responds to delete /phones/:id with status 204", async () => {
    await request(api).delete("/phones/4").expect(204);

    const updatedPhones = await request(api).get("/phones");

    expect(updatedPhones.body.length).toBe(3);
  });

  it("responds to non existing paths with 404", (done) => {
    request(api).get("/no").expect(404, done);
  });
});
