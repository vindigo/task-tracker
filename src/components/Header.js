
import PropTypes from 'prop-types';
import Button from './Button';



const Header = ({ title }) => {

  const clickIt = () => {
    console.log('clickIt');
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='hello' onClick={clickIt} />
    </header>
  )
}


Header.defaultProps = {
  title: 'Task Tracker',

}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
