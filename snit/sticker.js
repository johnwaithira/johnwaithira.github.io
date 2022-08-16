
var modal = document.getElementById("myModal")
var btn = document.getElementById("myBtn")
var span = document.getElementsByClassName("close")[0]
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var date = new Date()
function formtoggle()
{
    var div = document.querySelector("#myform")
    var bt = document.querySelector("#mybt")
    div.classList.toggle("hide")
    if(div.classList.contains("hide")){
       bt.innerHTML = "New"
   }
 
  else{
       bt.innerHTML = "Close"
  }
}



    

    span.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
		if (event.target == modal) {
		    modal.style.display = "none";
		}
    }


  
    function generate(passLen)
    {
        var password = ""
        for(var i = 0; i<passLen; i++)
        {
            var number = Math.floor(Math.random() * chars.length);
            password += chars.substring(number, number +1)

        }
        return password
    }

var form = document.getElementById("stickerform");
form.addEventListener("submit",(e)=>{
    e.preventDefault()
})
const notes = "$RF4Xjq(NAjSInJ#UDPh" 
var btn = document.querySelector("#savebtn");
btn.addEventListener("click",()=>{
    var title = document.querySelector("#name")
    var description =  document.querySelector("#description")

    var input = document.querySelectorAll(".in")
    var check = true
    for(var i = 0;i<input.length; i++){
        if(input[i].value.length == 0)
        {
            document.querySelector("#"+input[i].id).style.border= '1px solid #fb2b2b'
            check = false
        }
        else{
            document.querySelector("#"+input[i].id).style.border= '1px solid #1c1c2467'
        }
        
    }
    if(check)
        {
            
            var mydata = {
                noteid : generate(6),
                title : title.value,
                description : description.value,
                created_at : date.toDateString() + "  " + date.toLocaleTimeString(),
                updated_at : false
            }
        var saved = localStorage.getItem(notes)
            var data = Array()
            if(saved == null)
            {
              data.push(mydata)
              
            }
            else
            {
                data = JSON.parse(localStorage.getItem(notes))
                data.push(mydata)
                formtoggle()

            }
            toast("Saved", 6000, success)
            title.value = ""
            description.value = ""
            store(data)
        }
})

show()
function color()
{
	var red, green, blue, a;
	red = gen()
	green = gen()
	blue = gen()
	a = faded()
	
	
	var code = document.getElementById("code")
	var colorcode = "rgba(" + red + ", " + green + "," + blue + "," + a + ")"
	
	return colorcode
}

function rgbcolor()
{
	var red, green, blue;
	red = gen()
	green = gen()
	blue = gen()
	
	
	var colorcode = "rgb(" + red + ", " + green + "," + blue +")"
	
	return colorcode
}



function gen()
{

   return Math.floor(Math.random(0) * 256)

}
function show()
{

	data = JSON.parse(localStorage.getItem(notes))
  		
	var display = document.getElementById("display")
	
	var template = ""
	var neg = true
	var sign = ""
	for(elem in data)
	{
		if(neg== true)
		{
			sign = "-"
		}
		else{
			sign = "+"
		}
		console.log(elem)
	   
	   template += `
	    
	    <div class="col-3 col-m-6 col-s-6 " style="z-index:10">
	    	<div class=" b-r-10">
				<div class="p-20-10" style="position: relative; display:block;">
					<div class="float-right c-pointer options-menu-btn" style="position: absolute; right: 10px;">
						<div class="bg-inherit b-n" id="open">   
							<div class="action-menu p-10 box-shadow2 b-r-8 hide" style="position: absolute;  z-index:100;right:30px; top:8px; width: 150px; background: rgb(255, 255, 255);">
								<p class="p-2-0" onclick="edit(event, ${elem})">Edit</p>					
								<p class="p-2-0" onclick="erase(event, ${elem})">Delete</p>
								
							</div>
							
						</div>
					</div>
					<div style="display: grid; ">
						<div class="p-t-10 p-l-10 w-p-100" style="display: flex; align-items: center;">
								<div onclick="openCurrent(event) " class="w-p-100 p-10 m-3 box-shadow b-r-7 c-pointer" style="min-height:100px;background:${color()}; transform:rotate(${sign+ Math.floor(Math.random(0) * 10)}deg)">
									<div>
										 <h2 class="p-t-10 f-w-100 f-s-40">${data[elem]["title"]}</h2>
										 <hr style="mix-blend-mode: screen;"  class="m-10-0">
										 <p>${data[elem]["description"]}</p>
									</div>
									<div class="p-10-0">
										<p class="f-s-14 ">Created at : ${data[elem]["created_at"]}</p>
									</div>
								</div>
							
						</div>
					</div>
	
				</div>
			</div>
		   
	    </div>

		
	   ` 	
	  
	}
	display.innerHTML = template
	document.body.style.background = "white"
}
function faded()
{
   return (Math.random(0) * 1).toFixed(1)
}
function openCurrent(evt){
	var status;
	var currentTargetMenu = evt.currentTarget.parentElement.parentElement.parentElement.children[0].children[0].children[0];

	if(currentTargetMenu.classList.contains("hide")){
		status = 0;
	}
   if(status == 0){
		currentTargetMenu.classList.remove("hide");
		status = 1;
   }
   else{
		currentTargetMenu.classList.add("hide");
		status = 0;
   }

	//console.log(currentTargetMenu)
}
const success = "green",
alert = "red"

