export const API_ROOT = 'http://tfs.siten.vn:37084/api/v1';
export const TIMEOUT = 10000;

export const API = {
  AUTH: {
    LOGIN: `${API_ROOT}/login`,
    ACCOUNT: `${API_ROOT}/account`,
    REFRESH_TOKEN: `${API_ROOT}/refresh-token`,
  },
};
