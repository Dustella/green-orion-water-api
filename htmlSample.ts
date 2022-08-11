export const PermenantCodeHtml = `<!DOCTYPE html>


<html>

<head>
	<meta charset="utf-8">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="initial-scale=1, maximum-scale=1">
	<link rel="shortcut icon" href="/favicon.ico">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta content="telephone=no,email=no,adress=no" name="format-detection" />
	<link href="/water/jsp/app/css/sm.min.css" type="text/css" rel="stylesheet">
	<link href="/water/jsp/app/css/style.css" type="text/css" rel="stylesheet">

	<title>大葱智能云平台</title>
</head>

<body class="body-graybg">
	<div class="page-group">
		<div class="page">
			<!-- title -->
			<header class="bar bar-nav">
				<a class="icon icon-left pull-left mc-text"
					href="javascript:tool.goUrl('/water/app/index/index.action')"></a>
				<h1 class="title">我的固定码</h1>
			</header>

			<!-- content -->
			<div class="content">
				<!--title-->
				<div class="content-block-title">当前固定码</div>
				<!--detail-->
				<div class="list-block ">



					<ul style="margin-top: .2rem;">
						<li class="item-content">
							<div class="item-inner">
								<div class="item-title">
									<span>绑定学校</span>
								</div>
								<div class="item-after"><span style="font-size: 1rem;">下北泽大学</span></div>
							</div>
						</li>
						<li class="item-content">
							<div class="item-inner">
								<div class="item-title">
									<span>固定码</span>
								</div>
								<div class="item-after"><span style="font-size: 1rem;">11451419</span></div>
							</div>
						</li>
						<li class="item-content">
							<div class="item-inner">
								<div class="item-title">
									<span>推送类型</span>
								</div>
								<div class="item-after"><span>

													不推送消息
													
													
												
											</span></div>
							</div>
						</li>
						<li class="item-content">
							<div class="item-inner">
								<div class="item-title">
									<span>截止时间</span>
								</div>
								<div class="item-after"><span>2023-05-30 12:41</span></div>
							</div>
						</li>
					</ul>
					<div class="content-block">
						<div class="row">
							<div class="col-100">
								<a href="#" class="button button-big button-fill" style="background-color: #d9534f;"
									onclick="deleteCode('7ac447810f7e4028a4320b033e8927b6')">删除固定码</a>
							</div>
						</div>
					</div>


				</div>

				<h4 style="text-align: center;line-height: 0.4rem;height: 0rem;color: #fb4646">—— 固定码须知 ——</h4>
				<ul class="mainmenu" style="margin-top: 0" id="NOTICE">
					<li style="width: 100%">
						<div class="card">
							<div class="card-content">
								<div class="card-content-inner">
									1.固定码的设置不能过于简单，不可转告他人！<br>
							    		2.为保证您的账户安全，固定码至截止日期后，自动作废，您可重新设置！<br>
							    		3.如果其他用户设置了与您一样的固定码，该固定码将作废且双方均不可使用，短期内不允许设置此码，需要您重新设置固定码！<br>
							    		4.一个固定码不能同时在多个设备上打水！<br>
							    		5.建议使用随机码，固定码存在被盗风险!<br>
									<span style="color: red;">6.使用固定码时请确保账户余额大于2元！</span>
								</div>
							</div>
						</div>
					</li>
				</ul>


			</div>

		</div>
	</div>
</body>
<script type='text/javascript' src='https://g.alicdn.com/sj/lib/zepto/zepto.min.js' charset='utf-8'></script>
<script type="text/javascript" src="/water/js/common/commToolWx.js?V=180226"></script>
<script type='text/javascript' src='https://g.alicdn.com/msui/sm/0.6.2/js/sm.min.js' charset='utf-8'></script>
<script type="text/javascript" src="/water/js/common/validateToolWx.js"></script>
<script type="text/javascript">
	function deleteCode(id){
		$.confirm('确认要删除固定码吗？', function() {
			$.ajax({
				type : 'post',
				url : 'delete.action',
				async: false,
				data : {
					'ID' : id
				},
				dataType : 'json',
				success : function(data, textStatus) {
					if (data.success) {
						$.alert('删除成功', function() {
							tool.goUrl('list.action');
						});
					} else {
						$.alert(data.message);
					}
				},
				error : function(data, textStatus) {
					alert('删除失败');
				}

			});
		}, function() {

		});
		
	}
	
</script>

</html>`;

