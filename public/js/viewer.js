var token = "";
var tuid = "";
var events = [];

// because who wants to type this every time?
var twitch = window.Twitch.ext;

twitch.onContext(function(context, delta) {
    twitch.rig.log(delta);
    twitch.rig.log(context);
});

twitch.onAuthorized(function(auth) {
    // save our credentials
    token = auth.token;
    tuid = auth.userId;
});


$(function() {
    twitch.configuration.onChanged(function (){
        twitch.rig.log('got a configuration from config service!');
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
    });
});
