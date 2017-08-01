<template>
	<div>
		<div class="cate">
			<h4>热门分类</h4>
			<div class="subcate">
				<div class="nav"><a href="#/subcate/liuxing">流行</a></div>
				<div class="nav subnav">
					<div class="treenav"><a href="#/subcate/minyao">民谣</a></div>
					<div class="treenav"><a href="#/subcate/oumei">欧美金曲榜</a></div>
				</div>
				<div class="nav subnav">
					<div class="treenav"><a href="#/subcate/wangluo">网络歌曲</a></div>
					<div class="treenav"><a href="#/subcate/qingge">韩语</a></div>
				</div>
			</div>
			<div class="spend" v-show="isSpend">
				<h4>全部分类</h4>
				<div class="spendAll" >
					<div class="bigCate">
						<div class="subCate">
							<h3>语种</h3>
						</div>
						<div class="subCate">
							<div>华语</div>
							<div>欧美</div>
							<div>日语</div>
						</div>
						<div class="subCate">
							<div>粤语</div>
							<div>韩语</div>
							<div>纯音乐</div>
						</div>
						<div class="subCate">
							<div>小语种</div>
							<div></div>
							<div></div>
						</div>
					</div>
					<div class="bigCate">
						<div class="subCate">
							<h3>风格</h3>
						</div>
						<div class="subCate">
							<div>流行</div>
							<div>摇滚</div>
							<div>民谣</div>
						</div>
						<div class="subCate">
							<div>电子</div>
							<div>远视</div>
							<div>acg</div>
						</div>
						<div class="subCate">
							<div>轻音乐</div>
							<div>新世界</div>
							<div>爵士</div>
						</div>
						<div class="subCate">
							<div>古典</div>
							<div>乡村</div>
							<div>说唱</div>
						</div>
						<div class="subCate">
							<div>世界音乐</div>
							<div>古风</div>
							<div>儿歌</div>
						</div>
						<div class="subCate">
							<div>庞克</div>
							<div>布鲁斯</div>
							<div>rmb/soul</div>
						</div>
						<div class="subCate">
							<div>金属</div>
							<div>雷鬼</div>
							<div>英伦</div>
						</div>
						<div class="subCate">
							<div>民族</div>
							<div>后摇</div>
							<div>拉丁</div>
						</div>
					</div>
					<div class="bigCate">
						<div class="subCate">
							<h3>情感</h3>
						</div>
						<div class="subCate">
							<div>快乐</div>
							<div>励志</div>
							<div>安静</div>
						</div>
						<div class="subCate">
							<div>伤感</div>
							<div>寂寞</div>
							<div>思念</div>
						</div>
						<div class="subCate">
							<div>孤独</div>
							<div>怀旧</div>
							<div>悲伤</div>
						</div>
						<div class="subCate">
							<div>感动</div>
							<div>治愈</div>
							<div>放松</div>
						</div>
						<div class="subCate">
							<div>清新</div>
							<div>浪漫</div>
							<div>兴奋</div>
						</div>
						<div class="subCate">
							<div>性感</div>
							<div></div>
							<div></div>
						</div>
					</div>
					<div class="bigCate">
						<div class="subCate">
							<h3>场景</h3>
						</div>
						<div class="subCate">
							<div>运动</div>
							<div>驾驶</div>
							<div>学习</div>
						</div>
						<div class="subCate">
							<div>工作</div>
							<div>清晨</div>
							<div>夜晚</div>
						</div>
						<div class="subCate">
							<div>午后</div>
							<div>游戏</div>
							<div>旅游</div>
						</div>
						<div class="subCate">
							<div>散步</div>
							<div>酒吧</div>
							<div>夜店</div>
						</div>
						<div class="subCate">
							<div>咖啡厅</div>
							<div>地铁</div>
							<div>校园</div>
						</div>
						<div class="subCate">
							<div>婚礼</div>
							<div>约会</div>
							<div>休息</div>
						</div>
					</div>
					<div class="bigCate">
						<div class="subCate">
							<h3>主题</h3>
						</div>
						<div class="subCate">
							<div>经典</div>
							<div>翻唱</div>
							<div>榜单</div>
						</div>
						<div class="subCate">
							<div>现场</div>
							<div>ktv</div>
							<div>dj</div>
						</div>
						<div class="subCate">
							<div>网络歌曲</div>
							<div>乐器</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
			<span class="choose" @click="showSpend()">{{spendWord}}</span>
		</div>
		<div class="hot">
			<h4>热门歌单</h4>
			<div v-for="(n,$index) in hot">
				<div>
					<p>
						<span class="keepplay"  @click="sethash(n.hash,n.remark,$index)">{{n.filename|nomore}}</span>
						<img src="../images/1.gif" alt="" v-if="$index==page&&player">
					</p>
					<i class="love" @click="cllocet(n.filename,n.hash)"></i>		
				</div>
			</div>
		</div>
		<div class="player" v-if="showplay1">
    		<ul class="action">
    			<li class="thenamep">
    				<img :src="playsongpic|getsize" alt="">
    			</li>
	        	<li id="stop" class="iconfont play icon-stop" @click="stop()"></li>
	        	<li class="iconfont icon-next" @click="nextsong()"></li>
	        	<li class="iconfont icon-list"></li>
    		</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				isSpend:false,
				spendWord:"展开全部分类",
				player:false,
				psong:null,
				songnameh:null,
				page:null
			}
		},
		methods:{
			showSpend:function(){
				this.isSpend=!this.isSpend,
				this.spendWord="收起全部分类"
			},
			sethot:function(){
				this.$store.dispatch("sethot")
				this.$store.state.page++
				console.log(this.$store.state.page)
			},
			detail:function(name,img,song){
				this.$store.state.detailname = name;
				this.$store.state.detailpic = img;
				this.$store.state.playsong = song;
			},
			sethash:function(seth,name,page){
				this.$store.state.hash = seth;
				this.$store.state.showplay = true;
				this.$store.dispatch("playthesong");
				this.player = true;
				this.songnameh = name;
				this.page = page;
			},
			stop:function(){
				this.player = false;
				sessionStorage.removeItem("playsongurl")
			},
			nextsong:function(){
				this.page = this.page++
				console.log(this.page++)
			},
			cllocet:function(songname,url){
				console.log(songname,url);
				this.$store.state.cllocetname = songname;
				this.$store.state.clloceturl = url;
				this.$store.dispatch("cllocet");
				
			}
		},
		computed:{
			hot(){
				console.log(this.$store.state.hot)
				return this.$store.state.hot
			},
			playhash(){
				return this.$store.state.hashsong
			},
			playsongpic(){
				return this.$store.state.playsongpic
			},
			showplay1(){
				return this.$store.state.showplay
			}
		},
		filters:{
			getsize(input){
				var arr = input.split("{size}");
				return arr.join("")
			},
			nomore(input){
				if(input.length>=18){
					return input.substring(0,18)+"..."
				}else{
					return input
				}
			}
		},
		mounted:function(){
			this.sethot()
		}
	}
