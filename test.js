const request = require('request');
const expect = require('chai').expect;
const { response } = require('express');

describe("test for 200" ,function(){

    var url = "localhost:3000/temperature?city=ankara";
    it("test for city", function(done){
        request(url,function(err,res,body){
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    var url2 = "localhost:3000";
    it("test for main ", function(done){
        request(url2,function(err,res,body){
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

});


