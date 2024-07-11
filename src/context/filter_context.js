import { createContext, useEffect, useReducer, useContext } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../Reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: false,
    sorting_value:"none",
    filters:{
        text:""
    }
}

export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);


    console.log(products);

    useEffect(()=>{
        dispatch({type:"SORTING_PRODUCTS"});
    }, [products, state.sorting_value]);
    
    useEffect(()=>{
        dispatch({type:"FILTER_PRODUCTS"});

    }, state.filters);

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

    const sorting = (event)=>{
        let userValue= event.target.value;
        dispatch({type:"GET_SORT_VALUE", payload:userValue});
    };
    
    const updateFilterValue = (event)=>{
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type:"UPDATE_FILTERS_VALUE", payload:{name, value}});
    };

    return (<FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue }}>
        {children}
    </FilterContext.Provider>);
};

export const useFilterContext = () => {
    return useContext(FilterContext);
}