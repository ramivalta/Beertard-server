Beers = new Mongo.Collection('beers');

Meteor.methods({
	addBeer : function(beer) {
		console.log("Adding beer");
		return Beers.insert(beer);
	},
	
	addUntappdBeer : function(beer, venue) {

		existingBeer = Beers.findOne({untappdId: beer.untappdId});


		if(typeof existingBeer == 'undefined') {
			console.log('Beer does not exist, adding new');
			beer.venues = [ venue ];
			return Beers.insert(beer);
		} else {
			console.log('Existing beer is ' + JSON.stringify(existingBeer));	
			console.log('existingBeer.venues ' + existingBeer.venues);
			if(existingBeer.venues != null) {
				found = false;
				// Use some instead of forEach so we can short circuit from the loop
				existingBeer.venues.some(function(beerVenue) {
					if(beerVenue.untappdId === venue.untappdId) {
						found = true;
						return true;
					}
				});
				// If the venue was not found from the beer, add it
				if(!found) {
					existingBeer.venues.push(venue);
				}
				// Copy venues from existing beer.
				beer.venues = existingBeer.venues;
			} else {
				beer.venues = [ venue ];
				console.log("Added veneus to beer " + JSON.stringify(beer));
			}
			console.log('Beer exists, dunno what to do what todoman!?' + JSON.stringify(existingBeer));
			
			
			// Override existing beer with the new beer
			// TODO this might be bad, maybe we shouldn't override the whole thing?
			Beers.update(existingBeer._id, {$set:beer});
			
			return existingBeer._id;
		}
		
	},
	
	findBeerWithUntappdId : function(beerUntappdId) {
		console.log('Find beer with untappdId' + beerUntappdId);
		return Beers.findOne({untappdId: beerUntappdId});
	},
		
	addBeerSeenInLocation : function(venueId, beer, timestamp) {
		console.log("Adding a beer to venue");
		existingBeer = Beers.findOne({"untappdId": beer.untappdId});
		console.log("Existing beer is " + JSON.stringify(existingBeer));
	},
	
	listBeers : function() {
		console.log("Listaappa oluet");
		return Beers.find().fetch();
	},
	
	beersWithVenues : function() {
		console.log("Beers with venues");
		bv = Beers.find().fetch();
		console.log(bv);
		/*bv.forEach(function(entry) {
			console.log("Trying to find venue with venueId " + entry.venueId);
			entry.venue = Venues.findOne(entry.venueId);
			console.log("Iterating beers " + JSON.stringify(entry));			
		}); */
		
		return bv;
	}
});