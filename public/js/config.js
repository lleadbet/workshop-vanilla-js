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

// when the config changes, update the schedule! 
twitch.configuration.onChanged(function(){
  twitch.rig.log(twitch.configuration.broadcaster)
  if(twitch.configuration.broadcaster){
    try{
      var config = JSON.parse(twitch.configuration.broadcaster.content)
      console.log(typeof config)
      if(typeof config === "object"){
        events = config
        updateSchedule()
      }else{
        console.log('invalid config')
      }
    }catch(e){
      console.log('invalid config')
    }
  }
})

function updateConfig(){
  twitch.configuration.set('broadcaster', '1', JSON.stringify(events))
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
