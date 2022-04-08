document.querySelector("form").addEventListener("submit", addProduct)
var productData = JSON.parse(localStorage.getItem("products")) || []
function Products(n, c, i, p, g, s) {
    this.name = n;
    this.category = c;
    this.image_url = i;
    this.price = p
    this.gender = g;
    this.sold = s
}

function addProduct() {
    event.preventDefault()
    var form = document.querySelector("form")
    let name = form.name.value
    var category = form.category.value
    var image_url = form.image.value
    var price = form.price.value
    var gender = form.gender.value
    var sold = form.sold.value

    var p1 = new Products(name, category, image_url, price, gender, sold)
    productData.push(p1)
    console.log(productData)
    localStorage.setItem("Products", JSON.stringify(productData))
    form.name.value = "";
    form.category.value = "";
    form.image.value = "";
    form.price.value = ""

}