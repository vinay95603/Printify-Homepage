import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt, faMugHot, faPhone } from '@fortawesome/free-solid-svg-icons';

function Featured() {
  return (
    <div className="featured">
      <h2>Featured Services</h2>
      <div className="featured-grid">
        <div className="featured-item">
          <FontAwesomeIcon icon={faTshirt} />
          <h3>Custom T-Shirts</h3>
          <p>Design and print your own custom t-shirts with our easy-to-use online designer.</p>
        </div>
        <div className="featured-item">
          <FontAwesomeIcon icon={faMugHot} />
          <h3>Custom Mugs</h3>
          <p>Create personalized mugs with your favorite quotes, images, or designs.</p>
        </div>
        <div className="featured-item">
          <FontAwesomeIcon icon={faPhone} />
          <h3>Custom Phone Cases</h3>
          <p>Design and print your own custom phone cases with our wide range of templates and designs.</p>
        </div>
      </div>
    </div>
  );
}

export default Featured;
