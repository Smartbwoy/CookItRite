"use strict";
var server="http://cookitrite.3eeweb.com/CookItRite/php/";
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
	
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
		
    },
};

/*$(".main_area").click(function(){
	if( $(".panel").css('left') ==='0px') {
	$(".panel").hide();
	}
	});

$(".menu-link").click(function(){
	$(".panel").show();
	});*/
$("#showresults").click(function(){
	var responseMessage;
	var getstuff= new XMLHttpRequest();
	
	
	
if($('#myModel').css('display')!=='none'){
	var searched=$(".meal_search").val();
	if(searched!=="Search"){
	document.getElementById("modal-title").innerHTML="Results for "+searched;
	getstuff.onreadystatechange=function(){
		if(getstuff.readyState===4 && getstuff.status===200){
			responseMessage=getstuff.responseText;
		}
	};
	/*getstuff.open("GET",server+"search.php?Meal_Name="+searched,true);
	getstuff.send();
	document.getElementById("modal-body").innerHTML=responseMessage;*/
	}
	else{
		document.getElementById("modal-title").innerHTML="<i class='fa fa-exclamation-triangle'>Type in value to search for</i>";
		}
}
});
function tostep2(){
	var user_data=$(".form-field").map( function(){return $(this).val(); }).get();
	var Firstname=user_data[0];
	var Lastname=user_data[1];	
	var name=user_data[2];
	var email=$(".form-field-email").val();
	var nationality=user_data[3];	
	var pwd=user_data[4];
	var pwd_re=user_data[5];
	var birthdata=$(".birthday").map( function(){return $(this).val(); }).get();
	var DOB=birthdata[2]+"/"+birthdata[1]+"/"+birthdata[0];
	var gender = $('input[name="gender"]:checked').val();
	if(namehint(Firstname)===false){
		$("#fname").css("border-color","red");
		$("#fname").css("border-style","thick");
		return;
	}
	else if(namehint(Lastname)=== false){
		$("#lname").css("border-color","red");
		$("#lname").css("border-style","thick");
		return;
		} 
	else if(namehint(name)===false){
		$("#Username").css("border-color","red");
		$("#Username").css("border-style","thick");
		return;
		}
	else if(!emailHint(email)){
		$(".form-field-email").css("border-color","red");
		$(".form-field-email").css("border-style","thick");
		return;
		}
	else if(nathint(nationality)===false){
		$("#country").css("border-color","red");
		$("#country").css("border-style","thick");
		return;
	}
	else if(passhint(pwd, pwd_re)===false){
		$("#pwd").css("border-color","red");
		$("#pwd").css("border-style","thick");
		$("#pwd_re").css("border-color","red");
		$("#pwd_re").css("border-style","thick");
		return;
	}
	else if(dobHint(DOB)===false){
		alert("Enter Date of Birth");
		return;
		}
 	else if(CheckGender(gender)===false){
			alert("Enter Your Gender");
			return;
			}
		else{
	$(".1").removeClass("disabled");
	$(".1").removeClass("inactiveLink");
	$(".active").removeClass("active");
	$(".1").addClass("active");
	$("#home").removeClass("active in");
	$("#menu1").addClass("active in");
	
		}
}
function tostep3(){
	var question0=$("#question0").val();
	var question1=$("#question1").val();
	var question2=$("#question2").val();
	var answer0=$("#answer0").val();
	var answer1=$("#answer1").val();
	var answer2=$("#answer2").val();
	
	if(question0==="" || question0===null){
		alert("Select your First Queston");
		$("#question0").css("border-color","red");
		$("#question0").css("border-style","thick");
		return;
	}else if(answer0==="" || answer0===null){
		alert("Provide answer for the First Queston");
		$("#answer0").css("border-color","red");
		$("#answer0").css("border-style","thick");
		return;
	}
	
	if(question1==="" || question1===null){
		$("#question1").css("border-color","red");
		$("#question1").css("border-style","thick");
		alert("Select your Second Queston");
		return;
	}else if(answer1==="" || answer1===null){
		alert("Provide answer for the Second Queston");
		$("#answer1").css("border-color","red");
		$("#answer1").css("border-style","thick");
		return;
	}
	
	if(question2==="" || question2===null){
		alert("Select your Third Queston");
		$("#question2").css("border-color","red");
		$("#question2").css("border-style","thick");
		return;
	}else if(answer2==="" || answer2===null){
		alert("Provide  answer for the Third Queston");
		$("#answer2").css("border-color","red");
		$("#answer2").css("border-style","thick");
		return;
	}
	
	if(answer0===answer1 || answer0===answer2 || answer2===answer1){
		alert("Answer to questions can't be the same");
		return;
		}
		
		
	$(".2").removeClass("disabled");
	$(".2").removeClass("inactiveLink");
	$(".active").removeClass("active");
	$(".2").addClass("active");
	$("#home").removeClass("active in");
	$("#menu2").addClass("active in");
}
function tostep4(){
	var mealprefrence=$(".Prefered_Recipe").val();
	if(mealprefrence.length===0){
		alert("Enter Meal Preferences");
		return;
		}
		$(".3").removeClass("disabled");
	$(".3").removeClass("inactiveLink");
	$(".active").removeClass("active");
	$(".3").addClass("active");
	$("#home").removeClass("active in");
	$("#menu3").addClass("active in");
	}
