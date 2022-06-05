import {
	APIClient,
	APIMethod,
	APIMethodOptions,
	APIResponse,
} from "../ports/api-client";

export type FetchAdapterOptions = {
	baseUrl: string;
};

export class FetchAdapter implements APIClient {
	private options: FetchAdapterOptions;

	constructor(options: FetchAdapterOptions) {
		this.options = options;
	}

	async get<Res>(
		options: APIMethodOptions<undefined>
	): Promise<APIResponse<Res>> {
		return this.request({ ...options, method: APIMethod.GET });
	}

	async post<Body, Res>(
		options: APIMethodOptions<Body>
	): Promise<APIResponse<Res>> {
		return this.request({ ...options, method: APIMethod.POST });
	}

	private async request<Body, Res>(
		options: APIMethodOptions<Body> & { method: APIMethod }
	): Promise<APIResponse<Res>> {
		const { baseUrl } = this.options;
		const { resource, body } = options;

		const response = await fetch(`${baseUrl}/${resource}`, {
			method: APIMethod.GET,
			body: body ? JSON.stringify(body) : undefined,
		});

		if (response.ok) {
			return {
				statusCode: response.status,
				statusText: response.statusText,
				data: await response.json(),
			};
		}

		return {
			statusCode: response.status,
			statusText: response.statusText,
		};
	}
}
