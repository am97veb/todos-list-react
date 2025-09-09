export const toTasks = () => "/zadania";
export const toAuthor = () => "/autor";
export const toTaskDetails = ({ id } = { id: ":id" }) => `/zadania/${id}`;