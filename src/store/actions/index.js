export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

export function loginRequest(formData,cb) {
  return {
    type: LOGIN_USER_REQUEST,
    payload: { formData,cb }
  }
}
export const LIST_EVENT_REQUEST = 'LIST_EVENT_REQUEST';
export const LIST_EVENT_SUCCESS = 'LIST_EVENT_SUCCESS';
export const LIST_EVENT_FAIL = 'LIST_EVENT_FAIL';
export function listEventRequest(auth_key) {
  return {
    type: LIST_EVENT_REQUEST,
    payload: {auth_key}
  }
}

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAIL = 'USER_FAIL';
export function userRequest(name) {
  console.log(name)
  return {
    type: USER_REQUEST,
    payload: {name}
  }
}

export const LIST_TASKS_REQUEST = 'LIST_TASKS_REQUEST';
export const LIST_TASKS_SUCCESS = 'LIST_TASKS_SUCCESS';
export const LIST_TASKS_FAIL = 'LIST_TASKS_FAIL';
export function listTasksRequest(task) {
  return {
    type: LIST_TASKS_REQUEST,
    payload: {task}
  }
}

export const LIST_EVENTS_REQUEST = 'LIST_EVENTS_REQUEST';
export const LIST_EVENTS_SUCCESS = 'LIST_EVENTS_SUCCESS';
export const LIST_EVENTS_FAIL = 'LIST_EVENTS_FAIL';
export function listEventsRequest(event) {
  return {
    type: LIST_EVENTS_REQUEST,
    payload: {event}
  }
}

export const UPDATE_TASKS_REQUEST = 'UPDATE_TASKS_REQUEST';
export const UPDATE_TASKS_SUCCESS = 'UPDATE_TASKS_SUCCESS';
export const UPDATE_TASKS_FAIL = 'UPDATE_TASKS_FAIL';
export function updateTasksRequest(task,oldTask) {
  return {
    type: UPDATE_TASKS_REQUEST,
    payload: {task,oldTask}
  }
}
export const DELETE_TASKS_REQUEST = 'DELETE_TASKS_REQUEST';
export const DELETE_TASKS_SUCCESS = 'DELETE_TASKS_SUCCESS';
export const DELETE_TASKS_FAIL = 'DELETE_TASKS_FAIL';
export function deleteTasksRequest(task) {
  return {
    type: DELETE_TASKS_REQUEST,
    payload: {task}
  }
}

export const BOOK_HOURLY_REQUEST = 'BOOK_HOURLY_REQUEST';
export const BOOK_HOURLY_SUCCESS = 'BOOK_HOURLY_SUCCESS';
export const BOOK_HOURLY_FAIL = 'BOOK_HOURLY_FAIL';
export function bookHourlyRequest(hourly) {
  return {
    type: BOOK_HOURLY_REQUEST,
    payload: {hourly}
  }
}
export const BOOK_VACATION_REQUEST = 'BOOK_VACATION_REQUEST';
export const BOOK_VACATION_SUCCESS = 'BOOK_VACATION_SUCCESS';
export const BOOK_VACATION_FAIL = 'BOOK_VACATION_FAIL';
export function bookVacationRequest(vacation) {
  return {
    type: BOOK_VACATION_REQUEST,
    payload: {vacation}
  }
}
