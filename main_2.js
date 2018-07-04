var cont_1 = document.querySelector('#cont_1');
var cont_1h = document.querySelector('#cont_1h');
var txt_1 = document.querySelector('#txt_1');
var cont_2 = document.querySelector('#cont_2');
var cont_2h = document.querySelector('#cont_2h');
var txt_2 = document.querySelector('#txt_2');
var cont_3 = document.querySelector('#cont_3');
var cont_3h = document.querySelector('#cont_3h');
var txt_3 = document.querySelector('#txt_3');
var cont_4 = document.querySelector('#cont_4');
var cont_4h = document.querySelector('#cont_4h');
var txt_4 = document.querySelector('#txt_4');
var map = document.querySelector('#map')
var maps = document.querySelector('#maps')
var map_ex = true;

cont_1.addEventListener("mouseover",function(){
	this.classList.add("hov_cont");
	cont_1h.classList.add("col-lg-6","col-md-12","border","border-danger");
	cont_1h.innerHTML = "<span id='txt_1'>We focus on Skill development,we organise sessions,flash classes for students that help in enhancing their skills.</span>";
});

cont_1.addEventListener("mouseout",function(){
	this.classList.remove("hov_cont");
	cont_1h.classList.remove("col-lg-6","col-md-12","border","border-danger");
	cont_1h.innerHTML = "";
});

cont_2.addEventListener("mouseover",function(){
	this.classList.add("hov_cont");
	cont_2h.classList.add("col-lg-6","col-md-12","border","border-danger");
	cont_2h.innerHTML = "<span id='txt_2'>We work in teams for successful fulfillation of various jobs,we here at CESS have Technical, Literary, Placement, Promotion, Web Dev Teams.</span>";
});

cont_2.addEventListener("mouseout",function(){
	this.classList.remove("hov_cont");
	cont_2h.classList.remove("col-lg-6","col-md-12","border","border-danger");
	cont_2h.innerHTML = "";
});


cont_3.addEventListener("mouseover",function(){
	this.classList.add("hov_cont");
	cont_3h.classList.add("col-lg-6","col-md-12","border","border-danger");
	cont_3h.innerHTML = "<span id='txt_3'>We have over 300 members in CESS.All the volunteers and members are categorized into various teams.</span>";
});

cont_3.addEventListener("mouseout",function(){
	this.classList.remove("hov_cont");
	cont_3h.classList.remove("col-lg-6","col-md-12","border","border-danger");
	cont_3h.innerHTML = "";
});


cont_4.addEventListener("mouseover",function(){
	this.classList.add("hov_cont");
	cont_4h.classList.add("col-lg-6","col-md-12","border","border-danger");
	cont_4h.innerHTML = "<span = 'txt_4'>We undertake projects and we have gone quite a far in terms of achievements.</span>";
});

cont_4.addEventListener("mouseout",function(){
	this.classList.remove("hov_cont");
	cont_4h.classList.remove("col-lg-6","col-md-12","border","border-danger");
	cont_4h.innerHTML = "";
});

map.addEventListener("click",function(){
	if (map_ex){
		maps.classList.add("img_ab");
		map_ex = false;
		map.setAttribute("src","images_2/SVG/circle-up.svg");
	}
	else
	{
		maps.classList.remove("img_ab");
		map_ex = true;
		map.setAttribute("src","images_2/SVG/circle-down.svg");	
	}
});
