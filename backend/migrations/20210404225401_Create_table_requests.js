
exports.up = function(knex) {
    return knex.schema.createTable('requests', table => {
        table.increments('id').primary()
        table.string('marca').notNull()
        table.string('model').notNull()
        table.string('description', 1000).notNull()
        table.date('openedAt').notNull()
        table.date('closedAt')
        table.integer('clientId').notNull().references('id').inTable('clients')
    })
};

exports.down = function(knex) {
    return knex.schem.dropTable('requests')
};
