import { api, axios } from "boot/axios";

const endPoint = "risk";

export function getItems(props) {

  var params = {}

  if(props.all){
    params.all = true;
  }
  else{
    if (props.pagination.descending == true) {
      var direction = "DESC";
    } else {
      var direction = "ASC";
    }

    params.sort = props.pagination.sortBy;
    params.direction = direction;
    params.page = props.pagination.page;
    params.rowsPerPage = props.pagination.rowsPerPage;
    params.search = props.search ? props.search : props.filter.search;
  }

  if(props.filter.hazard_ids)
    params.hazard_ids = props.filter.hazard_ids;


  if(props.filter.hazard_id)
    params.hazard_id = props.filter.hazard_id;

    console.info("Risk getItems params", params);

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
