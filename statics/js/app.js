
        var open = 0;
        document.querySelector(".nav-hum").addEventListener("click", function(){
            
            if(open == 1){
                document.querySelector(".nav-link").style.top = -1000 + "px";
                open =0;
                
            }
            else{
                document.querySelector(".nav-link").style.top = 100 + "px";
                open = 1;
            }
            console.log(open);
        });


        var side = 0;
        document.querySelector("#checkMeLabel").addEventListener("click", function(){
            
            if(side == 1){
                document.querySelector(".navs").style.display = "none";   
                side =0;
                
            }
            else{
                document.querySelector(".navs").style.display = "block";
                side = 1;
            }
        });


        function thumbnail(up_image, show_div)
        {
            const image = document.getElementById(up_image);
            image.addEventListener("change", function(){
                const reader = new FileReader();
                reader.addEventListener("load", ()=>{
                    const uploadedimg = reader.result;
                    const showuploaded = document.getElementById(show_div);
                    showuploaded.style.background = `url(${uploadedimg})`;
                    showuploaded.style.backgroundSize = "cover";
                });
                reader.readAsDataURL(this.files[0]);
            });
        }

        
        
          
            
        function auto($data){
            for(let i = 0; i<$data.length; i++){
                $("#" + $data[i]).on('input', function(){
                    this.style.height = 'auto';
                    this.style.height = (this.scrollHeight)+ 'px';
                });
            }
        }


