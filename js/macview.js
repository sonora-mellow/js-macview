$(function(){
	var $mv_btn = $('.macview_btn');
	var $mv_folder = $('.macview_folder');
	var $mv_image = $('.macview_folder').find('img');

	console.log($mv_image.length);

	// Make macview_folder	
	var $mvfCloseHeight = $('.macview_folder img:first-of-type').height() * 1.1;

	$mv_folder.css({
		width: '90%',
		height: $mvfCloseHeight
	});

	$mv_btn.each(function(i){
		i++;
		$(this).attr('data-num', i)
	});

	$mv_folder.each(function(i){
		i++;
		$(this).attr('data-num', i)
	});


	$mv_folder.each(function(i){
		i++;

		$(this).find('img').each(function(j){
			j++;
			$(this).addClass('mvid-'+ j)
			.css({
				position: 'absolute',
				top: j*10,
				left: j*10,
				opacity: 1.1 - j /10,
				zIndex: 1 - j
			});
		});
	});




	$mv_btn.on({
		'click': function(){
			if($(this).text() === 'OPEN'){
				// Open macview_folder
				$(this).text('CLOSE');
				
				var $action_btn_num = ($(this).attr('data-num'));
				var $action_folder_num = $action_btn_num;
				var $action_mv_folder = $mv_folder.filter(function(){
					return $(this).attr('data-num') == $action_folder_num;
				});
				var $action_mv_image = $mv_folder.filter(function(){
					return $(this).attr('data-num') == $action_folder_num;
				}).find('img');

				var $mvfOpenHeight = $('.macview_folder img:first-of-type').height() * 1.2 * $action_mv_image.length;

				$action_mv_folder.css({
					height: $mvfOpenHeight
				});
				$action_mv_folder.animate({
					width: '100%'
				});

				$action_mv_image.each(function(i){
					i++;
					$(this).animate({
						top: $mvfCloseHeight * (i - 1),
						left: 0,
						opacity: 1,
						zIndex: 0
					});
				});

			} else {
				// Close macview_folder
				$(this).text('OPEN');

				var $action_btn_num = ($(this).attr('data-num'));
				console.log($action_btn_num);
				var $action_folder_num = $action_btn_num;
				var $action_mv_folder = $mv_folder.filter(function(){
					return $(this).attr('data-num') == $action_folder_num;
				});
				var $action_mv_image = $mv_folder.filter(function(){
					return $(this).attr('data-num') == $action_folder_num;
				}).find('img');

				$action_mv_folder.css({
					height: $mvfCloseHeight
				});
				$action_mv_folder.animate({
					width: '90%',
				});

				$action_mv_image.each(function(i){
					i++;
					$(this).css({
						opacity: 1.1 - i /10,
						zIndex: 1 - i
					});
					$(this).animate({
						top: i*10,
						left: i*10,
					});
				});
			}
		}
	});
});