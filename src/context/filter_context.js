import { createContext, useEffect, useReducer, useContext } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../Reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: false,
    sorting_value:"lowest"
}

export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);


    console.log(products);

    useEffect(()=>{
        dispatch({type:"SORTING_PRODUCTS", payload: products});
    }, [state.sorting_value]);

    useEffect(() => {
        if (products)
            dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);

    const setGridView = () => {
        return dispatch({ type: "SET_GRIDVIEW" });
    }
     const setListView = () => {
        return dispatch({ type: "SET_LISTVIEW" });
    }

    const sorting = ()=>{
        dispatch({type:"GET_SORT_VALUE"});
    };
    
    return (<FilterContext.Provider value={{ ...state, setGridView, setListView, sorting }}>
        {children}
    </FilterContext.Provider>);
};

export const useFilterContext = () => {
    return useContext(FilterContext);
}