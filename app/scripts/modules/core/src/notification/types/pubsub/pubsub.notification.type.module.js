'use strict';

const angular = require('angular');

module.exports = angular
  .module('spinnaker.core.notification.types.pubsub', [])
  .config(function(notificationTypeConfigProvider) {
    notificationTypeConfigProvider.registerNotificationType({
      label: 'Pubsub',
      key: 'pubsub',
      addressTemplateUrl: require('./additionalFields.html'),
    });
  });
