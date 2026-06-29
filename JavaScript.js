function updateArtType() {

    let images = ["imgSketch", "imgColour", "imgRender"];

    // everythingtransparent
    images.forEach(id => {
        document.getElementById(id).classList.remove("selected");
    });

    // no transparent
    let selected = document.querySelector(
        'input[name="artType"]:checked'
    );

    if (selected) {

        let map = {
            "Sketch": "imgSketch",
            "Colour": "imgColour",
            "Render": "imgRender"
        };

        document.getElementById(
            map[selected.value]
        ).classList.add("selected");
    }
}


function updateArtSize() {

    let images = ["imgHead", "imgHalf", "imgFull"];

    images.forEach(id => {
        document.getElementById(id).classList.remove("selected");
    });

    let selected = document.querySelector(
        'input[name="artSize"]:checked'
    );

    if (selected) {

        let map = {
            "Head": "imgHead",
            "Half": "imgHalf",
            "Full": "imgFull"
        };

        document.getElementById(
            map[selected.value]
        ).classList.add("selected");
    }
}


function updateAddition(checkbox, imageId) {

    let image = document.getElementById(imageId);

    if (checkbox.checked) {
        image.classList.add("selected");
    } else {
        image.classList.remove("selected");
    }
}


function showSummary() {

    // Art type
    let artType =
        document.querySelector('input[name="artType"]:checked');

    let selectedType =
        artType ? artType.value : "Not selected";


    // Art size
    let artSize =
        document.querySelector('input[name="artSize"]:checked');

    let selectedSize =
        artSize ? artSize.value : "Not selected";


    // Additions
    let additions =
        document.querySelectorAll('input[type="checkbox"]:checked');

    let additionsList = [];

    additions.forEach(function(item) {
        additionsList.push(item.value);
    });

    let selectedAdditions =
        additionsList.length > 0
            ? additionsList.join(", ")
            : "None";


    // Character descrionpti
    let description =
        document.querySelector("textarea").value;

    if (description.trim() === "") {
        description = "No description provided.";
    }


    // Insert summary into modal
    document.getElementById("summaryText").innerHTML = `
        <p><strong>Art Type:</strong> ${selectedType}</p>

        <p><strong>Art Size:</strong> ${selectedSize}</p>

        <p><strong>Additions:</strong> ${selectedAdditions}</p>

        <p><strong>Character Description:</strong></p>

        <p>${description}</p>
    `;

    // Show modal
    document.getElementById("summaryModal").style.display = "block";
}


// Close modal
function closeModal() {
    document.getElementById("summaryModal").style.display = "none";
}


