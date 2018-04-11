const APIV1 = '/api/v1'
const APIV2 = '/api/v2'

module.exports = {
  name: 'IOT管理平台',
  prefix: 'brcIotAdmin',
  footerText: 'BRC Admin  © 2018 taoqianbao',
  logo: '/assets/imgs/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  api: {
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    posts: `${APIV1}/posts`,
    user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,
    menus: `${APIV1}/menus`,
    weather: `${APIV1}/weather`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
  },
  aliyun: {
    dev: {
      iot: {
        AppId: 'a120Z3dlEzIW8YwC',
        AppKey: '24841829',
        AppSecret: '8f67772f7f4a18f7828dd61a2dab9e7e'
      }
    },
    production: {
      iot: {
        AppId: 'a120Z3dlEzIW8YwC',
        AppKey: '24841652',
        AppSecret: '66f7bb18cc60c2d31b441f57dd9f6067'
      }
    }
  }
}
