Venues = new Mongo.Collection('venues');

Meteor.methods({
	addVenue : function(venue) {
		console.log("Adding venue");
//		console.log("jsonparse " + JSON.stringify(JSON.parse(beer)));
		return Venues.insert(venue);
	/*	var beerId = Beers.insert({
			'name' : beerText,
			'submittedOn' : new Date()
		}); */

		//return _id;
	},
	
	getVenues : function() {
		console.log("Haeppa mestapaikat");
		return Venues.find().fetch();
	},

	findVenueWithUntappdId : function(venueUntappdId) {
		return Venues.findOne({untappdId: venueUntappdId});
	}

	addVenue : function(venue) {

	}


});
