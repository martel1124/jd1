//封装轮播图函数
	//获取到body距离
	function setTL(object){
		var i=0,t=0;
		while(object){
			i=i+object.offsetLeft+object.clientLeft;
			t=t+object.offsetTop+object.clientTop;
			object=object.offsetParent;
		}
		return{top:t,left:i}
	}
	function lunbo(olunbo,olunbo_outer,olunbo_inner,olunbo_btnR,olunbo_btnL,olunbo_list,color1,color2){	
		var lunbo=document.getElementById(olunbo);
		var lunbo_outer=document.getElementById(olunbo_outer);
		var lunbo_inner=document.getElementById(olunbo_inner);
		var lunbo_imgs=lunbo_inner.getElementsByTagName('img');
		var lunbo_btnR=document.getElementById(olunbo_btnR);
		var lunbo_btnL=document.getElementById(olunbo_btnL);
		var lunbo_list=document.getElementById(olunbo_list);
		var lunbo_lis=lunbo_list.getElementsByTagName('li');

		var timer1=null,timer2=null;
		var imgw=lunbo_imgs[0].offsetWidth;
		var x=0,a=0;
		lunbo_lis[0].style.backgroundColor=color2;
		function everymove(){
			clearInterval(timer1);
			var start=lunbo_outer.scrollLeft;
			var end=imgw*x;
			var everystep=(end-start)/20;
			var step=0;
			timer1=setInterval(function(){
				step++;
				if(step>=20){
					step=20;
					clearInterval(timer1);
				}
				start+=everystep;
				lunbo_outer.scrollLeft=start;
			},10)
		}
		function automove(){
			timer2=setInterval(function(){
				x++;
				if(x>=lunbo_imgs.length){
					x=1;
					lunbo_outer.scrollLeft=0;
				}
				a++;
				if(a>=lunbo_lis.length){
					a=0;
				}
				list_sty();
				everymove();
			},5000)
		}
		automove();
		lunbo_btnR.onclick=function(){
			clearInterval(timer2);
			x--;
			if(x<0){
				x=lunbo_imgs.length-2;
				lunbo_outer.scrollLeft=imgw*lunbo_imgs.length-1;
			}
			a--;
			if(a<0){
				a=lunbo_lis.length-1;
			}
			everymove();
			list_sty()
			automove();
		}
		lunbo_btnL.onclick=function(){
			clearInterval(timer2);
			x++;
			if(x>=lunbo_imgs.length){
				x=1;
				lunbo_outer.scrollLeft=0;
			}
			a++;
			if(a>=lunbo_lis.length){
				a=0;
			}
			everymove();
			list_sty()
			automove();
		}
		function list_sty(){
			for(var i=0;i<lunbo_lis.length;i++){
				lunbo_lis[i].style.backgroundColor=color1;
			}
			lunbo_lis[a].style.backgroundColor=color2;
		}
		lunbo.onmouseover=function(){
			lunbo_btnR.style.display='block';
			lunbo_btnL.style.display='block';
		}
		lunbo.onmouseout=function(){
			lunbo_btnR.style.display='none';
			lunbo_btnL.style.display='none';
		}
		for(var i=0;i<lunbo_lis.length;i++){
			lunbo_lis[i].onmouseover=function(){
				clearInterval(timer1);
				clearInterval(timer2);
				for(var j=0;j<lunbo_lis.length;j++){
					if(lunbo_lis[j]==this){
						x=j;
						a=j;
						everymove();
						list_sty();
						lunbo_lis[j].onmouseout=function(){
							automove();
						}
					}
				}
			}
		}
	}
//city 部分js
	var city=document.getElementById('city');
	var li1s=city.getElementsByTagName('li');
	var city_ps=city.getElementsByTagName('p');
	var uls=city.getElementsByTagName('ul');
	var city_show=document.getElementById('city_show');
	var city_show_spans=city_show.getElementsByTagName('span');
	var city_hidden=document.getElementById('city_hidden');
	var city_hidden_spans=city_hidden.getElementsByTagName('span');
	for(var i=0;i<1;i++){
		li1s[i].onmouseover=function(){
			for(var j=0;j<1;j++){
				if(li1s[j]==this){
					uls[j].style.display='block';
					city_show_spans[1].innerHTML='&nbsp;&and;';
					city_ps[0].className='city_border';
				}
			}
		}
	}
	for(var i=0;i<1;i++){
		li1s[i].onmouseout=function(){
			for(var j=0;j<1;j++){
				if(li1s[j]==this){
					uls[j].style.display='none';
					city_show_spans[1].innerHTML='&nbsp;&or;'; 
					city_ps[0].className='city_show';
				}
			}
		}
	}
	for(var i=0;i<city_hidden_spans.length;i++){
		city_hidden_spans[i].onclick=function(){
			for(var j=0;j<city_hidden_spans.length;j++){
				if(city_hidden_spans[j]==this){
					city_show_spans[0].innerHTML='送至：'+city_hidden_spans[j].innerHTML;
					uls[0].style.display='none';
					for(var i=0;i<city_hidden_spans.length;i++){
						city_hidden_spans[i].className='';
					}
					city_hidden_spans[j].className='list_bc'
				}
			}
		}
	}
