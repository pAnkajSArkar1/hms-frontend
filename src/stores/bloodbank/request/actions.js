import { api, axios } from "boot/axios";

const endPoint = "/blood-request";

export function getItems(props) {
  if (props.all) {
    var params = {
      all: props.all,
      status: props.status,
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
      status: this.filter?.status,
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

export function getItem(params) {
  return new Promise((resolve, reject) => {
    axios
      .get(endPoint + "/" + params.id)
      .then((response) => {
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
      .post(endPoint, this.formData)
      .then((response) => {
        this.lastUpdated = new Date();
        this.dialogs.createItem = false;
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function makeRequest() {
  return new Promise((resolve, reject) => {
    axiosblood -
      request
        .post("/blood-request", {
          blood_group: this.requestBlood.blood_group,
          units_in_ml: this.requestBlood.units_in_ml,
          reason: this.requestBlood.reason,
        })
        .then((response) => {
          this.resetForm(this.donateBlood);
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
