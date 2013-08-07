/**
 * Created with JetBrains RubyMine.
 * User: fitark
 * Date: 13-7-24
 * Time: 下午4:12
 * To change this template use File | Settings | File Templates.
 */
    // Models are typically used with a Store, which is basically a collection of Model instances.
Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',

    model: 'AM.model.User',
    autoLoad: true,
    autoSync: false,

    listeners: {
        load: function() {
            console.log(arguments);
        },
        update: function() {
            console.log(arguments);
        },
        beforesync: function() {
            console.log(arguments);
        }
    }
});