//header list 我的京东部分
	var header_rt_lt=document.getElementById('header_right_list');
	var header_rt_lt_em=header_rt_lt.getElementsByTagName('em')[0];
	var header_rt_lt_var=header_rt_lt.getElementsByTagName('var')[0];
	var header_rt_lt_hidden=document.getElementById('header_right_list_hidden');
	var header_rt_lt_lis=header_rt_lt_hidden.getElementsByTagName('li');
	header_rt_lt.onmouseover=function(){
		header_rt_lt_hidden.style.display='block';
		header_rt_lt_em.innerHTML='&and;';
		header_rt_lt_var.style.color='#C81623';
	}
	header_rt_lt.onmouseout=function(){
		header_rt_lt_hidden.style.display='none';
		header_rt_lt_em.innerHTML='&or;';
		header_rt_lt_var.style.color='';
	}
	for(var i=1;i<header_rt_lt_lis.length;i++){
		header_rt_lt_lis[i].onmouseover=function(){
			for(var j=1;j<header_rt_lt_lis.length;j++){
				if(header_rt_lt_lis[j]==this){
					header_rt_lt_lis[j].style.color='#C81623';
				}
			}
		}
	}
	for(var i=1;i<header_rt_lt_lis.length;i++){
		header_rt_lt_lis[i].onmouseout=function(){
			for(var j=1;j<header_rt_lt_lis.length;j++){
				if(header_rt_lt_lis[j]==this){
					header_rt_lt_lis[j].style.color='#000';
				}
			}
		}
	}
//header list 我的手机及其之后部分
 var header_list=document.getElementById('header_list');
 var header_list_var=header_list.getElementsByTagName('var')[0];
 var header_list_lis=header_list.getElementsByTagName('li');
 var header_list_divs=header_list.getElementsByTagName('div');
 var header_list_ems=header_list.getElementsByTagName('em');
 for(var i=0;i<header_list_lis.length;i++){
		header_list_lis[i].onmouseover=function(){
			for(var j=0;j<header_list_lis.length;j++){
				if(j%2!=0){				
					if(header_list_lis[j]==this){
						var j1=Math.floor(j/2);
						if(j1==0){
							header_list_var.className='header_list_sjjdr';
						}
						header_list_divs[j1].style.display='block';
					header_list_ems[j1].innerHTML='&and;';
					header_list_lis[j].className='header_list_sty';
					}
				}
			}
		}
 }
  for(var i=0;i<header_list_lis.length;i++){
		header_list_lis[i].onmouseout=function(){
			for(var j=0;j<header_list_lis.length;j++){
				if(j%2!=0){				
					if(header_list_lis[j]==this){					
						var j1=Math.floor(j/2);
						if(j1==0){
							header_list_var.className='header_list_sjjd';
						}
						header_list_lis[j].className='';
						header_list_divs[j1].style.display='none';
						header_list_ems[j1].innerHTML='&or;';
					}
				}
			}
		}
	  }
	//金秋风暴
		var jinqiufengbao=document.getElementById('jinqiufengbao');
		var jinqiu_btn=document.getElementById('jinqiu_btn');
		jinqiu_btn.onmouseover=function(){
			jinqiu_btn.style.background='rgba(234,23,23,1)';
			
		}
		jinqiu_btn.onmouseout=function(){
			jinqiu_btn.style.background='rgba(234,23,23,0.5)';

		}
		jinqiu_btn.onclick=function(){
			jinqiufengbao.style.display='none';

		}
	//搜索框 部分
  	var sousuo_list=document.getElementById('sousuo_list')
  	var sousuo_ipt=document.getElementById('sousuo_ipt');
  	var sousuo_btn=document.getElementById('sousuo_btn');
  	var sousuo_body=document.getElementById('sousuo_body');
		var sousuo_body_ps=sousuo_body.getElementsByTagName('p'); 
  	var script1=null;
  	function fn(str){	
  		// console.log(str);
  		sousuo_body.innerHTML='';
  		sousuo_body.style.display='block';
  		sousuo_body.className='sousuo_body_sty';
  		for(var i=0;i<str.s.length;i++){	  			
  			sousuo_body.innerHTML+='<p>'+str.s[i]+'</p>';
  		}
  		if(str.s.length!=0){
  			sousuo_body.innerHTML+='<p id="sousuo_shown">关闭</p>';
  			var gb=str.s.length;
  			sousuo_body_ps[gb].onclick=function(){
  			sousuo_body.style.display='none';
  			}
  		}
  		
  		if(sousuo_body_ps.length==0){
  			sousuo_body.style.display='none';
  			sousuo_body.className='';
  		}
  		for(var i=0;i<str.s.length;i++){
  			sousuo_body_ps[i].onclick=function(){
  				for(var j=0;j<str.s.length;j++){
  					if(sousuo_body_ps[j]==this){
  						sousuo_ipt.value=sousuo_body_ps[j].innerHTML;
  						sousuo_body.style.display='none';
  					}
  				}
  			}
  		}
  		sousuo_btn.onclick=function(){
  			sousuo_body.style.display='none';
  		}
  	}
  	sousuo_ipt.onkeyup=function(){
  		if(script1){
  			document.body.removeChild(script1);
  		}
  		script1=document.createElement('script');
  		script1.src='http://suggestion.baidu.com/su?cb=fn&wd='+sousuo_ipt.value;
  		document.body.appendChild(script1);
  	}
  	var sousuo_list=document.getElementById('sousuo_list');
  	var sousuo_list_li=sousuo_list.getElementsByTagName('li');
  	var sousuo_list_div=sousuo_list.getElementsByTagName('div');
  	for(var i=0;i<1;i++){
  		sousuo_list_li[i].onmouseover=function(){
  			for(var j=0;j<1;j++){
  				if(sousuo_list_li[j]==this){
  					sousuo_list_div[j].style.display='block';
  				}
  			}
  		}
  	}
  	for(var i=0;i<1;i++){
  		sousuo_list_li[i].onmouseout=function(){
  			for(var j=0;j<1;j++){
  				if(sousuo_list_li[j]==this){
  					sousuo_list_div[j].style.display='none';
  				}
  			}
  		}
  	}
	//购物车部分
  	var head_right=document.getElementById('head_right');
  	var head_right_li=head_right.getElementsByTagName('li');
  	var head_right_divs=head_right.getElementsByTagName('div');
  	var gouwuche=document.getElementById('gouwuche');
  	var gouwuche_img=gouwuche.getElementsByTagName('img')[0];
  	for(var i=0;i<1;i++){
  		head_right_li[i].onmouseover=function(){
  			for(var j=0;j<1;j++){
  				if(head_right_li[j]==this){
  					gouwuche.className='gouwuche_sty';
  					gouwuche_img.src='img/gouwuche3.png';
  					head_right_divs[j].style.display='block';
  					head_right_divs[j+1].style.display='block';
  					head_right_divs[j+2].style.display='block';
  				}
  			}
  		}
  	}
  	for(var i=0;i<1;i++){
  		head_right_li[i].onmouseout=function(){
  			for(var j=0;j<1;j++){
  				if(head_right_li[j]==this){
  					head_right_divs[j].style.display='none';
  					head_right_divs[j+1].style.display='none';
  					head_right_divs[j+2].style.display='none';
  					gouwuche.className='gouwuche';
  					gouwuche_img.src='img/gouwuche.png';
  				}
  			}
  		}
  	}
