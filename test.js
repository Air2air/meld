/*---------------- Async -----------------------*/

("use strict");

async function fetchQuote() {
  const rsp = await fetch("https://api.icndb.com/jokes/random"),
    data = await rsp.json();
  return data.value.joke;
}

async function sayJoke() {
  try {
    let result = await fetchQuote();
    document.writeln(`Joke: ${result}`);
  } catch (err) {
    console.error(err);
  }
}
sayJoke();


/*---------------- Promise -----------------------*/


fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body:
    "title=" +
    encodeURIComponent("My awesome new article") +
    "&body=" +
    encodeURIComponent("This is the text of my article"),
})
  .then(function (response) {
    // The API call was successful!
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  })
  .then(function (data) {
    // This is the JSON from our response
    console.log(data);
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });

/*---------------- Axios -----------------------*/

var ulTag = document.getElementById("idUlTag");

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    const data = response.data;
    if (data) {
      data.forEach(function (item) {
        ulTag.innerHTML += `<li>
										<b>Name:</b> ${item.name} <br>
										<b>Username:</b> ${item.username}<br>
										<b>Email:</b> ${item.email}</li><br>`;
      });
    }
  });
