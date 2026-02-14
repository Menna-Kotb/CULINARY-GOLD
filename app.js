let productssec = document.querySelector(".cards")
console.log(productssec)

function abc(url) {

    productssec.innerHTML = ""

    let request = new XMLHttpRequest()
    request.open("GET", url, true)
    request.onload = () => {

        if (request.readyState == 4 && request.status == 200) {
            let response = JSON.parse(request.responseText)
            let meals = response.meals;

            

            meals.forEach((ele) => {
                productssec.innerHTML +=
                `    
    
                        <div class="  col-md-3 col-lg-2">
                            <div class="card menu-card text-center p-4">
                                <div class="img-card mx-auto">
                                    <img src="${ele.strMealThumb}"
                                        class="img-fluid" alt>
                                </div>

                                <div class="card-body">
                                    <h5 class="ssss card-title">
                                        ${ele.strMeal}
                                    </h5>
                                    <p class="card-text text-secondary small">
                                        This is features a fried egg dish,
                                        likely cooked in olive oil or chili
                                        crisp for a crispy edge, served
                                        alongside sliced avocado.
                                    </p>
                                    <span class="price">${Math.floor(Math.random() * 200) + 50} $</span>
                                </div>
                            </div>
                        </div>
                </div>

        `
                
            })
        }
    }
    request.send();
}

abc("https://www.themealdb.com/api/json/v1/1/search.php?s=")





let categoriessec = document.querySelector(".categories")
let res = new XMLHttpRequest();

res.open("GET", "https://www.themealdb.com/api/json/v1/1/categories.php", true)
res.onload = () => {
    if (res.readyState == 4 && res.status == 200) {

        let datajson = JSON.parse(res.responseText)
        let categories = datajson.categories

        let allowedCats = ["Seafood", "Beef", "Breakfast", "Chicken", "Dessert", "Vegetarian"];

        categories.map((g) => {

            if (allowedCats.includes(g.strCategory)) {

                let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${g.strCategory}`

                categoriessec.innerHTML += `
            <span class="catagory" onclick="abc('${url}')"> 
            ${g.strCategory}</span>
        `
            }

        })

    }
}
res.send()