//body_header_center 轮播图部分
	var body_header_center=document.getElementById('body_header_center')
	var body_header_lunbo=document.getElementById('body_header_lunbo');
	var body_header_lunbo_imgs=body_header_lunbo.getElementsByTagName('img');
	var body_header_lunbo_btnR=document.getElementById('body_header_lunbo_btnR');
	var body_header_lunbo_btnL=document.getElementById('body_header_lunbo_btnL');
	var body_header_lunbo_list=document.getElementById('body_header_lunbo_list');
	var body_header_lunbo_list_lis=body_header_lunbo_list.getElementsByTagName('li');
	var timer1=null,timer2=null;
	var x1=0;
	body_header_lunbo_imgs[0].style.opacity=1;
	body_header_lunbo_list_lis[0].style.backgroundColor='#c81623';
	body_header_lunbo_list_lis[0].style.color='#fff';
	body_header_center.onmouseover=function(){
		body_header_lunbo_btnL.style.display='block';
		body_header_lunbo_btnR.style.display='block';
	}
	body_header_center.onmouseout=function(){
		body_header_lunbo_btnL.style.display='none';
		body_header_lunbo_btnR.style.display='none';
	}
	function change1(){
		clearInterval(timer1)
		for(var i=0;i<body_header_lunbo_imgs.length;i++){
			body_header_lunbo_imgs[i].style.opacity=0;
			body_header_lunbo_list_lis[i].style.backgroundColor='#fff';
			body_header_lunbo_list_lis[i].style.color='blue';
		}
		var a1=0;
		timer1=setInterval(function(){
			a1+=1/50;
			if(a1>=1){
				a1=1;
				clearInterval(timer1);
			}
			body_header_lunbo_imgs[x1].style.opacity=a1;
			body_header_lunbo_list_lis[x1].style.backgroundColor='#C81623';
			body_header_lunbo_list_lis[x1].style.color='#fff';
		},20)
	}
	function autochange1(){
			x1++;
		if(x1>=body_header_lunbo_imgs.length){
			x1=0;
		}
		change1();
	}
	timer2=setInterval(autochange1,3000)
	body_header_lunbo_btnL.onclick=function(){
		clearInterval(timer2);
		x1--;
		if(x1<0){
			x1=body_header_lunbo_imgs.length-1;
		}
		change1();
		timer2=setInterval(autochange1,3000);
	}
	body_header_lunbo_btnR.onclick=function(){
		clearInterval(timer2);
		x1++;
		if(x1>=body_header_lunbo_imgs.length){
			x1=0;
		}
		change1();
		timer2=setInterval(autochange1,3000);
	}
	for(var i=0;i<body_header_lunbo_list_lis.length;i++){
		body_header_lunbo_list_lis[i].onmouseover=function(){
			for(var j=0;j<body_header_lunbo_list_lis.length;j++){
				if(body_header_lunbo_list_lis[j]==this){
					x1=j;
					clearInterval(timer1);
					change1();
				}
				body_header_lunbo_list_lis[j].onmouseout=function(){
					timer1=setInterval(autochange1,3000);
				}
			}
		}
	}
//body_header_left 部分tab切换
	var body_header_left=document.getElementById('body_header_left');
	var body_header_left_lis=body_header_left.getElementsByTagName('li');
	var body_header_left_divs=body_header_left.getElementsByTagName('div');
	var body_header_left_as=body_header_left.getElementsByTagName('a');
	function bodytophidden(obj1,obj2,obj3){
		var obj=document.getElementById(obj1);
		var tags1=obj.getElementsByTagName(obj2);
		var tags2=obj.getElementsByTagName(obj3);
		var arr1=[];
		var arr2=[];
		for(var i=0;i<tags1.length;i++){
			arr1.push(tags1[i]);
		}
		for(var i=0;i<tags2.length;i++){
			arr2.push(tags2[i]);
		}
		for(var i=0;i<arr1.length;i++){
			arr1[i].onmouseover=function(){
				for(var j=0;j<arr1.length;j++){
					if(arr1[j]==this){
						arr1[j].className='body_header_hidden_top_span';
						arr2[j].className='body_header_hidden_top_strong';
					}else{
						arr1[j].className='';						
						arr2[j].className='';
					}
				}
			}
		}
		for(var i=0;i<arr1.length;i++){
			arr1[i].onmouseout=function(){
				for(var j=0;j<arr1.length;j++){
					if(arr1[j]==this){
						arr1[j].className='';
						arr2[j].className='';
					}
				}
			}
		}
	}
	//跟随窗口
		var body=document.getElementById('body');
		var bodyT=setTL(body).top;
		var anm=true;
		var arr6=byclass('body_header_left','body_header_hidden');
		window.onscroll=function(){
			body_header_left.onmouseover=function(){
				for(var i=0;i<arr6.length;i++){
					arr6[i].onmouseover=function(){
						anm=false;
					}
				}
				for(var i=0;i<arr6.length;i++){
					arr6[i].onmouseout=function(){
						anm=true;
					}
				}
				// console.log(anm)
				if(anm){
					var et=document.documentElement.scrollTop+document.body.scrollTop;
					if(et>=bodyT){
						for(var i=0;i<body_header_left_divs.length;i++){
							body_header_left_divs[i].style.top=et-bodyT+39+'px';
						}
					}else{
						for(var i=0;i<body_header_left_divs.length;i++){
							body_header_left_divs[i].style.top='39px';
						}
					}
				}
			}
		}
