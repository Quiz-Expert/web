import Pusher from 'pusher-js';
import axios from "./axios";

const key = process.env.VUE_APP_PUSHER_KEY;

const pusher = new Pusher(key, {
  cluster: 'eu',
  authorizer: (channel) => {
    return {
      authorize: (socketId, callback) => {
        axios.post('/broadcasting/auth', {
          socket_id: socketId,
          channel_name: channel.name
        })
          .then(response => {
            callback(false, response.data);
          })
          .catch(error => {
            callback(true, error);
          });
      }
    };
  },
});

export default pusher;