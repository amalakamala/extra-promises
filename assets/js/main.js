var abilities = function(url){
	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'json',
		data: {'limit': '2'},
	})
	.done(function(response){	
		//console.log(response.abilities);
		//console.log(response.sprites);
		var nameId = response.name;	

		response.abilities.forEach(function(e){
			//console.log(e.ability.name)
			$("#"+nameId).append(`<span>`+ e.ability.name +` </span></div>`);
		})
	})
	.done(function(response){
		var nameId = response.name;
		//console.log(response.weight);
		$("#"+nameId).append(`<div><p><h6><i class="fa fa-bullseye" aria-hidden="true"></i> PESO </h6>`+ response.weight +`</p></div><div><span><h6><i class="fa fa-heartbeat" aria-hidden="true"></i> TIPO </h6>`);
	})
	.done(function(response){	
		console.log(response.types);
		var nameId = response.name;	

		response.types.forEach(function(e){
			//console.log(e.ability.name)
			$("#"+nameId).append( e.type.name +` </span></div>`);
		})
	})	
	.done(function(response){
		var nameId = response.name;
		var img = response.sprites.front_default;
		$("#"+nameId).append('<div><img src="'+img+'"></div>');
		
	})	

	.fail(function(){
		console.log("Tienes un Error");	
	})
	.always(function() {
		console.log("Listo");
	});		
}

var callbacksAjax = function(){

	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon',
		type: 'GET',
		dataType: 'json',
		data: {'limit': '16'},
	})
	.done(function(response){
		response.results.forEach(function(e){
			var pokeName = e.name;
			$("#info").append(`
				<div class="col-md-3">
					<div class="caja">
						<div class="row">
							<div class="col-md-12 text-center" id="`+pokeName+`">
								<h3 class="nombre-poke">`+pokeName+`<h3>
								<div><h6 id="el-h6"><i class="fa fa-first-order" aria-hidden="true"></i> HABILIDADES</h6>	
							</div>
						</div>
					</div>	
				</div>
				
			`).append(abilities(e.url));
		})
	})	
	.fail(function() {
		console.log("Tienes un Error");
	})
	.always(function() {
		console.log("Complete el Nombre");
	});
}	

$(document).ready(function() {
	callbacksAjax();	

});
