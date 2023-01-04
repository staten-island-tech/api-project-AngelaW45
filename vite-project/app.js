const URL = "http://api.quotable.io/random";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent = data.content;

      console.log(response.status);
    }
  } catch (error) {
    console.log(error);
    console.log("could not find, please try again");
  }
}
getData(URL);
