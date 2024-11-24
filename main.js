const windowPage = window;

let debounceCordinats;

windowPage.addEventListener('mousemove', (e) => {
  clearTimeout(debounceCordinats);
  debounceCordinats = setTimeout(() => {
    console.log(`X: ${e.clientX} Y: ${e.clientY}`);
  }, 1000);
});

async function fetchUsers() {
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await resp.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchUsers();
