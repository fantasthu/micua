import db from './db';
import {
  Posts
} from './';


var User = db.Model.extend({
  tableName: 'users',
  // posts: function() {
  //   return this.hasMany(Posts);
  // }
});

export default User;
