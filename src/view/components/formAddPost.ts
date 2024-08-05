const citySection = document.querySelector(".section-add-city") as HTMLElement;

    const formCity = document.createElement("form") as HTMLFormElement;
    formCity.setAttribute("id", "post-form");

    // Crea el título
    const title = document.createElement("h2") as HTMLHeadingElement;
    title.innerText = "Add City";

    // Crea el contenedor de los campos de entrada
    const div = document.createElement("div") as HTMLDivElement;
    div.classList.add("container-input");

    // Grupo de nombre de la ciudad
    const cityGroup = document.createElement("div") as HTMLDivElement;
    cityGroup.classList.add('form-group');
    const cityInput = document.createElement("input") as HTMLInputElement;
    cityInput.setAttribute("type", "text");
    cityInput.setAttribute("id", "city");
    cityInput.setAttribute("placeholder", " ");
    const cityLabel = document.createElement("label") as HTMLLabelElement;
    cityLabel.setAttribute("for", "city");
    cityLabel.innerText = "City";
    cityInput.required = true;

    // Grupo de país
    const countryGroup = document.createElement("div") as HTMLDivElement;
    countryGroup.classList.add('form-group');
    const countryInput = document.createElement("input") as HTMLInputElement;
    countryInput.setAttribute("type", "text");
    countryInput.setAttribute("id", "country");
    countryInput.setAttribute("placeholder", " ");
    const countryLabel = document.createElement("label") as HTMLLabelElement;
    countryLabel.setAttribute("for", "country");
    countryLabel.innerText = "Country";
    countryInput.required = true;

    // Grupo de URL de imagen
    const imageURLGroup = document.createElement("div") as HTMLDivElement;
    imageURLGroup.classList.add('form-group');
    const imageURLInput = document.createElement("input") as HTMLInputElement;
    imageURLInput.setAttribute("type", "text");
    imageURLInput.setAttribute("id", "image-url");
    imageURLInput.setAttribute("placeholder", " ");
    const imageURLLabel = document.createElement("label") as HTMLLabelElement;
    imageURLLabel.setAttribute("for", "image-url");
    imageURLLabel.innerText = "Image URL";
    imageURLInput.required = true;

    // Grupo de detalles de la ciudad
    const detailsGroup = document.createElement("div") as HTMLDivElement;
    detailsGroup.classList.add('form-group');
    const detailsInput = document.createElement("textarea") as HTMLTextAreaElement;
    detailsInput.setAttribute("id", "details");
    detailsInput.setAttribute("placeholder", " ");
    const detailsLabel = document.createElement("label") as HTMLLabelElement;
    detailsLabel.setAttribute("for", "details");
    detailsLabel.innerText = "City Details";
    detailsInput.required = true;

    // Botón de guardar
    const saveButton = document.createElement("button") as HTMLButtonElement;
    saveButton.setAttribute("type", "submit");
    saveButton.innerText = "Save";
    saveButton.classList.add('btn-save');

    // Construye el DOM
    citySection.appendChild(formCity);
    formCity.append(title, div);
    div.append(cityGroup, countryGroup, imageURLGroup, detailsGroup, saveButton);
    cityGroup.append(cityInput, cityLabel);
    countryGroup.append(countryInput, countryLabel);
    imageURLGroup.append(imageURLInput, imageURLLabel);
    detailsGroup.append(detailsInput, detailsLabel);