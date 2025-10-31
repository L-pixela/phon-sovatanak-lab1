import supertest from "supertest";
import app from "../app.js";
import { expect } from "chai";

describe('GET /', () => {
  it('should return Hello, CI/CD!', async () => {
    const res = await supertest(app)
      .get('/')
      .expect(200);

    expect(res.text).to.equal('Hello, CI/CD!');
  });
});