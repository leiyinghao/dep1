/**
 * Created with JetBrains RubyMine.
 * User: fitark
 * Date: 13-7-24
 * Time: 下午4:12
 * To change this template use File | Settings | File Templates.
 */
Ext.define('AM.model.User', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'first_name', type: 'string' },
        { name: 'last_name', type: 'string' },
        { name: 'email', type: 'string' }
    ],
    validations: [
        { type: 'presence', field: 'first_name' },
        { type: 'presence', field: 'last_name' },
        { type: 'presence', field: 'email' }
    ],

    idProperty: 'id',
    proxy: {
        url: '/users',
        type: 'rest',
        format: 'json',

        reader: {
            root: 'users',
            record: 'user',
            successProperty: 'success',
            messageProperty: 'errors'
        },
        writer: {
            // wrap user params for Rails
            getRecordData: function(record) {
                return { user: record.data };
            }
        }
    }
});