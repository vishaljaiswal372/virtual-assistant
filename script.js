let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by Ayush Sir")
    }
    else if (message.includes("youtube")) {
        speak("opening youtube...");
    
        const apiKey = "AIzaSyAga6BmVJuSp0mw1T9zOH3YDC4Ww9cTpkw"; // Correct API key variable
        const query = message.replace("youtube",""); // Get the search term after "youtube"
        
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    const videoId = data.items[0].id.videoId; // Get the first video's ID
                    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
                } else {
                    speak("No videos found.");
                }
            })
            .catch(error => {
                console.error("Error fetching YouTube data: ", error);
                speak("There was an error accessing YouTube.");
            });
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
    }
}

const images=["1.avif","3.jpg","4.jpg","2.jpg","5.jpg"];
let current_index=0;
const image_element=document.querySelector("#logo");

function change_image()
{
    // Fade out the current image
    image_element.style.opacity = 0;

    // After the fade-out transition (1 second), change the image source
    setTimeout(() => {
    current_index = (current_index + 1) % images.length; // Loop through the images
    image_element.src = images[current_index];

    // Fade the image back in
    image_element.style.opacity = 1;
  }, 1000); // Match the timeout with the CSS transition duration (1 second)

}

setInterval(change_image, 3000);