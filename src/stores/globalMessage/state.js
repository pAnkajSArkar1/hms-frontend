import { ref, reactive } from "vue";

export default function () {
  return {
    sendMessage: {
      subject: "",
      message: "",
    },
  };
}
