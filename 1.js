var playerInstance = jwplayer("player");
playerInstance.setup({
playlist: [{
"title": "Estás viendo FafePlay",
"description": "App Free",
"image": " ",
"sources": [
{
"default": false,
"type": "dash",
"file": 'https://1057-vos.dtvott.com/DASH/manifest.mpd',
"drm": {
"clearkey": { "keyId": "bb0ecaa6ae62336197c64d4129c6a09d", "key": "cb0bba4522ffcd90a8b51541a0fcfae0" }
},
"label": "0"
}
]
}],
width: "100%",
height: "100%",
aspectratio: "16:9",
autostart: false,
cast: {},
sharing: {}
});