function CreateUser(){
	var user_data=$(".form-field").map( function(){return $(this).val(); }).get();
	var Firstname=user_data[0];
	var Lastname=user_data[1];	
	var name=user_data[2];
	var email=$(".form-field-email").val();
	var nationality=user_data[3];	
	var pwd=user_data[4];
	var pwd_re=user_data[5];
	var birthdata=$(".birthday").map( function(){return $(this).val(); }).get();
	var DOB=birthdata[2]+"/"+birthdata[1]+"/"+birthdata[0];
	var gender = $('input[name="gender"]:checked').val();
	
	var question0 = $("#question0").val();
	var question1 = $("#question1").val();
	var question2 = $("#question2").val();
		
	var answer0 = $("#answer0").val();
	var answer1 = $("#answer1").val();
	var answer2 = $("#answer2").val();
	
    var Prefered_Recipe =$(".Prefered_Recipe").val();	
	var food_allergies =$(".food_allergies").val();
	var sickness =$(".sickness").val();
	var responseMessage;
	
	var getstuff= new XMLHttpRequest();
	var requeststring;
	
	requeststring = "Password="+pwd+"&FirstName="+Firstname+"&LastName="+Lastname+"&UserName="+name+"&email="+email+"&nationality="+nationality+"&DOB="+DOB+"&gender="+gender;
	requeststring = requeststring + "&Prefered_Recipe="+ Prefered_Recipe;
	requeststring = requeststring+ "&answer0="+answer0+"&answer1="+answer1+"&answer2="+answer2;
	requeststring = requeststring+ "&question0="+question0+"&question1="+question1+"&question2="+question2;
	requeststring = requeststring + "&food_allergiese="+ food_allergies;
	requeststring = requeststring + "&sickness="+ sickness;
	
	if(Prefered_Recipe!==""){
		requeststring = requeststring + "&Prefered_Recipe="+ Prefered_Recipe;
	}
	
	if(answer0!=="" && answer1!=="" && answer2 !==""){
		
		requeststring = requeststring+ "&answer0="+answer0+"&answer1="+answer1+"&answer2="+answer2;
	}
	
	if(food_allergies!==""){
		requeststring = requeststring + "&food_allergiese="+ food_allergies;
	}
	
	if(sickness!==""){
		requeststring = requeststring + "&sickness="+ sickness;
	}
		
	
	getstuff.onreadystatechange=function(){
		if(getstuff.readyState===4 && getstuff.status===200){
			responseMessage=getstuff.responseText;
		 	alert(responseMessage);
			if(responseMessage==="fail"){
				alert("Fail to Add Data");
			}else if(responseMessage==="pass"){
				alert("Data Added");
				}
		}
	};
	getstuff.open("GET",server+"signup.php?"+requeststring,true);
	getstuff.send();
	//uploadprofileImg();
}
var uuuname = "";

