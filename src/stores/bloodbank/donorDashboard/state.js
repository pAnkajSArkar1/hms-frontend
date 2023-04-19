import { ref, reactive } from "vue";

export default function () {
  return {
    authUser: reactive({
      blood_donated: null,
      request_pending: null,
      request_accepted: null,
      request_rejected: null,
      total_requests: null,
    }),
  };
}
