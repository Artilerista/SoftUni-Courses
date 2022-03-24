function chatLogger(array) {
    let chatArray = [];
    for (let element of array) {
        let token = element.split(' ');
        let command = token[0];
        let text = token[1];
        if(command === 'Chat'){
            chatArray.push(text);
        } else if (command === 'Delete'){
            if(chatArray.includes(text)){
                let index = chatArray.indexOf(text);
                chatArray.splice(index,1);
            }
        } else if (command === 'Edit'){
            if(chatArray.includes(text)){
                let updatetext = token[2];
                let index = chatArray.indexOf(text);
                chatArray.splice(index,1,updatetext);
            }
        } else if (command === 'Pin'){
            if(chatArray.includes(text)){
                let index = chatArray.indexOf(text);
                let box = chatArray.splice(index,1).join('');
                chatArray.push(box);
            }
        } else if (command === 'Spam'){
            for (let i = 1; i < token.length; i++) {
               chatArray.push(token[i]);                
            }
        } else if (command === 'end'){
            console.log(chatArray.join('\n'))
        }
    }
}
chatLogger((["Chat Hello",
    "Chat darling",
    "Chat John",
    "Edit darling Darling",
    "Spam how are you",
    "Delete Darling",
    "Pin John",
    "end"])
)