
import {MMKV} from 'react-native-mmkv'


// create a new storage object
export const storage = new MMKV()

//set data in local storage
export const setData = (key , value) => {
    storage.set(key , JSON.stringify(value))

    //JSON.stringify changes object into string form
}


// get data from storage
export const getData = (key) => {
    const data = storage.getString(key)
    return data ? JSON.parse(data) : null
}


// delete data from localstorage
export const deleteData = (key) => {
    storage.delete(key)
}
