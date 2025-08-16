// Datos de los juegos
const gamesData = [
    {
        id: 1,
        name: "Fortnite",
        icon: "🛒",
        bannerImage: "https://cdn.marketing.on.epicgames.com/esports/webpack/af3223eae3c228386e6fa80a6880b4de.jpg", // Aquí añadirás la URL de la imagen más adelante
        description: "Juego de batalla real con estética cartoon y construcción. Método: Solo pasas tu cuenta de Epic Games. Se compra desde Epic Store.",
        prices: [
            "1000 Pavos → 143,84 Bs",
            "2800 Pavos → 367,84 Bs",
            "5000 Pavos → 591,84 Bs",
            "13.500 Pavos → 1.439,84 Bs"
        ]
    },
    {
        id: 2,
        name: "Roblox",
        icon: "🧱",
        bannerImage: "https://th.bing.com/th/id/R.076d146437ffc79cebc36bf2ded91196?rik=C%2f9D3lpgvSBUiw&pid=ImgRaw&r=0", // Aquí añadirás la URL de la imagen más adelante
        description: "Plataforma de juegos y creación de mundos virtuales. Método: Proporcionas tu cuenta. Acceso por código rápido o usuario/contraseña.",
        prices: [
            "Desde página web:",
            "40 Robux → 10 Bs",
            "80 Robux → 19 Bs",
            "400 Robux → 65 Bs",
            "800 Robux → 132 Bs",
            "1700 Robux → 245 Bs",
            "Con bonus:",
            "400 + 100 Robux → 85,24 Bs",
            "800 + 200 Robux → 169,84 Bs",
            "1700 + 300 Robux → 329,83 Bs"
        ]
    },
    {
        id: 3,
        name: "PUBG Mobile",
        icon: "🔫",
        bannerImage: "https://wstatic-prod.pubg.com/web/live/static/og/img-og-pubg.jpg", // Aquí añadirás la URL de la imagen más adelante
        description: "Shooter táctico multijugador con mapas realistas. Métodos: Por UID o desde tu cuenta. Aplica bonus.",
        prices: [
            "Por UID:",
            "60 UC → 18 Bs",
            "300 UC + 25 UC → 81 Bs",
            "600 UC + 60 UC → 169 Bs",
            "1500 UC + 300 UC → 395 Bs",
            "Desde tu cuenta:",
            "60 UC → 19 Bs",
            "300 UC → 72 Bs",
            "600 UC → 139 Bs",
            "1500 UC → 349 Bs"
        ]
    },
    {
        id: 4,
        name: "Mobile Legends",
        icon: "⚔️",
        bannerImage: "https://cdn.ligadegamers.com/imagenes/consejos-mobile-legends-bang-bang-og.jpg", // Aquí añadirás la URL de la imagen más adelante
        description: "MOBA móvil con héroes y partidas rápidas. Métodos: Por ID o desde tu cuenta.",
        prices: [
            "Por ID (sin bonus):",
            "50💎 → 13 Bs",
            "150💎 → 39 Bs",
            "250💎 → 68 Bs",
            "500💎 → 135 Bs",
            "Por ID (con bonus):",
            "10💎 + 1💎 → 4,50 Bs",
            "20💎 + 2💎 → 8,50 Bs",
            "70💎 + 8💎 → 22 Bs",
            "156💎 + 16💎 → 43 Bs",
            "234💎 + 23💎 → 65 Bs",
            "625💎 + 81💎 → 158 Bs",
            "1860💎 + 335💎 → 489 Bs",
            "3099💎 + 589💎 → 849 Bs",
            "Pases:",
            "Pase semanal 🪪 → 29 Bs",
            "Pase crepúsculo 🪪 → 129 Bs",
            "Desde tu cuenta:",
            "50💎 → 19 Bs",
            "150💎 → 41 Bs",
            "250💎 → 69 Bs",
            "500💎 → 135 Bs",
            "1000💎 → 225 Bs"
        ]
    },
    {
        id: 5,
        name: "Free Fire",
        icon: "🔥",
        bannerImage: "https://cdn.clarosports.com/clarosports/2023/06/sin-titulo-2023-06-09t120051.575-120000.jpg", // Aquí añadirás la URL de la imagen más adelante
        description: "Battle royale rápido y accesible para móviles. Por ID:",
        prices: [
            "100💎 + 10 bonus → 10 Bs",
            "310💎 + 31 bonus → 31 Bs",
            "520💎 + 52 bonus → 52 Bs",
            "1060💎 + 106 bonus → 89 Bs",
            "2180💎 + 218 bonus → 175 Bs",
            "5600💎 + 560 bonus → 445 Bs",
            "Pases:",
            "Pase semanal 🪪 → 24 Bs",
            "Pase mensual 🪪 → 89 Bs"
        ]
    },
    {
        id: 6,
        name: "Arena Breakout",
        icon: "🪖",
        bannerImage: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2023/04/2-1.jpg", // Aquí añadirás la URL de la imagen más adelante
        description: "Shooter táctico con loot realista y misiones intensas. Por IUD:",
        prices: [
            "60🪙 + 6🪙 → 19 Bs",
            "310🪙 + 25🪙 → 83 Bs",
            "630🪙 + 45🪙 → 175 Bs",
            "1580🪙 + 110🪙 → 426 Bs",
            "Artículos especiales:",
            "Beginner Select → 16 Bs",
            "Privilegio Caja Antibalas → 45 Bs",
            "Pase Batalla Avanzado → 73 Bs",
            "Caja Compuesta (30 días) → 125 Bs",
            "Pase Batalla Premium → 195 Bs"
        ]
    },
    {
        id: 7,
        name: "Minecraft",
        icon: "🎮🔥 MINECRAFT 🔥🎮",
        bannerImage: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/02/guia-todos-trucos-consejos-minecraft.jpg?tf=3840x", // Aquí añadirás la URL de la imagen más adelante
        description: "El clásico juego de construcción y aventuras",
        prices: [
            "🌍 Realms Básico a Bs 69",
            "🌐 Realms Plus a Bs 139",
            "💰 Minecoins",
            "✨ 320 Bs 32",
            "✨ 960 + 60 Bs 104",
            "✨ 1600 + 120 Bs 165",
            "✨ 3200 + 300 Bs 339",
            "✨ 8000 + 800 Bs 835"
        ]
    }
];

