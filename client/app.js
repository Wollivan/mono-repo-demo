const h1 = document.querySelector("h1");

async function updateh1() {
  const response = await fetch("http://localhost:8080/message"); // making a GET request
  const data = await response.json(); // get the data out of the promise
  h1.textContent = data;
}

updateh1();
