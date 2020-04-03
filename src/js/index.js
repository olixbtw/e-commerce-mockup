// Main js file

// const ctaForm = document.getElementById();
const ctaForm = document.getElementById('ctaForm');
ctaForm.addEventListener('submit', submitHandler)

function submitHandler(e) {
  e.preventDefault()
  console.log(e.target)
}

const sliderControl = document.getElementById('sliderControl');
sliderControl.addEventListener('click', changeSlide)
function changeSlide(e) {
  let oldClass,
    newClass,
    controlsElement = e.target.parentElement,
    sliderElement = e.target.parentElement.parentElement;

  // console.log(controlsElement.getElementsByTagName('li'))

  collectionToArray(controlsElement.getElementsByTagName('li')).forEach((el, i) => {
    if (e.target === el) newClass = `slider--item-active-${i + 1}`;
  });
  sliderElement.classList.forEach(el => {
    if (/slider--item-active-\d/.test(el)) oldClass = el;
  });

  if (oldClass !== newClass) {
    collectionToArray(controlsElement.getElementsByTagName('li')).forEach(el => {
      el.classList.remove('active');
      if (e.target === el) el.classList.add('active');
    });
    sliderElement.classList.remove(oldClass);
    sliderElement.classList.add(newClass);
  }
}

function collectionToArray(collection) {
  let arr = [];
  for (let i = 0; i < collection.length; i++) {
    arr[i] = collection[i];
  }
  return arr;
}


const postsSectionTopSell = document.getElementById('posts-top-sell');
const postsSectionTopRated = document.getElementById('posts-top-rated');
const postsSectionNewest = document.getElementById('posts-newest');

window.addEventListener('load', fillSections)

import allPosts from './posts';

const filters = {
  topSell: 'Топ Продажу',
  topRated: 'Кращі Товари по Рейтингу',
  newest: 'Новинки'
}

function fillSections() {
  postsSectionTopSell.innerHTML = generateSection([...allPosts.filter(post => post.additional.top)], filters.topSell)
  postsSectionNewest.innerHTML = generateSection([...allPosts.filter(post => post.additional.new)], filters.newest)
  postsSectionTopRated.innerHTML = generateSection([...allPosts.sort((a, b) => a.additional.rating > b.additional.rating)], filters.topRated)
}

function generateSection(postsList, filter) {
  console.log(postsList)

  return `
    <div class="container">
      <h2 class="posts__header section-title">
        ${filter}
        <span class="section-title__expander">Дивитись Всі</span>
      </h2>
      <div class="posts__wrapper">
        <div class="posts__arrow posts__arrow--left">›</div>
        ${postsList.map(post => generateItem(post, filter)).join('')}
        <div class="posts__arrow posts__arrow--right">›</div>
      </div>
    </div>
  `
}

function generateItem(post, filter) {
  let filterData, postOptions;

  switch (filter) {
    case filters.newest:
      filterData = `
        <span class="post-card__emphasis post-card__emphasis--newest">Новинка</span>
      `
      break;
    case filters.topSell:
      filterData = `
        <span class="post-card__emphasis post-card__emphasis--top-sell">Топ продажу</span> 
      `
      break;
    case filters.topRated:
      filterData = `
        <span class="post-card__emphasis post-card__emphasis--rating" >
          <svg
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 1.61804L12.3819 7.40983L12.4941 7.75532H12.8574H18.9473L14.0205 11.3348L13.7266 11.5484L13.8388 11.8939L15.7207 17.6857L10.7939 14.1061L10.5 13.8926L10.2061 14.1061L5.27931 17.6857L7.16118 11.8939L7.27344 11.5484L6.97954 11.3348L2.05275 7.75532H8.1426H8.50587L8.61813 7.40983L10.5 1.61804Z"
            />
          </svg>
          <svg
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 1.61804L12.3819 7.40983L12.4941 7.75532H12.8574H18.9473L14.0205 11.3348L13.7266 11.5484L13.8388 11.8939L15.7207 17.6857L10.7939 14.1061L10.5 13.8926L10.2061 14.1061L5.27931 17.6857L7.16118 11.8939L7.27344 11.5484L6.97954 11.3348L2.05275 7.75532H8.1426H8.50587L8.61813 7.40983L10.5 1.61804Z"
            />
          </svg>
          <svg
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 1.61804L12.3819 7.40983L12.4941 7.75532H12.8574H18.9473L14.0205 11.3348L13.7266 11.5484L13.8388 11.8939L15.7207 17.6857L10.7939 14.1061L10.5 13.8926L10.2061 14.1061L5.27931 17.6857L7.16118 11.8939L7.27344 11.5484L6.97954 11.3348L2.05275 7.75532H8.1426H8.50587L8.61813 7.40983L10.5 1.61804Z"
            />
          </svg>
          <svg
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 1.61804L12.3819 7.40983L12.4941 7.75532H12.8574H18.9473L14.0205 11.3348L13.7266 11.5484L13.8388 11.8939L15.7207 17.6857L10.7939 14.1061L10.5 13.8926L10.2061 14.1061L5.27931 17.6857L7.16118 11.8939L7.27344 11.5484L6.97954 11.3348L2.05275 7.75532H8.1426H8.50587L8.61813 7.40983L10.5 1.61804Z"
            />
          </svg>
          <svg
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 1.61804L12.3819 7.40983L12.4941 7.75532H12.8574H18.9473L14.0205 11.3348L13.7266 11.5484L13.8388 11.8939L15.7207 17.6857L10.7939 14.1061L10.5 13.8926L10.2061 14.1061L5.27931 17.6857L7.16118 11.8939L7.27344 11.5484L6.97954 11.3348L2.05275 7.75532H8.1426H8.50587L8.61813 7.40983L10.5 1.61804Z"
            />
          </svg>
        </span >
      `
      break;

    default:
      filterData = ''
      break;
  }

  if (post.options.length)
    postOptions = `
    <ul class="one-click-buy__list">
      ${post.options.map(e => `
        <li class="one-click-buy__item">
          <img
            class="one-click-buy__image"
            src="${e.img}"
            alt="bed set variant"
          />
        </li>
      `).join('')}
    </ul>
    `
  else
    postOptions = ''






  return `
    <div class="posts__item">
      <div class="post-card">
        ${filterData}
        <figure class="post-card__figure">
          <img
            class="post-card__image"
            src="${post.img}"
            alt="bed sheets image"
          />
        </figure>
        <div class="post-card__content">
          <p>Артикул <b>${post.artikul}</b></p>
          <h4 class="post-card__title">
            ${post.title}
          </h4>
          <p>${post.description}</p>
          <span class="post-card__price">${post.price.value} <small>${post.price.currency}</small></span>
        </div>
        <div class="one-click-buy">
          <button class="one-click-buy__button post-card__btn btn btn--black">
            Купити в один клік ›
          </button>
          ${postOptions}
        </div>

        <button class="btn post-card__btn btn--action-add-to-cart">
          Додати до кошика
        </button>
      </div>
    </div>
  `
}