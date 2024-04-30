import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const params = useParams();

  return (
    <>
      <h1>Product Detail</h1>
      <p>{params.productID}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}
export default ProductDetail;
