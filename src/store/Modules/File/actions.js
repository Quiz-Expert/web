import axios from "../../../axios";

export default {
  UPLOAD_ICON({commit}, file) {
    return new Promise((resolve, reject) => {
      commit('REQUEST');
      return axios.post('upload/icons', file, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => {
          const icon = response.data.data;
          localStorage.setItem('UPLOADED_ICON', JSON.stringify(icon));
          commit('ICON', icon);
          resolve(response);
        })
        .catch((err) => {
          commit('ERROR');
          reject(err);
        });
    })
  },

  DISCARD_ICON({commit}) {
    commit('DISCARD_ICON');
    localStorage.removeItem('UPLOADED_ICON');
  },
}