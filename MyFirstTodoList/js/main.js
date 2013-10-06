var count = 0
var dueDates = []

$('#countButton').click(function(){
    var todoItem = $('#todoItem').val();
	if(todoItem){
		var todoDateStr = $('#todoDate').val();
	    var todoDate = moment(todoDateStr);
		var now = moment().startOf('day');
		if(todoDate){
			if(todoDate >= now){
				count++;
				$('#count').html(count);
				var inserted = false;
				for(var i = 0; i < dueDates.length; i++){
					if(todoDate < dueDates[i]){
						$("<li id='todoInList'>"+$('#todoItem').val()+" due by " + todoDateStr + "</li>").insertBefore($('#todos li').get(i));
						dueDates.splice(i, 0, todoDate);
						inserted = true;
						break;
					}	
				}
				if(!inserted){
					$('#todos').append("<li id='todoInList'>"+$('#todoItem').val()+" due by " + todoDateStr + "</li>");
					dueDates.push(todoDate)
				}
			} else {
				alert("Please select a due date that is not in the past");
			}
		} else{
			alert("Please enter a todo due date.");
		}
	} else {
		alert("Please enter a todo item.");
	}
});

$('#todos').on("click","li",function(){
    if($(this).css("text-decoration")!=="line-through"){
		$(this).css("text-decoration","line-through");
		count--;
	} else {
		$(this).css("text-decoration","none");
		count++;
	}
	$('#count').html(count);
});
