const trails = [
    {
        name: "Mountain Vista Trail",
        difficulty: "moderate",
        length: "8 km",
        // image: "https://via.placeholder.com/400x300",
        image: "../images/mountain-hike.jpg",
        description: "Scenic trail with panoramic mountain views."
    },
    {
        name: "Forest Creek Path",
        difficulty: "easy",
        length: "5 km",
        image: "../images/forest-creek.jpg",
        description: "Peaceful walk through ancient forests."
    },
    {
        name: "Summit Challenge",
        difficulty: "hard",
        length: "15 km",
        image: "../images/summit-challenge.jpg",
        description: "Steep climb to breathtaking summit views."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Setup filter buttons
    document.querySelectorAll('nav button').forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            filterTrails(filter);
        });
    });

    // Setup modal close button
    document.querySelector('.close').addEventListener('click', closeModal);

    // Initial load
    filterTrails('all');
});

function filterTrails(difficulty) {
    const container = document.getElementById('trailContainer');
    container.innerHTML = '';
    
    const filtered = difficulty === 'all' ? trails : 
        trails.filter(trail => trail.difficulty === difficulty);
    
    filtered.forEach(trail => {
        const card = document.createElement('div');
        card.className = 'trail-card';
        card.innerHTML = `
            <img src="${trail.image}" class="trail-image" alt="${trail.name}">
            <div class="trail-info">
                <h3>${trail.name}</h3>
                <span class="trail-difficulty ${trail.difficulty}">
                    ${trail.difficulty.charAt(0).toUpperCase() + trail.difficulty.slice(1)}
                </span>
                <p>Length: ${trail.length}</p>
            </div>
        `;
        
        card.addEventListener('click', () => showModal(trail));
        container.appendChild(card);
    });
}

function showModal(trail) {
    const modal = document.getElementById('trailModal');
    document.getElementById('modalTitle').textContent = trail.name;
    document.getElementById('modalDifficulty').textContent = 
        `Difficulty: ${trail.difficulty.charAt(0).toUpperCase() + trail.difficulty.slice(1)}`;
    document.getElementById('modalLength').textContent = `Length: ${trail.length}`;
    document.getElementById('modalDescription').textContent = trail.description;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('trailModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('trailModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const trailContainer = document.getElementById("trailContainer");
    const membershipForm = document.getElementById("membershipForm");
    const formMessage = document.getElementById("formMessage");
    const saveFavoriteBtn = document.getElementById("saveFavorite");
    let favoriteTrails = JSON.parse(localStorage.getItem("favorites")) || [];

    // Function to save favorites to localStorage
    function saveFavorite(trailName) {
        if (!favoriteTrails.includes(trailName)) {
            favoriteTrails.push(trailName);
            localStorage.setItem("favorites", JSON.stringify(favoriteTrails));
            alert(`${trailName} saved to favorites!`);
        } else {
            alert("Trail already in favorites!");
        }
    }

    // Function to handle form submission
    membershipForm.addEventListener("submit", function (event) {
        event.preventDefault();
        localStorage.setItem("userName", document.getElementById("name").value);
        localStorage.setItem("userEmail", document.getElementById("email").value);
        localStorage.setItem("userExperience", document.getElementById("experience").value);
        formMessage.textContent = "Thank you for joining! We've saved your info.";
    })
});