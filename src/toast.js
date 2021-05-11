import {POSITION} from "vue-toastification";

const toast = {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
  position: POSITION.BOTTOM_RIGHT,
  hideProgressBar: true,
  closeButton: false,
}

export default toast;