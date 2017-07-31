//写入数据库功能
$('.btn01').on('click', function() {
	if($('.yi').val().length > 0) {
		$.ajax({
			type: "post",
			url: "http://localhost:1234/zeng",
			data: {
				name: $('.yi').val(),
				geming: $('.er').val(),
				zhuan: $('.san').val(),
				area: $('.si').val(),
				language: $('.wu').val(),
			},
			async: true,
			//dataType: "json",
			success: function(res) {
				location.reload();
			}
		});
	} else {
		alert('用户名不能为空')
	}
});

//页面加载功能
$.ajax({
	type: "get",
	url: "http://localhost:1234/xie",
	data: {
		//page:$(this).find('a').val(),
	},
	async: true,
	dataType: "json",
	success: function(res) {
		console.log(res.jobs)
		$('.diao_01').html(res.jobs.map(function(item) {
			return `
				<li><span>${item.id}</span><span>${item.name}</span><span>${item.zhuan}</span><span>${item.geming}</span><span>${item.area}</span><span>${item.language}</span><button class="xiu">修改</button>  <button class
				="shan">删除</button></li>
			`
		}))
		//删除功能
		$('.diao_01').on('click', '.shan', function() {
			var geming = $(this).parent().children().eq(3).html();
			$.ajax({
				type: "get",
				url: "http://localhost:1234/shan",
				data: {
					geming: geming,
				},
				async: true,
				dataType: "json",
				success: function(res) {

				}
			})
			$(this).parent().remove();
		})

	}
})
//搜索功能
$('.btn02').on('click', function() {
	var name = $(this).prev().val();
	$.ajax({
		type: "get",
		url: "http://localhost:1234/sou",
		data: {
			name: name,
		},
		async: true,
		dataType: "json",
		success: function(res) {
			$('.diao_01').html(res.jobs.map(function(item) {
				return `
				<li><span>${item.id}</span><span>${item.name}</span><span>${item.zhuan}</span><span>${item.geming}</span><span>${item.area}</span><span>${item.language}</span><button class="xiu">修改</button>  <button class
				="shan">删除</button></li>
			`
			}))
		}
	})
})

//修改功能
$('.diao_01').on('click', '.xiu', function() {
	var id = $(this).parent().children().eq(0).html();
	if($('.yi').val().length > 0 && $('.er').val().length > 0 && $('.san').val().length > 0 && $('.si').val().length > 0 && $('.wu').val().length > 0) {
		$.ajax({
			type: "get",
			url: "http://localhost:1234/xiu",
			data: {
				name: $('.yi').val(),
				geming: $('.er').val(),
				zhuan: $('.san').val(),
				area: $('.si').val(),
				language: $('.wu').val(),
				id: id,
			},
			async: true,
			dataType: "json",
			success: function(res) {

			}
		})
		location.reload();
	} else {
		alert('请输入歌名信息')
	}
})
//					console.log($('.am-icon-plus'))
//$('.jia').on('click', function() {
//	location.href = 'admin-user.html';
//})
//
//$('.tbody').on('click', '#tiao', function() {
//	console.log(12)
//	location.href = 'gai.html?' + $(this).parent().parent().parent().parent().children().eq(1).html();
//})