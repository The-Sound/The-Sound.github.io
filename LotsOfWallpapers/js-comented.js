var LosASolamente = $('br').next();
console.log(LosASolamente);
var hovered = 'nothoveredmate';
$(document).ready( $('a').detach());

$('.square').hover(
	function()
		{
			$('.square').not(this).css('filter', 'blur(5px)');
			$('.textu').mouseenter(
				function()
					{
						$(this).css('height', '80%');
						$(this).css('margin-top', '5%');
						$('.test').css('top', '5%').delay(300);
						//$('a').insertAfter('br');
						//var LosASolamente = $('br').next();
						var LosBrSolamente = $('br').prev();	
						var TodosJuntitos = $('br').siblings();
						var OtraCosa = $('a').prev();
						
						//Muestra el objeto entero
						//TodosJuntitos.each(console.log);
						
						//Muestra el objeto en si
						//console.log(TodosJuntitos);

						//Muestra todos los BR, pero como es el br DESPUES de cada A, hay que acordarse de restar uno a index
						//LosBrSolamente.each(console.log);
						
						console.log('1');
						console.log(OtraCosa);
						
						console.log('2-1');
						console.log(LosASolamente);
						
						console.log('2-2');
						console.log(LosBrSolamente.get(0).outerHTML);
						
						console.log('3-1');
						console.log(TodosJuntitos);
						
						console.log('3-2');
						console.log(TodosJuntitos.get(0).outerHTML);
						
						if ($(this).parent('#fourchan') && hovered == 'nothoveredmate' )
							{
								console.log('Hey, soy el div de 4chan');
								hovered = 'hoveredmate';
								console.log(hovered);
								for ( x = 0; x < 6; x++ )
								{
									var ElBerro = '.berre' + (x + 1);
									var ElBerroAdded = 'berre' + (x + 1);
									var ElBerroComprobado = TodosJuntitos.get(x).outerHTML;
									var ElBerroCambiado = TodosJuntitos.get(x).outerHTML = '<br class="' + ElBerroAdded + '" />';
									var LaStringo = LosASolamente.get(x).outerHTML;
									
									
									console.log('1-2');
									console.log(LaStringo);
									
									console.log('2-2');
									console.log(ElBerro);
									
									console.log('3-2');
									console.log(ElBerroAdded);
									
									console.log('4-2');
									console.log(ElBerroComprobado);
									//console.log(LosBrSolamente.get(x).outerHTML);
									
									console.log('5-2');
									console.log(LosASolamente);
									
									console.log('6-2');
									console.log(ElBerroCambiado);
									
									//console.log('7-3');
									//$('br').attr('class', ElBerroAdded).one();
									
									
									if ( ElBerroComprobado != ElBerroCambiado )
										{
											$(ElBerroComprobado).attr('class', ElBerroAdded).one();
											$(LaStringo).insertAfter(ElBerro).one();
											console.log('Soy el loop ' + x + ' de 6');
										}
								}
							}
					});
			
			$('.textu').mouseleave(
				function()
					{
						$(this).css('height', '');
						$(this).css('margin-top', '');				
						$('.test').css('top', '');
					});
		},
	function()
		{
			$('.square').not(this).css('filter', '');
		}
);

//=======================================Trimmed==============================================================
var LosASolamente = $('br').next();
console.log(LosASolamente);
var hovered = 'nothoveredmate';
$(document).ready( $('a').detach());

$('.square').hover(
	function()
		{
			$('.square').not(this).css('filter', 'blur(5px)');
			$('.textu').mouseenter(
				function()
					{
						$(this).css('height', '80%');
						$(this).css('margin-top', '5%');
						$('.test').css('top', '5%').delay(300);

						var TodosJuntitos = $('br').siblings();
						var OtraCosa = $('a').prev();

						if ($(this).parent('#fourchan') && hovered == 'nothoveredmate')
							{

								hovered = 'hoveredmate';
								for ( x = 0; x < 6; x++ )
								{
									var ElBerro = '.berre' + (x + 1);
									var ElBerroAdded = 'berre' + (x + 1);
									var ElBerroComprobado = TodosJuntitos.get(x).outerHTML;
									var ElBerroCambiado = TodosJuntitos.get(x).outerHTML = '<br class="' + ElBerroAdded + '" />';
									var LaStringo = LosASolamente.get(x).outerHTML;
									
									
									if ( ElBerroComprobado != ElBerroCambiado )
										{
											$(ElBerroComprobado).attr('class', ElBerroAdded).one();
											$(LaStringo).insertAfter(ElBerro).one();
											console.log('Soy el loop ' + x + ' de 6');
										}
								}
							}
					});
			
			$('.textu').mouseleave(
				function()
					{
						$(this).css('height', '');
						$(this).css('margin-top', '');				
						$('.test').css('top', '');
						$('a').detach();
					});
		},
	function()
		{
			$('.square').not(this).css('filter', '');
		}
);  