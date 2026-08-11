import { Link } from 'react-router-dom'
import './Brands.css'

const brands = [
  {
    name: 'Livoltek',
    image: '/images/brands/livoltek.png',
  },
  {
    name: 'Tongwei',
    image: '/images/brands/tongwei.png',
  },
  {
    name: 'JA Solar',
    image: '/images/brands/ja-solar.png',
  },
  {
    name: 'Longi',
    image: '/images/brands/longi.png',
  },
  {
    name: 'Risen',
    image: '/images/brands/risen.png',
  },
  {
    name: 'Dyness',
    image: '/images/brands/dyness.png',
  },
 
]

const duplicatedBrands = [...brands, ...brands]

export default function Brands() {
  return (
    <section className="brandsSection">
      <div className="brandsHead">
        <p>Партнери</p>
        <h2>Бренди, з якими ми працюємо</h2>
      </div>

      <div className="brandsMarquee">
        <div className="brandsTrack">
          {duplicatedBrands.map((brand, index) => (
            <Link
              to={`/catalog?brand=${encodeURIComponent(brand.name)}`}
              className="brandLogo"
              key={`${brand.name}-${index}`}
            >
              <img src={brand.image} alt={brand.name} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}