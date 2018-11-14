function updateSchedule(){
    //empty the schedule
    $("#schedule").empty();
  
    // stores the overall data
    var htmlArray = "";
  
    for(i=0;i<events.length;i++){
      var innerHtml = "";
      for(key in events[i]){
        innerHtml += "<p>"+key+": "+events[i][key]+"</p>";
      }
      htmlArray += "<div class=\"container\">"+innerHtml+"</div><hr />";
    }
  
    // now update with the correct data!
    $("#schedule").append(htmlArray);
};