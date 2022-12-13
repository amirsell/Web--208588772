import cart from './cart.js';
import Cart from './cart.js'

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// Page
const loginButtonEl = document.querySelector(".login-button")
const cartButtonEl = document.querySelector(".cart-button")
const cartContainerEl = document.querySelector(".cart-container")
const cartContainerOverlayEl = document.querySelector(".cart-container-overlay")
const bodyEl = document.querySelector("body")
const seeAllRecipesButtonEl = document.querySelector(".see-all-recipes")
const additionalMealsExamples = document.querySelectorAll('.meal-extra')
const sectionMealsContainer = document.querySelector('.section-meals-container')

const userToken = localStorage.getItem('user-token')

loginButtonEl.textContent = userToken ? "Sign out" : "Login"

loginButtonEl.addEventListener('click', e => {
  e.preventDefault();
  if (userToken) {
    localStorage.removeItem('user-token')
    window.location.reload()
    return
  }
  window.open('/login.html', "_self")
})

seeAllRecipesButtonEl.addEventListener('click', e => {
  e.preventDefault();
  const buttonValue = seeAllRecipesButtonEl.textContent
  if (buttonValue === "See Less") {
    seeAllRecipesButtonEl.textContent = "See All Recipes"
  } else {
    // Scroll up to meals section so it has href like <a/>
    seeAllRecipesButtonEl.textContent = "See Less"
  }
  additionalMealsExamples.forEach(el => {
    el.classList.toggle('hidden')
  })
})

// Will be added in db
const mealsList = [
  {
    id: '1',
    price: 100,
    title: 'Chili pizza',
  },
  {
    id: '2',
    price: 100,
    title: 'Chili pizza2',
  },
  {
    id: '3',
    price: 100,
    title: 'Chili pizza3',
  },
  {
    id: '4',
    price: 100,
    title: 'Chili pizza4',
  },
  {
    id: '5',
    price: 100,
    title: 'Chili pizza5',
  },
]

/*
Users table
Meals table - static
Carts table- JOIN on user.id == cart.userId
cart = json[]
*/

sectionMealsContainer.addEventListener('click', e => {
  const meals = document.querySelectorAll('.meal');
  console.log('meals are ', meals)
  for (const meal of meals) {
    if (meal.contains(e.target)) {
      const mealId = meal.dataset.mealId
      // Temporary
      const mealToAddToCart = mealsList.find(({ id }) => id === mealId)
      // End temporary
      // call http request to backend - addMealToCart(id)
    }
  }
})

const preventScrolling = () => bodyEl.style.overflow = 'hidden';
const allowScrolling = () => bodyEl.style.overflow = 'unset';

const toggleCartPopups = () => {
  cartContainerEl.classList.toggle('hidden')
  cartContainerOverlayEl.classList.toggle('hidden')
}

const onCartButtonClick = e => {
  e.preventDefault();
  toggleCartPopups()
  cart.init()
  preventScrolling()
}

cartButtonEl.addEventListener('click', onCartButtonClick)

const onCartOverlayClick = e => {
  e.preventDefault();
  toggleCartPopups()
  allowScrolling()
}

cartContainerOverlayEl.addEventListener('click', onCartOverlayClick)