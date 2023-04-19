import { api, axios } from "boot/axios";

const endPoint = "company-name";

export function getItems(props) {
  console.log("getItems", true);

  if (props.pagination.descending) {
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

  if (props.all) {
    params.all = true;
  }

  const isAll = props.all ? true : false;

  return new Promise((resolve, reject) => {
    axios
      .get(endPoint, {
        params: params,
      })
      .then((response) => {
        if (isAll == true) {
          this.allItems = response.data;
        } else {
          this.allItems = response.data.data;
        }
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
        resolve(response.data);
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

export function updateCompanyDetails(props) {
  return new Promise((resolve, reject) => {
    axios
      .put(endPoint + "/" + props.id, props)
      .then((response) => {
        this.lastUpdated = new Date();
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function setNewItemLogo(props) {
  console.log("props", props);
  this.newData.logo = props.id;
  this.formData.logo = props.id;
}
