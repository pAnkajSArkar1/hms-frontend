import { api, axios } from "boot/axios";

const endPoint = "ai-report";

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

export function createItem() {
  return new Promise((resolve, reject) => {
    axios
      .post(endPoint, this.newData)
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

export function generateReportDownloadURL(props) {
  return new Promise((resolve, reject) => {
    axios
      .get(`/ai-report/${props.id}?export=pdf`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function emailReportToUser(){
  return new Promise((resolve, reject) => {
    axios
      .put(`/email-ai-report/${this.emailReport.id}`, this.emailReport)
      .then((response) => {
        this.dialogs.emailReport = false;
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function saveToSafetyFile(props) {
  return new Promise((resolve, reject) => {
    axios
      .put(`/save-to-safety-file/${props.id}`, props)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function setChecklistDocument(props) {
  this.formData.Document_ids.push(props.id);
}

export function setChecklistImage(props) {
  this.formData.images.push(props.id);
}
