$(document).ready(function(){

	//slider
	if(window.location.href.indexOf('index')>-1){

		$('.slider_gallery').bxSlider({
		  auto: true,
		  autoControls: false,
		  stopAutoOnClick: true,
		  pager: true,
		  slideWidth: 1200,//modificar el ancho de la página
		  
		});

	}
	//Post
	if(window.location.href.indexOf('index')>-1){
		var post=[{
			title:"Ejemplo de título uno",
			date:"Publicado el "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
			content:"In in rutrum ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sodales sagittis vestibulum. Maecenas vel erat vel dolor tristique convallis. Integer lacinia tincidunt tortor. Cras a arcu eu quam suscipit malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque lacus risus, porta in ultricies quis, ultricies ut magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed egestas nec quam et feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eu vulputate quam."
			},
			{
			title:"Ejemplo de título dos",
			date:"Publicado el "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
			content:"In in rutrum ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sodales sagittis vestibulum. Maecenas vel erat vel dolor tristique convallis. Integer lacinia tincidunt tortor. Cras a arcu eu quam suscipit malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque lacus risus, porta in ultricies quis, ultricies ut magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed egestas nec quam et feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eu vulputate quam."
			},
			{
			title:"Ejemplo de título tres",
			date:"Publicado el "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
			content:"In in rutrum ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sodales sagittis vestibulum. Maecenas vel erat vel dolor tristique convallis. Integer lacinia tincidunt tortor. Cras a arcu eu quam suscipit malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque lacus risus, porta in ultricies quis, ultricies ut magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed egestas nec quam et feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eu vulputate quam."
			},];
		// console.log(post);

		post.forEach(function(valor, indice){
			var a=`
				<article class="post">
					<h2>${valor.title}</h2>
					<span class="fecha">${valor.date}</span>
					<p>					
						${valor.content}
					</p>
					<a href="#">Leer mas...</a>
				</article>

			`;
			$("#post").append(a);
		});
	}

	//Selector de temas recargables
	var theme=$("#theme");
	//Recuperar datos color del localStorage
	var a=localStorage.getItem("color_tema");	
	theme.attr("href","css/"+a+".css");

	$("#azul").click(function(){
		theme.attr("href","css/azul.css");
		localStorage.setItem("color_tema","azul");
	});
	$("#rojo").click(function(){
		theme.attr("href","css/rojo.css");
		localStorage.setItem("color_tema","rojo");
	});
	$("#verde").click(function(){
		theme.attr("href","css/verde.css");
		localStorage.setItem("color_tema","verde");
	});


	//Scroll arriba de la web
	$("#upButton").click(function(e){
		e.preventDefault();

		$("html, body").animate({
						scrollTop:0
		}, "slow");
		return false;
	});

	//Scrool arriba de la web
	$("#upButt").click(function(e){
		e.preventDefault();

		$("html, body").animate({
						scrollTop:0
		}, "slow");
		return false;
	});

	//Login falso KitPC 
	$("#login form").submit(function(){
		location.reload();
		var form_name=$("#form_name").val();
		localStorage.setItem("form_name",form_name);
	});
	var form_name=localStorage.getItem("form_name");
	
	if(form_name != null & form_name != "undefined"){
		var about_parrafo=$("#about p");
		about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
		about_parrafo.append("<a href='#' id='logout'> Cerrar Sesión</a>");
		$("#login").hide();

		$("#logout").click(function(){

			localStorage.clear();
			location.reload();
		});

	}


	if(window.location.href.indexOf('about')>-1){
		$("#acordeon").accordion();
	}



	if(window.location.href.indexOf('reloj') > -1){
		setInterval(function(){
			var reloj=moment().format('h:mm:ss'); 
			$("#reloj").html(reloj);

		},1000);
	}

	if(window.location.href.indexOf("contacto")>-1){
	$("form input[name='date']").datepicker({
		dateFormat:'dd/mm/yy'
	});
	//Mostrar error en la parte superior
	$.validate({ 
		 lang: 'es',
		 errorMessagePosition:'top',
		 scrollToTopOnError:true
	});

}


});

