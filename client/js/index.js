let section = document.querySelector(".phones");

let getData = () => {
  fetch("http://localhost:3000/phones").then((response) => {
    section.innerHTML = "";
    response.json().then((phones) => {
      phones.forEach((phone) => {
        var tag = document.createElement("li");
        var text = document.createTextNode(`${phone.company}: ${phone.model}`);
        tag.appendChild(text);
        section.append(tag);
      });
    });
  });
};

getData();
let postForm = document.querySelector("#postForm");

postForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let company = document.querySelector("#company").value;
  let model = document.querySelector("#model").value;
  let data = {
    company: company,
    model: model,
  };
  data = JSON.stringify(data);
  fetch("http://localhost:3000/phones", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then((response) => {
    console.log(response);
    getData();
  });
});
