function doorPasscode()
{
    let passPrompt = window.prompt("Enter the passcode","Hint: A famous pizzeria mascot OR a famous soccer player")
    if (passPrompt=="freddy" || passPrompt=="Freddy" || passPrompt=="Freddy Fazbear" || passPrompt=="Freddy fazbear" || passPrompt=="freddy fazbear")
    {
        const element = document.getElementById("door");
        element.remove();
        summonFreddy();
        summonFreddyAudio();
        //summonFreddyText();
    }
    else if (passPrompt=="The Noid" || passPrompt=="Little Caesar" || passPrompt=="Little Caesars")
    {
        alert("Wrong mascot. Try Again.");
        location.refresh(true);
    }
    else if (passPrompt=="Ronaldo" || passPrompt=="Christiano Ronaldo" || passPrompt=="ronaldo" || passPrompt=="christiano ronaldo")
    {
        const element = document.getElementById("door");
        element.remove();
        summonRonaldo();
        summonRonaldoAudio();
    }
    else if (passPrompt=="Messi" || passPrompt=="Lionel Messi" || passPrompt=="messi" || passPrompt=="lionel messi" || passPrompt=="Neymar Jr" || passPrompt=="Neymar Jr." || passPrompt=="neymar" || passPrompt=="neymar jr" || passPrompt=="haaland" || passPrompt=="Haaland")
    {
        alert("Wrong soccer player. Try Again.");
        location.refresh(true);
    }
    else
    {
        alert("Sorry, but " + "(Make this output what they typed)" + " is not the answer. Try Again.");
        location.refresh(true);
    }
}

function summonFreddy()
{
    var x = document.createElement("IMG");
    x.setAttribute("src", "freddywaving.png");
    x.setAttribute("alt", "Freddy Fazbear");
    x.setAttribute("width", "250px");
    document.body.appendChild(x);
}

function summonFreddyAudio()
{
    var aud = document.createElement("AUDIO");

    if (aud.canPlayType("audio/mpeg")) {
      aud.setAttribute("src","fnaf-music.mp3");
    } 
    aud.setAttribute("autoplay", "autoplay");
    document.body.appendChild(aud);
}

//function summonFreddyText()
//{
    //let fredText = document.createElement(FreddyText);
    //fredText.innerHTML = "Oh no it's Freddy Fazbear!!! Run!!!"
    //document.appendChild(FredText);
//}

function summonRonaldo()
{
    var x = document.createElement("IMG");
    x.setAttribute("src", "cristiano-ronaldo-206.png");
    x.setAttribute("alt", "Cristiano Ronaldo");
    x.setAttribute("width", "250px");
    document.body.appendChild(x);
}

function summonRonaldoAudio()
{
    var aud = document.createElement("AUDIO");

    if (aud.canPlayType("audio/mpeg")) {
      aud.setAttribute("src","Ronaldo-suiii.mp3");
    } 
    aud.setAttribute("autoplay", "autoplay");
    document.body.appendChild(aud);
}
