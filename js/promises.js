function wait(num){
    return new Promise((resolve) => {
        setTimeout(function(){
            resolve();
        }, num)
    });
}

wait(1000).then(() =>console.log("You'll see this message after 1 second."));
wait(3000).then(() =>console.log("You'll see this message after 3 seconds."));



// function gitHubUsername() {
//     return fetch('https://api.github.com/users', {headers: {'Authorization': 'token' + gitHubToken}})

// }

function gitHubUserInfo(userName) {

    fetch(`https://api.github.com/users/${userName}/events/public`, {headers: {"Authorization": `token ${gitHubToken}`}})

        .then(data => {
            console.log(data);
            data.json().then(secondData => {

                console.log(secondData);

                console.log(`The last commit of ${userName} was on ${secondData[0].created_at}`);
            });
        })
        .catch(() => console.log("Failed"));
}

gitHubUserInfo("christopheraguirre210");