// 改变隐藏部分top的背景颜色
	bodytophidden('body_header_hidden_top-1','span','strong');
	bodytophidden('body_header_hidden_top-2','span','strong');
	bodytophidden('body_header_hidden_top-3','span','strong');
	bodytophidden('body_header_hidden_top-4','span','strong');
	bodytophidden('body_header_hidden_top-5','span','strong');
	bodytophidden('body_header_hidden_top-6','span','strong');
	bodytophidden('body_header_hidden_top-7','span','strong');
	bodytophidden('body_header_hidden_top-8','span','strong');
	bodytophidden('body_header_hidden_top-9','span','strong');
	bodytophidden('body_header_hidden_top-10','span','strong');
	bodytophidden('body_header_hidden_top-11','span','strong');
	bodytophidden('body_header_hidden_top-12','span','strong');
	bodytophidden('body_header_hidden_top-13','span','strong');
	bodytophidden('body_header_hidden_top-14','span','strong');
	bodytophidden('body_header_hidden_top-15','span','strong');
	for(var i=1;i<body_header_left_lis.length;i++){
		body_header_left_lis[i].onmouseover=function(){
			for(var j=1;j<body_header_left_lis.length;j++){
				if(body_header_left_lis[j]==this){
					body_header_left_divs[j-1].style.display='block';
					body_header_left_lis[j].className='bd_hdr_lf_sty';
					body_header_left_as[j].className='bd_hdr_lf_asty';
				}else{
					body_header_left_divs[j-1].style.display='none';
					body_header_left_lis[j].className='';
					body_header_left_as[j].className='';
				}
			}
		}
	}	
	for(var i=1;i<body_header_left_lis.length;i++){
		body_header_left_lis[i].onmouseout=function(){
			for(var j=1;j<body_header_left_lis.length;j++){
				if(body_header_left_lis[j]==this){
					body_header_left_divs[j-1].style.display='none';
					body_header_left_lis[j].className='';
					body_header_left_as[j].className='';
				}
			}
		}
	}
