Router.configure({
  layoutTemplate: 'layout',
});

/*Router.route('/', {
	name: 'home',
	data: function() {
	var harrysKimonoApi = "https://www.kimonolabs.com/api/3y4nos3g?apikey=1Sb5Ve0TMHGlD35pKOeREG7FNRIMO6ZO";
	Meteor.call('remoteGet', harrysKimonoApi, {
	
	},function(error,response){
	console.log(error);
	console.log(response);
	var beerData = JSON.parse(response.content)
	console.log(beerData);
	Meteor.call('addBeer', 'bisse',
		function(error, beerId) {
			console.log('Added beer with id ' + beerId);
		}
	);
	return beerData;
	});
   }

}); */

Router.route('/beersList', {
	name: 'beersList',
	data: function() {
		console.log("In router /beerlist");
		//var beerList = Beers.find().fetch();
		//return beerList;
		return Meteor.call('beersWithVenues');
	}
});