</script>
<style scoped>
h4{
	margin-left: 5%;
	float: left;
	height: 50px;
	line-height: 50px;	
	font-weight: bold;
}
.cate{
	margin-top: 80px;
}
.subcate{
	width: 90%;
	margin-left: 5%;
	background: #e0effa;
	height: 70px;
	float: left;
	display: flex;
	font-size: 12px;
	text-align: center;
	line-height: 70px;
	color: #5599c4;
}
.nav{
	width: 33.33%;
	border: 1px solid #fff
}

.treenav{
	width: 100%;
	height: 35px;
	line-height: 35px;
	border:1px solid #fff;
}
.spendAll{
	float: left;
	width: 90%;
	font-size: 12px;
	margin-left: 5%;
}
.bigCate{
	border: 1px solid #fff;
	margin-bottom: 20px;
}
.bigCate h4{
	background-color: #f7f7f7;
	font-size: 12px;
	height: 35px;
	line-height: 35px;
	text-align: center;
	width: 100%;
	margin-left: 0;
}
.subCate{
	display: flex;
	height: 35px;
}
.subCate div{
	text-align: center;
	line-height: 35px;
	width: 33.33%;
	border:1px solid #f7f7f7;
}
.choose{
	display: block;
	float: left;
	font-size: 12px;
	border:1px solid #fff;
	width: 100%;
	height: 40px;
	line-height: 40px;
	text-align: center;
	color: black;
}
.hot{
	margin-left: 0;
}
.hot p{
	color:#999;
	margin-left: 3%
}
.hot div{
	width: 90%;
	height: 50px;
	margin: 5%;
	float: left;
	font-size: 12px;
	position: relative;
}
.love{
	display: block;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: red;
	position:absolute;
	right: -30px;
	top: -17px;
	background: url(//static0.qianqian.com/web/st/img/sprite/ui-list-0e4.png)-112px -205px;
	background-size: 220px;
}
.hot h4{
	margin-left: 5%;
	width: 100%;
}
.loadMore{
	float: left;
	width: 90%;
	margin-left: 0;
	text-align: center;
}
.player{
	position: relative;
}
.player ul{
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 50px;
}
.player ul li{
	height: 30px;
	float: left;
	font-size: 30px;
	line-height: 50px;
	width: 25%;
	text-align: center;
}
.player ul li span{
	font-size: 12px;
	height: 50px;
	line-height: 50px;
	overflow: hidden
}
</style>