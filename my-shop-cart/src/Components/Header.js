import '../App.css';

const Header = ({ count, handleShow }) => {
    return (
        <>
            <div className='flex shopping-cart'>
                <div><h2 onClick={() => { handleShow(false) }}>Shopping Cart App</h2></div>
                <div onClick={() => { handleShow(true) }}>Cart
                    <sup>{count}</sup>
                </div>
            </div>
        </>
    )
}


export default Header;