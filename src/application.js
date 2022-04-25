/* eslint-disable no-param-reassign */
// @ts-check

import axios from 'axios';

const routes = {
  tasksPath: () => '/api/tasks',
};

// BEGIN (write your solution here)
export default () => {
  console.log('from application.js');
  console.log(`${document.body.outerHTML}`);
  return axios.get(routes.tasksPath())
    .then((res) => {
      console.log(`res.data : ${JSON.stringify(res.data)}`);
    })
    .catch((err) => {
      console.log(`err : ${err}`);
    });
}
// END
