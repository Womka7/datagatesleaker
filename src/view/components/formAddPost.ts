import { guardianLogin } from "../../controller/guardian";
import { PostController } from "../../controller/postController";
import { IResponsePost } from "../../model/IResponsePost";

export function createPostForm() {

    guardianLogin();

    const postSection = document.querySelector(".section-add-post") as HTMLElement;

    const formPost = document.createElement("form") as HTMLFormElement;
    formPost.setAttribute("id", "post-form");

    // Crea el título
    const title = document.createElement("h2") as HTMLHeadingElement;
    title.innerText = "Add Post";

    // Crea el contenedor de los campos de entrada
    const div = document.createElement("div") as HTMLDivElement;
    div.classList.add("container-input");

    // Grupo de nombre de title posts
    const titleGroup = document.createElement("div") as HTMLDivElement;
    titleGroup.classList.add('form-group');
    const titleInput = document.createElement("input") as HTMLInputElement;
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("placeholder", " ");
    const titleLabel = document.createElement("label") as HTMLLabelElement;
    titleLabel.setAttribute("for", "title");
    titleLabel.innerText = "Title";
    titleInput.required = true;

    // Grupo de body
    const bodyGroup = document.createElement("div") as HTMLDivElement;
    bodyGroup.classList.add('form-group');
    const bodyInput = document.createElement("input") as HTMLInputElement;
    bodyInput.setAttribute("type", "text");
    bodyInput.setAttribute("id", "body");
    bodyInput.setAttribute("placeholder", " ");
    const bodyLabel = document.createElement("label") as HTMLLabelElement;
    bodyLabel.setAttribute("for", "body");
    bodyLabel.innerText = "Body";
    bodyInput.required = true;


    // Grupo de creator
    const creatorGroup = document.createElement("div") as HTMLDivElement;
    creatorGroup.classList.add('form-group');
    const creatorInput = document.createElement("input") as HTMLInputElement;
    creatorInput.setAttribute("type", "text");
    creatorInput.setAttribute("id", "creator");
    creatorInput.setAttribute("placeholder", " ");
    const creatorLabel = document.createElement("label") as HTMLLabelElement;
    creatorLabel.setAttribute("for", "creator");
    creatorLabel.innerText = "Creator";
    creatorInput.required = true;

    // Grupo de EstimatedPublicationGroup
    const estimatedPubGroup = document.createElement("div") as HTMLDivElement;
    estimatedPubGroup.classList.add('form-group');
    const estimatedPubInput = document.createElement("input") as HTMLInputElement;
    estimatedPubInput.setAttribute("type", "date");
    estimatedPubInput.setAttribute("id", "estimatedPub");
    const estimatedPubLabel = document.createElement("label") as HTMLLabelElement;
    estimatedPubLabel.setAttribute("for", "estimatedPub");
    estimatedPubLabel.innerText = "Estimated Date Publication";
    estimatedPubInput.required = true;

    // Grupo de status
    const statusGroup = document.createElement("div") as HTMLDivElement;
    statusGroup.classList.add('form-group');
    const statusInput = document.createElement("input") as HTMLInputElement;
    statusInput.setAttribute("type", "text");
    statusInput.setAttribute("id", "status");
    statusInput.setAttribute("placeholder", " ");
    const statusLabel = document.createElement("label") as HTMLLabelElement;
    statusLabel.setAttribute("for", "status");
    statusLabel.innerText = "Status";
    statusInput.required = true;

    // Grupo de approvalPercentege
    const approvalPGroup = document.createElement("div") as HTMLDivElement;
    approvalPGroup.classList.add('form-group');
    const approvalPInput = document.createElement("input") as HTMLInputElement;
    approvalPInput.setAttribute("type", "text");
    approvalPInput.setAttribute("id", "approvalP");
    approvalPInput.setAttribute("placeholder", " ");
    const approvalPLabel = document.createElement("label") as HTMLLabelElement;
    approvalPLabel.setAttribute("for", "approvalP");
    approvalPLabel.innerText = "Approval Percentage";
    approvalPInput.required = true;

    // Grupo de correction
    const correctionsGroup = document.createElement("div") as HTMLDivElement;
    correctionsGroup.classList.add('form-group');
    const correctionInput = document.createElement("input") as HTMLInputElement;
    correctionInput.setAttribute("type", "text");
    correctionInput.setAttribute("id", "correction");
    correctionInput.setAttribute("placeholder", " ");
    const correctionLabel = document.createElement("label") as HTMLLabelElement;
    correctionLabel.setAttribute("for", "correction");
    correctionLabel.innerText = "Correction";
    correctionInput.required = true;

    // Grupo de platform
    const platformGroup = document.createElement("div") as HTMLDivElement;
    platformGroup.classList.add('form-group');
    const platformInput = document.createElement("input") as HTMLInputElement;
    platformInput.setAttribute("type", "text");
    platformInput.setAttribute("id", "platform");
    platformInput.setAttribute("placeholder", " ");
    const platformLabel = document.createElement("label") as HTMLLabelElement;
    platformLabel.setAttribute("for", "platform");
    platformLabel.innerText = "Platform";
    platformInput.required = true;



    // Grupo de postURL
    const postURLGroup = document.createElement("div") as HTMLDivElement;
    postURLGroup.classList.add('form-group');
    const postURLInput = document.createElement("input") as HTMLInputElement;
    postURLInput.setAttribute("type", "url");
    postURLInput.setAttribute("id", "image-url");
    postURLInput.setAttribute("placeholder", " ");
    const postURLLabel = document.createElement("label") as HTMLLabelElement;
    postURLLabel.setAttribute("for", "image-url");
    postURLLabel.innerText = "Post URL";
    postURLInput.required = true;

    // Grupo de URL de imagen
    const multimediaURLGroup = document.createElement("div") as HTMLDivElement;
    multimediaURLGroup.classList.add('form-group');
    const multimediaURLInput = document.createElement("input") as HTMLInputElement;
    multimediaURLInput.setAttribute("type", "url");
    multimediaURLInput.setAttribute("id", "image-url");
    multimediaURLInput.setAttribute("placeholder", " ");
    const multimediaURLLabel = document.createElement("label") as HTMLLabelElement;
    multimediaURLLabel.setAttribute("for", "image-url");
    multimediaURLLabel.innerText = "Multimedia URL";
    multimediaURLInput.required = true;


    // Botón de guardar
    const saveButton = document.createElement("button") as HTMLButtonElement;
    saveButton.setAttribute("type", "submit");
    saveButton.innerText = "Save";
    saveButton.classList.add('btn-save');

    // Construye el DOM
    postSection.appendChild(formPost);
    formPost.append(title, div);
    div.append(titleGroup, bodyGroup, creatorGroup, estimatedPubGroup, statusGroup,approvalPGroup,correctionsGroup,platformGroup,postURLGroup, multimediaURLGroup, saveButton);
    titleGroup.append(titleInput, titleLabel);
    bodyGroup.append(bodyInput, bodyLabel);
    creatorGroup.append(creatorInput, creatorLabel);
    estimatedPubGroup.append(estimatedPubInput, estimatedPubLabel);
    statusGroup.append(statusInput, statusLabel);
    approvalPGroup.append(approvalPInput, approvalPLabel);
    correctionsGroup.append(correctionInput, correctionLabel);
    platformGroup.append(platformInput, platformLabel);
    postURLGroup.append(postURLInput, postURLLabel);
    multimediaURLGroup.append(multimediaURLInput, multimediaURLLabel);

    const url = "https://api-posts.codificando.xyz/";
    const postAddController = new PostController(url);
    formPost.addEventListener("submit", async (event:Event) => {
        event.preventDefault();
        const newPost:IResponsePost={
            title: titleInput.value,
            body: bodyInput.value,
            creationDate: "2024-08-05",
            creator: creatorInput.value,
            estimatedPublicationDate: "2024-08-05",
            status: statusInput.value,
            approvalPercentage: approvalPInput.valueAsNumber,
            corrections: correctionInput.value,
            platform: platformInput.value,
            postUrl: postURLInput.value,
            multimediaUrl: multimediaURLInput.value
        }
        try {
            const postAdd = await postAddController.postPost('posts', newPost);
            alert(`post created succesful ${postAdd}`);
        } catch (error) {
            alert(error);
            
        }

    })
}