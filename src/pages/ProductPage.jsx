import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { products } from '../data/products'
import { addToCart } from '../redux/cartSlice'

export default function ProductPage() {
  const { id } = useParams()
  const dispatch = useDispatch()

  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    return (
      <section className="productPage">
        <h1>Товар не знайдено</h1>
      </section>
    )
  }

  return (
    <section className="productPage">
      <div className="productMain">
        <div className="productImageBlock">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="productDetails">
          <p className="productBrand">{product.brand}</p>

          <h1>{product.title}</h1>

          <h2>
            {product.price.toLocaleString('uk-UA')} ₴
          </h2>

          <p className="productShortDescription">
            {product.description}
          </p>

          <div className="specs">
            <h3>Характеристики</h3>

            {Object.entries(product.specs).map(([key, value]) => (
              <div className="specRow" key={key}>
                <span>{key}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <button
            className="productAddButton"
            onClick={() => dispatch(addToCart(product))}
          >
            Додати в кошик
          </button>
        </div>
      </div>

      <div className="productDescriptionBlock">
        <h2>Детальніше про товар</h2>

        <p>
          {product.fullDescription || product.description}
        </p>

        {product.features && (
          <div className="productFeatures">
            <h3>Основні переваги</h3>

            <ul>
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}