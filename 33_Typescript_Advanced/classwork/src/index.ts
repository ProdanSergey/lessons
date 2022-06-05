// import { FetchAdapterOptions } from "./adapters/fetch-adapter";
// import { XHRAdapter } from "./adapters/xhr-adapter";
// import { DateHelper, ISODateHelper } from "./helpers/date-helper";

// const baseFetchConfig: FetchAdapterOptions = {
// 	baseUrl: "https://api.gateway.example.com",
// };

// const fetchClient = new XHRAdapter(baseFetchConfig);

// (async () => {
// 	type User = {
// 		id: string;
// 		firstName: string;
// 		lastName: string;
// 	};

// 	type Post = {
// 		id: string;
// 		title: string;
// 		lastUpdate: Date;
// 	};

// 	const userResponse = await fetchClient.get<User>({ resource: "/users/1" });
// 	const postResponse = await fetchClient.get<Post>({
// 		resource: "/users/1/posts/1",
// 	});

// 	userResponse.data?.id;

// 	const updateResponse = await fetchClient.post<User, User>({
// 		resource: "/users/1",
// 	});

// 	updateResponse.data?.lastName;
// })();

// const date = new ISODateHelper();

// date.format();

// date instanceof DateHelper;

/** **/

// type Store = Record<string, Document>;

// const AppStore: Store = {
// 	"1231qdase1231231": {
// 		name: "cv.pdf",
// 		size: 1000 * 24,
// 		category: "personal",
// 	},
// };

// type ExecuteCreateCommand = (document: Document) => Document;

// const CreateCommand = (): ExecuteCreateCommand => {
// 	return (document) => {
// 		const id = new Date().getTime();

// 		AppStore[String(id)] = document;

// 		return document;
// 	};
// };

// type DeleteCommandType = (id: string) => void;

// const DeleteCommand = (): DeleteCommandType => {
// 	return (id) => {
// 		delete AppStore[id];
// 	};
// };

// const CommandHandler = (command: CallableFunction) => {
// 	return command();
// };

// enum DocumentCategory {
// 	PERSONAL = "personal",
// 	BUSINESS = "business",
// }

// type DocumentItem = {
// 	name: string;
// 	size: number;
// 	category: DocumentCategory;
// };

// function findDocument(
// 	collection: Record<string, DocumentItem>,
// 	key: keyof DocumentItem,
// 	match: string
// ): DocumentItem | undefined;

// function findDocument(
// 	collection: Record<string, DocumentItem>,
// 	key: keyof DocumentItem,
// 	match: DocumentCategory
// ): DocumentItem | undefined {
// 	return Object.values(collection).find((doc) => {
// 		return doc[key] === match;
// 	});
// }

// const bootstrap = () => {
// 	const doc = findDocument(Docs, "name", "cv.pdf");

// 	const byCategory = findDocument(Docs, "category", DocumentCategory.BUSINESS);

// 	console.log(doc);
// 	console.log(byCategory);
// };

// bootstrap();

// * Record
// * Partial
// * Pick
// * Omit
// * Parameters
// * ReturnType

enum DocumentCategory {
	PERSONAL = "personal",
	BUSINESS = "business",
}

type DocumentItem = {
	name: string;
	size: number;
	category: DocumentCategory;
};

type WeekDocumentItem = Partial<DocumentItem>;

type StrongDocumentItem = Required<WeekDocumentItem>;

const Docs: Record<string, DocumentItem> = {
	"111": {
		name: "cv.pdf",
		size: 1000 * 24,
		category: DocumentCategory.PERSONAL,
	},
	"222": {
		name: "annual-plan.doc",
		size: 1000 * 24,
		category: DocumentCategory.BUSINESS,
	},
};

const sizeDocument = (
	document: DocumentItem
): Omit<DocumentItem, "name" | "category"> => {
	const { size } = document;

	return { size };
};

const nameDocument = (document: DocumentItem): Pick<DocumentItem, "name"> => {
	const { name } = document;

	return { name };
};

type OnlySizeDocument = ReturnType<typeof sizeDocument>;
type SizeDocumentArguments = Parameters<typeof sizeDocument>;

const onlySize = sizeDocument(Docs["111"]);

const onlyName = nameDocument(Docs["111"]);

console.log(onlySize);

console.log(onlyName);
