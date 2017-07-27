<template>
	<div>
		<div id="page-group"
				<div id="main">

					<div class="layout home layout-current">
						<section class="content">

							<div class="mod-tj">
								<div class="hd">今日推荐</div>
								<div class="container">
									<div class="songlist">

										<div v-for="n in news" class="card url song-541853982 normal log" data-sid="541853982" data-url="/song/541853982" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;recommendsong_wap&quot;}">
											<div class="poster">
												<img  :src="n.pic_small" alt="">
												<span class="btn-play ui-icon-play url song- normal" data-sid="541853982" data-url="/song/541853982"></span>
											</div>
											<div class="info">
												<div class="name">{{n.title}}</div>
											</div>
										</div>

										<!--<div class="card url song-116535157 normal log" data-sid="116535157" data-url="/song/116535157" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;recommendsong_wap&quot;}">
											<div class="poster">
												<img org_src="http://musicdata.baidu.com/data2/pic/116535139/116535139.jpg@s_0,w_500" src="http://musicdata.baidu.com/data2/pic/116535139/116535139.jpg@s_0,w_500" alt="">
												<span class="btn-play ui-icon-play url song- normal" data-sid="116535157" data-url="/song/116535157"></span>
											</div>
											<div class="info">
												<div class="name">Beautiful Light</div>
											</div>
										</div>

										<div class="card url song-297290688 normal log" data-sid="297290688" data-url="/song/297290688" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;recommendsong_wap&quot;}">
											<div class="poster">
												<img org_src="http://musicdata.baidu.com/data2/pic/bf22fc79408e5b262559aa3e552d55dd/297290450/297290450.jpg@s_0,w_500" src="http://musicdata.baidu.com/data2/pic/bf22fc79408e5b262559aa3e552d55dd/297290450/297290450.jpg@s_0,w_500" alt="">
												<span class="btn-play ui-icon-play url song- normal" data-sid="297290688" data-url="/song/297290688"></span>
											</div>
											<div class="info">
												<div class="name">Ocean Eyes</div>
											</div>
										</div>

										<div class="card url song-267409096 normal log" data-sid="267409096" data-url="/song/267409096" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;recommendsong_wap&quot;}">
											<div class="poster">
												<img org_src="http://musicdata.baidu.com/data2/pic/c21d5983b84e4e9c543cb1c0d1c1c5ad/267407722/267407722.jpg@s_0,w_500" src="http://musicdata.baidu.com/data2/pic/c21d5983b84e4e9c543cb1c0d1c1c5ad/267407722/267407722.jpg@s_0,w_500" alt="">
												<span class="btn-play ui-icon-play url song- normal" data-sid="267409096" data-url="/song/267409096"></span>
											</div>
											<div class="info">
												<div class="name">Here We Are</div>
											</div>
										</div>

										<div class="card url song-814293 normal log" data-sid="814293" data-url="/song/814293" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;recommendsong_wap&quot;}">
											<div class="poster">
												<img org_src="http://musicdata.baidu.com/data2/pic/88653998/88653998.jpg@s_0,w_500" src="http://musicdata.baidu.com/data2/pic/88653998/88653998.jpg@s_0,w_500" alt="">
												<span class="btn-play ui-icon-play url song- normal" data-sid="814293" data-url="/song/814293"></span>
											</div>
											<div class="info">
												<div class="name">逆鳞</div>
											</div>
										</div>

										<div class="card url song-123192697 normal log" data-sid="123192697" data-url="/song/123192697" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;recommendsong_wap&quot;}">
											<div class="poster">
												<img org_src="http://musicdata.baidu.com/data2/pic/9bea0301836016bbbc85209ec8772ad1/267528651/267528651.jpg@s_0,w_500" src="http://musicdata.baidu.com/data2/pic/9bea0301836016bbbc85209ec8772ad1/267528651/267528651.jpg@s_0,w_500" alt="">
												<span class="btn-play ui-icon-play url song- normal" data-sid="123192697" data-url="/song/123192697"></span>
											</div>
											<div class="info">
												<div class="name">听</div>
											</div>
										</div>-->

									</div>
								</div>
							</div>

							<div class="mod-albums">
								<div class="hd log url" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;albums&quot;,&quot;sub&quot;:&quot;more&quot;}" data-url="#/albums">
									<h2>新歌速递</h2>
									<div>更多</div>
								</div>
								<div class="container">
									<div class="gallery">
										<div class="scroller">

											<div v-for="a in arrs" class="card url" data-url="#/album/544527746/" data-id="544527746">
												<div class="album">
													<img :src="a.pic_small">
													<span m-on="playall" class="btn-play ui-icon-play-big"></span>
													<div class="name">{{a.title}}</div>
													<div class="author">{{a.artist_name}}</div>
												</div>
											</div>

											<!--<div class="card url" data-url="#/album/548214525/" data-id="548214525">
												<div class="album">
													<img org_src="http://musicdata.baidu.com/data2/pic/909dba76865b69f0d87349f9fb736e09/548212675/548212675.jpg@s_0,w_150" src="http://musicdata.baidu.com/data2/pic/909dba76865b69f0d87349f9fb736e09/548212675/548212675.jpg@s_0,w_150" alt="三生三世十里桃花">
													<span m-on="playall" class="btn-play ui-icon-play-big"></span>
													<div class="name">三生三世十里桃花</div>
													<div class="author">那英</div>
												</div>
											</div>

											<div class="card url" data-url="#/album/548214291/" data-id="548214291">
												<div class="album">
													<img org_src="http://musicdata.baidu.com/data2/pic/89c0064548d5806fa08be5becb36aa78/548211244/548211244.jpg@s_0,w_150" src="http://musicdata.baidu.com/data2/pic/89c0064548d5806fa08be5becb36aa78/548211244/548211244.jpg@s_0,w_150" alt="再也看不见">
													<span m-on="playall" class="btn-play ui-icon-play-big"></span>
													<div class="name">再也看不见</div>
													<div class="author">郭峰</div>
												</div>
											</div>-->

										</div>
									</div>
								</div>
							</div>

							<div class="mod-misad"></div>
							<div class="mod-fm">
								<img m-on="playall" src="//static4.qianqian.com/web/st/img/app/home/mod-sst.jpg" alt="">
							</div>

							<div class="mod-lists ">
								<div class="log url hd" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;listcate&quot;,&quot;sub&quot;:&quot;more&quot;}" data-url="#listcate">
									<h2>音乐榜单</h2>

									<div>更多</div>
								</div>
								<div class="bars">
									<div class="bar on">热歌榜<i></i><span class="gap-line"> </span></div>
									<div class="bar">新歌榜<i></i><span class="gap-line"> </span></div>
									<div class="bar">King榜<i></i></div>
								</div>
								<div class="board panels">
									<div class="panel hotsongs on" data-key="listcate_hotsong">
										<ul class="list">

											<li class="song url  song-276867440 normal" data-sid="276867440" data-url="/song/276867440">
												<div class="poster">
													<img org_src="http://musicdata.baidu.com/data2/pic/d59cab8d47b4ae5cd500cbb67de9cc5c/540108358/540108358.jpg@s_0,w_150" src="http://musicdata.baidu.com/data2/pic/d59cab8d47b4ae5cd500cbb67de9cc5c/540108358/540108358.jpg@s_0,w_150" alt="刚好遇见你">
													<i>01</i>
												</div>

												<div class="icon-trend icon-trend-zero"></div>

												<span class="icon-play-state"></span>
												<div class="info">
													<div class="name">
														刚好遇见你

														<span class="icon-q icon-sq"></span>

													</div>
													<div class="author">李玉刚</div>
												</div>

												<div class="download iconfont icon-download need-active"></div>
											</li>

											<li class="song url  song-274841326 normal" data-sid="274841326" data-url="/song/274841326">
												<div class="poster">
													<img org_src="http://musicdata.baidu.com/data2/pic/cd8dcc4f40cbb37c7dcf0e6c151fbcc6/522916493/522916493.jpg@s_0,w_150" src="http://musicdata.baidu.com/data2/pic/cd8dcc4f40cbb37c7dcf0e6c151fbcc6/522916493/522916493.jpg@s_0,w_150" alt="成都">
													<i>02</i>
												</div>

												<div class="icon-trend icon-trend-zero"></div>

												<span class="icon-play-state"></span>
												<div class="info">
													<div class="name">
														成都

														<span class="icon-q icon-sq"></span>

													</div>
													<div class="author">赵雷</div>
												</div>

												<div class="download iconfont icon-download need-active"></div>
											</li>

											<li class="song url  song-100575177 normal" data-sid="100575177" data-url="/song/100575177">
												<div class="poster">
													<img org_src="http://musicdata.baidu.com/data2/pic/100575000/100575000.jpg@s_0,w_150" src="http://musicdata.baidu.com/data2/pic/100575000/100575000.jpg@s_0,w_150" alt="你还要我怎样">
													<i>03</i>
												</div>

												<div class="icon-trend icon-trend-zero"></div>

												<span class="icon-play-state"></span>
												<div class="info">
													<div class="name">
														你还要我怎样

														<span class="icon-q icon-hq"></span>

													</div>
													<div class="author">薛之谦</div>
												</div>

												<div class="iconfont icon-mv need-active url" data-url="/mv/100575177"></div>

												<div class="download iconfont icon-download need-active"></div>
											</li>

											<li class="song url  song-257535276 normal" data-sid="257535276" data-url="/song/257535276">
												<div class="poster">
													<img org_src="http://musicdata.baidu.com/data2/pic/260368391/260368391.jpg@s_0,w_150" src="http://musicdata.baidu.com/data2/pic/260368391/260368391.jpg@s_0,w_150" alt="大王叫我来巡山">
													<i>04</i>
												</div>

												<div class="icon-trend icon-trend-zero"></div>

												<span class="icon-play-state"></span>
												<div class="info">
													<div class="name">
														大王叫我来巡山

														<span class="icon-q icon-sq"></span>

													</div>
													<div class="author">贾乃亮,甜馨</div>
												</div>

												<div class="download iconfont icon-download need-active"></div>
											</li>

											<li class="song url  song-541680641 normal" data-sid="541680641" data-url="/song/541680641">
												<div class="poster">
													<img org_src="http://musicdata.baidu.com/data2/pic/345a08bf0904eb7f708f9591b50ba1e9/544467658/544467658.jpg@s_0,w_150" src="http://musicdata.baidu.com/data2/pic/345a08bf0904eb7f708f9591b50ba1e9/544467658/544467658.jpg@s_0,w_150" alt="桃花诺 ">
													<i>05</i>
												</div>

												<div class="icon-trend icon-trend-zero"></div>

												<span class="icon-play-state"></span>
												<div class="info">
													<div class="name">
														桃花诺

													</div>
													<div class="author">G.E.M.邓紫棋</div>
												</div>

												<div class="download iconfont icon-download need-active"></div>
											</li>
										</ul>
									</div>
									<div class="panel newsongs" data-key="listcate_newsong">
										<ul class="list">

											<li class="song url  song-544901993 normal" data-sid="544901993" data-url="/song/544901993">
												<div class="poster">
													<img org_src="http://musicdata.baidu.com/data2/pic/631e8e1ab23c3e9a4a9324aa0aa8fc62/544901981/544901981.jpg@s_0,w_150" src="http://musicdata.baidu.com/data2/pic/631e8e1ab23c3e9a4a9324aa0aa8fc62/544901981/544901981.jpg@s_0,w_150" alt="花儿为你开">
													<i>01</i>
												</div>

												<div class="icon-trend icon-trend-zero"></div>

												<span class="icon-play-state"></span>
												<div class="info">
													<div class="name">
														花儿为你开

														<span class="icon-q icon-sq"></span>

													</div>
													<div class="author">贺宣</div>
												</div>

												<div class="download iconfont icon-download need-active"></div>
											</li>

											<li class="song url  song-541680641 normal" data-sid="541680641" data-url="/song/541680641">
												<div class="poster">
													<img org_src="http://musicdata.baidu.com/data2/pic/345a08bf0904eb7f708f9591b50ba1e9/544467658/544467658.jpg@s_0,w_150" src="http://musicdata.baidu.com/data2/pic/345a08bf0904eb7f708f9591b50ba1e9/544467658/544467658.jpg@s_0,w_150" alt="桃花诺 ">
													<i>02</i>
												</div>

												<div class="icon-trend icon-trend-zero"></div>

												<span class="icon-play-state"></span>
												<div class="info">
													<div class="name">
														桃花诺

													</div>
													<div class="author">G.E.M.邓紫棋</div>
												</div>

												<div class="download iconfont icon-download need-active"></div>
											</li>

											<li class="song url  song-544693110 normal" data-sid="544693110" data-url="/song/544693110">
												<div class="poster">
													<img org_src="http://musicdata.baidu.com/data2/pic/96982074ad892fc882e6231a92b6244d/545077542/545077542.jpg@s_0,w_150" src="http://musicdata.baidu.com/data2/pic/96982074ad892fc882e6231a92b6244d/545077542/545077542.jpg@s_0,w_150" alt="鼓声若响">
													<i>03</i>
												</div>

												<div class="icon-trend icon-trend-up"></div>

												<span class="icon-play-state"></span>
												<div class="info">
													<div class="name">
														鼓声若响

														<span class="icon-q icon-sq"></span>

													</div>
													<div class="author">齐秦</div>
												</div>

												<div class="download iconfont icon-download need-active"></div>
											</li>

											<li class="song url  song-545259487 normal" data-sid="545259487" data-url="/song/545259487">
												<div class="poster">
													<img org_src="http://musicdata.baidu.com/data2/pic/ee8b04389d3d209450b1b64c9bf43c57/545258119/545258119.jpeg@s_0,w_150" src="http://musicdata.baidu.com/data2/pic/ee8b04389d3d209450b1b64c9bf43c57/545258119/545258119.jpeg@s_0,w_150" alt="如果我爱你">
													<i>04</i>
												</div>

												<div class="icon-trend icon-trend-up"></div>

												<span class="icon-play-state"></span>
												<div class="info">
													<div class="name">
														如果我爱你

														<span class="icon-q icon-sq"></span>

													</div>
													<div class="author">周冬雨,张一山</div>
												</div>

												<div class="download iconfont icon-download need-active"></div>
											</li>

											<li class="song url  song-546920050 normal" data-sid="546920050" data-url="/song/546920050">
												<div class="poster">
													<img org_src="http://musicdata.baidu.com/data2/pic/13368d71ca20ba84b9198c4337b23e8f/547124789/547124789.jpg@s_0,w_150" src="http://musicdata.baidu.com/data2/pic/13368d71ca20ba84b9198c4337b23e8f/547124789/547124789.jpg@s_0,w_150" alt="越过山丘">
													<i>05</i>
												</div>

												<div class="icon-trend icon-trend-up"></div>

												<span class="icon-play-state"></span>
												<div class="info">
													<div class="name">
														越过山丘

														<span class="icon-q icon-sq"></span>

													</div>
													<div class="author">杨宗纬</div>
												</div>

												<div class="download iconfont icon-download need-active"></div>
											</li>
										</ul>
									</div>
									<div class="panel kingsongs" data-key="listcate_kingsong">
										<ul class="list">
											<li class="king-timer" data-refresh="1501038000000">
												<span class="king-icon"></span>
												<span class="king-text">榜单数据将于<span class="king-time" style="display: inline;"><em>01</em>分<em>55</em>秒</span>后更新</span>
											</li>

											<li class="song url  song-541463725 normal" data-sid="541463725" data-url="/song/541463725">
												<div class="poster">
													<img org_src="http://musicdata.baidu.com/data2/pic/eb3bb619bdf02ab57cc86a47187af013/541463581/541463581.jpg@s_0,w_150" src="http://musicdata.baidu.com/data2/pic/eb3bb619bdf02ab57cc86a47187af013/541463581/541463581.jpg@s_0,w_150" alt="敢爱就来">
													<i>01</i>
												</div>

												<div class="icon-trend icon-trend-zero"></div>

												<span class="icon-play-state"></span>
												<div class="info">
													<div class="name">
														敢爱就来

														<span class="icon-k"></span>

														<span class="icon-q icon-sq"></span>

														<span class="icon-charge"></span>

													</div>
													<div class="author">冯建宇</div>
												</div>

												<div class="download iconfont icon-download need-active"></div>
											</li>

											<li class="song url  song-545927435 normal" data-sid="545927435" data-url="/song/545927435">
												<div class="poster">
													<img org_src="http://musicdata.baidu.com/data2/pic/411d884db2da5dc8827a0a16e99d6ddb/545926984/545926984.jpg@s_0,w_150" src="http://musicdata.baidu.com/data2/pic/411d884db2da5dc8827a0a16e99d6ddb/545926984/545926984.jpg@s_0,w_150" alt="思念有重量 ">
													<i>02</i>
												</div>

												<div class="icon-trend icon-trend-zero"></div>

												<span class="icon-play-state"></span>
												<div class="info">
													<div class="name">
														思念有重量

														<span class="icon-k"></span>

														<span class="icon-q icon-sq"></span>

														<span class="icon-charge"></span>

													</div>
													<div class="author">冯建宇</div>
												</div>

												<div class="download iconfont icon-download need-active"></div>
											</li>

											<li class="song url  song-542454254 normal" data-sid="542454254" data-url="/song/542454254">
												<div class="poster">
													<img org_src="http://musicdata.baidu.com/data2/pic/9b25eaf5b31665bffb6f88825f6f8ef6/541604548/541604548.jpg@s_0,w_150" src="http://musicdata.baidu.com/data2/pic/9b25eaf5b31665bffb6f88825f6f8ef6/541604548/541604548.jpg@s_0,w_150" alt="Like I Do">
													<i>03</i>
												</div>

												<div class="icon-trend icon-trend-zero"></div>

												<span class="icon-play-state"></span>
												<div class="info">
													<div class="name">
														Like I Do

														<span class="icon-k"></span>

														<span class="icon-q icon-sq"></span>

														<span class="icon-charge"></span>

													</div>
													<div class="author">SNH48鞠婧祎</div>
												</div>

												<div class="download iconfont icon-download need-active"></div>
											</li>

											<li class="song url  song-542455161 normal" data-sid="542455161" data-url="/song/542455161">
												<div class="poster">
													<img org_src="http://musicdata.baidu.com/data2/pic/9b25eaf5b31665bffb6f88825f6f8ef6/541604548/541604548.jpg@s_0,w_150" src="http://musicdata.baidu.com/data2/pic/9b25eaf5b31665bffb6f88825f6f8ef6/541604548/541604548.jpg@s_0,w_150" alt="听到请回答">
													<i>04</i>
												</div>

												<div class="icon-trend icon-trend-zero"></div>

												<span class="icon-play-state"></span>
												<div class="info">
													<div class="name">
														听到请回答

														<span class="icon-k"></span>

														<span class="icon-q icon-sq"></span>

														<span class="icon-charge"></span>

													</div>
													<div class="author">SNH48鞠婧祎</div>
												</div>

												<div class="download iconfont icon-download need-active"></div>
											</li>

										</ul>
									</div>

									<div class="more-songs url" data-url="#/songs/hot/">
										查看该榜单&gt;
									</div>
								</div>
							</div>

							<div class="mod-songlists">
								<div class="hd  log url" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;songlist&quot;,&quot;sub&quot;:&quot;more&quot;}" data-url="#/songlists">
									<h2>热门歌单</h2>

									<div>更多</div>
								</div>
								<div class="container">
									<div class="wrapper">

										<div v-for="r in re" class="card log url" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;hotsonglist&quot;,&quot;sub&quot;:1}" data-url="#/songlist/365541765/" data-title="让你元气满满的欢脱节奏">

											<div class="card-slider">
												<div class="poster" data-id="365541765">
													<img :src="r.pic_small" alt="让你元气满满的欢脱节奏">
												</div>
											</div>
											<div class="info">
												<div class="name">{{r.album_title}}</div>
												<div class="detail">

													<div class="tags">

														<!--<span>华语</span>

														<span>流行</span>

														<span>快乐</span>-->

													</div>

													<div class="ting-num"><i></i><span></span></div>
												</div>
											</div>
											<div class="icon-arr">

											</div>
										</div>

										<!--<div class="card log url" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;hotsonglist&quot;,&quot;sub&quot;:2}" data-url="#/songlist/401919196/" data-title="pop-punk|朋克不是少数人的专利">

											<div class="card-slider">
												<div class="poster" data-id="401919196">
													<img org_src="http://musicugc.cdn.qianqian.com/ugcdiy/pic/9ba21649d19b88a89fd53af10a342c16.jpg" src="http://musicugc.cdn.qianqian.com/ugcdiy/pic/9ba21649d19b88a89fd53af10a342c16.jpg" alt="pop-punk|朋克不是少数人的专利">
												</div>
											</div>
											<div class="info">
												<div class="name">pop-punk|朋克不是少数人的专利</div>
												<div class="detail">

													<div class="tags">

														<span>欧美</span>

														<span>摇滚</span>

														<span>朋克</span>

													</div>

													<div class="ting-num"><i></i><span>1636</span></div>
												</div>
											</div>
											<div class="icon-arr">

											</div>
										</div>

										<div class="card log url" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;hotsonglist&quot;,&quot;sub&quot;:3}" data-url="#/songlist/367204706/" data-title="【突破次元】超神必备游戏专用BGM">

											<div class="card-slider">
												<div class="poster" data-id="367204706">
													<img org_src="http://musicugc.cdn.qianqian.com/ugcdiy/pic/44ad8d27768dd6f1622d41b75ee47324.jpg" src="http://musicugc.cdn.qianqian.com/ugcdiy/pic/44ad8d27768dd6f1622d41b75ee47324.jpg" alt="【突破次元】超神必备游戏专用BGM">
												</div>
											</div>
											<div class="info">
												<div class="name">【突破次元】超神必备游戏专用BGM</div>
												<div class="detail">

													<div class="tags">

														<span>ACG</span>

														<span>游戏</span>

														<span>兴奋</span>

													</div>

													<div class="ting-num"><i></i><span>69077</span></div>
												</div>
											</div>
											<div class="icon-arr">

											</div>
										</div>

										<div class="card log url" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;hotsonglist&quot;,&quot;sub&quot;:4}" data-url="#/songlist/405500598/" data-title="古风|戏子无情，却缘定倾心">

											<div class="card-slider">
												<div class="poster" data-id="405500598">
													<img org_src="http://musicugc.cdn.qianqian.com/ugcdiy/pic/497a1d6af6ed8cb2a1ae436721e33fcf.jpg" src="http://musicugc.cdn.qianqian.com/ugcdiy/pic/497a1d6af6ed8cb2a1ae436721e33fcf.jpg" alt="古风|戏子无情，却缘定倾心">
												</div>
											</div>
											<div class="info">
												<div class="name">古风|戏子无情，却缘定倾心</div>
												<div class="detail">

													<div class="tags">

														<span>华语</span>

														<span>古风</span>

													</div>

													<div class="ting-num"><i></i><span>3522</span></div>
												</div>
											</div>
											<div class="icon-arr">

											</div>
										</div>

										<div class="card log url" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;hotsonglist&quot;,&quot;sub&quot;:5}" data-url="#/songlist/481809952/" data-title="【突破次元】经典日式剧情游戏用曲">

											<div class="card-slider">
												<div class="poster" data-id="481809952">
													<img org_src="http://musicugc.cdn.qianqian.com/ugcdiy/pic/5bd3955719873d08d0d44f69009f6d1f.jpg" src="http://musicugc.cdn.qianqian.com/ugcdiy/pic/5bd3955719873d08d0d44f69009f6d1f.jpg" alt="【突破次元】经典日式剧情游戏用曲">
												</div>
											</div>
											<div class="info">
												<div class="name">【突破次元】经典日式剧情游戏用曲</div>
												<div class="detail">

													<div class="tags">

														<span>日语</span>

														<span>ACG</span>

														<span>游戏</span>

													</div>

													<div class="ting-num"><i></i><span>441</span></div>
												</div>
											</div>
											<div class="icon-arr">

											</div>
										</div>

										<div class="card log url" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;hotsonglist&quot;,&quot;sub&quot;:6}" data-url="#/songlist/402171275/" data-title="别了，我们的少年时代">

											<div class="card-slider">
												<div class="poster" data-id="402171275">
													<img org_src="http://musicugc.cdn.qianqian.com/ugcdiy/pic/7375d676c59dc1073ec0bbe9fa808124.jpg" src="http://musicugc.cdn.qianqian.com/ugcdiy/pic/7375d676c59dc1073ec0bbe9fa808124.jpg" alt="别了，我们的少年时代">
												</div>
											</div>
											<div class="info">
												<div class="name">别了，我们的少年时代</div>
												<div class="detail">

													<div class="tags">

														<span>流行</span>

														<span>美好</span>

													</div>

													<div class="ting-num"><i></i><span>1546</span></div>
												</div>
											</div>
											<div class="icon-arr">

											</div>
										</div>-->

									</div>
								</div>
							</div>

							<div class="mod-mvs">
								<div class="hd log url" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;recommendmvmore_wap&quot;}" data-url="#/mv">
									<h2>推荐MV</h2>

									<div>更多</div>
								</div>
								<div class="container">
									<div class="wrapper">

										<div class="card log url" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;recommendmv_wap&quot;,&quot;sub&quot;:1}" data-url="/playmv/337620259" data-title="Despacito (Chinese Cover)">

											<div class="card-slider">
												<div class="poster" data-id="337620259">
													<img org_src="http://musicdata.baidu.com/data2/pic/3005a9c12a5e98ecf04dccdf15354bb2/337626094/337626094.jpg" src="http://musicdata.baidu.com/data2/pic/3005a9c12a5e98ecf04dccdf15354bb2/337626094/337626094.jpg" alt="Despacito (Chinese Cover)">
												</div>
											</div>
											<div class="info">
												<div class="name">Despacito (Chinese Cover)</div>
												<div class="artist">Jason Chen</div>
											</div>
										</div>

										<div class="card log url" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;recommendmv_wap&quot;,&quot;sub&quot;:2}" data-url="/playmv/337620393" data-title="Paisaje">

											<div class="card-slider">
												<div class="poster" data-id="337620393">
													<img org_src="http://musicdata.baidu.com/data2/pic/e89f40a158aabd4821fb64600b0a2bae/337649463/337649463.jpg" src="http://musicdata.baidu.com/data2/pic/e89f40a158aabd4821fb64600b0a2bae/337649463/337649463.jpg" alt="Paisaje">
												</div>
											</div>
											<div class="info">
												<div class="name">Paisaje</div>
												<div class="artist">Vicentico</div>
											</div>
										</div>

										<div class="card log url" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;recommendmv_wap&quot;,&quot;sub&quot;:3}" data-url="/playmv/337620141" data-title="Drap, masuj, miziaj">

											<div class="card-slider">
												<div class="poster" data-id="337620141">
													<img org_src="http://musicdata.baidu.com/data2/pic/349796939c762c013f8482c967cc9420/337643954/337643954.jpg" src="http://musicdata.baidu.com/data2/pic/349796939c762c013f8482c967cc9420/337643954/337643954.jpg" alt="Drap, masuj, miziaj">
												</div>
											</div>
											<div class="info">
												<div class="name">Drap, masuj, miziaj</div>
												<div class="artist">欧美群星</div>
											</div>
										</div>

										<div class="card log url" data-log="{&quot;page&quot;:&quot;home&quot;,&quot;pos&quot;:&quot;recommendmv_wap&quot;,&quot;sub&quot;:4}" data-url="/playmv/337620163" data-title="追光者(Cover)">

											<div class="card-slider">
												<div class="poster" data-id="337620163">
													<img org_src="http://musicdata.baidu.com/data2/pic/e99c45a885b7db194130e564b71d4f17/337623966/337623966.jpg" src="http://musicdata.baidu.com/data2/pic/e99c45a885b7db194130e564b71d4f17/337623966/337623966.jpg" alt="追光者(Cover)">
												</div>
											</div>
											<div class="info">
												<div class="name">追光者(Cover)</div>
												<div class="artist">Jason Chen</div>
											</div>
										</div>

									</div>
								</div>
							</div>

							<div class="mod-misshop"></div>

							<!---->
						</section>
						<footer id="footer" class="c_bb_1">
							<a class="log url" data-log="{&quot;page&quot;:&quot;bottom&quot;,&quot;pos&quot;:&quot;feedback&quot;}" href="#/feedback">意见反馈</a>
						</footer>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
//				img:require('../images/jiazai.jpg')
//				title:[
//					{name:"让你元气满满的欢脱节奏"},
//					{name1:"精灵系女"}
//				]
			}
		},
		computed: {
			search() {
				return this.$store.state.count
			},
			//推荐
			news() {
				return this.$store.state.news
			},
			//新歌
			arrs() {
				return this.$store.state.arrs
			},
			//热歌
			re() {
				return this.$store.state.re
			}
		},
		methods: {
			loadMore() {
				this.$store.dispatch("setChange")
			},
		},
		mounted() {
			this.loadMore();
		},
	}
</script>

<style scoped>

</style>