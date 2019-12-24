function getFact()
{
    let x = Math.floor((Math.random()*10)+1);
    if(x==1)
        {
            document.getElementById("fact").innerHTML = "I like to golf.";
       
        }
    else if(x==2)
        {
            document.getElementById("fact").innerHTML = "I like to workout.";
        }
    else if(x==3)
        {
            document.getElementById("fact").innerHTML = "I like to fish.";
        }
    else if(x==4)
        {
            document.getElementById("fact").innerHTML = "My favorite holiday is thanksgiving.";
        }
    else if(x==5)
    {
        document.getElementById("fact").innerHTML = "I have 2 siblings.";
    }  
    else if(x==6)
    {
        document.getElementById("fact").innerHTML = "I live in Portage.";   
    }
    else if(x==7)
    {
        document.getElementById("fact").innerHTML = "My favorite programming language is Java.";
    }
    else if(x==8)
    {
        document.getElementById("fact").innerHTML = "I actually enjoy doing math.";
    }
    else if(x==9)
    {
        document.getElementById("fact").innerHTML = "I'm 5' 11'' but I tell people I'm 6'.";
    }
    else
    {
        document.getElementById("fact").innerHTML = "My favoite favoirte food is chichen.";
    }

}//end of script