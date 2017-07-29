;(function(){
    $.ajax({
             type:"get",
             url:"http://localhost:1233/search",
             async:true,
             dataType:"json",
             success:function(data){
              console.log(data)
               var html = data.a.map(function(item){
                  return `<tr>
                <td><input type="checkbox" /></td>
                <td class="Id">${item.artist_id}</td>
                <td><a href="#">${item.artist_name}</a></td>
                <td>${item.country}</td>
                <td class="am-hide-sm-only">${item.language}</td>
                <td class="am-hide-sm-only">${item.title}</td>
                <td>
                  <div class="am-btn-toolbar">
                    <div class="am-btn-group am-btn-group-xs">
                      <div class="am-btn am-btn-default am-btn-xs am-text-secondary bianji" id="${item.artist_id}"><span class="am-icon-pencil-square-o"></span> 编辑</div>
                      <button class="am-btn am-btn-default am-btn-xs am-hide-sm-only"><span class="am-icon-copy"></span> 复制</button>
                      <div class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only cut" id="${item.artist_id}"><span class="am-icon-trash-o"></span> 删除</div>
                    </div>
                  </div>
                </td>
              </tr>           `
               })
               $(".tbo").append(html)
               
               
               
               $(".tbo").on('click','.cut',function(){
                $(this).closest('tr').remove();
                console.log(this.id)
                    $.ajax({
                       type:"post",
                       url:"http://localhost:1233/delete",
                       async:true,
                       data:{
                        id:this.id
                       },
                       dataType:"json",
                       success:function(data){
                           console.log(data)
                      }
                   })
                })


            

             

//            $(".am-fr").on('click','li',function(){
//                var pageNum = $(this).html();
//                console.log(pageNum)
//                $(this).addClass('am-active')
//              // $(this).closest('tr').remove();
//              // console.log(this.id)
//                  $.ajax({
//                     type:"post",
//                     url:"http://localhost:1234/changeNum",
//                     async:true,
//                     data:{
//                      page:pageNum
//                     },
//                     dataType:"json",
//                     success:function(data){
//                        var html = data.d.map(function(item){
//                return `<tr filter:{name:name}>
//              <td><input type="checkbox" /></td>
//              <td class="Id">${item.id}</td>
//              <td><a href="#">${item.Name}</a></td>
//              <td>${item.QQ}</td>
//              <td class="am-hide-sm-only">${item.Email}</td>
//              <td class="am-hide-sm-only">${item.Phone}</td>
//              <td>
//                <div class="am-btn-toolbar">
//                  <div class="am-btn-group am-btn-group-xs">
//                    <div class="am-btn am-btn-default am-btn-xs am-text-secondary bianji" id="${item.id}"><span class="am-icon-pencil-square-o"></span> 编辑</div>
//                    <button class="am-btn am-btn-default am-btn-xs am-hide-sm-only"><span class="am-icon-copy"></span> 复制</button>
//                    <div class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only cut" id="${item.id}"><span class="am-icon-trash-o"></span> 删除</div>
//                  </div>
//                </div>
//              </td>
//            </tr>           `
//             })
//              $(".tbo").html(html)
//            }
//         })
//   })





             $(".tbo").on('click','.bianji',function(){

                console.log(this.id)

                $(location).attr('href','admin-user.html?id='+this.id);
             })

         }
    })
})();