
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Harry'},
        {name: 'Hermione'},
        {name: 'Ron'}
      ]);
    });
};
