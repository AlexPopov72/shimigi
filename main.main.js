const menuTop = "../accepts/menu.json";
fetch(menuTop)
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
                let navElenet = `<li class="menutop__li"> <a href="#">${item[1].name}</a></li>`;
                navBlock.innerHTML += navElenet;
            }
        });
    }
}
