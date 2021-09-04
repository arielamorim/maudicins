const medicins = [
    {
        "id": 1,
        "name": "aspirina",
        "nao-compativeis": [2, 3],
        "nao-testados": [4]
    },
    {
        "id": 2,
        "name": "viagra",
        "nao-compativeis": [1],
        "nao-testados": [4]
    },
    {
        "id": 3,
        "name": "paracetamol",
        "nao-compativeis": [1],
        "nao-testados": [4]
    },
    {
        "id": 4,
        "name": "cloroquiners",
        "nao-compativeis": [],
        "nao-testados": [1, 2, 3]
    },
    {
        "id": 5,
        "name": "dorflex",
        "nao-compativeis": [],
        "nao-testados": [4, 3]
    }
];

// Append options
function createOptions(el) {
    medicins.forEach( (medicin) => {
        // Create HTML element
        const opt = document.createElement("option");
        // Put some info into it
        opt.value = medicin.id;
        opt.innerText = medicin.name;
        // Append to the current select
        el.appendChild(opt);
    });
}

// Get selects elements
function appendOptions() {
    let elements = document.querySelectorAll('select');
    elements.forEach( (el) => {
        // Append options to the current select
        createOptions(el);
    });
}

// Controller
function init () {
    // Append options
    appendOptions();
}

// Start the execution when DOM is ready
function domReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        callback();
    }
}
// When DOM ready, give him something to do
domReady(() => {
    init();
});