import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const filterForm = document.querySelector('.feedback-form');
const formEmailRef = document.querySelector('input');
const formTextarea = document.querySelector('textarea');

hereinForm();

filterForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = new FormData(filterForm);
  localStorage.clear(LOCALSTORAGE_KEY);
  filterForm.reset();
  formData.forEach((value, name) => console.log(value, name));
});


function onFormChange(e) {
  filterForm.addEventListener('input', evt => {
    let userData = localStorage.getItem(LOCALSTORAGE_KEY);
    userData = userData ? JSON.parse(userData) : {};
    userData[e.target.name] = e.target.value;

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));
  });
}

filterForm.addEventListener('change', evt => {
  let goFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  goFilters = goFilters ? JSON.parse(goFilters) : {};
  goFilters[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(goFilters));
});

function hereinForm() {
  let goFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  if (goFilters) {
    goFilters = JSON.parse(goFilters);
    Object.entries(goFilters).forEach(([name, value]) => {
      filterForm.elements[name].value = value;
    });
  }
}
filterForm.addEventListener('input', throttle(onFormChange, 500));
