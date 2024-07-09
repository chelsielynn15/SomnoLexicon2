const terms = {
    "SMD": "Somnology MD Mobile App (iOS and Android)",
    "SOMNOREST": "Somnology's API",
    "SLEEPTALK": "Somnology's AI platform",
    "NIGHTWATCH": "Not sure what this is exactly.",
};

function searchTerm() {
    const searchBar = document.getElementById('searchBar');
    const resultDiv = document.getElementById('result');
    const query = searchBar.value.trim().toUpperCase();

    if (terms[query]) {
        resultDiv.textContent = `${query}: ${terms[query]}`;
    } else {
        resultDiv.textContent = "Term not found.";
    }
}
