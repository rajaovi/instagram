import axios from "axios";

const axiosRes = (url, callback, errorcallback) => {
  axios
    .get(url)
    .then((res) => {
      //do something
      if (callback != null) {
        callback(res);
      }
    })
    .catch((err) => {
      // catch error
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
};

export default axiosRes;
