import "./index.css";

const ProductItem = (props) => {
  const { details } = props;
  const { title, image, category } = details;

  return (
    <div className="bg_container">
      <img src={image} alt={category} className="image" />
      <p>{title}</p>
    </div>
  );
};
export default ProductItem;
