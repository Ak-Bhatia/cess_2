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

cont_1.addEventListener("mouseover",function(){
	this.classList.add("hov_cont");
	cont_1h.classList.add("col-lg-4","col-md-8","border","border-danger");
	txt_1.classList.add("p-4");
	txt_1.innerHTML = "We focus on Skill development,we organise sessions,flash classes for students that help in enhancing their skills.";
});

cont_1.addEventListener("mouseout",function(){
	this.classList.remove("hov_cont");
	cont_1h.classList.remove("col-lg-4","col-md-8","border","border-danger");
	txt_1.classList.remove("p-4");
	txt_1.innerHTML = "";
});

cont_2.addEventListener("mouseover",function(){
	this.classList.add("hov_cont");
	cont_2h.classList.add("col-lg-4","col-md-8","border","border-danger");
	txt_2.classList.add("p-4");
	txt_2.innerHTML = "We work in teams for successful fulfillation of various jobs,we here at CESS have Technical, Literary, Placement, Promotion, Web Dev Teams.";
});

cont_2.addEventListener("mouseout",function(){
	this.classList.remove("hov_cont");
	cont_2h.classList.remove("col-lg-4","col-md-8","border","border-danger");
	txt_2.classList.remove("p-4");
	txt_2.innerHTML = "";
});


cont_3.addEventListener("mouseover",function(){
	this.classList.add("hov_cont");
	cont_3h.classList.add("col-lg-4","col-md-8","border","border-danger");
	txt_3.classList.add("p-4");
	txt_3.innerHTML = "We have over 300 members in CESS.All the volunteers and members are categorized into various teams.";
});

cont_3.addEventListener("mouseout",function(){
	this.classList.remove("hov_cont");
	cont_3h.classList.remove("col-lg-4","col-md-8","border","border-danger");
	txt_3.classList.remove("p-4");
	txt_3.innerHTML = "";
});


cont_4.addEventListener("mouseover",function(){
	this.classList.add("hov_cont");
	cont_4h.classList.add("col-lg-4","col-md-8","border","border-danger");
	txt_4.classList.add("p-4");
	txt_4.innerHTML = "We undertake projects and we have gone quite a far in terms of achievements.";
});

cont_4.addEventListener("mouseout",function(){
	this.classList.remove("hov_cont");
	cont_4h.classList.remove("col-lg-4","col-md-8","border","border-danger");
	txt_4.classList.remove("p-4");
	txt_4.innerHTML = "";
});
