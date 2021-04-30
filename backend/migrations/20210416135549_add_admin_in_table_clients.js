
exports.up = function(knex) {
    return knex.schema.table('clients', table => {
        table.boolean('Admin').notNull().defaultTo(false)
    })
};

exports.down = function(knex) {
    return knex.schema.table('clients', table => {
        table.dropColumn('Admin')
    })
};
