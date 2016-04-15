import {
  Option
} from '../../core/server/models/';

// console.log(Option);

// User.where('id', 1).then(function(user) {
//
//   console.log(user.toJSON());
//
// }).catch(function(err) {
//
//   console.error(err);
//
// });

// Option.count().then(function(count) {
//   console.log(count);
// });


Option.fetchAll().then(function(res) {
  console.log(res);
});