//话费机票游戏部分js
	var bd_hdr_rt_bd=document.getElementById('body_header_right_body')
	var biglist=document.getElementById('biglist');
	var biglist_top=document.getElementById('biglist_top');
	var biglist_foot=document.getElementById('biglist_foot');
	var biglist_ft_top=document.getElementById('biglist_foot_top');
	var biglist_ft_body=document.getElementById('biglist_foot_body');
	var biglist_lists=document.getElementsByClassName('biglist_list');
	var biglist_top_divs=biglist_top.getElementsByTagName('div');
	var biglist_ft_top_divs=biglist_ft_top.getElementsByTagName('div');
	var song=document.getElementById('song');
	var shangqu=document.getElementById('shangqu');
	var timer3=null,timer4=null;
	var anm1=true;
		biglist_top_divs[3].onmouseout=function(ev){
			var e=ev||window.event;
			var from=e.relatedTarget||e.fromElement;
			while(from){
				if(from==biglist_top_divs[3]){
					return false;
				}
				from=from.parentNode;
			}
			anm1=true;
		}
	for(var i=0;i<4;i++){
		biglist_top_divs[i].onmouseover=function(){
			if(anm1){
				clearInterval(timer3);
				clearInterval(timer4);
				timer3=setInterval(function(){
					bd_hdr_rt_bd.scrollTop++;
					if(bd_hdr_rt_bd.scrollTop>=208){
						bd_hdr_rt_bd.scrollTop=208;
						clearInterval(timer3);
						song.style.top='3px';
						shangqu.style.display='block';
					}
				},1)
				for(var j=0;j<4;j++){
					if(biglist_top_divs[j]==this){
						biglist_lists[j].style.display='block';
						biglist_ft_top_divs[j].className='biglist_foot_top_sty';
					}else{
						biglist_lists[j].style.display='none';
						biglist_ft_top_divs[j].className='';
					}
				}
			}
		}
	}
	shangqu.onclick=function(){
		anm1=false;
		clearInterval(timer3);
		clearInterval(timer4);
		shangqu.style.display='none';
		timer4=setInterval(function(){
			bd_hdr_rt_bd.scrollTop--;
			if(bd_hdr_rt_bd.scrollTop<=0){
				bd_hdr_rt_bd.scrollTop=0;
				clearInterval(timer4);
			}
		},1)
	}
	for(var i=0;i<biglist_ft_top_divs.length;i++){
		biglist_ft_top_divs[i].onmouseover=function(){
			for(var j=0;j<biglist_ft_top_divs.length;j++){
				if(biglist_ft_top_divs[j]==this){
					biglist_lists[j].style.display='block';
					biglist_ft_top_divs[j].className='biglist_foot_top_sty';
					if(j==1){
						song.style.top='3px';
					}else{
						song.style.top='0px';
					}
				}else{
					biglist_lists[j].style.display='none';
					biglist_ft_top_divs[j].className='';
				}
			}
		}
	}
	function huafei(obj,obj1){
		var obj2=document.getElementById(obj);
		var obj3=obj2.getElementsByTagName('li');
		var obj4=document.getElementById(obj1);
		var obj5=obj4.getElementsByTagName('li');
		for(var i=0;i<obj3.length;i++){
			obj3[i].onmouseover=function(){
				for(var j=0;j<obj3.length;j++){
					if(obj3[j]==this){
						obj3.className='biglist_list_show_sty';
						obj5[j].style.display='block';
					}else{			
						obj3.className='';
						obj5[j].style.display='none';
					}
				}
			}
		}
	}
	huafei('huafei_list','huafei_list_hidden')
	huafei('dianyingpiao_list','dianyingpiao_list_hidden')
	// huafei('jipiao_list','jipiao_list_hidden')
	// huafei('youxi_list','youxi_list_hidden')
	var jipiao_list=document.getElementById('jipiao_list');
	var jipiao_list_ps=jipiao_list.getElementsByTagName('p');
	var jipiao_list_hidden=document.getElementById('jipiao_list_hidden');
	var jipiao_list_lis=jipiao_list_hidden.getElementsByTagName('li');
	var jipiaohiddenbox=document.getElementById('jipiaohiddenbox')
	var youxi_list=document.getElementById('youxi_list');
	var youxi_list_ps=youxi_list.getElementsByTagName('p');
	var youxi_list_hidden=document.getElementById('youxi_list_hidden');
	var youxi_list_lis=youxi_list_hidden.getElementsByTagName('li');
	var youxihiddenbox=document.getElementById('youxihiddenbox')
	function JPmove(obj1,obj2){
		var x=0;
		var liw=jipiao_list_lis[0].offsetWidth;
		var timer=null;
		function move(){
			var start=obj1.scrollLeft;
			var end=liw*x;
			var everystep=(end-start)/20;
			var step=0;
			clearInterval(timer)
			timer=setInterval(function(){
				step++;
				if(step>=20){
					step=20;
					clearInterval(timer);
				}
				start+=everystep;
				obj1.scrollLeft=start;
			},10)
		}
		for(var i=0;i<obj2.length;i++){
			clearInterval(timer)
			obj2[i].onmouseover=function(){
				for(var j=0;j<obj2.length;j++){
					if(obj2[j]==this){
						x=j;
						move();
					}
				}
			}
		}
	}
	JPmove(jipiaohiddenbox,jipiao_list_ps);
	JPmove(youxihiddenbox,youxi_list_ps);
	
	var choose_btn1s=document.getElementsByClassName('choose_btn1');
	var choose_btn2s=document.getElementsByClassName('choose_btn2');
	var fancheng_stys=document.getElementsByClassName('fancheng_sty');
	for(var i=0;i<choose_btn1s.length;i++){
		choose_btn1s[i].onclick=function(){
			for(var j=0;j<choose_btn1s.length;j++){
				if(choose_btn1s[j]==this){
					fancheng_stys[j].style.display='none';
				}
			}
		}
	}
	for(var i=0;i<choose_btn2s.length;i++){
		choose_btn2s[i].onclick=function(){
			for(var j=0;j<choose_btn1s.length;j++){
				if(choose_btn2s[j]==this){
					fancheng_stys[j].style.display='block';
				}
			}
		}
	}
//时钟js代码
	var shizhong=document.getElementById('shizhong');
	var shizhong_img=shizhong.getElementsByTagName('img')[0];
	var timer5=null,x=1;
	timer5=setInterval(function(){
		x++;
		if(x>9){
			x=1;
		}
		shizhong_img.src='img/shizhong'+x+'.png';
	},3000)	
//时钟后轮播图js
	var shizhong_lunbo=document.getElementById('shizhong_lunbo');
	var shizhong_lunbo_outer=document.getElementById('shizhong_lunbo_outer');
	var shizhong_lunbo_inner=document.getElementById('shizhong_lunbo_inner');
	var shizhong_lunbo_inner_imgs=shizhong_lunbo_inner.getElementsByTagName('img');
	var shizhong_lunbo_btnL=document.getElementById('shizhong_lunbo_btnL');
	var shizhong_lunbo_btnR=document.getElementById('shizhong_lunbo_btnR');
	var x2=0,timer6=null,timer7=null;
	var imgw2=shizhong_lunbo_inner_imgs[0].offsetWidth+2;
	function shizhonglun(){
		clearInterval(timer6);
		var start=shizhong_lunbo_outer.scrollLeft;
		var end=4*imgw2*x2;
		var everystep=(end-start)/30;
		var step=0;
		timer6=setInterval(function(){
			step++;
			if(step>=30){
				step=30;
				clearInterval(timer6);
			}
			start+=everystep;
			shizhong_lunbo_outer.scrollLeft=start;
		},20)
	}
	function shizhonglunauto(){
		timer7=setInterval(function(){
			x2++;
			if(x2>3){
				x2=1;
				shizhong_lunbo_outer.scrollLeft=0;
			}
		shizhonglun();
		},5000)		
	}
	shizhonglunauto();
	shizhong_lunbo_btnL.onclick=function(){
		clearInterval(timer7);
		x2--;
		if(x2<0){
			x2=2;
			shizhong_lunbo_outer.scrollLeft=imgw2*12;
		}
		shizhonglun();
		shizhonglunauto();
	}
	shizhong_lunbo_btnR.onclick=function(){
		clearInterval(timer6)
		clearInterval(timer7);
		x2++;
		if(x2>3){
			x2=1;
			shizhong_lunbo_outer.scrollLeft=0;
		}
		shizhonglun();
		shizhonglunauto();
	}
	shizhong_lunbo.onmouseover=function(){
		shizhong_lunbo_btnL.style.display='block';
		shizhong_lunbo_btnR.style.display='block';
	}
	shizhong_lunbo.onmouseout=function(){
		shizhong_lunbo_btnL.style.display='none';
		shizhong_lunbo_btnR.style.display='none';
	}
