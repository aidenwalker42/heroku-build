document.getElementById("send_message").onclick = function(){
    axios.post("https://aidenwalker.herokuapp.com/message/send", {
        m: ""+document.getElementById("message").value
    })
    .then(res => {
        let messages = res.data;
        displayMessages(messages);
    })
}

function removeMessageButton(messageNum){
    console.log(messageNum)
    axios.delete("https://aidenwalker.herokuapp.com/message/delete/"+messageNum)
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

document.getElementById("clear").onclick = function(){
    axios.delete("https://aidenwalker.herokuapp.com/message/delete/")
}
//when you click the button, get the value of the input field, send it through axios post