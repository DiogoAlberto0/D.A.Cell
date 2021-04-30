exports.up = function(knex) {
    return knex.schema.table('clients', table => {
        table.string('city').notNull()
        table.string('address', 500).notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.table('clients', table => {
        table.dropColumn('city')
        table.dropColumn('address')
    })
};
