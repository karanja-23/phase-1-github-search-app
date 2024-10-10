const form = document.querySelector('#github-form')
const input = document.querySelector('#search')
form.addEventListener('submit', function(event){
    event.preventDefault()
    const userName = input.value
    fetch (`https://api.github.com/search/users?q=${userName}`, {
        method: 'GET',
        headers:{
            'Accept': 'application/vnd.github.v3+json'
        }        
    })
    .then(response => response.json())
    .then (data => data.items.forEach(function (userName){
        displayUser(userName)
        console.log(data.items)
    }))

    form.reset()
    
})

function displayUser(userName){
    

   const userUl = document.querySelector('#user-list')
   
   const userLi = document.createElement('li')
   
   userLi.innerHTML =`
   
   <img src="${userName.avatar_url}"/>
   <h4>${userName.login}</h4>
   <h6><a href="${userName.html_url}"><i class="fa fa-link" aria-hidden="true"></i> Github Profile</a></h6> 
   <h6><a href = "https://github.com/${userName.login}?tab=repositories">${userName.login}'s repos</a></h6>
   
   `
   
   userUl.appendChild(userLi)

}