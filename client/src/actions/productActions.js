import Api from '../Api/Api'
export const getAllProducts  = () => (dispatch) => {
    dispatch({ type: "GET_PRODUCTS_REQUEST" });
  
    Api
      .get("/products")
      .then((res) => {
        console.log(res.data);
  
        dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "GET_PRODUCTS_FAILED", payload: err });
      });
  };
  