var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  observer: true,
  observeParents: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper = new Swiper('.swiper.sec4-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  observer: true,
  observeParents: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const headerBg = document.querySelector('.h-nav__bg');
const lnb = document.querySelectorAll('.lnb');
const headerNav = document.querySelector('.h-nav');

headerNav.addEventListener('mouseover', function () {
  headerBg.style.height = '190px';
  for (let i = 0; i < lnb.length; i++) {
    lnb[i].style.display = 'block';
  }
});

headerNav.addEventListener('mouseout', function () {
  headerBg.style.height = '0px';
  for (let i = 0; i < lnb.length; i++) {
    lnb[i].style.display = 'none';
  }
});

const list = document.querySelectorAll('.list');

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('mouseenter', function () {
    list[i].src = `img/main4-on${i + 1}.jpg`;
  });
  list[i].addEventListener('mouseleave', function () {
    list[i].src = `img/main4-img${i + 1}.jpg`;
  });
}

const floor = document.querySelectorAll('.floor');
const vr = document.querySelector('.vr');
for (let i = 0; i < floor.length; i++) {
  floor[i].addEventListener('mouseenter', function () {
    floor[i].style.backgroundImage = 'url(img/floorplan-icon-on.png)';
    floor[i].style.backgroundColor = '#fff';
    floor[i].style.color = '#333';
  });
}

for (let i = 0; i < floor.length; i++) {
  floor[i].addEventListener('mouseleave', function () {
    floor[i].style.backgroundImage = 'url(img/floorplan-icon.png)';
    floor[i].style.backgroundColor = '#8d7249';
    floor[i].style.color = '#fff';
  });
}
