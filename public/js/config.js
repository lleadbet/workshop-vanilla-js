var token, userId;

var events = []

const twitch = window.Twitch.ext;

twitch.onContext((context) => {
  twitch.rig.log(context);
});

twitch.onAuthorized((auth) => {
  token = auth.token;
  userId = auth.userId;
});

function updateSchedule(){
  //empty the schedule
  $("#schedule").empty();

  // stores the overall data
  var htmlArray = "";

  for(i=0;i<events.length;i++){
    var innerHtml = ""
    for(key in events[i]){
      innerHtml += "<p>"+key+": "+events[i][key]+"</p>";
    }
    htmlArray += "<div class=\"container\">"+innerHtml+"</div><hr />";
  }

  // now update with the correct data!
  $("#schedule").append(htmlArray)
}

$(function(){



  $("#date-form").submit(function(e){
    var title = $("#title").val()
    var description = $("#description").val()
    var date = $("#date").val()

    var data = {
      Title:title,
      Description:description,
      Date: date    
    }

    events.push(data)
    updateSchedule()

    // return false to stop the default action and stop propogation as well
    return false;
  })
})
