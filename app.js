var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:500,
    loading: true,
    content: 'Hello. This is Alex, and I am a bot created by the customer service department.'
}).then(function(){
    return botui.message.add({
        delay:700,
        loading: true,
        content:'I am handling your request today. What brings you here?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:900,
        loading: true,
        content:'I can help you with that. First, could you tell me why you need to replace or return this textbook in more details?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
        });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:900,
        loading: true,
        content:'Got it. Could you input your order number below?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
        });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:900,
        loading: true,
        content:'Alright. I will process your request. Please give me a moment.'
    });
}).then(function(){
    return botui.message.add({
        delay:1200,
        loading: true,
        content:'The 3rd edition is currently in stock. For your information, shipping will be free, and you need to pay $50 more. What would you like to do next?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:900,
        loading: true,
        content:'I will process your request. Please hold on for a moment.'
    });
}).then(function(){
    return botui.message.add({
        delay:1800,
        loading: true,
        content:'I have processed your request. The issue is resolved'
    });
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:900,
        loading: true,
        content:'Please contact us again if you need further assistance. Bye.'
    });
});


function sendcomplete(){
     window.parent.postMessage({"message": "completed","text1":response[0],"text2":response[1],"text3":response[2],"text4":response[3]}, "*");
};