function is_user(){
	var username=document.getElementsByName("username")[0].value;			
	var Password=document.getElementsByName("password")[0].value;
	
	console.log(username + "" + Password);
	
    var responseMessage;
	var requeststring = server+"login.php?username="+username+"&password="+Password;
	/*makeCorsRequest(requeststring);*/
	var getstuff = new XMLHttpRequest();
	getstuff.onreadystatechange = function(){
        if(getstuff.readyState===4 && getstuff.status===200){
           responseMessage = getstuff.responseText;
           if (responseMessage==="fail") {
               document.getElementById("login_status").innerHTML= "<center color='red'><i class='fa fa-exclamation-triangle'></i> ERROR: Wrong Password or Username.</center";
            }
			else if(responseMessage==="pass"){
               document.getElementById("login_status").innerHTML= "<center color='green'><i class='fa fa-check'></i> SUCCESS: Login was a Success.</center>";
			 
			   window.localStorage.setItem("loggedIn", 1);
			   window.localStorage.setItem("username", document.getElementsByName("username")[0].value);
			   //$userm=username;
			     uuuname = username;
			  window.location.href="single.html?User_name="+username;
			  $('.UserName_Header').append(username);
			   uuuname = username;
            }
			else{
			document.getElementById("login_status").innerHTML= "<center color='red'><i class='fa fa-exclamation-triangle'></i> ERROR: Wrong Password or Username.</center";
			}
        }
	};
	getstuff.open("POST",requeststring ,true);
    getstuff.send();
	
}
function CheckGender(gender){
	if(gender==="" || gender===null){
		return false;
	}
	else{
		return true;
	}
}
function prof(){
 var reponse=server+"Uuname.php";
 var getstuff = new XMLHttpRequest();
 getstuff.onreadystatechange = function(){
	 
    if(getstuff.readyState===4 && getstuff.status===200){
     uuuname = getstuff.responseText;
	 document.getElementById("username").innerHTML = localStorage.getItem("username");
    }
 };
 getstuff.open("GET",reponse,true);
 getstuff.send();

	
}
function passhint(string1, string2){
	//alert("pass1");
	if(string1 !== string2 ||string1===null || string2===""){		
		return false;
	}
	return true;	
}
function emailHint(string){
	//alert("email");
	var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(string);	
}
function namehint(string){
	if(string.length===0 || string === null){
		return false;
	}
	return true;
}
function nathint(string){
	//alert("nat");
	if(string === "" || string.value === null){
		return false;
	}
	return true;	
}
function dobHint(DOB){
	//alert("dob");
	var dob = DOB.split("/");
	if(dob[0]=== "0" || dob[1] === "0" || dob[2] === "0"){
		return false;
	}
	return true;
}

function name_exist(){
  var name = $(".forgot").val();
  var xhttp;
 var responseMessage;
  if (name.length === 0) {
    $(".empty_name").show(500);
	$(".exist_name").hide(500);
    return;
  }
  
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 4 || xhttp.status === 200) {
		 responseMessage = xhttp.responseText;
		if(responseMessage==="pass"){
			window.location.href="Resetpwd.html?Name="+name;
			}
		else if(responseMessage==="fail"){
		 $(".empty_name").hide(500);
		$(".exist_name").show(500);
			}
    }
  };
  xhttp.open("GET", server+"checkuser.php?UserName="+name, true);
  xhttp.send();
	}

function getSuggestions(){
	var xhttp;
	var responseMessage;
  
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (xhttp.readyState === 4 || xhttp.status === 200) {
			responseMessage = xhttp.responseText;
			document.getElementById("reco").src = responseMessage+"jpg";
		}
	};
	xhttp.open("GET", server+"reccom.php", true);
	xhttp.send();
}
	
$(".btn-login").click(function(){
		is_user();
  	});
var $counter=0;
var $counter1=0;


function getReccomentations(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState === 4 || xhttp.status === 200) {
			 var responseMessage = xhttp.responseText;
			 //document.getElementById("recommm").innerHTML = "<img src='"+responseMessage+"'/>";
			 document.getElementById("recommm").src = responseMessage;
		}
		
	};
	xhttp.open("POST", server+"reccom.php", true);
	xhttp.send();
	
}

