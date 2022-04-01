import { EMPTY_OBJECT_STRING } from './constants/index';


export const setLocalStorage = (key :string , data : any)=>window.localStorage.setItem(key , JSON.stringify(data || EMPTY_OBJECT_STRING))

export const getLocalStorage = (key :string)=> window.localStorage.getItem(key || '')

