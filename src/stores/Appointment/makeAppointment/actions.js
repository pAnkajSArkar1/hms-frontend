import { api, axios } from "boot/axios";

const endPoint = "appointment";

export function getItems(props) {
  console.log("getItems", true);

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
    company_id: this.filter?.company_id,
  };

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

export function createAppointment() {
  return new Promise((resolve, reject) => {
    axios
      .post("/appointment", {
        patient_id: this.authUser.user_role.user_id,
        appointment_date: this.makeAppointment.appointment_date,
        doctor_id: this.makeAppointment.doctor_id,
        source: this.makeAppointment.source,
        priority: this.makeAppointment.priority,
        consultantant_type: this.makeAppointment.consultantant_type,
        message: this.makeAppointment.message,
        slot: this.makeAppointment.slot,
      })
      .then((response) => {
        // this.resetForm(this.requestBlood);
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
export function setDigitalSignature(props) {
  this.formData.signed_by = props.id;
}
