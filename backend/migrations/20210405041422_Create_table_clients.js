
exports.up = function(knex) {
    return knex.schema.createTable('clients', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('tel').notNull().unique()
        table.string('email').notNull().unique()
        table.string('password').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('clients')
};
