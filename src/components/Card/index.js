import PropTypes from 'prop-types';

import './style.scss';

function Card({
  thumbnail,
  title,
  difficulty,
  slug,
}) {
  return (
    <article className="card">
      <img className="card-img" src={thumbnail} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-desc">DifficultÃ© : {difficulty}</p>
        <a href={`/recipe/${slug}`} className="card-link">Voir la recette</a>
      </div>
    </article>
  );
}

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Card;
