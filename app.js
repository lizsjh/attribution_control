var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:2000,
    loading: true,
    photo: true,
    content: 'Hello. This is a bot created by the customer service department.'
}).then(function(){
    return botui.message.add({
        delay:2000,
        loading: true,
        photo: true,
        content:'Your request will be handled now. What brings you here?'
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
        delay:10000,
        loading: true,
        photo: true,
        content:'Your message did not go through.'
    });
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'I feel your annoyance due to this. Please repeat your message again.'
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
        delay:5000,
        loading: true,
        photo: true,
        content:'The issue can definitely be resolved. What is your order number?'
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
        delay:3000,
        loading: true,
        photo: true,
        content:'Got it. Please allow a few seconds for your order to be pulled up.'
    });
}).then(function(){
    return botui.message.add({
        delay:10000,
        loading: true,
        photo: true,
        content:'Which item(s) is missing?'
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
        delay:10000,
        loading: true,
        photo: true,
        content:'Your message cannot be processed at the moment.'
    });
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        photo: true,
        content:'I can feel your irritation because of this. Could you repeat once more?'
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
        delay:5000,
        loading: true,
        photo: true,
        content:'Thank you for repeating. Meanwhile, the problem has been identified: there was a miscommunication in the packaging process.'
    });
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        photo: true,
        content:'A new order will be created to be delivered within a day. Please hold on.'
    });
}).then(function(){
    return botui.message.add({
        delay:10000,
        loading: true,
        photo: true,
        content:'Your request has been processed.'
    });
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        photo: true,
        content:'I truly feel your disappointment due to the prior errors.'
    });
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'Please contact again if you need further assistance.'
    });
});

function sendcomplete(){
    window.parent.postMessage({"message": "completed","text1":response[0],"text2":response[1],"text3":response[2], "text4":response[3], "text5":response[4]}, "*");
};
