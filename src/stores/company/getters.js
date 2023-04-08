export function showCreateModal(state) {
  return state.dialogs.createItem;
}

export function showEditModal(state) {
  return state.dialogs.editItem;
}

export function companyUserGetter(state) {
  return state.dialogs.columns;
}
