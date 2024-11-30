import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

// we accept what is passed to it, and then destructure the data to pass specifics to children components
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
