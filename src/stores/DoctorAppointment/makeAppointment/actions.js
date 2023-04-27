import { api, axios } from "boot/axios";

const endPoint = "appointment";
const mailEndPoint = "appointment-confirmation";

export function getItems(props) {
  if (props.all) {
    var params = {
      all: props.all,
    };
  } else {
    if (props.pagination.descending == true) {
      var direction = "DESC";
    } else {
      var direction = "ASC";
    }

    var params = {
      sort: props.pagination.sortBy,
      direction: direction,
      page: props.pagination.page,
      rowsPerPage: props.pagination.rowsPerPage,
      search: props.search ? props.search : this.filter.search,
    };
  }

  return new Promise((resolve, reject) => {
    axios
      .get(endPoint, {
        params: params,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getItem(props) {
  return new Promise((resolve, reject) => {
    axios
      .get(endPoint + "/" + props.id)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// export function resetForm(form) {
//   form.blood_group = "";
//   form.units_in_ml = null;
//   form.reason = "";
// }

export function fetchAuthUser() {
  return new Promise((resolve, reject) => {
    axios
      .get("/authuser")
      .then((response) => {
        this.authUser = response.data;
        console.log("a", this.authUser);
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
  form.doctors_speciality_id = "";
  form.priority = "";
  form.consultantant_type = "";
  form.message = "";
  form.from_time = "";
  form.to_time = "";
}

export function createAppointment() {
  return new Promise((resolve, reject) => {
    axios
      .post("/appointment", {
        patient_id: this.formData.patient_id,
        appointment_date: this.formData.appointment_date,
        doctor_id: this.formData.doctor_id,
        doctors_speciality_id: this.formData.doctors_speciality_id,
        priority: this.formData.priority,
        consultantant_type: this.formData.consultantant_type,
        message: this.formData.message,
        from_time: this.formData.from_time,
        to_time: this.formData.to_time,
      })
      .then((response) => {
        this.resetForm(this.formData);
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function createItem() {
  return new Promise((resolve, reject) => {
    axios
      .post(endPoint, this.newData)
      .then((response) => {
        this.lastUpdated = new Date();
        this.resetForm(this.newData);
        this.dialogs.createItem = false;
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function editItem() {
  return new Promise((resolve, reject) => {
    axios
      .put(endPoint + "/" + this.formData.id, this.formData)
      .then((response) => {
        this.lastUpdated = new Date();
        this.dialogs.editItem = false;
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function deleteItem(props) {
  return new Promise((resolve, reject) => {
    axios
      .delete(endPoint + "/" + props.id)
      .then((response) => {
        this.lastUpdated = new Date();
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function emailReportToUser() {
  return new Promise((resolve, reject) => {
    axios
      .put(mailEndPoint + "/" + this.emailReport.id, this.emailReport)
      // .put(`/appointment-confirmation/${this.emailReport.id}`, this.emailReport)
      .then((response) => {
        this.dialogs.emailReport = true;
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function setDigitalSignature(props) {
  this.formData.signed_by = props.id;
}
