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
