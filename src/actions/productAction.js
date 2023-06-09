import axios from "axios";

export const GET_PRODUCTS_LISTS = "GET_PRODUCT_LISTS";

export const getProductLists = () => {
  return (dispatch) => {
    axios
      .get("localhost:8090/api/products")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
};