function erase(event, id)
{
	if(confirm("Are you sure you want to delete this note?"))
	{
		toast(id + " is selected", 5000, "green")
		
		data = JSON.parse(localStorage.getItem(notes))
		if(id == 0)
		{
			data.splice(0, 1)
		}
		else
		{
			data.splice(id, id)
		}
		store(data)
	
	}
	
	show()

}
function edit(evt, id)
{
	
	
	data = JSON.parse(localStorage.getItem(notes))
	
    modal.style.display = "block"
    var editing = document.getElementById("edit");
    
	
	var editform = ""
	
	
	editform = `
			<div class="p-40-10">
			
				<div class="col-4 col-m-6 col-s-10 box-shadow m-a" style="background:${rgbcolor()}">
					<div class="p-t-30 p-l-10 p-r-10 p-b-10">
						<div class="">
							<h3 class="p-l-5" style="mix-blend-mode:unset; ">Edit note</h3>
							<div class="p-20-5 "  id="myeditform">
							<form class="" id="editstickerform">
							   <input type="text"  id="editname" placeholder="Title *" value ="${data[id]['title']}"
										                   class="in f-s-17 b-n outline-none b-one p-10-15 m-t-4  w-p-100 ">
							   <input type="text"  id="editdescription" placeholder="Description *" value ="${data[id]['description']}"
										                   class="in f-s-17 b-n outline-none b-one p-10-15 m-t-4  w-p-100 ">
							   
							   <button class="p-10-15 m-5-0 bg-inherit b-one " style="background:#fff" onclick="savenote(event, ${id})" id="editsavebtn">Save Changes</button>
							</form>
						</div>
					</div>
				</div>
			</div>
	
	`
	editing.innerHTML = editform
	
}
function savenote(evt,noteid)
{
	var editstickerform = document.getElementById("editstickerform")
	editstickerform.addEventListener("submit", (e)=>{
		e.preventDefault()
	})
	
	var title, desc;
	title = document.querySelector("#editstickerform #editname")
	desc = document.querySelector("#editstickerform #editdescription")
	var input = document.querySelectorAll("#editstickerform .in")
    var check = true
    for(var i = 0;i<input.length; i++){
        if(input[i].value.length == 0)
        {
            document.querySelector("#"+input[i].id).style.border= '1px solid #fb2b2b'
            check = false
        }
        else{
            document.querySelector("#"+input[i].id).style.border= '1px solid #1c1c2467'
        }
        
    }
	if(check)
	{
		data = JSON.parse(localStorage.getItem(notes))
		data[noteid]["title"] = title.value
		data[noteid]["description"] = desc.value
		data[noteid]["updated_at"] = date.toDateString() + "  " + date.toLocaleTimeString()
		
		store(data)
	}
	modal.style.display = "none"
	
	
}

function store(data)
{
	localStorage.setItem(notes, JSON.stringify(data))
	show()
}
function toast(text, timeout, color)
{
	var msg = `
		<div style="background:black;" class="text-center b-r-10">
			<div class="p-10-30 ">
				<div>
					<p style="color:${color}">${text}</p>
				</div>
			</div>	
		</div>
			
		`
	
	var toastbox = document.getElementById("toast")
	toastbox.innerHTML = msg
	
	setTimeout(()=>{
		toastbox.innerHTML = ""
	}, timeout)
	

}
