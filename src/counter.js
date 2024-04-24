function updateCounter(urls, newVisits) {
  fetch(urls[0], {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({ visits: newVisits }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}

function getAndUpdateCounter(urls) {
  fetch(urls[1], {
    method: "GET",
    mode: "cors",
  })
    .then((response) => {
      return response.json();
    })
    .then(async (data) => {
      return data;
    })
    .then((data) => {
      let visits = parseInt(data?.body?.visits || 0);
      visits++;
      // console.log(data);
      // console.log(visits);
      document.getElementById("counter").innerText = visits;
      return visits;
    })
    .then((visits) => updateCounter(urls, visits))
    .catch((err) => console.log(err));
}

export default getAndUpdateCounter;
