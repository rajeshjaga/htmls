const lists = document.querySelector(".list-continent");
const url = "https://countries.trevorblades.com ";

fetchingqueryData(`      
    query{
        continents{
            name
            code
        }
      }
  `).then((data) => {
  data = data.data;
  data.continents.forEach((continent) => {
    const details = document.createElement("details");
    const list = document.createElement("summary");
    list.innerText = continent.name;
    details.appendChild(list);
    list.value = continent.code;
    lists.appendChild(details);
    list.addEventListener("click", async (e) => {
      const country = await gettingcountries(e.target.value);
      country.forEach((country) => {
        const name = document.createElement("li");
        name.innerHTML = country.name;
        details.appendChild(name);
      });
    });
  });
});

function gettingcountries(continent) {
  return fetchingqueryData(`
        query{
            continent(code:"${continent}"){
              countries{
                name
              }
            }
          }
        `).then((data) => data.data.continent.countries);
}

function fetchingqueryData(queries) {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: queries,
    }),
  }).then((res) => res.json());
}
