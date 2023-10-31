/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-promise-reject-errors */
import { runApp, config } from 'ice';
import { notification } from 'antd';
import NoAuthority from '@/pages/403';
import ErrorBoundary from '@/pages/error-boundary';

const APPID = 11; // 具体的应用ID

const appConfig: any = {
  request: {
    withFullResponse: false,
    baseURL: config.baseURL,
    timeout: 1000 * 60,
    withCredentials: true,
    maxContentLength: 5000,
    validateStatus(status) {
      return status >= 200 && status < 510;
    },
    // 拦截器
    interceptors: {
      request: {
        onConfig: (requestConfig) => {
          requestConfig.headers = {
            appId: APPID,
          };
          return requestConfig;
        },
        onError: (error) => {
          return Promise.reject({
            returnCode: '500',
            returnMsg: error,
            returnData: {},
          });
        },
      },
      response: {
        onConfig: (response) => {
          // 对响应数据做点什么
          const {
            data: { code, msg },
          } = response;
          if (code === 40005) {
            // 登录信息失效，之后重新登录
            location.href = `http://ulp.yunliang.cloud?redirect=${location.href}&appId=${APPID}`;
            return response;
          }
          if (code === 200) {
            return response;
          }
          if (code !== 200) {
            notification.error({
              message: '提示',
              description: msg || '接口异常',
            });
          }
          return response;
        },
        onError: (error) => {
          // 对响应错误做点什么
          return Promise.reject({
            returnCode: '500',
            returnMsg: error,
            returnData: {},
          });
        },
      },
    },
  },
  app: {
    rootId: 'ice-container',
    // 是否开启 ErrorBoundary，默认为 false
    errorBoundary: true,
    // 自定义错误边界的 fallback UI
    ErrorBoundaryFallback: (props) => <ErrorBoundary {...props} />,
    // 自定义错误的处理事件
    onErrorBoundaryHander: (error: Error, componentStack: string) => {
      console.log('onErrorBoundaryHander', error, componentStack);
    },
  },
  auth: {
    NoAuthFallback: <NoAuthority />,
  },
  router: {
    type: 'hash',
    fallback: <div>loading...</div>,
  },
};
runApp(appConfig);
