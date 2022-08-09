
import  PropTypes from "prop-types"
import {Link} from "react-router-dom"
import styles from "../styles/Movie.module.css"
function Movie({id,medium_cover_image,title,summary,genres}){
    return <div className={styles.movie}>
    <img src={medium_cover_image} className={styles.movie__img}/>
    <h2 className={styles.movie__title}><Link to={`/movie/${id}`}>{title}</Link></h2>
    <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
    <ul className={styles.movie__genres}>
      {genres.map((g,index) => (
        <li key={index}>{g}</li>
      ))}
    </ul>
  </div>
}
Movie.propTypes = {
  id : PropTypes.number.isRequired,
  medium_cover_image : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie