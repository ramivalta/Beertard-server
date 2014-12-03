Template.beersList.helpers({
	beers: function() {
		console.log("in beers_list.js");
		// return Venues.find();
		//return Beers.beersWithVenues();
		oluet = Meteor.call('beersWithVenues');
		console.log(oluet);
		return oluet;
	}
});