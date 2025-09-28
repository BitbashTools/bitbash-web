import './Allworkbutton.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

function Allworkbutton({src, buttontitlte, color = 'white'}) {
  return (
    <div>
      <div className='butondivv'>
        <Link
          to={src}
          className={`anchor link-with-arrow${color === 'black' ? ' black-btn' : ''}`}
        >
          {buttontitlte}
          {color === 'black' && <span className="arrow">↗</span>}
        </Link>
      </div>
    </div>
  )
}

Allworkbutton.propTypes = {
  src: PropTypes.string,
  buttontitlte: PropTypes.string,
  color: PropTypes.string,
};

export default Allworkbutton