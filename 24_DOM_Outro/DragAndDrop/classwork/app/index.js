const store = new Map();

const list = document.querySelector(".list");
const dropzone = document.querySelector(".dropzone");

const DragList = (list) => {
	Array.from(list.children).forEach((liItem) => {
		liItem.addEventListener("dragstart", (e) => {
			const { target: item, dataTransfer } = e;

			const flakeId = new Date().getTime().toString();

			store.set(flakeId, item);

			dataTransfer.setData("text/plain", flakeId);
		});

		liItem.addEventListener("dragend", (e) => {
			store.clear();
		});
	});
};

const Dropzone = (dropzone) => {
	["dragover", "dragenter", "dragleave", "drop"].forEach((eventType) => {
		dropzone.addEventListener(eventType, (e) => e.preventDefault(), false);
	});

	dropzone.addEventListener("drop", (e) => {
		const { target, dataTransfer } = e;

		if (target !== dropzone) return;

		const flakeId = dataTransfer.getData("text/plain");

		const item = store.get(flakeId);

		dropzone.append(item);
	});
};

DragList(list);
Dropzone(dropzone);
