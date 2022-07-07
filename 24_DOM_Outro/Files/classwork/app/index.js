const createElement = (tagName, attributes = {}, children = []) => {
  const element = document.createElement(tagName);

  Object.keys(attributes).forEach((key) => {
    if (key in element) {
      element[key] = attributes[key];
      return;
    }

    element.setAttribute(key, attributes[key]);
  });

  children?.forEach((child) => element.append(child));

  return element;
};

const store = new Map();

const DocumentReader = (file, thumbnail) => {
  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.addEventListener("load", (event) => {
    const { result } = event.target;

    thumbnail.src = result;
  });

  return thumbnail;
};

const DocumentInput = (input, render) => {
  input.addEventListener("change", (event) => {
    const { files } = event.target;

    for (const file of files) {
      store.set(file.name, file);
    }

    event.target.value = null;

    render();
  });
};

const DocumentDropzone = (dropzone, render) => {
  ["dragover", "dragenter", "dragleave", "drop"].forEach((eventType) => {
    dropzone.addEventListener(eventType, (e) => e.preventDefault(), false);
  });

  dropzone.addEventListener("drop", (e) => {
    const { dataTransfer } = e;

    Array.from(dataTransfer.files).forEach((file) => {
      store.set(file.name, file);
    });

    render();
  });
};

const addButton = document.querySelector(".add-button");
const dropzone = document.querySelector(".dropzone");

const renderDocuments = () => {
  dropzone.innerHTML = "";

  for (const file of store.values()) {
    const thumbnail = DocumentReader(
      file,
      createElement("img", { className: "document__thumbnail" })
    );

    const liItem = createElement("li", { className: "document" }, [
      thumbnail,
      createElement("span", {}, [file.name]),
      createElement("span", {}, [file.size]),
    ]);

    dropzone.append(liItem);
  }
};

DocumentDropzone(dropzone, renderDocuments);
DocumentInput(addButton, renderDocuments);
