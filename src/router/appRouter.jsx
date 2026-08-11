import { Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout/Layout'
import HomePage from '../pages/HomePage'
import CatalogPage from '../pages/CatalogPage'
import CartPage from '../pages/CartPage'
import ProductPage from '../pages/ProductPage'
import AboutPage from '../pages/AboutPage'
import ContactsPage from '../pages/ContactsPage'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  )
}