//  onload="document.getElementById('last-msg').scrollIntoView(true);"


var msg_input = document.querySelector('#msg_text_input');
var msg_send = document.querySelector('#msg_send');
var main = document.querySelector('main');
var z = document.querySelector('#z');

msg_send.addEventListener("click", function() {
    send_msg();
});

msg_input.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        send_msg();
    }
})


function send_msg() {
    var msg_text = '';
    msg_text = msg_input.value;
    if ((msg_text != '') || (msg_text != ' ')) {
        msg_input.value = '';
        var datetime = new Date();
        main.innerHTML += 
            '<hr><div class="message"><div class="header"> \
            <span class="author">' + 'User' 
            + '</span><span class="datetime"><span class="time">' 
            + datetime.getHours() + ':' + datetime.getMinutes() 
            + ':' + datetime.getSeconds() + '</span>&nbsp;&nbsp; \
            &nbsp;<span class="date">' + datetime.getDate() + '/' 
            + datetime.getMonth() + '/' + datetime.getFullYear() 
            + '</span></span></div><div class="text">' + msg_text 
            + '</div></div>';
    
    z.scrollIntoView({block: "center", behavior: "smooth"});
    }
}



