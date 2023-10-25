import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, Navbar, Checkout, ProductPage, SearchResults, Log, SignUp, AdminAuth  } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path="/" element = {<HomePage/>} />
        <Route path="/search" element = {<SearchResults/>} />
        <Route path="/product/:id" element = {<ProductPage/>} />
        <Route path="/checkout" element = {<Checkout/>} />
        <Route path="/log" element = {<Log/>} />
        <Route path="/signup" element = {<SignUp/>} />
        <Route path="/adminauth" element = {<AdminAuth/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App