import { api, axios } from "boot/axios";

const endPoint = "media";

export function getItems(props) {
  // console.log("getItems", true);
  // if (props.pagination.descending == true) {
  //   var direction = "DESC";
  // } else {
  //   var direction = "ASC";
  // }
  // var params = {
  //   sort: props.pagination.sortBy,
  //   direction: direction,
  //   page: props.pagination.page,
  //   rowsPerPage: props.pagination.rowsPerPage,
  //   search: props.search ? props.search : this.filter.search,
  // };
  // return new Promise((resolve, reject) => {
  //   axios
  //     .get(endPoint, {
  //       params: params,
  //     })
  //     .then((response) => {
  //       resolve(response);
  //     })
  //     .catch((err) => {
  //       reject(err);
  //     });
  // });
}

export function getItem(props) {
  // return new Promise((resolve, reject) => {
  //   axios
  //     .get(endPoint + "/" + props.id)
  //     .then((response) => {
  //       resolve(response.data);
  //     })
  //     .catch((err) => {
  //       reject(err);
  //     });
  // });
}

export function uploadItem(formData) {
  return new Promise((resolve, reject) => {
    axios
      .post(endPoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// export function uploadItem(formData) {

// }
// export function editItem() {
//   return new Promise((resolve, reject) => {
//     axios
//       .put(endPoint + "/" + this.formData.id, this.formData)
//       .then((response) => {
//         this.lastUpdated = new Date();
//         this.dialogs.editItem = false;
//         resolve(response);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

// export function deleteItem(props) {
//   return new Promise((resolve, reject) => {
//     axios
//       .delete(endPoint + "/" + props.id)
//       .then((response) => {
//         this.lastUpdated = new Date();
//         resolve(response);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }
