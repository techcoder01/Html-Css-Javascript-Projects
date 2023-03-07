const btnEl = document.getElementById('btn')
const jokeEl = document.getElementById('joke')

const apiKey = "SHodLLF2Xizlbty0JFWXcg==ow2GbEO6mcsTkmtn";

const options = {
    method : 'GET',
    headers : {
        'X-Api-Key': apiKey,
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    try {
        jokeEl.innerText = "Updating..."
        btnEl.disabled = true;
        btnEl.innerText = 'loading';
        const response = await fetch(apiURL , options);
        const data = await response.json();
    
        btnEl.disabled = false;
        btnEl.innerText = 'Tell me a Joke'
    
        jokeEl.innerText =  data[0].joke ;      
    } catch (error) {
        jokeEl.innerText = "An Error Happened , Try Again Later";
        btnEl.disabled = false;
        btnEl.innerText = 'Tell me a Joke'
        console.log(error)
    }
}

btnEl.addEventListener('click' , getJoke)