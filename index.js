document.addEventListener("DOMContentLoaded",function(){
			window.onclick=function(e){
				e = e||window.event;
				var target = e.target || e.srcElement;
				if(target.className.toLowerCase()=="keepplay"){
					setTimeout(function(){
						var play = sessionStorage.getItem("playsongurl");
						var audio = document.getElementById("song");
						audio.setAttribute("src",play)
					},1000) 				
				}else if(target.id.toLowerCase()=="stop"){
					var audio = document.getElementById("song");
					audio.setAttribute("src",null)
				}
			}

});