import Product from "./Product.jsx";

function ProductCol() {
  return (
    <>
      <div className="bidcontainer"  style={{display:"flex"}}>
        <Product
          title="Mouse"
          description="this is one of best product ever"
          price={1000}
        />
        <Product title="Keybord" description="good qulity ever" price={3000} />
        <Product
          title="Laptop"
          description="best and affordalbe laptop"
          price={5000}
        />
      </div>
    </>
  );
}

export default ProductCol;
