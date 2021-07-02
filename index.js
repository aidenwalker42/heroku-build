document.getElementById("send_message").onclick = function(){
    axios.post("http://localhost:5050/message/send", {
        m: ""+document.getElementById("message").value
    })
    .then(res => {
        let messages = res.data;
        displayMessages(messages);
    })
}

function removeMessageButton(messageNum){
    console.log(messageNum)
    axios.delete("http://localhost:5050/message/delete/"+messageNum)
    .then(res => {
        let messages = res.data;
        displayMessages(messages);
    })
}

function displayMessages(messages){
    document.getElementById("content").innerHTML = "";
        console.log(messages);
        for(let i = 0; i<messages.length; i++) //goes through messages
        {
            document.getElementById("content").innerHTML +=
             "<p class=\"m\">" + messages[i] + "<button class=\"b\" onclick=\"removeMessageButton("+i+")\">X</p>"
        }
}
//when you click the button, get the value of the input field, send it through axios post