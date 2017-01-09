$(document).ready(function(){
	 			// If user wants to end session
	 			$("#exit").click(function() {
	 				var exit = confirm("Are you sure you want to end the session?");
	 				if(exit==true){
	 					window.location = 'index.php?logout=true';
	 				}
	 			});

	 			// If user submits the form
	 			$("#submitmsg").click(function() {
	 				var clientmsg = $("#usermsg").val();
	 				$.post("post.php", {text: clientmsg});
	 				$("#usermsg").attr("value", "");
	 				return false;
	 			});

	 			// Load the file containing the chat log
	 			function loadLog(){
	 				var oldScrollHeight = $("#chatbox").attr("scrollHeight") - 20; // Scroll height before the request
	 				$.ajax({
	 					url: "log.html",
	 					cache: false,
	 					success: function(html){
	 						$("#chatbox").html(html); // Insert chat log into the #chatbox

	 						// Auto-scroll
	 						var newScrollHeight = $("#chatbox").attr("scrollHeight") - 20; //Scroll height after the request
	 						if (newScrollHeight > oldScrollHeight){
	 							$("#chatbox").animate({scrollTop: newScrollHeight}, 'normal'); // Autoscroll to bottom of div
	 						}
	 					},
	 				});
	 			}

	 			// Reload file every 500 ms
	 			setInterval(loadLog, 500);

	 			$(window).unload(function() {
	 				
	 			});
			});