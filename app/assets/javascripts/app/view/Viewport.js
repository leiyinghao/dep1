Ext.define('AM.view.Viewport', {
  extend: 'Ext.container.Viewport',

  layout: 'fit',

  items: [{
    xtype: 'userlist',
//    xtype: 'patientlist',
    title: 'Users   sd',
    html : 'List of users will go here'
  }]
});
