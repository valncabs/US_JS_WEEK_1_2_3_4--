// Product object list
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 2500
  },
  {
    id: 2,
    name: "Keyboard",
    price: 150
  },
  {
    id: 3,
    name: "Mouse",
    price: 80
  },
  {    id: 4,
    name: "Monitor",
    price: 1200
  },
  {
    id: 5,
    name: "Headphones",
    price: 300
  }
];

// Validate product data
products.forEach((product) => {
if (
    !product.id || !product.name || typeof product.price !== "number"
){
    console.error("Error: Invalid product data.");
}
});

// Show complete product list
console.log("Complete product list:");
console.log(products);

// Iterate object properties with for...in
console.log("Product properties:");

for (const index in products) {
    console.log(`Product ${Number(index) + 1}:`);

for (const key in products[index]) {
    console.log(`${key}: ${products[index][key]}`);
}
}

// Use Object methods
console.log("Using Object methods:");

products.forEach((product) => {
    console.log(Object.keys(product));
    console.log(Object.values(product));
    console.log(Object.entries(product));
});

// Create Set with repeated numbers
const numbersSet = new Set([1, 2, 2, 3, 4, 4, 5]);

// Show Set without duplicates
console.log("Unique numbers:");
console.log(numbersSet);

// Add new number
numbersSet.add(6);

// Verify if number exists
console.log("Does number 3 exist?");
console.log(numbersSet.has(3));

// Delete a number
numbersSet.delete(2);

// Iterate Set with for...of
console.log("Set values:");

for (const number of numbersSet) {
    console.log(number);
}

// Create Map for categories and products
const productCategories = new Map();

productCategories.get("Technology", "Laptop");
productCategories.set("Accessories", "Keyboard");
productCategories.set("Peripherals", "Mouse");
productCategories.set("Displays", "Monitor");
productCategories.set("Audio", "Headphones");

// Show Map data
console.log("Categories and products:");

// Iterate Map with forEach
productCategories.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});