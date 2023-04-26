import { ref, reactive } from "vue";

export default function () {
  return {
    authUser: reactive({
      name: "",
      email: "",
      active_company_id: null,
      acl: [],
      profile_picture: [],
      user_role: [],
    }),
    filter: {
      search: "",
      doctors_speciality_id: null,
    },
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
      doctors_speciality_id: null,
      priority: "",
      consultantant_type: "",
      message: "",
      from_time: "",
      to_time: "",
    },
    makeVisitor: {
      name: "",
      email: "",
      phone: null,
      address: "",
      purpose_of_visiting: "",
      date_of_visiting: "",
      from_time: "",
      to_time: "",
      aadhar_no: null,
      vaccination_status: "",
    },
  };
}
