let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");
searchInputEl.addEventListener("keydown", searchWikipedia);

function createAndAppendSearchResults(result)
{
    let {title, link, description} = result;

    //creating Result item  --> Div container
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResultsEl.appendChild(resultItemEl);
    
    //creating title element -->anchor element
    let resultTitleEl = document.createElement("a");
    resultTitleEl.classList.add("result-title");
    resultTitleEl.textContent = title;
    resultTitleEl.href = link;
    resultTitleEl.target = "_blank";
    resultItemEl.appendChild(resultTitleEl);

    //creating break element -->title break
    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);

    //creating URL element  -->anchor element
    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    resultItemEl.appendChild(urlEl);

    //creating break element
    let lineBreakEl = document.createElement("br");
    resultItemEl.appendChild(lineBreakEl);

    //creating description element -->paragraph element
    let descEl = document.createElement("p");
    descEl.classList.add("line-description");
    descEl.textContent = description;
    resultItemEl.appendChild(descEl);
}

function displayResults(search_results)
{
    spinner.classList.toggle("d-none");
    for(let result of search_results)
    {
        createAndAppendSearchResults(result);
    }
}

function searchWikipedia(event)
{
    if(event.key === "Enter")
    {
        searchResultsEl.textContent = "";
        spinner.classList.toggle("d-none");
        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options =
        {
            method : "GET",
        };
        fetch(url,options)
        .then(function(response)
        {
            return response.json();
        })
        .then(function(jsonData)
        {
            let {search_results} = jsonData;
            displayResults(search_results);
        });
    }
}