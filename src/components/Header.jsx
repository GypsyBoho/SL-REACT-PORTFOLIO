import '../styles/Header.css';

function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <div className='row'>
                    <div>
                        <img src="src/assets/sl-color-logo.jpeg" className="float-right logo-box" alt='name logo' />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;