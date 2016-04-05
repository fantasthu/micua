import db from './db';
import {
  Posts
} from './';


const Term = db.Model.extend({
  tableName: 'terms'
});

export default Term;