function uploadprofileImg(){
	var formdata = new FormData();
	formdata.append("profileimage",document.getElementById("profilephoto").files[0]);
	console.log(formdata);
	var xhttp = new XMLHttpRequest();
	var responseMessage;
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState === 4 || xhttp.status === 200) {
			 responseMessage = xhttp.responseText;
			 alert(responseMessage);
			if(responseMessage==="pass"){
				alert(responseMessage);
				}
			else if(responseMessage==="fail"){
			 $(".empty_name").hide(500);
			$(".exist_name").show(500);
				}
		}
		
	};
	xhttp.open("POST", server+"imaged.php", true);
	xhttp.setRequestHeader("Content-type", "bitmap; charset-utf-8");
	xhttp.send(formdata);
}

function uploadImg(){	
	var formData = new FormData();
	formData.append('file', $('#file-5')[0].files[0]);

	$.ajax({
		   url : server+'imaged.php',
		   type : 'POST',
		   data : formData,
		   processData: false,  // tell jQuery not to process the data
		   contentType: false,  // tell jQuery not to set contentType
		   success : function(data) {}
	});
}


$(document).ready(function() {
    var $auth = $('.auth');
	
    var $signup = $('.signup');
    var $backButton = $('.go_back');
	var $logindicator= $('.login_status');

    $(window).resize(function(){
	$('.Recomend').css( "height", $( window ).height());
	$('.main').css( "height", $( window ).height());
	$('.RecipeCreate').css( "height", $( window ).height());
	$('.auth').css( "height", $( window ).height());         
    $('.auth').css( "width", $( window ).width());
	$('.auth').css( "max-width", $( window ).width());
	$('.mainbody').css( "height", $( window ).height()); 
    });
	
	$('.Recomend').css( "height", $( window ).height());
	$('.main').css( "height", $( window ).height());
	$('.RecipeCreate').css( "height", $( window ).height());
	$('.auth').css( "height", $( window ).height());
	$('.auth').css( "max-width", $( window ).width());    
    $('.auth').css( "width", $( window ).width()); 
	  
	$('.mainbody').css( "height", $( window ).height());    
	
	
	$backButton.click(function() {
       window.onbeforeunload = function(){
		   return " ";
		   }; 
	window.location.href="index.html";
  });
  
  	$signup.click(function(){
	window.location.href="SignUp_Page.html";
	  });
});

$('.addingrbtn').click(function(){
	$(".ingredents").append($('<div class="Ingredients form-inline row" id="'+$counter+'Input" ><input type="number" class="form-control" id="measurement" required /> <select class=" form-control measurements"> <option value="Cup">Cup</option><option value="lb">lb</option><option value="gram">gram</option><option value="kg">kg</option><option value="liter">liter</option><option value="ml">ml</option><option value="oz">oz</option><option value="pint">pint</option><option value="tsp">tsp</option><option value="Tbsp">Tbsp</option></select> <input type="Text" class="Description form-control" required/> <i class="fa fa-close" id="'+$counter+'Input" role="button" title="Click to remove Ingredent"></i><br></div>'));
	$counter=$counter+1;
		});
	
var methodlist=[];
$('.methodbtn').click(function(){
	"use strict";
	$counter1=$counter1+1;
	var ele='step'+$counter1;
	methodlist.push('step'+$counter1);
	var index=methodlist.indexOf(ele);
	$(".Methods").append($('<div id="step'+$counter1+'"><input type="textarea" class="inputdata" maxlength="50" required/>  <i class="fa fa-remove" id="step'+$counter1+'" role="button" title="Click to remove Step"></i></div>'));
	
	});
	
	
$(document).on('click', '.fa-close', function() { 
"use strict";
 $("#"+this.id).remove();
});

