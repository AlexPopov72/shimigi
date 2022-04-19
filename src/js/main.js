const baseUrl = "https://raw.githubusercontent.com/camelactive/assets/main/assets/assets.json";
let categoryList = fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
        setNavLinks(data);
        return data
    });

function setNavLinks(data) {
    let navBlock = document.querySelector('.menutop__ul');
    if (navBlock) {
        Object.entries(data).forEach(item => {
            if (item[1].status == true) {
                let navElenet = `<li class="menutop__li"> <a href="#">${item[1].name}</a></li>`
                navBlock.innerHTML += navElenet;
            }
        })
    }
}
const storyUrl = "https://github.com/AlexPopov72/acets/blob/main/story.json";
let storyList = fetch(storyUrl)
    .then(response => story.json())
    .then(data => {
        setNavLinks(data);
        return data
    });

function setNavLinks(data) {
    let storyBlock = document.querySelector('.menutop__ul');
    if (storyBlock) {
        Object.entries(data).forEach(item => {
            if (item[1].status == true) {
                let storyElenet = `<div class="story_block"><img src="${item[1].img}" alt="${item[2].alt}"></div>`
                storyBlock.innerHTML += storyElenet;
            }
        })
    }
}