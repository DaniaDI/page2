document.querySelector("main").innerHTML = mainHTML

const searchBtn = document.getElementById("searchForm")
const searchInput = document.getElementById("searchInput")

searchBtn.addEventListener("submit", async (e) => {
     e.preventDefault()
     console.log(searchInput.value)

     const data = await fetchData(searchInput.value)
     renderMain(data.articles)

})

async function Search(query) {
     const data = await fetchData(query)
     renderMain(data.articles)
}
/***اعملوا function fetch data وحطوا شغلكو */
