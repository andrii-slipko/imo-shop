import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard/ProductCard'
import { products } from '../data/products'

const categories = [
  'Сонячні модулі',
  'Інвертори',
  'Акумулятори',
  'Електротовари',
  'Зарядні станції',
  'Автономні комплекти',
]

const brands = [
  'JA Solar',
  'Tongwei Solar',
  'Astronergy',
  'Longi',
  'Trina Solar',
  'Must',
  'Dyness',
  'Dahai',
  'KBE',
  'MC4',
  'Livoltek',
  'Marstek',
]
export default function CatalogPage() {
  const [searchParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [sortBy, setSortBy] = useState('default')

  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true)
  const [isBrandsOpen, setIsBrandsOpen] = useState(true)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  useEffect(() => {
  const categoryFromUrl = searchParams.get('category')
  const brandFromUrl = searchParams.get('brand')

  if (categoryFromUrl) {
    setSelectedCategories([categoryFromUrl])
  }

  if (brandFromUrl) {
    setSelectedBrands([brandFromUrl])
  }
}, [searchParams])

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    )
  }

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand]
    )
  }

  const resetFilters = () => {
    setSearch('')
    setSelectedCategories([])
    setSelectedBrands([])
    setSortBy('default')
  }

  const filteredProducts = products.filter((product) => {
  if (product.hidden) return false

  const matchesSearch = product.title
    .toLowerCase()
    .includes(search.toLowerCase())

  const matchesCategory =
    selectedCategories.length === 0 ||
    selectedCategories.includes(product.category)

  const matchesBrand =
    selectedBrands.length === 0 ||
    selectedBrands.includes(product.brand)

  return matchesSearch && matchesCategory && matchesBrand
})

  const sortedProducts = [...filteredProducts]

  switch (sortBy) {
    case 'priceAsc':
      sortedProducts.sort((a, b) => a.price - b.price)
      break
    case 'priceDesc':
      sortedProducts.sort((a, b) => b.price - a.price)
      break
    case 'name':
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title))
      break
    default:
      break
  }

  return (
    <section className="catalogPage">
      <h1>Каталог</h1>
      <button
  className="mobileFilterBtn"
  onClick={() => setIsFilterOpen(true)}
>
  Фільтри
</button>
<div
  className={`filterOverlay ${isFilterOpen ? 'active' : ''}`}
  onClick={() => setIsFilterOpen(false)}
></div>

      <div className="catalogLayout">
        <aside className={`sidebarFilter ${isFilterOpen ? 'filterOpen' : ''}`}>
          <button
  className="closeFilter"
  onClick={() => setIsFilterOpen(false)}
>
  ✕
</button>
          <input
            type="text"
            placeholder="Пошук..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="filterBlock">
            <button
              className="filterTitle"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              Категорії <span>{isCategoriesOpen ? '−' : '+'}</span>
            </button>

            {isCategoriesOpen && (
              <div className="filterContent">
                {categories.map((item) => (
                  <label className="checkboxFilter" key={item}>
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(item)}
                      onChange={() => toggleCategory(item)}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="filterBlock">
            <button
              className="filterTitle"
              onClick={() => setIsBrandsOpen(!isBrandsOpen)}
            >
              Бренди <span>{isBrandsOpen ? '−' : '+'}</span>
            </button>

            {isBrandsOpen && (
              <div className="filterContent">
                {brands.map((item) => (
                  <label className="checkboxFilter" key={item}>
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(item)}
                      onChange={() => toggleBrand(item)}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <button className="resetFilters" onClick={resetFilters}>
            Скинути фільтри
          </button>
        </aside>

        <div>
          <div className="catalogTop">
            <p className="productsCount">
              Знайдено товарів: {sortedProducts.length}
            </p>

            <select
              className="sortSelect"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">За замовчуванням</option>
              <option value="priceAsc">Спочатку дешеві</option>
              <option value="priceDesc">Спочатку дорогі</option>
              <option value="name">За назвою</option>
            </select>
          </div>

          <div className="productsGrid">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}