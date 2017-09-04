import * as firebase from 'firebase';
import { config } from '../config/config';

const fb = firebase.initializeApp(config);

export default fb;