export const TempCodeHtml = `<!DOCTYPE html >

<html>

<head>
<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="initial-scale=1, maximum-scale=1">
<link rel="shortcut icon" href="/favicon.ico">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta content="telephone=no,email=no,adress=no" name="format-detection"/>
<link href="/water/jsp/app/css/sm.min.css" type="text/css" rel="stylesheet">
<link href="/water/jsp/app/css/style.css" type="text/css" rel="stylesheet">

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<meta content="telephone=no" name="format-detection" />
<meta http-equiv="pragma" content="no-store">
<meta http-equiv="Cache-Control" content="no-cache">
<title>???????</title>

<link href="css/sm.min.css" type="text/css" rel="stylesheet">
<link href="css/style.css" type="text/css" rel="stylesheet">
<style type="text/css">
li {
	margin-bottom: 5px;
	background-color: #fff;
	box-shadow: 0 .05rem .1rem rgba(0, 0, 0, .3);
	border-radius: 4px;
}
.card-content-inner{
	box-shadow: 0 .05rem .1rem rgba(0, 0, 0, .3)!important;
}
ul {
	background-color: #EEEEEE !important;
}

.card {
	box-shadow: none !important;
}
.item-inner{
	background-image: none!important;
	padding-right: 0.5rem!important;
	margin-left: 0px!important;
	min-height: 2.7rem!important;
}
.item-after{
	max-height: 2.5rem!important;
}
.coupon_text{
	background-color: orange;
	color: white;
	padding-top: 0px;
	padding-bottom: 0px;
	padding-left: 2px;
	padding-right: 2px;
}
</style>
</head>

<body class="body-graybg">
	<div class="page-group">
		<div class="page" id="consumeList">
			<!-- title -->
			<header class="bar bar-nav">
				<a class="icon icon-left pull-left mc-text external"
					href="/water/app/index/index.action" ></a>
				<h1 class="title">?????</h1>
			</header>

			<!-- content -->
			<div class="content">
				<div class="content-block-title">???</div>

				<div class="card">
					<div class="card-content">
						<div class="list-block">
							<ul id="FETCH_CODE">
								
									<li><a href="#" class="item-link item-content">
										<div class="item-media"></div>
										<div class="item-inner">
											<div class="item-title" style="font-size: 0.8rem;">
												1688
												
											</div>
											<div class="item-after" style="line-height: 1.8;">2022-08-03 15:49:40<br>????99??</div>
										</div>
									</a></li>
								
									<li><a href="#" class="item-link item-content">
										<div class="item-media"></div>
										<div class="item-inner">
											<div class="item-title" style="font-size: 0.8rem;">
												5105
												
											</div>
											<div class="item-after" style="line-height: 1.8;">2022-08-03 16:43:35<br>????152??</div>
										</div>
									</a></li>
								
									<li><a href="#" class="item-link item-content">
										<div class="item-media"></div>
										<div class="item-inner">
											<div class="item-title" style="font-size: 0.8rem;">
												7391
												
											</div>
											<div class="item-after" style="line-height: 1.8;">2022-08-03 16:53:58<br>????163??</div>
										</div>
									</a></li>
								
							</ul>
						</div>
					</div>
				</div>


				<div class="card" style="height: 0px;">
					<div class="card-content-inner" style="background-color: #fff;border-radius: 4px;">
						<div class="content-block"
							style="padding: 20px;">
							<p>????????????????????????????????</p>
							<p style="color:red;">??????240??????????</p>
							<div class="row">
								<div class="col-100">
									<a href="#" class="button button-big button-fill mc-bg"
										onclick="getFectchCode()">?????</a>
								</div>
							</div>
						</div>

					</div>
				</div>
				<!--detail-->




			</div>
		</div>
		<script type='text/javascript' src='https://g.alicdn.com/sj/lib/zepto/zepto.min.js' charset='utf-8'></script>
<script type="text/javascript" src="/water/js/common/commToolWx.js?V=180226"></script>
<script type='text/javascript' src='https://g.alicdn.com/msui/sm/0.6.2/js/sm.min.js' charset='utf-8'></script>
<script type="text/javascript" src="/water/js/common/validateToolWx.js"></script>
</body>
<script type="text/javascript">
	
function scanCode(){
	location.href = 'saoma.action';
}
	
	function openSaoMa() {
		location.href="/water/jsp/app/customer/AppCustomerCharge/AppCustomerCharge_saomaTest.jsp"
	}

	function getFectchCode() {
		$
				.confirm(
						"????????",
						function() {
							$.showPreloader();
							$
									.ajax({
										url : 'getFetchWaterCode.action',
										type : 'post',
										dataType : 'json',
										success : function(data) {
											if (data.success) {
												var str = data.message
														.split(',');
												var isCoupon = str[2];
												$("#FETCH_CODE")
														.append(
																'<li>'
																		+ '<a href="#" class="item-link item-content">'
																		+ '<div class="item-media"></div>'
																		+ '<div class="item-inner">'
																		+ '<div class="item-title"  style="font-size: 0.8rem;">'
																		+str[0]
																		+ (isCoupon=='true'?'<span class="coupon_text">?</span>':'')
																		+'</div>'
																		+ '<div class="item-after">'+str[1]+'<br>????240??</div>'
																		+ '</div>'
																		+ '</a>'
																		+ '</li>');
												$.hidePreloader();
											} else {
												if(data.message.indexOf("????")!=-1){
													$.alert(data.message,function(){
														tool.goUrl('/water/app/customer/AppCustomerCharge/chargeList.action');
													});
													$.hidePreloader();
												}else if(data.message=='??????'){
													$.alert(data.message,function(){
														tool.goUrl('/water/app/usercenter/ownerCenter.action');
													});
													$.hidePreloader();
												}else{
													$.alert(data.message,function(){
													});
													$.hidePreloader();
												}
											}
										}

									});

						})

	}
	$(function() {
		$(document).on('click', '.open-preloader', function() {
			$.showPreloader();
		});
		$.init();
	})
</script>
</html>
`;

