import {
    LOGIN_USER_FAIL,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    USER_REQUEST,
    LIST_TASKS_REQUEST,
    LIST_EVENTS_REQUEST,
    UPDATE_TASKS_REQUEST,
    DELETE_TASKS_REQUEST,
    BOOK_HOURLY_REQUEST,
    BOOK_VACATION_REQUEST
} from "../actions/index";
import {task} from '../arreys'
import {event} from '../arreys'
const initialState = {
    formData: {},
    auth_key: '',
    name: '',
    taskList : [...task],
    eventList :[...event],
    hourlyBook:[],
    vacationBook:[],
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_REQUEST: {
            return {
                ...state,
                name: action.payload
            }
        }
        case BOOK_HOURLY_REQUEST:{
            console.log(action.payload.hourly)
            return {
                ...state,
                hourlyBook:[...state.hourlyBook, action.payload.hourly]
            }
        }
        case BOOK_VACATION_REQUEST:{
            console.log(action.payload.vacation)
            return {
                ...state,
                vacationBook:[...state.vacationBook, action.payload.vacation]
            }
        }
        case UPDATE_TASKS_REQUEST: {
            let arr=[...state.taskList]
            arr.map((item,index)=>{
                if(action.payload.task.id===item.id){
                    item.title=action.payload.task.title?action.payload.task.title:action.payload.oldTask.title
                    item.project=action.payload.task.project?action.payload.task.project:action.payload.oldTask.project
                    item.id=action.payload.task.id
                    item.create_duration=action.payload.task.create_duration?action.payload.task.create_duration:action.payload.oldTask.create_duration
                    item.create_date=action.payload.task.create_date?action.payload.task.create_date:action.payload.oldTask.create_date
                }
            })
            return {
                ...state,
                taskList:[...arr]
            }
        }
        case LIST_TASKS_REQUEST:{
            return {
                ...state,
                taskList:[...state.taskList,action.payload.task]
            }
        }
        case DELETE_TASKS_REQUEST:{
             let arr=state.taskList.filter((item) =>
                 item.id !== action.payload.task.id
             )
            return {
                ...state,
                taskList: [...arr]
            }
        }
        case LIST_EVENTS_REQUEST:{
            return {
                ...state,
                eventList: [...state.eventList,action.payload.event]
            }
        }
        case LOGIN_USER_SUCCESS: {
            return {
                ...state,
                formData: action.payload.data,
                auth_key: action.payload.data.auth_key
            }
        }
        case LOGIN_USER_REQUEST: {

            return {
                ...state,
            }
        }

        case LOGIN_USER_FAIL: {

            return {
                ...state,
            }
        }

        default: {
            return state
        }
    }
}
