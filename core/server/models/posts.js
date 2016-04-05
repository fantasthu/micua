import db from './db';
import {
  Term
} from './';


const Posts = db.Model.extend({
  tableName: 'posts',
  tags: function() {
    return this.belongsToMany(Term);
  }
});

export default Posts;
