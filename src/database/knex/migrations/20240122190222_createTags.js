


exports.up = knex => knex.schema.createTable("tags", table => {
    table.increments('id');
    table.text('name').notNullable();
    table.integer("note_id").unsigned().notNullable();
    table.integer("user_id").unsigned().notNullable();

    table.foreign("note_id").references("id").inTable("notes").onDelete("CASCADE");
    table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE");
});

exports.down = knex => knex.schema.dropTable("tags");
