export enum APIMethod {
  GET = "get",
  POST = "post",
}

export type APIMethodOptions<BodyType> = {
  resource: string;
  body?: BodyType;
};

export type APIResponse<DataType> = {
  statusCode: number;
  statusText: string;
  data?: DataType;
};

export interface APIClient {
  get<Res>(options: APIMethodOptions<undefined>): Promise<APIResponse<Res>>;
  post<Body, Res>(options: APIMethodOptions<Body>): Promise<APIResponse<Res>>;
}
