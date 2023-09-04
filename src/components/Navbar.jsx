import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const currentPage = useLocation().pathname;
    return (
        <ul className='nav justify-content-end'>
            <li className='nav-item'>
                <Link
                to='/'
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                About
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                to='/Portfolio'
                className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                Portfolio
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                to='/Resume'
                className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                >
                Resume
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                to='/Contact'
                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                >
                Contact
                </Link>
            </li>
        </ul >
    );
}
export default Navbar;

{/* <li className='nav-item'>
                <a
                href='#about'
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} // ternary operator to dynamically change the state of the links from active to not active depending on which page the user is on
                >
                    About
                </a>
            </li>
            <li className='nav-item'>
                <a
                href='#contact'
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} // ternary operator to dynamically change the state of the links from active to not active depending on which page the user is on
                >
                    Contact
                </a>
            </li>
            <li className='nav-item'>
                <a
                href='#portfolio'
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} // ternary operator to dynamically change the state of the links from active to not active depending on which page the user is on
                >
                    Portfolio
                </a>
            </li>
            <li className='nav-item'>
                <a
                href='#resume'
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} // ternary operator to dynamically change the state of the links from active to not active depending on which page the user is on
                >
                    Resume
                </a>
            </li> */}