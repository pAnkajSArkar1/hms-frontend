import { api, axios } from "boot/axios";

const endPoint = "medicine-sales";

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

export function generateReportDownloadURL(props) {
  return new Promise((resolve, reject) => {
    axios
      .get(`/medicine-sales/${props.id}?export=pdf`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function resetForm(form) {
  form.name = "";
  form.description = "";
}

export function createItem() {
  return new Promise((resolve, reject) => {
    axios
      .post(endPoint, this.formData)
      .then((response) => {
        this.lastUpdated = new Date();
        this.dialogs.createItem = false;
        this.resetForm(this.formData);
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
