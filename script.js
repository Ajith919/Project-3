const acesskey = 'kF9onMo7Sr1io8ND41iXrbPS4P_WysBso7EvEEoypHg';
const forml = document.querySelector("form");
const inputele = document.getElementById("search-input");
const images = document.querySelector(".search-results");
const Showmorebutton = document.getElementById("show-more-button");

let inputdata = "";
let page = 1;

async function Project() {
    inputdata = inputele.value;
    const url  = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${acesskey}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    if (page == 1){
        images.innerHTML = "";
    };
        
    results.map((result) =>{
        const divcontain = document.createElement("div");
        divcontain.classList.add("search-result");
        const img = document.createElement("img");
        img.src = result.urls.small;
        img.alt = result.alt_description;
        const imglink = document.createElement("a");
        imglink.href = result.links.html;
        imglink.target = "_blank";
        imglink.textContent = result.alt_description;
        
        divcontain.appendChild(img);
        divcontain.appendChild(imglink);
        images.appendChild(divcontain);
    });


    page++;
    if (page > 1){
        Showmorebutton.style.display = "block";
    };

};

forml.addEventListener("submit", (event) =>{
    event.preventDefault();
    page = 1;
    Project();
    
});

Showmorebutton.addEventListener("click", () =>{
    Project();
});
