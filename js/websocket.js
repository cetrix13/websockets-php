ws = new WebSocket("ws://127.0.0.1:2346");
ws.onopen = function() {
    console.log('connection success');
};
ws.onmessage = function(e) {
    var entry = JSON.parse(e.data);
    document.getElementById('textarea').append("Book: " + entry['Name'] + ". Author: " + entry['Author']+ "\n");
};

function onSubmit() {
  ws.send('{"type":"empty_json"}');
}
