import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()

  return (
    <article className="productCard">
      <Link to={`/product/${product.id}`} className="productImage">
        <img src={product.image} alt={product.title} />
      </Link>

      <div className="productBody">
        <p className="productBrand">{product.brand}</p>

        <Link to={`/product/${product.id}`} className="productTitle">
          {product.title}
        </Link>

        <p className="productPrice">
          {product.price.toLocaleString('uk-UA')} ₴
        </p>

        <button
          className="productButton"
          onClick={() => dispatch(addToCart(product))}
        >
          В кошик
        </button>
      </div>
    </article>
  )
}