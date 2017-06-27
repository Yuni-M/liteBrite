function main(){
	var colrClass = '';
	$('.select-color').on('click', function(){
		var selectedColor = $(this).attr('class');
		switch(selectedColor){
			case 'select-color cyan not-selected':
				colorClass = 'cyan';
				break;
			case 'select-color yellow not-selected':
				colorClass = 'yellow';
				break;
			case 'select-color magenta not-selected':
				colorClass = 'magenta';
				break;
		}
		$(this).removeClass('not-selected');
		$(this).siblings().addClass('not-selected');
	});
	$('.box').on('click', function(){
		$(this).toggleClass(colorClass);
	});
	$('.toggle-blink').on('click', function(){
		if(colorClass){
			$(this).toggleClass('opacity');
			setInterval(function(){
				$('.box.cyan, .box.yellow, .box.magenta').toggleClass('blink');
			}, 350);
		}
	});
}

$(document).ready(main);