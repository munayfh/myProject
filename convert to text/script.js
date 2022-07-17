click_to_convert.addEvebtListener('click',function(){
    var speech= true;
    Window.SpeechRecognition =window.webkitSpeechRecognition;
    const recognition =new SpeechRecognition();
    recognition.interimResults =true;

    recognition.addEvebtListener('result',e=>{
        const transcript = Array.from(e.results)
        .map(result =>result[0])
        .map(result =>result.transcript)
    
        convert_text.innerHTML =transcript;
    })
    
    if(speech == true){
        recognition.start();
    }
    })