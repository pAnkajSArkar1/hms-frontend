import { ref, reactive } from "vue";

export default function () {
  return {
    authUser: reactive({
      name: "",
      email: "",
      active_company_id: null,
      acl: [],
      user_role: [],
    }),
    login: {
      email: "",
      password: "",
    },
    signup: {
      company_id: null,
      name: "",
      email: "",
      primary_contact: null,
      password: "",
      confirm_password: "",
    },
    passwordReset: {
      email: "",
      otp: null,
      token: null,
      password: "",
      password_confirmation: "",
    },
    credential: {
      old_password: "",
      password: "",
      confirm_password: "",
    },
    makeAppointment: {
      appointment_date: "",
      doctor_id: null,
      priority: "",
      consultantant_type: "",
      message: "",
      slot_from: "",
      slot_to: "",
    },
  };
}
