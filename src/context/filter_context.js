import { createContext, useEffect, useReducer, useContext } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../Reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: false,
}

export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);


    console.log(products);

    useEffect(() => {
        if (products)
            dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);

    const setGridView = () => {
        return dispatch({ type: "SET_GRIDVIEW" });
    }
    return (<FilterContext.Provider value={{ ...state, setGridView }}>
        {children}
    </FilterContext.Provider>);
};

export const useFilterContext = () => {
    return useContext(FilterContext);
}