export const InfoHtml = `
<!DOCTYPE html > 
 

<html> 
 <head> 
  <meta charset="utf-8"> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
<meta name="viewport" content="initial-scale=1, maximum-scale=1"> 
<link rel="shortcut icon" href="/favicon.ico"> 
<meta name="apple-mobile-web-app-capable" content="yes"> 
<meta name="apple-mobile-web-app-status-bar-style" content="black"> 
<meta content="telephone=no,email=no,adress=no" name="format-detection"/> 
<link href="/water/jsp/app/css/sm.min.css" type="text/css" rel="stylesheet"> 
<link href="/water/jsp/app/css/style.css" type="text/css" rel="stylesheet"> 
 
  <title>个人中心</title> 
  <link rel="stylesheet" href="/water/js/sel/iosSelect.css"> 
  <style type="text/css"> 
   .ios-select-widget-box{ 
    z-index: 99999!important; 
   } 
  </style> 
 </head> 
 
 <body class="body-graybg"> 
  <div class="page-group"> 
   <div class="page"> 
    <!-- title --> 
    <header class="bar bar-nav"> 
     <a class="icon icon-left pull-left mc-text" href="javascript:tool.goUrl('/water/app/index/index.action')"></a> 
     <h1 class="title">个人中心</h1> 
    </header> 
 
    <!-- content --> 
    <div class="content"> 
     <!--detail--> 
     <div class="list-block " style="margin-top: 0;" id="centerMenu"> 
      <ul> 
       <li class="item-content" showInfo> 
        <div class="item-inner"> 
         <div class="item-title"> 
          <span>手机号码</span> 
         </div> 
         <div class="item-after"><span>11451419198</span></div> 
        </div> 
       </li> 
       <li class="item-content" showInfo> 
        <div class="item-inner"> 
         <div class="item-title"> 
          <span>姓名</span> 
         </div> 
         <div class="item-after"><span> 
          
           
           田所浩二 
           
           
          
         </span></div> 
        </div> 
       </li> 
       <li class="item-content" showInfo> 
        <div class="item-inner"> 
         <div class="item-title"> 
          <span>账户余额</span> 
         </div> 
         <div class="item-after"><span>19.19元</span></div> 
        </div> 
       </li> 
       <li class="item-content item-link" showInfo> 
        <div class="item-inner"  onclick="changePoint()"> 
         <div class="item-title"> 
          <span>绑定学校</span> 
         </div> 
         <div class="item-after"><span> 
           
          下北泽大学 
          
         </span></div> 
        </div> 
       </li> 
       <li class="item-content item-link"> 
        <div class="item-inner"  onclick="tool.goUrl('rechargeList.action')"> 
         <div class="item-title"> 
          <span>充值记录</span> 
         </div> 
         <div class="item-after"><span> 
                    
         </span></div> 
        </div> 
       </li> 
        
         <li class="item-content item-link"> 
          <div class="item-inner"  onclick="tool.goUrl('accountDistroy.action')"> 
           <div class="item-title"> 
            <span>账号注销退款</span> 
           </div> 
           <div class="item-after"><span> 
                      
           </span></div> 
          </div> 
         </li> 
        
        
       <li class="item-content item-link"> 
        <div class="item-inner" onclick="tool.goUrl('failEvent.action')"> 
         <div class="item-title"> 
          <span>故障上报</span> 
         </div> 
         <div class="item-after"><span> 
                     
          </span></div> 
        </div> 
       </li> 
       <li class="item-content" id="curr_version"> 
        <div class="item-inner"> 
         <div class="item-title"> 
          <span>当前版本</span> 
         </div> 
         <div class="item-after" id="version_info"></div> 
        </div> 
       </li> 
      </ul> 
     </div> 
     <!--button--> 
     <div class="content-block" id="button"> 
      <p> 
       <a href="#" class="button button-big button-fill button-danger" onclick="logout()">退出账号</a> 
      </p> 
      <p> 
       <a href="modifyPwd.action" class="button button-big button-fill button-success close-popup" >修改密码</a>

</p> 
      <p> 
       <a href="#" class="button button-big button-fill" onclick="changePoint()">修改绑定学校</a> 
      </p> 
     </div> 
     <div class="content-block" style="text-align: center;font-size:14px;"> 
     Copyright©2018-2021<br> 
     南京大葱网络 版权所有 
     </div> 
    </div> 
   </div> 
  </div> 
    <div class="popup"> 
         
    <div class="content"> 
      <div class="list-block"> 
        <ul> 
          <!-- Text inputs --> 
          <!-- ---------------------------- --> 
            <li> 
             <div class="item-content"> 
               <div class="item-media"><i class="icon icon-form-gender"></i></div> 
               <div class="item-inner"> 
                 <div class="item-title label"><label for="">省</label></div> 
                 <div class="item-input"> 
                  <input type="text" readonly="readonly" id="PROV_SHOW" onclick="loadAreaSel('PROV','请选择省')" placeholder="请选择省"> 
                  <input type="hidden" id="PROV_HIDE"> 
                 </div> 
               </div> 
             </div> 
           </li> 
            <li> 
             <div class="item-content"> 
               <div class="item-media"><i class="icon icon-form-gender"></i></div> 
               <div class="item-inner"> 
                 <div class="item-title label"><label for="">市</label></div> 
                 <div class="item-input"> 
                  <input type="text" readonly="readonly" id="CITY_SHOW" onclick="loadAreaSel('CITY','请选择市')" placeholder="请选择市"> 
                  <input type="hidden" id="CITY_HIDE"> 
                 </div> 
               </div> 
             </div> 
           </li> 
            <li> 
             <div class="item-content"> 
               <div class="item-media"><i class="icon icon-form-gender"></i></div> 
               <div class="item-inner"> 
                 <div class="item-title label"><label for="">学校</label></div> 
                 <div class="item-input"> 
                  <input type="text" readonly="readonly" id="POINT_SHOW" onclick="loadPointSel()" placeholder="请选择学校"> 
                  <input type="hidden" id="POINT_HIDE"> 
                 </div> 
               </div> 
             </div> 
           </li> 
        </ul> 
          
        </div> 
        <div class="content-block"> 
       <p> 
       <a class="button button-big button-fill button-success " onclick="submitChangeSel()" >修改</a> 
       </p> 
       <p> 
       <a href="#" class="button button-big button-fill button-danger close-popup">取消</a> 
      </p> 
      </div> 
        </div> 
       </div> 
   
 </body> 
<script type='text/javascript' src='https://g.alicdn.com/sj/lib/zepto/zepto.min.js' charset='utf-8'></script> 
<script type="text/javascript" src="/water/js/common/commToolWx.js?V=180226"></script> 
<script type='text/javascript' src='https://g.alicdn.com/msui/sm/0.6.2/js/sm.min.js' charset='utf-8'></script> 
<script type="text/javascript" src="/water/js/common/validateToolWx.js"></script> 
<script src="/water/js/sel/iosSelect.js"></script> 
 
<script type="text/javascript"> 
/* 
window.webkit.messageHandlers.getVersionInfo.postMessage(""); 
function checkNewVersion(res){ 
 $.alert(res) 
} 
*/ 
 
if(''=='1'){ 
 $('#centerMenu').find('li').hide(); 
 $('#centerMenu').find('[showInfo]').show(); 
} 
 
 
var wxFlag = '0'; 
var appDebug = '0'; 
$('#version_info').text(getVersionInfo()); 
function getVersionInfo(){ 
 if (typeof(JSInterface) == "undefined") 
 {  
  $('#curr_version').hide(); 
  return null; 
 } 
 var versionInfo = JSInterface.getVersionName(); 
 return versionInfo; 
} 
 function logout(){ 
  $.confirm('确认要退出登录吗',function(){ 
   removeToken(); 
   $.ajax({ 
    url:'/water/app/usercenter/logout.action', 
    dataType:'json', 
    type:'post', 
    success:function(data){ 
     if(data.success){ 
      if((wxFlag=='1'||appDebug=='1')&&typeof(JSInterface)=="undefined"){ 
       tool.goUrl('/water/app/login/login.action'); 
      }else{ 
       if(!(typeof(JSInterface) == "undefined")){ 
        JSInterface.openNewWindow('/water/app/login/login.action'); 
       }else{ 
        window.webkit.messageHandlers.openNewWindow.postMessage(JSON.stringify({"URL":'/water/app/login/login.action'})); 
       } 
        
       
      } 
     } 
    } 
     
     
   }); 
  }); 
 } 
 function removeToken(){ 
  if((wxFlag=='1'||appDebug=='1')&&typeof(JSInterface)=="undefined"){ 
  }else{ 
   if(!(typeof(JSInterface) == "undefined")){ 
    JSInterface.clearToken(); 
   }else{ 
    window.webkit.messageHandlers.clearToken.postMessage(""); 
   } 
  } 
 } 
 function changePoint(){ 
  $.popup(".popup"); 
 } 
 //----------------------------------------------------------- 
  
 function createSel(data,title,defaultVal){ 
  new IosSelect(1,               // 第一个参数为级联层级，演示为1 
         [data],                             // 演示数据 
         { 
             container: '.container',             // 容器class 
             title: title,                    // 标题 
             itemHeight: 50,                      // 每个元素的高度 
             itemShowCount: 5,                    // 每一列显示元素个数，超出将隐藏 
             oneLevelId: defaultVal,                     // 第一级默认值 
             callback: function (selectOneObj) {  // 用户确认选择后的回调函数 
              console.log(selectOneObj); 
              $('#'+selectOneObj.domid+'_HIDE').val(selectOneObj.id); 
              $('#'+selectOneObj.domid+'_SHOW').val(selectOneObj.value); 
             } 
     }); 
 } 
  
 //加载省市区 
 function loadAreaSel(type,title){ 
  var defaultVal = ''; 
  if(type=='PROV'){ 
   PARENT_ID = '-1'; 
   defaultVal = $('#'+type+'_HIDE').val()||''; 
   $('#CITY_HIDE').val(''); 
   $('#CITY_SHOW').val(''); 
   $('#POINT_HIDE').val(''); 
   $('#POINT_SHOW').val(''); 
  } 
  if(type=='CITY'){ 
   PARENT_ID = $('#PROV_HIDE').val(); 
   if(PARENT_ID==''||!PARENT_ID){ 
    createSel([],title,''); 
   } 
   $('#POINT_HIDE').val(''); 
   $('#POINT_SHOW').val(''); 
  } 
   
  $.ajax({ 
   async:false, 
   url:'loadByParentID.action', 
   data:{'PARENT_ID':PARENT_ID}, 
   type:'post', 
   dataType:'json', 
   success:function(data){ 
    if(data){ 
     $.each(data[0].areas,function(k,v){ 
      v.id = v.ID; 
      v.value = v.NAME; 
      v.domId = type; 
     }) 
     createSel(data[0].areas,title,defaultVal); 
    }    
   } 
  }); 
 } 
 //加载网点 
 function loadPointSel(){ 
  var PROV_ID = $('#PROV_HIDE').val(); 
  var CITY_ID = $('#CITY_HIDE').val(); 
   
  $.ajax({ 
    
   url:'loadPointList.action', 
   async:false, 
   data:{ 
   'PROV_ID':PROV_ID, 
   'CITY_ID':CITY_ID 
   }, 
   type:'post', 
   dataType:'josn', 
   success:function(data){ 
    var arr = eval(data); 
    $(arr).each(function(k,v){ 
     v.id = v.ID; 
     v.value = v.POINT_NAME; 
     v.domId = 'POINT'; 
    }); 
    createSel(arr,'请选择学校',$('#POINT_HIDE').val()); 
   } 
  }); 
 } 
  
 function submitChangeSel(){ 
  var POINT = $('#POINT_HIDE').val(); 
  if(POINT==''||!POINT){ 
   $.alert("您还未选择学校"); 
   return; 
  } 
   
  $.confirm('确认修改绑定学校？<br><span style="color: red;">注意：<br>充值金额，打水码<br>不能跨学校使用！<br>请确保切换的绑定学校<br>是您当前所在地！<br></span>',function(){ 
    
   $.ajax({ 
    url:'modifyUserPoint.action', 
    data:{ 
     'POINT_ID':POINT 
    }, 
    type:"post", 
    success:function(data, textStatus){ 
     data = eval("("+data+")"); 
     if(data.success){ 
      location.reload(); 
     }else{ 
      $.alert(data.message); 
     } 
    } 
   }); 
   
 }); 
 } 
</script> 
</html>`;

