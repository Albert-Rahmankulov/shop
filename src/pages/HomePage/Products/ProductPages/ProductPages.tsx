import heart from "../../../../assets/images/heart.svg";
import basket from "../../../../assets/images/basket.svg";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../../../store/slices/shopSlice";

export const ProductPages = (props) => {
    const {newData, pageNumber, setPageNumber, setResponseKey } = props;

    const [currentProduct, setCurrentProduct] = useState('');
    const [visileOrHidden, setVisileOrHidden] = useState('hidden')

    const dispatch = useDispatch();
    const navigate = useNavigate();


    function nextPage() {
        if (pageNumber < 9) {
            setPageNumber(nextPage => nextPage + 1);
            setResponseKey(`response${pageNumber}`)
        }
    }

    function pastPage() {
        if (pageNumber > 1) {
            setPageNumber(prevPage => prevPage - 1);
            setResponseKey(`response${pageNumber}`)

        }
    }
    function openModal() {
        setVisileOrHidden('visible');
    }
    function closeModal() {
        setVisileOrHidden('hidden');
    }

    useEffect(() => {
        navigate(`/${pageNumber}`);
    }, [pageNumber, navigate]);

    useEffect(() => {
        dispatch(fetchProducts(pageNumber));
    }, [dispatch, pageNumber]);



    return (
        <div className='products__list'>
            {newData.map((e) => (
                <div key={e.id} className='products__list-item item' onClick={() => { setCurrentProduct(e); openModal() }}>
                    <div className='item__buttons'>
                        <button className='item__buttons-button'> <img src={heart} alt="favorite img" /> </button>
                        <button className='item__buttons-button'> <img src={basket} alt="basket img" /> </button>
                    </div>
                    <span className='item__sign'> Скидка {e.discountPercentage}% </span>
                    <div className="item__info">
                        <div className="item__info-img">
                            <img src={`${e.images}`} alt="product img" />
                            <span className="item__info-amount">{e.stock}</span>
                        </div>

                        <span className="item__info-type">{e.category} </span>
                        <h3 className="item__info-name"> {e.title}</h3>
                        <span className="item__info-price">{e.price} $</span>
                        <span className="item__info-pricewidthsale">{e.price - (e.price * (e.discountPercentage / 100)).toFixed(2)} $</span>
                    </div>
                </div>
            ))}

            <div className="sorting">
                <button onClick={pastPage} className="products__sorting-btn">Назад</button>
                <button onClick={nextPage} className="products__sorting-btn">Вперёд</button>
            </div>
            <div className={`products__info ${visileOrHidden}`}>
                <div className="products__info-bg">
                    <button className="products__info-closebtn" onClick={() => { closeModal() }}>Закрыть</button>

                    <div className="products__info-textwrapper">
                        <div className="">
                            <span className="products__info-table">Имя товара</span>
                            <h3 className="products__info-name">{currentProduct.title}</h3>
                        </div>
                        <div className="products__info-partition"></div>
                        <div>
                            <span className="products__info-table">Тип</span>
                            <p className="products__info-type">{currentProduct.category}</p>
                        </div>
                        <div className="products__info-partition"></div>

                        <div>
                            <span className="products__info-table">Цена</span>
                            <span className="products__info-price">{currentProduct.price}</span>
                        </div>

                        <div className="products__info-partition"></div>

                        <div>
                            <span className="products__info-table">Скидка</span>
                            <span className="products__info-sale">{currentProduct.discountPercentage} %</span>
                        </div>

                        <div className="products__info-partition"></div>

                        <div>
                            <span className="products__info-table">Цена со скидкой</span>
                            <span className="products__info-pricewidthsale">{currentProduct.price - (currentProduct.price * (currentProduct.discountPercentage / 100)).toFixed(2)}</span>
                        </div>
                        <div className="products__info-partition"></div>


                        <div>
                            <span className="products__info-table">Описание</span>
                            <p className="products__info-description">{currentProduct.description}</p>
                        </div>


                    </div>
                    <div className="products__info-img">
                        <img src={currentProduct.images} alt="" />
                    </div>
                    <div className="products__info-buttons">
                        <button className='products__info-button'> <img src={heart} alt="favorite img" /> </button>
                        <button className='products__info-button'> <img src={basket} alt="basket img" /> </button>

                    </div>


                </div>


            </div>
        </div>
    )
}
