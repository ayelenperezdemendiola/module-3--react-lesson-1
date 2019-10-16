'use strict';

const userCard = document.querySelector('.user--card');
const userReposContainer = document.querySelector('.user--repos');
const filter = document.querySelector('.filter--field');
const searchButton = document.querySelector('.filter--button');
const API = "https://api.github.com/users/";
const fullNameElement = document.createElement('h1');
const logoContainer = document.querySelector('.logo');
const userContainer = document.querySelector('.user--container');

function createNewElement(myElement, myClass, myContent) {
    const newElement = document.createElement(myElement);
    newElement.classList.add(myClass);
    const newElementContent = document.createTextNode(myContent);
    newElement.appendChild(newElementContent);
    userCard.appendChild(newElement);
    return newElement;
}

function createNewReposElement(myElement, myClass, myContent) {
    const newElement = document.createElement(myElement);
    newElement.classList.add(myClass);
    const newElementContent = document.createTextNode(myContent);
    newElement.appendChild(newElementContent);
    userReposContainer.appendChild(newElement);
    return newElement;
}


function getUserData() {
    const currentUser = filter.value;
    const ENDPOINT = API + currentUser;
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
            userCard.innerHTML = '';
            logoContainer.innerHTML = '';
            userReposContainer.innerHTML = '';
            if (data.message === 'Not Found') {
                userCard.innerHTML = '';
                userCard.innerHTML = `<div class="add--container"><p class="add--notFound">Does not exist</p></div>`;
            } else {
                userCard.innerHTML = '';
                const fullName = data.name;
                const userName = data.login;
                const img = '<i class="fab fa-github-square"></i>';
                logoContainer.innerHTML = img;
                createNewElement('p', 'user--userName', `@${userName}`);
                fullName ? createNewElement('h1', 'user--fullName', fullName) : createNewElement('h1', 'user--fullName', 'Name not defined');
                createNewElement('p', 'user--description', 'This is the bio...')

                const repos = data.repos_url;
                return fetch(repos);
            }
        })
        .then(reposResponse => reposResponse.json())
        .then(reposData => {
            userReposContainer.innerHTML = '';
            createNewReposElement('h3', 'repos--title', 'Repositories');
            if (reposData.length === 0) {
                createNewElement('p', 'add--notFound', 'No repositories found')
            } else {
                createNewReposElement('ul', 'user--repos__list', '');
                for (let i = 1; i < reposData.length; i++) {
                    const reposList = document.querySelector('.user--repos__list');
                    reposList.innerHTML +=
                        `<li class="repos__list--item"> 
                            <a class ="repos__list--link" href=${reposData[i].html_url}>Repo ${i}</a>
                            <ul class="list--puntuation">
                            <li class="item--puntuation">
                                    <i class="fas fa-star"></i>
                                    ${reposData[i].stargazers_count}
                                    <i class="fas fa-code-branch"></i>
                                    ${reposData[i].forks_count}
                            </li>
                            </ul>            
                </li>`;
                }
            }
        });
}

searchButton.addEventListener('click', getUserData);

//# sourceMappingURL=main.js.map
