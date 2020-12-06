import * as firebase from './firebase'
import * as fb from 'firebase'

const services = {
    ...firebase
}


export interface IServices {
db : fb.default.firestore.Firestore
storage: fb.default.storage.Storage
auth: fb.default.auth.Auth
}

export default services;
