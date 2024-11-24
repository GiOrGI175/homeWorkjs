//!davleba 1 {

const windowPage = window;

let debounceCordinats;

windowPage.addEventListener('mousemove', (e) => {
  clearTimeout(debounceCordinats);
  debounceCordinats = setTimeout(() => {
    console.log(`X: ${e.clientX} Y: ${e.clientY}`);
  }, 1000);
});

//! }

//!davleba 2 {

//? create single Card function {

const mainContainer = document.querySelector('#mainContainer');

function createCard(data) {
  const card = document.createElement('div');
  card.className = 'p-[20px] rounded-xl bg-cyan-200 flex flex-col gap-[10px]';
  card.id = data.id;

  const ownName = document.createElement('h1');
  ownName.textContent = data.name;
  ownName.className = 'font-bold text-[30px]';

  const username = document.createElement('p');
  username.textContent = data.username;
  username.className = 'font-semibold text-[30px]';

  const email = document.createElement('p');
  email.textContent = data.email;
  email.className = 'font-semibold text-[30px]';

  card.appendChild(ownName);
  card.appendChild(username);
  card.appendChild(email);

  mainContainer.appendChild(card);
}

//? }

//? fetch {

async function fetchUsers() {
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');

    const datas = await resp.json();

    datas.map((data) => {
      createCard(data);
    });

    console.log(datas);
  } catch (error) {
    console.log(error);
  }
}
fetchUsers();

//? }

//! }

//! davaleba 3 {

//? create single Card function {

const mainContainer2 = document.querySelector('#mainContainer2');

function createCard2(data) {
  const card = document.createElement('div');
  card.className = 'p-[20px] rounded-xl bg-cyan-200 flex flex-col gap-[10px]';
  card.id = data.id;

  const title = document.createElement('h1');
  title.textContent = `title: ${data.title}`;
  title.className = 'font-bold text-[30px]';

  const description = document.createElement('p');
  description.textContent = `description: ${data.description}`;
  description.className = 'font-semibold text-[30px]';

  const price = document.createElement('p');
  price.textContent = `price: ${data.price}`;
  price.className = 'font-semibold text-[30px]';

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(price);

  mainContainer2.appendChild(card);
}

const input = document.querySelector('#searchInput');

let searchDebounce;

input.addEventListener('input', async (e) => {
  let title = e.target.value;

  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(async () => {
    const resp = await fetch(
      `https://dummyjson.com/products/search?q=${title}`
    );

    const data = await resp.json();

    console.log(data.products);

    const products = data.products;

    products.map((data) => {
      createCard2(data);
    });
  }, 300);
});

//? fetch {

//? }

//! }