// Función para renderizar las tarjetas de juegos
function renderGames() {
    const container = document.getElementById('gamesContainer');
    container.innerHTML = '';

    gamesData.forEach(game => {
        const priceItems = game.prices.map(price => {
            // Verificar si el precio contiene "Bs" (mayúscula o minúscula)
            const hasPrice = price.toLowerCase().includes('bs');
            
            return `
                <div class="price-item">
                    <div class="item-info">${price}</div>
                    <div class="item-actions">
                        ${hasPrice ? 
                            `<button class="btn-buy" data-game="${game.name}" data-item="${price}">
                                <i class="bi bi-whatsapp"></i> Comprar
                            </button>` : 
                            ''
                        }
                    </div>
                </div>
            `;
        }).join('');

        const gameCard = `
            <div class="col-lg-4 col-md-6">
                <div class="game-card">
                    <div class="game-banner" ${game.bannerImage ? `style="background-image: url('${game.bannerImage}'); background-size: cover; background-position: center;"` : ''}>
                        <div class="game-icon">${game.icon}</div>
                    </div>
                    <div class="game-content">
                        <h3 class="game-title">${game.name}</h3>
                        <p class="game-description">${game.description}</p>
                        <div class="price-list">
                            ${priceItems}
                        </div>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML += gameCard;
    });
}

// Función para filtrar juegos
function filterGames() {
    const searchTerm = document.getElementById('gameSearch').value.toLowerCase();
    const container = document.getElementById('gamesContainer');
    container.innerHTML = '';

    const filteredGames = gamesData.filter(game =>
        game.name.toLowerCase().includes(searchTerm)
    );

    if (filteredGames.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-emoji-frown" style="font-size: 3rem;"></i>
                <h3 class="mt-3">No se encontraron juegos</h3>
                <p>Intenta con otro término de búsqueda</p>
            </div>
        `;
        return;
    }

    filteredGames.forEach(game => {
        const priceItems = game.prices.map(price => {
            // Verificar si el precio contiene "Bs" (mayúscula o minúscula)
            const hasPrice = price.toLowerCase().includes('bs');
            
            return `
                <div class="price-item">
                    <div class="item-info">${price}</div>
                    <div class="item-actions">
                        ${hasPrice ? 
                            `<button class="btn-buy" data-game="${game.name}" data-item="${price}">
                                <i class="bi bi-whatsapp"></i> Comprar
                            </button>` : 
                            ''
                        }
                    </div>
                </div>
            `;
        }).join('');

        const gameCard = `
            <div class="col-lg-4 col-md-6">
                <div class="game-card">
                    <div class="game-banner" ${game.bannerImage ? `style="background-image: url('${game.bannerImage}'); background-size: cover; background-position: center;"` : ''}>
                        <div class="game-icon">${game.icon}</div>
                    </div>
                    <div class="game-content">
                        <h3 class="game-title">${game.name}</h3>
                        <p class="game-description">${game.description}</p>
                        <div class="price-list">
                            ${priceItems}
                        </div>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML += gameCard;
    });
}

// Inicializar
document.addEventListener('DOMContentLoaded', function () {
    // Toggle sidebar
    document.getElementById('sidebarCollapse').addEventListener('click', function () {
        document.getElementById('sidebar').classList.toggle('active');
    });

    // Cerrar sidebar al hacer clic en un enlace
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.addEventListener('click', function () {
            document.getElementById('sidebar').classList.remove('active');
        });
    });

    // Renderizar juegos
    renderGames();

    // Configurar búsqueda
    document.getElementById('gameSearch').addEventListener('input', filterGames);
    document.querySelector('.search-container .btn').addEventListener('click', filterGames);

    // Cerrar sidebar al hacer clic fuera
    document.addEventListener('click', function (event) {
        const sidebar = document.getElementById('sidebar');
        const button = document.getElementById('sidebarCollapse');

        if (sidebar.classList.contains('active') &&
            !sidebar.contains(event.target) &&
            event.target !== button) {
            sidebar.classList.remove('active');
        }
    });
});

// Evento para botones de compra
document.addEventListener('click', function (e) {
    if (e.target && e.target.closest('.btn-buy')) {
        const button = e.target.closest('.btn-buy');
        const gameName = button.getAttribute('data-game');
        const item = button.getAttribute('data-item');
        const phone = '59161541084';
        const message = encodeURIComponent(`Hola, estoy interesado en comprar: ${item} para ${gameName}. ¿Está disponible?`);
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');

        // Animación de confirmación
        button.classList.add('btn-confirm');
        setTimeout(() => {
            button.classList.remove('btn-confirm');
        }, 500);
    }
});