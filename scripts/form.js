// Product Array
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  
  // Function to populate product options dynamically
  window.onload = () => {
    const productSelect = document.getElementById("product-name");
  
    // Creating a placeholder option that is selected by default
    const placeholderOption = document.createElement("option");
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    placeholderOption.textContent = "Select a Product ...";
    productSelect.appendChild(placeholderOption);
  
    // Looping through the products array and creating an option for each product
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;  // Use the product id as the option value
      option.textContent = product.name;  // Display the product name
      productSelect.appendChild(option);
    });
  };
  