import "./Product.css";

function Product({ title, description, price }) {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent:"space-between",
          flexDirection: "column",
          width: "10rem",
          border: "2px solid black",
          margin:"1rem",
        }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
        <h4 style={{border: "2px solid black",margin:"0",padding:".5rem 0"}}>{price}</h4>
      </div>
    </>
  );
}

export default Product;
