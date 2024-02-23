import axios from 'axios';

const axiosRes = (url, callback, errorcallback) => {
  axios
    .get(url)
    .then((res) => {
      if (callback != null) {
        callback(res);
      }
    })
    .catch((err) => {
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
};

export default axiosRes;
