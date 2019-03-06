// define the constant parameters
const buttons = document.getElementById("buttons"); 
const grid = document.querySelector(".grid");
const list = document.getElementById ('list-data')


// specify an array of tags
const tagNames = ["rockstar", "phones", "anime", "bread", "hamster", "flowers", "pasta", "math", "burgers", "Singapore", "Malaysia", "coffee", "tea", "France","beer", "whisky"]; 



// limit the number of tags to be chosen 
choices = []; 
while(choices.length<5){
    const randomTag = tagNames[Math.floor(Math.random()*tagNames.length)]
    if (choices.indexOf(randomTag)==-1){
        choices.push(randomTag)
    }
}



// define the properties of the button
for (let i = 0; i<choices.length; i++){
    let newButton = document.createElement("button"); 
    newButton.innerHTML = choices[i]; 
    newButton.classList.add("btn"); 
    newButton.classList.add("btn-info"); 
    newButton.classList.add("mr-3"); 
    buttons.appendChild(newButton); 
}



// create an random index to make a random selection from the "choices" array
let randomIndex = Math.floor(Math.random()* choices.length); 
let tag = choices[randomIndex]; 



// create a function that searches the tag from Tumblr API
function getTaggedPhotos(tagName){
    fetch("https://api.tumblr.com/v2/tagged?tag=" + tagName + "&api_key=ZweGJga4SW8vYL7hHVSX7E8VijZU7ark8iBRUFFjsYJp220Lfb")
    .then(function(response){
        // check to see whether the tag will give a valid response. If response if "OK", then response will be output in raw json format
        if (!response.ok){
            window.alert("Hey, seems like something went wrong")
            return; 
        }
        return response.json(); 
     })
    .then(function(result){
        // check if Tumblr API has the correct results for the specified tag
        if (!result){
            return; 
        }
        list.innerHTML = " "; 
        const items = result.response; 

        // obtain every photo given in the "response" array
        for(let i = 0; i < items.length; i++){
         
            const item = items [i]
            
            // check if photo is undefined
            if (item.photos != undefined){ 

                const imgSrc = item.photos[0].original_size.url; 

                const img = document.createElement("img"); 
                img.src = imgSrc; 

                let li = document.createElement('li')
                li.appendChild(img)

                list.appendChild(li)
            }
        }
    })
    // use "catch" to check for any errors primarily due to failure to load a specific tag from Tumblr API
    .catch(function(err){
      window.alert("Please try again later.")
    })
} 


// use the "getTaggedPhotos" function to search for the specified tag
getTaggedPhotos(tag)


// determine the chain of events after the user clicks a button
buttons.onclick = function(event){ 
    if (event.target.innerHTML == tag){
        alert("Correct!"); 
        location.reload(); 
    }

    else {
        alert("Wrong!");
        location.reload(); 
    }
}







