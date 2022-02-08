let content = document.getElementById('content');

let items = [];

for (let i = 1; i <= 72; i++) {
    items.push('<div class="li" >Item ' + i + '</div>');
}

// console.log(`items => ` + items);

content.innerHTML = items.join('');

let scroll = function () {
    let rect = content.getBoundingClientRect();
    // console.log(rect);

    let itemCount = content.getElementsByClassName('li').length;

    if (rect.bottom <= window.innerHeight + 100) {
        let newItems = [];
        for (let i = 1; i <= 24; i++) {
            newItems.push('<div class="li">Item ' + (itemCount + i) + '</div>');
        }
        content.innerHTML += newItems.join('');
    }

};

window.addEventListener('scroll', scroll);

let scrollTopBtn = document.getElementById('scroll-top-btn');

let scrollTop = function () {
    if (window.pageYOffset > 150) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};

window.addEventListener('scroll', scrollTop);

scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
