var cycle = 0; 
        var allBackgrounds = [
					   "./images/backgroundImage2.jpg",  
					   "./images/backgroundImage3.jpg",  
					   "./images/backgroundImage4.jpg",  
					   "./images/backgroundImage5.jpg",  
					   "./images/backgroundImage6.jpg", 					    
					   "./images/backgroundImage10.jpg",
                       "./images/backgroundImage1.jpg",  
					  					  
                    ]; 
 
        setInterval(function() { 
            if (cycle < 7) { 
            document.body.style.backgroundImage = "url('" + allBackgrounds[cycle] + "')"; 
		    cycle += 1; 
            } 
            else {  
                cycle = 0; 
	        } 
        }, 5000); 

        
        (function($) { "use strict";
            $(document).ready(function() {              
                $(".typed").typed({
                    stringsElement: $('.typed-strings'),
                    typeSpeed: 200,
                    backDelay: 1500,
                    loop: true,
                    contentType: 'html', // or text
                    // defaults to false for infinite loop
                    loopCount: false,
                    callback: function () { null; },
                    resetCallback: function () { newTyped(); }
                });
            }); 
        })(jQuery);
    