$(document).on('click','.fa-remove', function() {
	"use strict";
methodlist.pop(this.id);
$counter1=$counter1-1;
$("#"+this.id).remove();
});
var validFileExtensions = [".jpg", ".jpeg", ".bmp", ".gif", ".png"];    
function Validate(oForm) {
	"use strict";
    var arrInputs = oForm;
    for (var i = 0; i < arrInputs.length; i++) {
        var oInput = arrInputs[i];
        if (oInput.type === "file") {
            var sFileName = oInput.value;
            if (sFileName.length > 0) {
                var blnValid = false;
                for (var j = 0; j < validFileExtensions.length; j++) {
                    var sCurExtension = validFileExtensions[j];
                    if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() === sCurExtension.toLowerCase()) {
                        blnValid = true;
                        break;
                    }
                }
                
                if (!blnValid) {
                    alert("Sorry, " + sFileName + " is invalid, allowed extensions are: " + validFileExtensions.join(", "));
                    return false;
                }
            }
        }
    }
  
    return true;
}

function begin_meal_create(){
	"use strict";
	var meal=$(".meal_name").val();
	$(".goals").hide(1000);
	$(".recipes").hide(1000);
	$(".parker").hide(1000);
	$(".gallery-main").hide(1000);
	$(".statistics").hide(1000);
	$(".details-grid").hide(1000);
	$(".fa-list-ul").hide(1000);
	$(".panel").hide(1000);
	$("#Recomend").hide(1000);
	$(".fa-backward").show(1000);
	document.getElementById("create_meal").innerHTML='<object class="RecipeCreate" width="100%" type="text/html" data="Recipe.html?Meal_Name='+meal+'" ></object>';
	$(".RecipeCreate").css("height","100%");
	$(".RecipeCreate").css("margin-top","45px");
	}
function hideotherparts(){
	"use strict";
	$(".goals").hide(1000);
	$(".recipes").hide(1000);
	$(".parker").hide(1000);
	$(".gallery-main").hide(1000);
	$(".statistics").hide(1000);
	$(".details-grid").hide(1000);
	$(".fa-list-ul").hide(1000);
	$(".panel").hide(1000);
	$("#Recomend").hide(1000);
	}
function front_profile(){
	"use strict";
	$(".goals").show(1000);
	$(".recipes").show(1000);
	$(".parker").show(1000);
	$(".gallery-main").show(1000);
	$(".statistics").show(1000);
	$(".details-grid").show(1000);
	$(".fa-list-ul").show(1000);
	$(".fa-backward").hide(1000);
	$(".RecipeCreate").hide(1000);
	$(".panel").show(1000);
	$("#Recomend").show(1000);
	}
function passMealname(){
	function getQueryVariable(variable){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] === variable){
				   return pair[1];
				   }
       }
	   }
	/*var meal = getQueryVariable("Meal_Name").replace(/%20/g," ");
	$("#meal_name").val(meal);*/
	}
/*Function to show video and image*/
var imagebase4;
function assignimg(image){
	imagebase4=image;
	}
function readURL(input){
	var reader;
	if(Validate(input)){
	$(".meal-image").removeClass("hide");
		 reader= new FileReader();
		reader.onload=function(e){
			$('.meal-image').attr('src',e.target.result);
			imagebase4=e.target.result;
			};		
			reader.readAsDataURL(input.files[0]);
		}
		else{alert("Please Upload Image or video");}
	}

$('.inputfile').change(function(){
	readURL(this);
	});

	

function getimage(){
	var image=document.getElementsByClassName(".meal-image");
	return image.src;

	}
