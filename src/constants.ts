import { environment } from './environments/environment';

const HOST = environment.host;
const API_PREFIX = environment.apiPrefix;
export const API_BASE_URL = `//${HOST}${API_PREFIX}`;