//猜你喜欢部分js
	var caini_box=document.getElementById('caini_box');
	var caini_uls=caini_box.getElementsByTagName('ul');
	var caini_lis=caini_box.getElementsByTagName('li');
	var caini_box_lis=document.getElementById('huanyipi');
	var caini_hidden_divs=caini_box.getElementsByClassName('caini_hidden_box');
	var caini_imgs=caini_box.getElementsByTagName('img');
	var x3=0;
	huanyipi.onclick=function(){
		x3++;
		if(x3>2){
			x3=0;
		}
		for(var i=0;i<caini_uls.length;i++){
			caini_uls[i].style.display='none';
		}
		caini_uls[x3].style.display='block';
	}
	for(var i=0;i<caini_imgs.length;i++){
		caini_imgs[i].onmouseover=function(){
			for(var j=0;j<caini_imgs.length;j++){
				if(caini_imgs[j]==this){
					caini_hidden_divs[j].style.display='block';
				}
			}
		}
	}
	for(var i=0;i<caini_imgs.length;i++){
		caini_imgs[i].onmouseout=function(){
			for(var j=0;j<caini_imgs.length;j++){
				if(caini_imgs[j]==this){
					caini_hidden_divs[j].style.display='none';
				}
			}
		}
	}
//Ftab切换部分
	//tab部分封装函数
	function floorTab(F_ID,F_right_topID,F_right_hidden_classname){
		var F_right_top=document.getElementById(F_right_topID);
		var F_right_top_lis=F_right_top.getElementsByTagName('li');
		var F_right_top_ps=F_right_top.getElementsByTagName('p');
		var F_right_hiddens=byclass(F_ID,F_right_hidden_classname);
		var floor_right_hidden_div1s=byclass(F_ID,'floor_right_hidden_div1');
		var floor_miao_hidden_boxs=byclass(F_ID,'floor_miao_hidden_box');
		F_right_hiddens[0].style.display='block';
		F_right_top_lis[0].className='floorlisty';
		F_right_top_ps[0].style.borderLeft='1px solid transparent';
		F_right_top_ps[1].style.borderLeft='1px solid transparent';
		for(var i=0;i<F_right_top_lis.length;i++){
			F_right_top_lis[i].onmouseover=function(){
				for(var j=0;j<F_right_top_lis.length;j++){
					if(F_right_top_lis[j]==this){
						F_right_hiddens[j].style.display='block';
						F_right_top_lis[j].className='floorlisty';
						F_right_top_ps[j].style.borderLeft='1px solid transparent';
						if(j<=F_right_top_lis.length-2){
							F_right_top_ps[j+1].style.borderLeft='1px solid #C81923';
						}
					}else{
						F_right_hiddens[j].style.display='none';
						F_right_top_lis[j].className='none';
						if(j<=F_right_top_lis.length-2){
							F_right_top_ps[j+1].style.borderLeft='1px solid #ccc';
						}
					}
				}
			}
		}
		for(var i=0;i<floor_right_hidden_div1s.length;i++){
			floor_right_hidden_div1s[i].onmouseover=function(){
				for(var j=0;j<floor_right_hidden_div1s.length;j++){
					if(floor_right_hidden_div1s[j]==this){
						floor_miao_hidden_boxs[j].style.display='block';
					}else{
						floor_miao_hidden_boxs[j].style.display='none';
					}
				}
			}
		}
		for(var i=0;i<floor_right_hidden_div1s.length;i++){
			floor_right_hidden_div1s[i].onmouseout=function(){
				for(var j=0;j<floor_right_hidden_div1s.length;j++){
					if(floor_right_hidden_div1s[j]==this){
						floor_miao_hidden_boxs[j].style.display='none';
					}
				}
			}
		}
	}
//floor部分调用函数
	floorTab('F1','F1_right_top','floor_right_hidden F1_right_hidden');
	floorTab('F2','F2_right_top','floor_right_hidden F2_right_hidden');
	floorTab('F3','F3_right_top','floor_right_hidden F3_right_hidden');
	floorTab('F4','F4_right_top','floor_right_hidden F4_right_hidden');
	floorTab('F5','F5_right_top','floor_right_hidden F5_right_hidden');
	floorTab('F6','F6_right_top','floor_right_hidden F6_right_hidden');
	floorTab('F7','F7_right_top','floor_right_hidden F7_right_hidden');
	floorTab('F8','F8_right_top','floor_right_hidden F8_right_hidden');
	floorTab('F9','F9_right_top','floor_right_hidden F9_right_hidden');
	floorTab('F10','F10_right_top','floor_right_hidden F10_right_hidden');
	floorTab('F11','F11_right_top','floor_right_hidden F11_right_hidden');
