const PRODUCTS = [
     { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
     { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
     { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
     { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
     { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
     { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
   ]
   export default function App(){
     return(
     <FilterableProductTable products = {PRODUCTS}/>
     )
   };
   function FilterableProductTable({ products }){
     return(
       <>
   <SearchBar />
   <ProductTable products={products}/>
   </>
     )
   }
   
   function SearchBar({ product }){
   
   return(
     <form>
       <input type="text" placeholder="Search..."/>
       <br />
       <input type="checkbox" />{' '}Only show products in stock
       </form>
   )
   }
   
   function ProductTable({ products }) {
   const rows = [];
   let lastCategory = null;
   
   products.forEach((product) => {
     if (product.category !== lastCategory) {
       rows.push(
         <ProductCategoryRow
           category={product.category}
           key={product.category} />
       );
     }
     rows.push(
       <ProductRow product={product} key={product.name} />
     );
     lastCategory = product.category;
   });
     return(
     <table>
     <thead>
       <tr>
       <th>Name</th>
       <th>Price</th>
       </tr>
       </thead>
       <tbody>{ rows }</tbody>
     </table>
     )
   }
   function ProductCategoryRow({ category }){
     return(
       <>
   <th colSpan="2">{category}</th>
   
   </>
     )
   }
   function ProductRow({ product }){
     const name = product.stocked ? product.name :
     <span style={{color: 'red' }}>
       {product.name}
       </span>
     return(
       <>
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
      </tr>
   </>
     )
   }