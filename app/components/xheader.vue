<template>
	<div>
		<header id="header" class="animated slideDown headroom--top">
    <div class="bar bar-form">
        <div class="left"></div>
        <div class="title">百度音乐</div>
        <div class="right">
                <input type="search" autocomplete="off" name="query" value="" placeholder="搜歌曲">
                <div class="btn-search-icon"></div>
        </div>
    </div>

    
    <div class="nav-wrap">
        <ul class="sub-nav">
            <li><a href="#" class="recommend" @click="bottomLight()">推荐</a></li>
            <li><a href="#/cate" class="cate">分类</a></li>
            <li><a href="#/bill" class="bill">榜单</a></li>
            <li><a href="#/artists" class="artists">歌手</a></li>
            <li><a href="#/mv" class="mv">mv</a></li>
        </ul>
    </div>
</header>
	</div>
</template>
<script>
export default{
	computed:{
	},
	methods:{
		bottomLight(){
			console.log(this.$store.state.bottomLight)
		}	
	}
}
</script>
<style scoped>
#header .bar{
	display: -webkit-flex;
    display: flex;
    width: 100%;
    height: 40px;
    background-color: #f8f8f8;
    text-align: center;
    line-height: 40px;
}
#header .right{
	padding-top: 9px
}
#header .right input{
	width: 80px;
	height: 22px;
	float: left;
    border-radius: 8px;
}
#header .btn-search-icon{
	float: right;
}
#header .bar div{
    width: 33%;
    height: 36px;
}
#header .sub-nav li{
	float: left;
	width: 20%;
	text-align: center;
	list-style: none;
}
#header .sub-nav li a{
	color: black
}
</style>