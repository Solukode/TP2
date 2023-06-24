// API à utiliser pour le travail: https://randomuser.me/api/?results=5

fetch('https://randomuser.me/api/?results=5')
    .then(response => {
        if(!response.ok) {
            throw new Error('Erreur de la requete ' + response.status)
        }
        return response.json(); 
    })
    .then(data => {
        console.log(data);
        const results = data.results;
        const newPerson = results.map((person) => {
            console.log(person);
            const { picture: {large}, name: {first, last}, email } = person;
            return `
            <article class='card'>
                <img src='${large}'></img>
                <h3>Nom : ${first} ${last}</h3>
                <h4>Email : ${email}</h4>
            </article>`
        }).join('</br>')
        document.querySelector('#container').innerHTML = newPerson;
    })
    .catch(error => console.error(error))