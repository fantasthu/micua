import db from './db';
import {
  Posts
} from './';


var User = db.Model.extend({
  tableName: 'users'
});

export default User;
