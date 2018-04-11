'use strict';

// config/config.local.js
// only read at development mode, will override default

exports.robot = {
  ua: [
    /Baiduspider/i,
  ],
};

exports.aliyun = {
  iot: {
    AppId: 'a120Z3dlEzIW8YwC',
    AppKey: '24841829',
    AppSecret: '8f67772f7f4a18f7828dd61a2dab9e7e',
  },
};
