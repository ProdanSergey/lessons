import {
  APIClient,
  APIMethod,
  APIMethodOptions,
  APIResponse,
} from "../ports/api-client";

export type XhrAdapterOptions = {
  baseUrl: string;
};

export class XHRAdapter implements APIClient {
  constructor(private baseOptions: XhrAdapterOptions) {}

  get<Res>(options: APIMethodOptions<undefined>): Promise<APIResponse<Res>> {
    return this.request({ ...options, method: APIMethod.GET });
  }
  post<Body, Res>(options: APIMethodOptions<Body>): Promise<APIResponse<Res>> {
    return this.request({ ...options, method: APIMethod.POST });
  }

  private request<Body, Res>(
    options: APIMethodOptions<Body> & { method: APIMethod }
  ): Promise<APIResponse<Res>> {
    const { baseUrl } = this.baseOptions;
    const { resource, method, body } = options;

    const xhr = new XMLHttpRequest();

    xhr.open(method, `${baseUrl}/${resource}`);

    return new Promise((resolve, reject) => {
      xhr.send(body && JSON.stringify(body));

      xhr.addEventListener("load", () => {
        resolve({
          statusCode: xhr.status,
          statusText: xhr.statusText,
          data: xhr.response ? JSON.parse(xhr.response) : undefined,
        });
      });

      xhr.addEventListener("error", () => {
        reject({
          statusCode: xhr.status,
          statusText: xhr.statusText,
        });
      });
    });
  }
}