//F轮播图部分js
	lunbo('F1_lunbo','F1_lunbo_outer','F1_lunbo_inner','F1_lunbo_btnR','F1_lunbo_btnL','F1_lunbo_list','black','#C81923');
	lunbo('F2_lunbo','F2_lunbo_outer','F2_lunbo_inner','F2_lunbo_btnR','F2_lunbo_btnL','F2_lunbo_list','black','#C81923');
	lunbo('F3_lunbo','F3_lunbo_outer','F3_lunbo_inner','F3_lunbo_btnR','F3_lunbo_btnL','F3_lunbo_list','black','#C81923');
	lunbo('F4_lunbo','F4_lunbo_outer','F4_lunbo_inner','F4_lunbo_btnR','F4_lunbo_btnL','F4_lunbo_list','black','#C81923');
	lunbo('F5_lunbo','F5_lunbo_outer','F5_lunbo_inner','F5_lunbo_btnR','F5_lunbo_btnL','F5_lunbo_list','black','#C81923');
	lunbo('F6_lunbo','F6_lunbo_outer','F6_lunbo_inner','F6_lunbo_btnR','F6_lunbo_btnL','F6_lunbo_list','black','#C81923');
	lunbo('F7_lunbo','F7_lunbo_outer','F7_lunbo_inner','F7_lunbo_btnR','F7_lunbo_btnL','F7_lunbo_list','black','#C81923');
	lunbo('F8_lunbo','F8_lunbo_outer','F8_lunbo_inner','F8_lunbo_btnR','F8_lunbo_btnL','F8_lunbo_list','black','#C81923');
	lunbo('F9_lunbo','F9_lunbo_outer','F9_lunbo_inner','F9_lunbo_btnR','F9_lunbo_btnL','F9_lunbo_list','black','#C81923');
	lunbo('F10_lunbo','F10_lunbo_outer','F10_lunbo_inner','F10_lunbo_btnR','F10_lunbo_btnL','F10_lunbo_list','black','#C81923');
	lunbo('F11_lunbo','F11_lunbo_outer','F11_lunbo_inner','F11_lunbo_btnR','F11_lunbo_btnL','F11_lunbo_list','black','#C81923');
	lunbo('F12_lunbo1','F12_lunbo1_outer','F12_lunbo1_inner','F12_lunbo1_btnR','F12_lunbo1_btnL','F12_lunbo1_list','black','#C81923');
	lunbo('F12_lunbo2','F12_lunbo2_outer','F12_lunbo2_inner','F12_lunbo2_btnR','F12_lunbo2_btnL','F12_lunbo2_list','black','#C81923');
		//齿轮部分
			function byclass(idname,clname){
				var obj=document.getElementById(idname);
				var obj1=obj.getElementsByTagName('*');
				var arr=[];
				for(var i=0;i<obj1.length;i++){
					if(obj1[i].className==clname){
						arr.push(obj1[i]);
					}
				}
				return arr;
			}
			var chilun_boxs=byclass('louceng','chilun_box');
			var chilun_hiddens=byclass('louceng','chilun_hidden')
			for(var i=0;i<chilun_boxs.length;i++){
				chilun_boxs[i].onmouseover=function(){
					for(var j=0;j<chilun_boxs.length;j++){
						if(chilun_boxs[j]==this){
							console.log(j)
							chilun_hiddens[j].style.display='block';
						}else{
							chilun_hiddens[j].style.display='none';
						}
					}
				}
			}
			for(var i=0;i<chilun_boxs.length;i++){
				chilun_boxs[i].onmouseout=function(){
					for(var j=0;j<chilun_boxs.length;j++){
						if(chilun_boxs[j]==this){
							chilun_hiddens[j].style.display='none';
						}
					}
				}
			}
//天天低价部分js代码
	function getsty(obj,sty){
		if(obj.currentStyle){
			return obj.currentStyle[sty];
		}else{
			return	getComputedStyle(obj,null)[sty];
		}
	}
	var tt_left_list=document.getElementById('tiantiandijia_left');
	var tt_left_list_lis=tt_left_list.getElementsByTagName('li');
	var tt_left_list_imgs=tt_left_list.getElementsByTagName('img');
	var timer8=null,timer9=null;
	var imgw=0;
	
	for(var i=0;i<tt_left_list_lis.length;i++){
		tt_left_list_lis[i].onmouseover=function(ev){
			var e=ev||window.event;
			var from=e.relatedTarget||e.fromElement;
			while(from){
				if(from==this){
					return false;
				}
				from=from.parentNode;
			}
			clearInterval(timer8);
			for(var j=0;j<tt_left_list_lis.length;j++){
				if(tt_left_list_lis[j]==this){
					var a1=j;
					imgw=parseInt(getsty(tt_left_list_imgs[j],'marginLeft'));
					var w1=imgw;
					timer8=setInterval(function(){
						w1--;
						if(w1<=-10){
							clearInterval(timer8);
						}
						tt_left_list_imgs[a1].style.marginLeft=w1+'px';
					},10)
				}
			}
		}
	}
	for(var i=0;i<tt_left_list_lis.length;i++){
		tt_left_list_lis[i].onmouseout=function(ev){
			var e=ev||window.event;
			var to=e.relatedTarget||e.toElement;
			while(to){
				if(to==this){
					return false;
				}
				to=to.parentNode;
			}
			clearInterval(timer9);
			for(var j=0;j<tt_left_list_lis.length;j++){
				if(tt_left_list_lis[j]==this){
					var a1=j;
					timer9=setInterval(function(){
						var imgw1=parseInt(getsty(tt_left_list_imgs[a1],'marginLeft'));
						imgw1++;
						if(imgw1>=0){
							clearInterval(timer9);
						}
						tt_left_list_imgs[a1].style.marginLeft=imgw1+'px';
					},10)
				}
			}
		}
	}
	//右侧评论部分
	var tiantian_outer=document.getElementById('tiantian_outer');
	var tiantian_inner=document.getElementById('tiantian_inner');
	var tiantian_inner_lis=tiantian_inner.getElementsByTagName('li');
	var timer10=null,timer11=null,a2=1;
	var tt_lish=tiantian_inner_lis[0].offsetHeight;
	function tt_everymove(){
		var start=tiantian_outer.scrollTop;
		var end=a2*tt_lish;
		var everystep=(end-start)/20;
		var step=0;
		clearInterval(timer10)
		timer10=setInterval(function(){
			step++;
			if(step>=20){
				step=0;
				clearInterval(timer10);
			}
			start+=everystep;
			tiantian_outer.scrollTop=start;
		},10)
	}
	function tt_automove(){
		clearInterval(timer11)
		timer11=setInterval(function(){
			a2++;
			if(a2>tiantian_inner_lis.length-2){
				a2=1;
				tiantian_outer.scrollTop=0;
			}
		tt_everymove();
		},2000)
	}
	tt_automove();
	tiantian_outer.onmouseover=function(){
		clearInterval(timer11)
	}
	tiantian_outer.onmouseout=function(){
		clearInterval(timer11);
		tt_automove();
	}	
