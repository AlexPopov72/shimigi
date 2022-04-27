const baseUrl = "https://raw.githubusercontent.com/AlexPopov72/shimigi/02Cart/src/js/menu.json";
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
                let navElenet = `<li class="menutop__li"><a href="#">${item[1].name}</a></li>`
                navBlock.innerHTML += navElenet;
            }
        })
    }
}
