import './Products.scss';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { setSortingValue, fetchProducts } from "../../../store/slices/shopSlice";
import { ProductPages } from "./ProductPages/ProductPages";






const Products = () => {

    const [stateList, setStateList] = useState('hidden');
    const [sortingState, setSortingState] = useState('title')
    const [pageNumber, setPageNumber] = useState(1);
    const [responseKey, setResponseKey] = useState(`response2`);

    const dispatch = useDispatch();
    const data = useSelector(state => state.shopReducer.shop)



    function openOrClose() {
        if (stateList == 'hidden') {
            setStateList('');
        } else {
            setStateList('hidden');
        }
    }




    useEffect(() => {
        if (sortingState) {
            dispatch(fetchProducts(sortingState));
        }
    }, [sortingState, dispatch]);



    if (!data) {
        return (
            <>Loading</>
        )
    }

    let newData = data[responseKey].data.products;
    console.log(newData);




    return (
        <section className='products container'>


            <h2 className='products__title'>Товары</h2>
            <div className="blackline container"></div>
            <div className="products__sorting">
                <button className="products__sorting-btn" onClick={() => openOrClose()}>Сортировка</button>
                <ul className="products__sorting-list sorting">
                    <li><button className={`sorting__link ${stateList}`} onClick={() => setSortingState('title')}>Название</button></li>
                    <li><button className={`sorting__link ${stateList}`} onClick={() => setSortingState('price')}>Цена</button></li>
                    <li><button className={`sorting__link ${stateList}`} onClick={() => setSortingState('stock')}>Колличество</button></li>
                </ul>

            </div>

            <Routes>
                <Route path="/" element={<ProductPages sortingState={sortingState} newData={newData} pageNumber={pageNumber} setPageNumber={setPageNumber} setResponseKey={setResponseKey} />} />
                <Route path="/:page" element={<ProductPages sortingState={sortingState} newData={newData} pageNumber={pageNumber} setPageNumber={setPageNumber} setResponseKey={setResponseKey} />} />
            </Routes>




        </section >


    )
}

export default Products;