function add_recipe(){
"use strict";

	var responseMessage;
	var meal_name=$(".meal_name").map( function(){return $(this).val(); }).get();
	var quanity=$("#measurement").map( function(){return $(this).val(); }).get();
	var qtype=$(".measurements").map( function(){return $(this).val(); }).get();
	var descrp=$(".Description").map( function(){return $(this).val(); }).get();
	var method=$(".inputdata").map( function(){return $(this).val(); }).get();
	var getstuff= new XMLHttpRequest();
	uploadImg();
getstuff.onreadystatechange=function(){
		if(getstuff.readyState===4 && getstuff.status===200){
			responseMessage=getstuff.responseText;
			alert(responseMessage);
			if(responseMessage==="fail"){
				alert("Fail to add Meal Database");
			}else if(responseMessage==="added"){
				alert("meal added");
				alert();
				}
		}
		};		
		var requeststring=server+"Create_Recipe.php?q="+JSON.stringify(quanity)+"&qtype="+JSON.stringify(qtype)+"&decrp="+JSON.stringify(descrp)+"&Method="+JSON.stringify(method)+"&Meal_Name="+meal_name+"&image="+imagebase4;
		getstuff.open("GET",requeststring,true);
		getstuff.send();
		
}
function meal_list(){
	var responseMessage;
	var requeststring = server+"view.php";
	var getstuff = new XMLHttpRequest();
	getstuff.onreadystatechange = function(){
        if(getstuff.readyState===4 && getstuff.status===200){
           responseMessage = getstuff.responseText;
         	document.getElementById("Meal_List").innerHTML=responseMessage;
        }
	};
	getstuff.open("GET",requeststring ,true);
    getstuff.send();
	
	}
function show_meal(mealid){
	var responseMessage;
	alert(mealid);
	var requeststring = server+"show_meal.php?Meal_id="+mealid;
	var getstuff = new XMLHttpRequest();
	getstuff.onreadystatechange = function(){
        if(getstuff.readyState===4 && getstuff.status===200){
           responseMessage = getstuff.responseText;
        }
	};
	getstuff.open("GET",requeststring ,true);
    getstuff.send();
	
	}	
	
function addprefrence(){
	if($(".Prefrence-type").val()!=="0"){
		$(".Prefered_Recipe").tagsinput("add",$(".Prefrence-type").val());
	}
}
function addcateogry(){
	if($(".Cateogory-type").val()!=="0"){
		$(".Meal_Categories").tagsinput("add",$(".Cateogory-type").val());
	}
}
function add_allergies(){
	if($(".Allergies-type").val()!=="0"){
		$(".food_allergies").tagsinput("add",$(".Allergies-type").val());
	}
}
function add_illnesses(){
	if($(".otherproblem").val()!=="0"){
		$(".sickness").tagsinput("add",$(".otherproblem").val());
	}
}
var ingredent;
$(".addingredentbtn").click(function(){
	if($("#ingrmeasure").val().length!==0 && $(".inputdata").val().length!==0 && $("#m_type").val().length!==0){
		$(".kitchen").tagsinput("add",$("#ingrmeasure").val()+" "+$(".inputdata").val()+" "+$("#m_type").val());
		storeingr();
	}
	else{
		alert("Add in Require fields");
		}
});

function storeingr(){
	var responseMessage;
	var getstuff= new XMLHttpRequest();
	var q=$("#ingrmeasure").val();
	var mtype=$("#m_type").val();
	var meal_name=$(".inputdata").val();
getstuff.onreadystatechange=function(){
		if(getstuff.readyState===4 && getstuff.status===200){
			responseMessage=getstuff.responseText;
			alert(responseMessage);
			if(responseMessage==='fail'){
				alert("Fail to add ingredient to to Database");
			}
			else if(responseMessage==='added'){
				alert("Ingredient added");
				}
		}
		};
		
		var requeststring=server+"kitchen.php?mtype="+mtype+"&meal_name="+meal_name+"&quanity="+q;
		getstuff.open("GET",requeststring,true);
		getstuff.send();
	}
	
function likemeal(){}
function comment_meal(){
	var months = [ "January", "February", "March", "April", "May", "June", 
               "July", "August", "September", "October", "November", "December" ];
	if($(".Comment_meal").val().length===0){
		alert("Type in a comment for the meal");
	}
	else{
		var fullDate = new Date();
		
var stringcm='<li><div class="commenterImage"><img src="http://lorempixel.com/50/50/people/6" /></div><span class="commentText"><p class="">'+$(".Comment_meal").val()+'.</p> <span class="date sub-text">on'+months[fullDate.getMonth()]+' '+fullDate.getDay()+' '+fullDate.getYear()+'</span><button type="button" class="close remove" aria-hidden="true">&times; Remove</button> </span></li>';
		$(".list_comment").append(stringcm);
		}
}