//楼层左边list部分js
	var leftfloors=document.getElementById('leftfloors');
	var leftfloors_lis=leftfloors.getElementsByTagName('li');
	var leftfloors_as=leftfloors.getElementsByTagName('a');
	var leftfloors_divs=leftfloors.getElementsByTagName('div');
	var arr3=['服饰','美妆','手机','家电','数码','运动','居家','母婴','食品','图书','车品','服务'];
	var arr4=['1F','2F','3F','4F','5F','6F','7F','8F','9F','10F','11F','12F']
	leftfloors_divs[0].style.borderBottom='1px dotted transparent';
	for(var i=0;i<leftfloors_lis.length;i++){
		leftfloors_lis[i].onmouseover=function(){
			for(var j=0;j<leftfloors_lis.length;j++){
				if(leftfloors_lis[j]==this){
					if(parseInt((leftfloors_as[j].innerHTML).substr(0,1))>=0){
						leftfloors_divs[j].style.borderBottom='1px dotted transparent';
						leftfloors_as[j].innerHTML=arr3[j];
						leftfloors_as[j].className='asty';
						leftfloors_lis[j].className='listy';
						var jj=j;
						leftfloors_lis[j].onmouseout=function(){
							leftfloors_divs[jj].style.borderBottom='1px dotted #ccc';
							leftfloors_divs[0].style.borderBottom='1px dotted transparent';
							leftfloors_as[jj].innerHTML=arr4[jj];
							leftfloors_as[jj].className='';
							leftfloors_lis[jj].className='';
						}
					}else{
						console.log('2')
						leftfloors_divs[j].style.borderBottom='1px dotted transparent';
						leftfloors_as[j].className='asty';
						leftfloors_lis[j].className='listy';
						var jj=j;
						leftfloors_lis[j].onmouseout=function(){
							leftfloors_divs[jj].style.borderBottom='1px dotted #ccc';
							leftfloors_divs[0].style.borderBottom='1px dotted transparent';
							leftfloors_as[jj].className='asty2';
							leftfloors_lis[jj].className='';
						}
					}
					
				}
			}
		}
	}
	function ass(){
		for(var i=0;i<leftfloors_as.length;i++){
				leftfloors_as[i].innerHTML=arr4[i];
				leftfloors_as[i].className='';
		}
	}
	var arr5=byclass('louceng','floor_left_top');
	var leftfloors=document.getElementById('leftfloors')
	var timer10=null;
	document.onscroll=function(){
		var eT=document.documentElement.scrollTop+document.body.scrollTop+300;
		if(eT+200>=setTL(arr5[0]).top){
			leftfloors.style.display='block';
		}
		for(var i=0;i<10;i++){
			if(eT>=setTL(arr5[i]).top&&eT<=setTL(arr5[i+1]).top){
				ass();
				leftfloors_as[i].innerHTML=arr3[i];
				leftfloors_as[i].className='asty2';
			}
		}
		if(eT>=setTL(arr5[10]).top&&eT<=setTL(arr5[11]).top){
			ass();
			leftfloors_as[10].innerHTML=arr3[i];
			leftfloors_as[10].className='asty2';
		}
		if(eT>=setTL(arr5[11]).top){
			ass();
			leftfloors_as[11].innerHTML=arr3[11];
			leftfloors_as[11].className='asty2';
		}
		if(eT>=setTL(arr5[11]).top+800||eT+200<=setTL(arr5[0]).top){
			leftfloors.style.display='none';
		}
	}
//最右边购物车部分
	var gouwuche_list=document.getElementById('gouwuche-list');
	var gouwuche_list_lis=gouwuche_list.getElementsByTagName('li');
	var gouwuche_list_spans=gouwuche_list.getElementsByTagName('span');
	var gouwuche_list_imgs=gouwuche_list.getElementsByTagName('img');
	var gouwuche_list_divs=gouwuche_list.getElementsByTagName('div');
	function GWC(a1,b1){
		var timer10=null,timer11=null,a3=0;
		gouwuche_list_lis[a1].onmouseover=function(){
			gouwuche_list_spans[a1].className='spansty';
			gouwuche_list_divs[a1].className='';
			gouwuche_list_imgs[a1].src='img/gwc-'+b1+'.png';
			clearInterval(timer10)
			clearInterval(timer11)
			a=parseInt(getsty(gouwuche_list_divs[a1],'left'));
			timer10=setInterval(function(){
				a--;
				if(a<=-60){
					a=-60;
					clearInterval(timer10);
				}
				gouwuche_list_divs[a1].style.left=a+'px';
			},1)
		}
		gouwuche_list_lis[a1].onmouseout=function(){
			gouwuche_list_spans[a1].className='';
			gouwuche_list_divs[a1].className='divsty';
			gouwuche_list_imgs[a1].src='img/gwc-'+(a1+1)+'.png';
			clearInterval(timer10);
			clearInterval(timer11);
			a=parseInt(getsty(gouwuche_list_divs[a1],'left'));
			timer11=setInterval(function(){
				a++;
				if(a>=0){
					a=0;
					clearInterval(timer11);
				}
				gouwuche_list_divs[a1].style.left=a+'px';
			},1)
		}
	}
	gouwuche_list_divs[6].onclick=function(){
		document.documentElement.scrollTop=0;
		document.body.scrollTop=0;
	}
	GWC(0,11);
	GWC(1,22);
	GWC(2,33);
	GWC(3,44);
	GWC(4,55);
	GWC(5,66);
	GWC(6,77);
	GWC(7,88);
	