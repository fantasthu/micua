import db from './db';
import {
  Term
} from './';


const Post = db.Model.extend({
  tableName: 'posts'
});

export default Post;
