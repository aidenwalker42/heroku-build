document.getElementById("send_message").onclick = function(){
    axios.post("https://aidenwalker.herokuapp.com/message/send", {
        m: ""+document.getElementById("message").value
    })
    .then(res => {
        let messages = res.data;
        document.getElementById("content").innerHTML = "";
        console.log(messages);
        for(let i = 0; i<messages.length; i++) //goes through messages
        {
            document.getElementById("content").innerHTML += "<p>" + messages[i] + "</p>"
        }

    })
}


//when you click the button, get the value of the input field, send it through axios post