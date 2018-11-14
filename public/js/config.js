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
