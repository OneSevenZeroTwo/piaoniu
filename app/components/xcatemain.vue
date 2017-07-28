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
					<div class="treenav"><a href="#/subcate/qingge">情歌对唱</a></div>
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
			<div v-for="n in hot" >
				<a href="#/detail" @click="detail(n.artist_name,n.pic_big,n.title)"><img :src="n.pic_big" alt=""></a>
				<p>{{n.author}}</p>
				<i></i>
				<span>{{n.title}}</span>
			</div>
			<p class="loadMore" @click="sethot()">加载更多</p>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				isSpend:false,
				spendWord:"展开全部分类"
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
			}
		},
		computed:{
			hot(){
				console.log(this.$store.state.hot)
				return this.$store.state.hot
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
	width: 40%;
	margin: 5%;
	float: left;
	font-size: 12px;
	position: relative;
}
.hot div i{
	display: block;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: red;
	position:absolute;
	right: 8px;
	top: 5rem;
	background: url(//static0.qianqian.com/web/st/img/sprite/ui-list-0e4.png)-137px -114px;
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
</style>