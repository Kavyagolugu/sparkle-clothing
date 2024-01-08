export const fetchApi = (url, method, formData) => {
  return fetch(url)
    .then((res) => {
      // if successful then it will call result
      if (res.status === 200 || res.status === 201) {
        return res.json();
      } else {
        return {
          statusCode: 404,
          status: res.status,
          error: new Error('Invalid Response')
        };
      }
    })
    .catch((err) => {
      // if error occurs
      return err;
    })
    .finally(() => {
      // console.log('It is over!');
    });
};
