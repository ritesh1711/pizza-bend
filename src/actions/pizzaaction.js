import axios from "axios"

export const getallpizzas = () => async (dispatch) => {
  dispatch({ type: 'GET_PIZZA_REQUEST' });

  try {
    const response = await axios.get('/api/pizzas/getpizzas'); // Use await to wait for the response
    console.log(response.data);
    dispatch({ type: 'GET_PIZZA_SUCCESS', payload: response.data });
  } catch (error) {
    console.error(error);

    // Improved error handling: Wrap the error in a structured format
    const errorMessage = error.response?.data?.message || 'An error occurred while fetching pizza data.';
    
    dispatch({ type: 'GET_PIZZA_FAILED', payload: errorMessage });
  }
};