let products = [{
    id: 1,
    name: "Laptop",
    price: 1000,
    category: "Electronics"
},
{
    id: 2,
    name: "Phone",
    price: 500,
    category: "Electronics"
},
]

let filteredProducts = products;
let category = "All";

const displayProducts = () => {

    document.getElementById("productsTableContent").innerHTML = `
    <tbody>
    ${filterByCategory(products).map(product => ` 
        <tr>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>

        </tr>
    `).join("")}
    </tbody>
`;
}

displayProducts();

const addProductForm = document.getElementById("addProductForm");

addProductForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const id = products.length + 1;
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const newProduct = {
        id,
        name,
        price,
        category
    };
    products.push(newProduct);
    addProductForm.reset();
    displayProducts()
});


const filteringButtons = document.querySelectorAll("#filteringButtons button");

filteringButtons.forEach(button => {
    button.addEventListener("click", () => {
        category = button.getAttribute("data-category");
        filteredProducts = filterByCategory(products, category);
        displayProducts()
    });
});

function filterByCategory(products) {
    const buttons = document.querySelectorAll("#filteringButtons button");
    buttons.forEach(btn => {
        if (btn.getAttribute("data-category") === category) {
            btn.style.backgroundColor = "#0056b3";
        } else {
            btn.style.backgroundColor = "#007bff";
        }
    });
    return category === "All" ? products : products.filter(product => product.category === category);
}




