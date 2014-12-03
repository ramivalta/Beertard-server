if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("Server initialization", function(){
      it("should have a Meteor version defined", function(){
        chai.assert(Meteor.release);
      });
    });
    describe("Find beers", function(){
      it("should return expected amount of beers", function(){
        chai.assert.equal(Beers.find().fetch().length,14);
      });
    });
    
    describe("List beers", function(){
      it("should return expected amount of beers", function(){
      	Meteor.call("listBeers", function(error, result) {
      		listBeersLength = result.length;
      	});
		chai.assert.equal(14, listBeersLength);
      });
    });

    describe("Check for venue", function(){
      it("should return beers with venue information", function(){
      	
      	Meteor.call("beersWithVenues", function(error, result) {
      		venueName = result[0].venue.name
      	});
      	
      	chai.assert.equal("Harry's", venueName);
      	
      });
    });
    
    describe("Add new untappd beer", function() {
    	it("Beer should be added and found with the returned id", function() {
    	
    		venue = {'name':'harrys', 'untappdId':'koira'};
    		beer = {'untappdId':'kani', 'name':'untappdOlut'};
    		Meteor.call("addUntappdBeer", beer, venue, function(error, result) {
    			console.log("nyt ei pysty " + error);
    			addedBeerId = result;
    		});
    		uusOlut = Beers.findOne(addedBeerId);
    		console.log("Uus olut " + JSON.stringify(uusOlut));
    		chai.assert.equal('untappdOlut', uusOlut.name);
    	
    	});
    });
    
    describe("List venues", function(){
      it("should return expected amount of venues", function(){
      	Meteor.call("getVenues", function(error, result) {
			rLength = result.length; 
      	});
      	chai.assert.equal(1, rLength);
      });
    });
    
    describe("Find venue with untappdid", function(){
      it("should return specific venue", function(){
      	
      	Meteor.call("findVenueWithUntappdId", "350048", function(error, result) {
			vName = result.nameM
      	});
      	
		chai.assert.equal("Harry's", vName);
      });
    });
    
  });
}
