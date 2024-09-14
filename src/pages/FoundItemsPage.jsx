import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { useParams } from 'react-router-dom';
import { CloseButton } from 'react-bootstrap';

const FoundItemsPage = () => {

    const { text } = useParams();

    return (
        <>
        <div>
                <h4 style={{fontWeight: 700}}>Результаты поиска <span style={{ color: 'blue' }}>"{text}"</span></h4>
                <ProductList searchProduct={text}></ProductList>
        </div>
        </>
    );
};

export default FoundItemsPage;