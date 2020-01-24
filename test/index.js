import chai from "chai";
import chatHttp from "chai-http";
import "chai/register-should";
import app from "../src/index";

chai.use(chatHttp);
const { expect } = chai;

describe("Testing artists endpoints:", () => {
  it("It should fetch an artist", done => {
    const artistId = 1;
    chai
      .request(app)
      .get(`/artists/${artistId}`)
      .set("Accept", "application/json")
      .end((err, res) => {

        expect(res.status).to.equal(200);
        res.body.data.should.have.property("id");
        res.body.data.should.have.property("name");
        res.body.data.should.have.property("createdAt");
        res.body.data.should.have.property("updatedAt");
        done();
      });
  });
});
describe("Testing albums endpoints:", () => {
  it("It should fetch an album", done => {
    const albumId = 1;
    chai
      .request(app)
      .get(`/albums/${albumId}`)
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data.should.have.property("id");
        res.body.data.should.have.property("name");
        res.body.data.should.have.property("price");
        res.body.data.should.have.property("description");
        res.body.data.should.have.property("totalReviews");
        res.body.data.should.have.property("release");
        res.body.data.should.have.property("genre");
        res.body.data.should.have.property("artistId");
        res.body.data.should.have.property("createdAt");
        res.body.data.should.have.property("updatedAt");
        done();
      });
  });
});
describe("Testing songs endpoints:", () => {
  it("It should fetch a song", done => {
    const songId = 1;
    chai
      .request(app)
      .get(`/songs/${songId}`)
      .set("Accept", "application/json")
      .end((err, res) => {
        
        expect(res.status).to.equal(200);
        res.body.data.should.have.property("id");
        res.body.data.should.have.property("name");
        res.body.data.should.have.property("price");
        res.body.data.should.have.property("duration");
        res.body.data.should.have.property("popularity");
        res.body.data.should.have.property("albumId");
        res.body.data.should.have.property("artistId");
        res.body.data.should.have.property("createdAt");
        res.body.data.should.have.property("updatedAt");
        done();
      });
  });
  it("It should fetch all album songs", done => {
    const albumId = 1;
    chai
      .request(app)
      .get(`/songs/album/${albumId}`)
      .set("Accept", "application/json")
      .end((err, res) => {


        expect(res.status).to.equal(200);
        expect(res.body.data).to.be.an("array");

        done();
      });
  });
  it("It should fetch all artist's songs", done => {
    const artistId = 1;
    chai
      .request(app)
      .get(`/songs/artist/${artistId}`)
      .set("Accept", "application/json")
      .end((err, res) => {
        console.log("res>>>>>>>", res.body);

        expect(res.status).to.equal(200);
        expect(res.body.data).to.be.an("array");

        done();
      });
  });
  it("It should return empty array for missing album", done => {
    const albumId = 15;
    chai
      .request(app)
      .get(`/songs/album/${albumId}`)
      .set("Accept", "application/json")
      .end((err, res) => {

        expect(res.status).to.equal(200);
        expect(res.body.message).to.be.equal("Album songs fetched");
        expect(res.body.data.length).to.be.equal(0);

        done();
      });
  });
});
