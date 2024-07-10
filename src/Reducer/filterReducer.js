const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload]
            };
        case "SET_GRIDVIEW":
            return {
                ...state,
                grid_view: true,
            };
        case "SET_LISTVIEW":
            return {
                ...state,
                grid_view: false,
            }
        case "GET_SORT_VALUE":
            // let userSortValue = document.getElementById("sort");
            // let sorting_value = userSortValue.options[userSortValue.selectedIndex].value;
            return {
                ...state,
                sorting_value : action.payload
            };
        case "SORTING_PRODUCTS":
        
            let newSortData;
            
            const {filter_products} = state;
            const sortedDataProduct = [...filter_products];

            console.log(sortedDataProduct);
            if (state.sorting_value === "a-z")
            {
                newSortData = sortedDataProduct.sort((a,b)=> {
                    console.log(a.price, b.price);
                    return a.name.localeCompare(b.name);
                });
            }
            else if (state.sorting_value === "lowest")
            {
                console.log("here");
                console.log(sortedDataProduct);
                newSortData = sortedDataProduct.sort((a, b) => {
                    console.log(a.price, b.price);
                    if (a.price < b.price) {
                        return -1; // `a` comes before `b`
                    } else if (a.price > b.price) {
                        return 1; // `a` comes after `b`
                    } else {
                        return 0; // No change
                    }
                });
            }
            else if (state.sorting_value === "highest")
            {
                console.log("here");
                console.log(sortedDataProduct);
                newSortData = sortedDataProduct.sort((a, b) => {
                    if (b.price < a.price) {
                        return -1; // `a` comes before `b`
                    } else if (b.price > a.price) {
                        return 1; // `a` comes after `b`
                    } else {
                        return 0; // No change
                    }
                });
            }
            else if (state.sorting_value === "z-a")
            {
                newSortData = sortedDataProduct.sort((a,b)=> {
                    return b.name.localeCompare(a.name);
                });
            }
            return {
                ...state,
                filter_products: newSortData
            }
        case "UPDATE_FILTERS_VALUE":
            const {name, value} = action.payload;

            return {
                ...state,
                filters : {
                    ...state.filters,
                    [name] : value
                }
            }
        
        case "FILTER_PRODUCTS":
            let {all_products} = state;
            let tempFilterProduct = [...all_products];

            const {text} = state.filters;

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curEle)=>{
                    return curEle.name.toLowerCase().includes(text);
                })
            }

            return {
                ...state,
                filter_products:tempFilterProduct
            }
        default:
            return state;

    }
}

export default filterReducer;

