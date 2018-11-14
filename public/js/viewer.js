var token = "";
var tuid = "";

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
    });
});
