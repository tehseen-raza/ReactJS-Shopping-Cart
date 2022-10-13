import '../App.css';


const ProductList = ({ product, addToCart }) => {
    return (
        <div className='flex'>
            {
                product.map((productItem, index) => {
                    return (
                        <div className="singleProduct" style={{ width: 'calc(100% / 4)' }} key={index}>
                            <div className="product-item">
                                <img src={productItem.url} width="100%" />
                                <p className="productDesc flex">{productItem.name} <span className="productCat">{productItem.category}</span></p>
                                <p>{productItem.seller}</p>
                                <p>${productItem.price} /-</p>

                                <button onClick={() => addToCart(productItem)}>Add To Cart</button>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;