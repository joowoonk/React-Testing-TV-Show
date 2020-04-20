import axios from "axios";
import React from "react";

export const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.error("error fetching data from api, err: ", err.message);
      return err;
    });
};

// export default fetchShow;
