import React from 'react'
import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
    const { filter_products, grid_view } = useFilterContext();

    console.log(filter_products);
    if (grid_view) {
        return <GridView filter_products={filter_products} />;
    }

    else{
        return <ListView filter_products={filter_products}/>;
    }
};

export default ProductList;