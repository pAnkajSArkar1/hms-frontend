import { api, axios } from "boot/axios";

const endPoint = "hazard";

export function getItems(props) {

  console.log("checking props", props);

  if (props.all === true) {
    var params = {
      all: props.all,
      activity_id: props.activity_id ? props.activity_id : "",
    };
  } else {
    if (props?.pagination?.descending == true) {
      var direction = "DESC";
    } else {
      var direction = "ASC";
    }

    var activity_id = null
    if(props.activity_id){
      activity_id = props.activity_id
    }

    if(this.filter.activity_id){
      activity_id = this.filter.activity_id
    }

    var params = {
      sort: props.pagination.sortBy,
      direction: direction,
      page: props.pagination.page,
      rowsPerPage: props.pagination.rowsPerPage,
      search: props.search ? props.search : this.filter.search,
      activity_id: activity_id ? activity_id : "",
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

export function getHazardsofActivity(props) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${endpoint}/hazards-of-activity/${props.activity_id}`)
      .then((response) => {
        this.lastUpdated = new Date();
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
