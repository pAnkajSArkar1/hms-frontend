import { api, axios } from "boot/axios";
import { LocalStorage as SessionStorage } from "quasar";

export function loginUser(props) {
  return new Promise((resolve, reject) => {
    api
      .post("/login", this.login)
      .then((response) => {
        SessionStorage.set("token", JSON.stringify(response.data.token));
        this.authUserDetails = response.data.authUser;
        this.authUser = response.data.authUser;
        this.fetchAuthUser();
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function setActiveCompany() {
  return new Promise((resolve, reject) => {
    axios
      .post("/user/set-active-company", {
        company_id: this.authUser.active_company_id,
      })
      .then((response) => {
        // this.authUserDetails = response.data;
        // this.authUser = response.data;
        this.fetchAuthUser();
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function updateProfile() {
  return new Promise((resolve, reject) => {
    axios
      .put("/user-profile-update", {
        name: this.authUser.name,
        username: this.authUser.username,
        primary_contact: this.authUser.primary_contact,
        address: this.authUser.address,
        signature: this.authUser.signature_picture,
      })
      .then((response) => {
        this.fetchAuthUser();
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export function updatePassword() {
  return new Promise((resolve, reject) => {
    axios
      .post("/user-change-password", this.credential)
      .then((response) => {
        this.fetchAuthUser();
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// Check Authentication
export function check() {
  return new Promise((resolve, reject) => {
    var token = SessionStorage.getItem("token");

    if (token === null) {
      reject(false);
    } else {
      resolve(token);
    }
  });
}

export function checkRoutePermission(routeAction) {
  return new Promise((resolve, reject) => {
    if (this.authUser.id) {
      if (this.authUser.acl[routeAction]) {
        resolve(true);
      } else {
        reject(false);
      }
    } else {
      this.fetchAuthUser()
        .then((response) => {
          if (this.authUser.acl[routeAction]) {
            resolve(true);
          } else {
            reject(false);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

export function checkAuthUserData() {
  console.log("this.authUser", this.authUser);

  if (!this.authUser || this.authUser.id === undefined) {
    this.fetchAuthUser();
  }

  // if (state.authUser.id === undefined) {
  //   this.dispatch("auth/fetchAuthUser");
  // }
}

export function fetchAuthUser() {
  return new Promise((resolve, reject) => {
    axios
      .get("/authuser")
      .then((response) => {
        this.authUser = response.data;
        resolve(true);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export function resetForm(form) {
  form.appointment_date = "";
  form.doctor_id = null;
  form.source = "";
  form.priority = "";
  form.consultantant_type = "";
  form.message = "";
  form.from_time = "";
  form.to_time = "";
  form.name = "";
  form.email = "";
  form.phone = null;
  form.address = "";
  form.purpose_of_visiting = "";
  form.date_of_visiting = "";
  form.from_time = "";
  form.to_time = "";
  form.aadhar_no = null;
  form.vaccination_status = "";
}

export function createAppointment() {
  return new Promise((resolve, reject) => {
    axios
      .post("/appointment", {
        patient_id: this.authUser.user_role.user_id,
        appointment_date: this.makeAppointment.appointment_date,
        doctor_id: this.makeAppointment.doctor_id,
        doctors_speciality_id: this.makeAppointment.doctors_speciality_id,
        priority: this.makeAppointment.priority,
        consultantant_type: this.makeAppointment.consultantant_type,
        message: this.makeAppointment.message,
        from_time: this.makeAppointment.from_time,
        to_time: this.makeAppointment.to_time,
      })
      .then((response) => {
        this.resetForm(this.makeAppointment);
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function createVisitor() {
  return new Promise((resolve, reject) => {
    axios
      .post("/visitors", {
        name: this.makeVisitor.name,
        email: this.makeVisitor.email,
        // phone: this.makeVisitor.phone,
        address: this.makeVisitor.address,
        purpose_of_visiting: this.makeVisitor.purpose_of_visiting,
        date_of_visiting: this.makeVisitor.date_of_visiting,
        from_time: this.makeVisitor.from_time,
        to_time: this.makeVisitor.to_time,
        aadhar_no: this.makeVisitor.aadhar_no,
        vaccination_status: this.makeVisitor.vaccination_status,
      })
      .then((response) => {
        this.resetForm(this.makeVisitor);
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function logout() {
  return new Promise((resolve, reject) => {
    axios
      .get("/logout")
      .then((response) => {
        SessionStorage.remove("token");
        resolve(true);
      })
      .catch((err) => {
        SessionStorage.remove("token");
        resolve(true); // even it's err send resolve, don't want any error on this function
      });
  });
}

export function sendOTP() {
  return new Promise((resolve, reject) => {
    axios
      .post("send-email-otp", {
        email: this.passwordReset.email,
      })
      .then((response) => {
        this.passwordReset.token = response.data.token;
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function verifyOTP() {
  return new Promise((resolve, reject) => {
    axios
      .post("verify-email-otp", {
        email: this.passwordReset.email,
        token: this.passwordReset.token,
        otp: this.passwordReset.otp,
      })
      .then((response) => {
        this.passwordReset.token = response.data.token;
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function resetPassword() {
  return new Promise((resolve, reject) => {
    axios
      .post("reset-password", {
        email: this.passwordReset.email,
        token: this.passwordReset.token,
        password: this.passwordReset.password,
        password_confirmation: this.passwordReset.password_confirmation,
      })
      .then((response) => {
        this.passwordReset.token = response.data.token;
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export function signupUser() {
  return new Promise((resolve, reject) => {
    axios
      .post("/auth/register", {
        company_id: this.signup.company_id,
        name: this.signup.name,
        email: this.signup.email,
        primary_contact: this.signup.primary_contact,
        // profile_picture: this.authUser.profile_picture,
        password: this.signup.password,
        confirm_password: this.signup.confirm_password,
      })
      .then((response) => {
        this.fetchAuthUser();
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export function signupVisitor() {
  return new Promise((resolve, reject) => {
    axios
      .post("/auth/visitor", {
        company_id: this.signup.company_id,
        name: this.signup.name,
        email: this.signup.email,
        primary_contact: this.signup.primary_contact,
        password: this.signup.password,
        confirm_password: this.signup.confirm_password,
      })
      .then((response) => {
        this.fetchAuthUser();
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export function signupDonor() {
  return new Promise((resolve, reject) => {
    axios
      .post("/auth/donate-blood", {
        company_id: this.signup.company_id,
        name: this.signup.name,
        email: this.signup.email,
        primary_contact: this.signup.primary_contact,
        password: this.signup.password,
        confirm_password: this.signup.confirm_password,
      })
      .then((response) => {
        this.fetchAuthUser();
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export function signupReceiver() {
  return new Promise((resolve, reject) => {
    axios
      .post("/auth/request-blood", {
        company_id: this.signup.company_id,
        name: this.signup.name,
        email: this.signup.email,
        primary_contact: this.signup.primary_contact,
        password: this.signup.password,
        confirm_password: this.signup.confirm_password,
      })
      .then((response) => {
        this.fetchAuthUser();
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
