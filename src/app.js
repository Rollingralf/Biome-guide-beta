// DOM Elements
const biomeList = document.getElementById('biomeList');
const biomeContent = document.getElementById('biomeContent');
const searchInput = document.getElementById('searchInput');

let currentBiome = null;

// Initialize app
function init() {
  renderBiomeList(BIOMES);
  attachEventListeners();
}

// Render biome list
function renderBiomeList(biomes) {
  biomeList.innerHTML = '';
  
  biomes.forEach(biome => {
    const biomeItem = document.createElement('div');
    biomeItem.className = 'biome-item';
    biomeItem.innerHTML = `${biome.icon} ${biome.name}`;
    biomeItem.addEventListener('click', () => selectBiome(biome, biomeItem));
    biomeList.appendChild(biomeItem);
  });
}

// Select a biome
function selectBiome(biome, element) {
  currentBiome = biome;
  
  // Update active state
  document.querySelectorAll('.biome-item').forEach(item => {
    item.classList.remove('active');
  });
  element.classList.add('active');
  
  // Render biome content
  renderBiomeContent(biome);
}

// Render biome content
function renderBiomeContent(biome) {
  let html = `
    <div class="biome-header">
      <div class="biome-icon">${biome.icon}</div>
      <div class="biome-title">
        <h2>${biome.name}</h2>
        <p>${biome.description}</p>
      </div>
    </div>

    <div class="biome-section">
      <h3>📖 Beschrijving</h3>
      <div class="section-content">
        <p>${biome.details.description}</p>
      </div>
    </div>

    <div class="biome-section">
      <h3>🗺️ Kenmerken</h3>
      <div class="section-content">
        <ul>
          ${biome.details.characteristics.map(char => `<li>${char}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="biome-section">
      <h3>📦 Items & Resources</h3>
      <div class="section-content">
        <div class="items-grid">
          ${biome.items.map(item => `
            <div class="item-card">
              <div class="item-name">${item.name}</div>
              <div class="item-description">${item.use}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="biome-section">
      <h3>✨ Belangrijkste Resources</h3>
      <div class="section-content">
        <ul>
          ${biome.resources.map(resource => `<li>${resource}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="biome-section">
      <h3>🌡️ Klimaatgegevens</h3>
      <div class="section-content">
        <p><strong>Temperatuur:</strong> ${(biome.temperature * 100).toFixed(0)}°C</p>
        <p><strong>Regenval:</strong> ${(biome.rainfall * 100).toFixed(0)}%</p>
      </div>
    </div>
  `;
  
  biomeContent.innerHTML = html;
}

// Attach event listeners
function attachEventListeners() {
  searchInput.addEventListener('input', handleSearch);
}

// Handle search
function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  
  const filtered = BIOMES.filter(biome => 
    biome.name.toLowerCase().includes(searchTerm) ||
    biome.description.toLowerCase().includes(searchTerm)
  );
  
  renderBiomeList(filtered);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
