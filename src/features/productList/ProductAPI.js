// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/products");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchAllProductsbyId(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/products/"+id);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter,sort,pagination) {
  let queryString = "";

  for(let key in filter){
     const categoryValues = filter[key];
    if(categoryValues.length){
      const lastCategoryValue = categoryValues[categoryValues.length-1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }

  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
    }


    console.log( pagination)
    for (let key in pagination) {
      queryString += `${key}=${pagination[key]}&`;
    }
  


  return new Promise(async (resolve) => {
    try {
      const response = await fetch('http://localhost:8000/products?'+queryString);
      const data = await response.json();
      console.log("API Response Data:", data);
      const totalItems = data.items;
      resolve({ data : {
        products:data,totalItems:+totalItems  
      } });
    } catch (error) {
      console.error("Error fetching products:", error);
      resolve({ data: [] });
    }
  });
}

// json-server --watch data.json --port 8000
 

export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/categories");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/brands");
    const data = await response.json();
    resolve({ data });
  });
}