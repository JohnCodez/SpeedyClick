let currentUsername;
accountTab.style.visibility = 'hidden'
grayBackground.style.visibility = 'hidden'

function updateAccountButtonText() {
    if (currentUsername) {
        account.innerText = 'Account'
    } else {
        account.innerText = 'Login'
    }
}

function toggleAccountTab() {
    if(accountTab.style.visibility === 'hidden'){
        accountTab.style.visibility = 'visible'
        grayBackground.style.visibility = 'visible'
    } else {
        accountTab.style.visibility = 'hidden'
        grayBackground.style.visibility = 'hidden'
    }
}

account.addEventListener('click', () => {
    toggleAccountTab()
})

login.addEventListener('submit', (e) => {
    e.preventDefault()
    toggleAccountTab()

    fetch('https://speedy-click-database.herokuapp.com/accounts')
    .then(r => r.json())
    .then(accounts => {
        let foundAccount = accounts.find(account => account.username.toLowerCase() === e.target[0].value.toLowerCase())
        if (foundAccount){
            currentUsername = foundAccount.username
            console.log(currentUsername)
        }
    })
})

signup.addEventListener('submit', (e) => {
    e.preventDefault()
    toggleAccountTab()

    fetch('https://speedy-click-database.herokuapp.com/accounts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            username: e.target[0].value,
            password: e.target[1].value,
        })
    })
    .then(r => r.json())
})

updateAccountButtonText()