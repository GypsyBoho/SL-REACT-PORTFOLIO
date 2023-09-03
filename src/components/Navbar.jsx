function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
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
            </li>
        </ul>
    )
}