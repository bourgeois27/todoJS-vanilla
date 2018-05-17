const baseUrl = 'https://glo3102lab4.herokuapp.com';

/* Création d'un user */
export const getUser = async () => {
  const url = `${baseUrl}/users`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  });
  const data = await response.json();
  return data.id;
} 

/* GET /userId/tasks */
export const getTasks = async (userId) => {
  const url = `${baseUrl}/${userId}/tasks`;
  const response = await fetch(url);
  const data = await response.json();
  return data.tasks;
}

/* POST /userId/tasks */
export const createTask = async (userId, task) => {
  const url = `${baseUrl}/${userId}/tasks`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": task
    })
  });
  const data = await response.json();
  return data;
}

/* PUT /userId/tasks/id */
export const editTask = async (userId, taskId, task) => {
  const url = `${baseUrl}/${userId}/tasks/${taskId}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": task
    })
  });
  const data = await response.json();
  return data;
}

/* DELETE /userId/tasks/id */
export const deleteTask = async (userId, taskId) => {
  const url = `${baseUrl}/${userId}/tasks/${taskId}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}