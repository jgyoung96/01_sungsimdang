$(document).ready(function(){

		var body=$("html,body");
		//opacity 배경
		var modal_black_bg = $(".modal_black_bg");
		//주차장
		var parking = $("#parking");
		var park_icon = $(".park_icon");
		var park_text = $(".park_text");

		//좌측 네비
		var gnb = $("nav#gnb li");
		var ht = 980;

		$(window).resize(function(){
			ht = 980;
		})

		//
		var lnb = $("nav#lnb li");
		
		//캐릭터
		var cha_01 = $("#cha1");
		var cha_02 = $("#cha2");
		var cha_03 = $("#cha3");
		var cha_04 = $("#cha4");
		var cha_05 = $("#cha5");
		
		//buy 버튼
		var buyBtn_01 = $(".buy_btn_01");
		var buyBtn_02 = $(".buy_btn_02");

		var buy_on_01 = $(".buy_on_01");
		var buy_on_02 = $(".buy_on_02");
		var sung_buy = $(".sung_buy");
		
		//contents
		var contents_01 = $(".contents01");
		var contents_02 = $(".contents02");
		var contents_03 = $(".con_03");
		var contents_04 = $(".service_bg li");
		var contents_05 = $(".product_bg");
		var contents_06 = $(".conBuy_img_01");

		//클릭요소
		var click_01 = $(".click_01");
		var click_02 = $(".click_02");
		var click_03 = $(".click_03");
		var click_04 = $(".click_04");
		var click_05 = $(".click_05");

		//return
		var return_01 = $(".return_btn_01");
		var return_02 = $(".return_btn_02");
		var return_03 = $(".return_btn_03");
		var return_04 = $(".return_btn_04");
		var return_05 = $(".return_btn_05");

		//말풍선
		var buy_text = $(".buy_text");


		var carousel_serbtn =$(".btn_ser li");
  		var current = 0;
  		var btclick = $(".btclick");
  		
  		//배송관련 클릭버튼
  		var delivery = $(".delivery img");
		var deil_t_01 = $(".deil_t_01");
		var deil_t_02 = $(".deil_t_02"); 
		var deil_t_03 = $(".deil_t_03");
		var result_01 = $("result_01");
		var ea = $(".ea");

  		//스크롤하면 스르륵
	  	gnb.click(function(){
			var tg = $(this);
			var i = tg.index();
			var nowTop = ht*i;

			gnb.removeClass("active");
			tg.addClass("active");

			//버튼 클릭시 해당 컨텐츠로 스르륵 이동
			// alert(i);
			// alert(nowTop);
			$("html,body").animate({scrollTop:nowTop});

		})
		//스크롤시 해당 컨텐츠의 메뉴를 활성화
		$(window).scroll(function(){
			var myscrollTop = $(window).scrollTop();
			// alert(myscrollTop);
			if(myscrollTop>=0 && myscrollTop<ht){
				gnb.removeClass("active");
				gnb.eq(0).addClass("active");
			}
			else if(myscrollTop>=ht && myscrollTop<ht*2){
				gnb.removeClass("active");
				gnb.eq(1).addClass("active");
			}
			else if(myscrollTop>=ht*2 && myscrollTop<ht*3){
				gnb.removeClass("active");
				gnb.eq(2).addClass("active");
			}
			else if(myscrollTop>=ht*3 && myscrollTop<ht*4){
				gnb.removeClass("active");
				gnb.eq(3).addClass("active");
			}
			else{
				gnb.removeClass("active");
				gnb.eq(4).addClass("active");
			}
		})
		myfunction();
		//마우스휠에 반응하는 스르륵 이동
		function myfunction(){
			$("#main, #history, #bread, #service, #product").on("mousewheel",function(event,delta){
				if(delta>0){
					//마우스휠을 올렸을 때 실행구문
					var prev = $(this).prev().offset().top;
					$("html,body").stop().animate({"scrollTop":prev},600);
				}
				else if(delta<0){
					//마우스휠을 내렸을 때 실행구문
					var next = $(this).next().offset().top;
					$("html,body").stop().animate({"scrollTop":next},600);
				}
			})	
		}		

  	// 주차장
  		modal_black_bg.hide();
  		parking.hide();
  		return_05.hide();
  		park_text.click(function(){
  			parking.fadeIn(500);
  			return_05.fadeIn(200);
  			park_icon.fadeOut(500);
  			park_text.fadeOut(200);
  			lnb.fadeOut(500);
  			modal_black_bg.fadeIn(500);
  			$("#main").off("mousewheel");
   			$('body').css('overflow', 'hidden');
  		})
  		park_icon.click(function(){
  			parking.fadeIn(500);
  			return_05.fadeIn(200);
  			park_icon.fadeOut(500);
  			park_text.fadeOut(200);
  			lnb.fadeOut(300);
  			modal_black_bg.fadeIn(500);
  			$("#main").off("mousewheel");
   			$('body').css('overflow', 'hidden');
  		})
  		return_05.click(function(){
   			parking.fadeOut(500);
   			park_icon.fadeIn(500);
   			park_text.fadeIn(500);
   			lnb.fadeIn(300);
   			modal_black_bg.fadeOut(500);
   			myfunction();
  			$('body').css('');
  		})
  		modal_black_bg.click(function(){
  			parking.fadeOut(500);
   			park_icon.fadeIn(500);
   			park_text.fadeIn(500);
   			lnb.fadeIn(300);
   			modal_black_bg.fadeOut(500);
   			myfunction();
  			$('body').css('');
  		})


	// 브랜드 컨텐츠
		contents_01.hide();
  		cha_01.click(function(){
   			contents_01.fadeToggle();
   			click_01.toggle();

  		})
	
	// 건강빵 이야기_01 컨텐츠
		contents_02.hide();
  		cha_02.click(function(){
   			contents_02.fadeIn(500);
   			cha_02.fadeOut(500);
   			click_02.hide();
   			$("#bread").off("mousewheel");
   			$('body').css('overflow', 'hidden');
  		})
  		return_01.click(function(){
  			myfunction();
  			$('body').css('');
   			contents_02.fadeOut(500); 
   			cha_02.show();
   			click_02.show();
  		})

	// 건강빵 이야기_02 컨텐츠
		contents_03.hide();
		return_02.hide();
  		cha_03.click(function(){
   			contents_03.fadeIn(500);
   			// modal_black_bg.fadeIn(500);
   			cha_03.fadeOut(500);
   			click_03.hide();
   			// modal_black_bg.fadeIn(500);
   			return_02.fadeIn(500);
   			$("#bread").off("mousewheel");
   			$('body').css('overflow', 'hidden');
   			
  		})
  		// modal_black_bg.click(function(){
  		// 	contents_03.fadeOut(500); 
   	// 		cha_03.show();
   	// 		click_03.show();
   	// 		modal_black_bg.fadeOut(500);
   	// 		return_02.fadeOut(500);

  		// })
  		return_02.click(function(){
  			myfunction();
  			$('body').css('');
   			contents_03.fadeOut(500); 
   			cha_03.show();
   			click_03.show();
   			// modal_black_bg.fadeOut(500);
   			return_02.fadeOut(500);
   			
  		})

  		// modal_black_bg.click(function(){
  		// 	myfunction();
  		// 	$('body').css('');
   	// 		contents_03.fadeOut(500); 
   	// 		cha_03.show();
   	// 		click_03.show();
   	// 		modal_black_bg.fadeOut(500);
   	// 		return_02.fadeOut(500);
  		// })

	// 서비스 컨텐츠
		contents_04.hide();
		return_03.hide();
		carousel_serbtn.hide();
		btclick.hide();
  		cha_04.click(function(){

   			contents_04.fadeIn(500);
   			cha_04.fadeOut(500);
   			click_04.fadeOut(1);
   			cha_04.hide();
   			return_03.fadeIn(500);
   			carousel_serbtn.fadeIn(500);
   			btclick.fadeIn(500);

   			$("#service").off("mousewheel");
   			$('body').css('overflow', 'hidden');
  		})
  		return_03.click(function(){
  			myfunction();
  			$('body').css('');

   			contents_04.fadeOut(500); 
   			return_03.fadeOut(200);
   			carousel_serbtn.fadeOut(500);
   			btclick.fadeOut(200);
   			cha_04.fadeIn(500);
   			click_04.fadeIn(500);
   			location.reload();
  		})

  	//서비스 캐러셀
  		carousel_serbtn.eq(0).click(function(){
   			contents_04.eq(0).fadeIn(200);
   			contents_04.eq(1).fadeOut(200);
   			btclick.fadeIn(2500);

  		})
  		carousel_serbtn.eq(1).click(function(){
   			contents_04.eq(0).fadeOut(200);
   			contents_04.eq(1).fadeIn(200);
   			btclick.fadeOut(200);

  		})
  		carousel_serbtn.click(function(){
  			var tg = $(this);
  			var i = tg.index();
  			if(current==i) return 0;

  			move(i);

  			function move(i){
  				var currentserImg = contents_04.eq(current);
				var nextserImg = contents_04.eq(i);
				currentserImg.css("left",0).animate({"left":"-100%"});
				nextserImg.css("left","100%").animate({"left":0});
				current = i; 
  			}
  			carousel_serbtn.removeClass("active");
  			tg.addClass("active");
  		})
	// 제품 컨텐츠
		buy_text.hide();
		buyBtn_01.hide();
		buyBtn_02.hide();
		contents_06.hide();
		contents_05.hide();
		modal_black_bg.hide();
  		cha_05.click(function(){
   			contents_05.fadeIn(500);
   			buyBtn_01.fadeIn(3800);
   			buyBtn_02.fadeIn(3800);
   			cha_05.fadeOut(500);
   			click_05.hide();
   			$("#product").off("mousewheel");
   			$('body').css('overflow', 'hidden');
  		})
  		return_04.click(function(){
   			contents_05.fadeOut(500);
   			buyBtn_01.fadeOut(500);
   			buyBtn_02.fadeOut(500); 
   			cha_05.show();
   			click_05.show();
   			location.reload();
   			myfunction();
  			$('body').css('');
  		})
  		buyBtn_01.click(function(){
  			contents_06.fadeIn(500);
  			modal_black_bg.fadeIn(500);
  			buy_text.fadeIn(500);
  			$("#product").off("mousewheel");
   			$('body').css('overflow', 'hidden');
  		})
  		modal_black_bg.click(function(){
  			contents_06.fadeOut(500);
  			modal_black_bg.fadeOut(500);
  			buy_text.fadeOut(500);
  			$("#product").off("mousewheel");
   			$('body').css('overflow', 'hidden');
  		})

  	//제품 캐러셀
  		var carousel_img =$(".gallery li");
  		var carousel_btn =$(".btn_pro li");
  		var current = 0;
  		var conBuy_img =$(".conBuy_img_01");

  		var cost=1500;
  		var myCost =[1500];
  		var i=0;
		var menu="튀김소보로";
  		
  		carousel_btn.click(function(){
  			var tg = $(this);
  			i = tg.index();
  			myCost = [1500,11800,10600,4800,5200,2800];
			var myMenu = ["튀김소보로","부추빵세트","삼총사세트","이탈리안","튜나바게트","사라다빵"];

  			if(current==i) return 0;

  			move(i);

  			function move(i){
  				
  				var currentImg = carousel_img.eq(current);
				var nextImg = carousel_img.eq(i);		
				
				currentImg.css("left",0).animate({"left":"-100%"});
				nextImg.css("left","100%").animate({"left":0});
				current = i; 
				conBuy_img.css("background-image","url(img/contents_product/conbuy_0"+i+".png)");
				conBuy_img.attr("data-cost",myCost[i]);
				conBuy_img.attr("data-menu",myMenu[i]);

				cost=conBuy_img.attr("data-cost");
				menu=conBuy_img.attr("data-menu");

				// alert(menu);
				// alert(conBuy_img.css("background-image"));
  			}
  			
  			carousel_btn.removeClass("active_pro");
  			tg.addClass("active_pro");
  		})	

  		

  		$(".ea").bind('keyup mouseup', function () {

  			total(i);

		    function total(i){
			var ea =$(".ea").val();
			var result_01 =$(".result_01");
			

			result_01.text(myCost[i]*ea);
			result_01.attr("data-cost",myCost[i]*ea)
			cost=result_01.attr("data-cost");
			$(".result_01").show();
			}             
		});

  	//nav active 효과
		gnb.click(function(){
			var i=$(this).index();
			gnb.removeClass("active");
			$(this).addClass("active");
		})
	//배송관련 클릭
		deil_t_01.hide();
		deil_t_02.hide();
		deil_t_03.hide();
		sung_buy.hide();
		delivery.eq(0).click(function(){
			deil_t_01.fadeIn(500);
			deil_t_02.hide();
			deil_t_03.hide();
		})
		delivery.eq(1).click(function(){
			deil_t_01.hide();
			deil_t_02.fadeIn(500);
			deil_t_03.hide();
		})
		delivery.eq(2).click(function(){
			deil_t_01.hide();
			deil_t_02.hide();
			deil_t_03.fadeIn(500);
		})

		
		$(".ea").click(function(){
			$(".result_01").show();
		})

		
		buy_on_02.click(function(){
			deil_t_01.hide();
			deil_t_02.hide();
			deil_t_03.hide();
			$(".result_01").hide();
			var txt =$("input:text").val(0);
			var ea=$(".ea").val(0);
   			// $(".result_01").text(txt);
    		
   			

    		$(".conBuy_img_02").find(".sheet").append("<p>"+"<br>"+menu+"</p>");
			$(".conBuy_img_02").find(".sheet").append("<p class='coin'>"+"<br>"+cost+"</p><div class='cb'></div>");
		})
		buy_on_01.click(function(){
			alert("제품을 구매해주셔서 감사합니다.");
		})
		
	})