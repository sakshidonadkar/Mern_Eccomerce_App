// // productsReducer.js

// // Initial state for products
// const initialState = {
//   products: [], // Array to hold fetched products
//   loading: false, // Flag to indicate if products are being fetched
//   error: null // Holds any error message if fetching products fails
// };

// // Reducer function to manage products state
// const productsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'fetchProductsRequest':
//       return {
//         ...state,
//         loading: true, // Set loading flag to true when requesting products
//         error: null // Clear any previous error
//       };
//     case 'fetchProductsSuccess':
//       return {
//         ...state,
//         loading: false, // Set loading flag to false after successful fetch
//         products: action.payload, // Update products array with fetched data
//         error: null // Clear any previous error
//       };
//     case 'fetchProductsFail':
//       return {
//         ...state,
//         loading: false, // Set loading flag to false upon fetch failure
//         error: action.payload // Set error message based on the payload
//       };
//     default:
//       return state; // Return current state for any other action type
//   }
// };

// export default productsReducer;
