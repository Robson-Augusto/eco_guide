const wasteData = [
    {
        title: "Pilhas e Baterias",
        category: "especial",
        description: "Contêm metais pesados. Devem ser entregues em pontos de coleta específicos em supermercados ou farmácias.",
        icon: "fa-battery-full",
        color: "text-orange-500"
    },
    {
        title: "Papel e Papelão",
        category: "reciclavel",
        description: "Devem estar secos e limpos. Podem ser descartados na coleta seletiva comum.",
        icon: "fa-file-lines",
        color: "text-blue-500"
    },
    {
        title: "Óleo de Cozinha",
        category: "perigoso",
        description: "Nunca jogue no ralo! Armazene em garrafas PET e leve a um centro de reciclagem de biodiesel.",
        icon: "fa-droplet",
        color: "text-yellow-600"
    },
    {
        title: "Lâmpadas Fluorescentes",
        category: "especial",
        description: "Possuem mercúrio. Devem ser devolvidas em lojas de materiais de construção ou iluminação.",
        icon: "fa-lightbulb",
        color: "text-purple-500"
    }
];

function renderCards(data) {
    const grid = document.getElementById('waste-grid');
    grid.innerHTML = '';

    data.forEach(item => {
        const card = `
            <div class="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500 hover:scale-105 m-2 transition-transform">
                <div class="text-4xl ${item.color} mb-4">
                    <i class="fa-solid ${item.icon}"></i>
                </div>
                <h4 class="text-xl font-bold mb-2">${item.title}</h4>
                <p class="text-gray-600 text-sm mb-4">${item.description}</p>
                <span class="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded uppercase font-semibold">
                    ${item.category}
                </span>
            </div>
        `;
        grid.innerHTML += card;
    });
}

function filterWaste(category) {
    if (category === 'todos') {
        renderCards(wasteData);
    } else {
        const filtered = wasteData.filter(item => item.category === category);
        renderCards(filtered);
    }
}

// Inicializa a página
document.addEventListener('DOMContentLoaded', () => {
    renderCards(wasteData);
});

// Dados reais de pontos de coleta em SRS
const collectionPoints = [
    {
        name: "Ecoponto SRS",
        bairro: "Fernandes",
        address: "Bairro Fernandes, Santa Rita do Sapucaí - MG",
        wasteTypes: ["Recicláveis", "Resíduos Volumosos","Papel e lixo comum"],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ecoponto+Santa+Rita+do+Sapucaí"
    },
    {
        name: "Inatel Casa Viva (Lixo Eletrônico)",
        bairro: "Centro",
        address: "Av. João de Camargo, 510 - Centro",
        wasteTypes: ["Eletrônicos", "Pilhas", "Baterias"],
        mapsUrl: "https://www.google.com/maps/place/Casa+Viva/@-22.2567104,-45.6994208,17z/data=!4m14!1m7!3m6!1s0x94cba3004a1c7a3f:0x5e26878f7c1abf24!2sCasa+Viva!8m2!3d-22.2567154!4d-45.6968459!16s%2Fg%2F11lf35sxmk!3m5!1s0x94cba3004a1c7a3f:0x5e26878f7c1abf24!8m2!3d-22.2567154!4d-45.6968459!16s%2Fg%2F11lf35sxmk?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
    },
    {
        name: "Santa Rita Reciclagem",
        bairro: "Maristela",
        address: "Av. Frederico de Paula Cunha, 855",
        wasteTypes: ["Papel", "Plástico", "Metal", "Vidro","Lampadas"],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Rita+Reciclagem"
    },
    {
        name: "CooperRita (Sede)",
        bairro: "Centro",
        address: "Rua Cel. João Euzébio, 528",
        wasteTypes: ["Recicláveis", "Embalagens"],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=CooperRita+Santa+Rita+do+Sapucaí"
    },
    {
        name: "Sapucaí Reciclagem",
        bairro: "Ozório Machado",
        address: "Rua José Pinto Vilela, 525",
        wasteTypes: ["Papel", "Papelão", "Plástico"],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sapucaí+Reciclagem+Santa+Rita"
    }
];

function renderPoints(points) {
    const list = document.getElementById('points-list');
    list.innerHTML = '';

    points.forEach(point => {
        const card = `
            <div class="border border-gray-200 p-6 rounded-xl hover:shadow-md transition bg-gray-50">
                <h4 class="text-xl font-bold text-green-700 mb-1">${point.name}</h4>
                <p class="text-sm text-gray-500 mb-3"><i class="fa-solid fa-location-dot mr-2"></i>${point.address} (${point.bairro})</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${point.wasteTypes.map(type => `<span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">${type}</span>`).join('')}
                </div>
                <a href="${point.mapsUrl}" target="_blank" class="text-green-600 font-semibold hover:text-green-800 flex items-center gap-2">
                    Ver no Google Maps <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                </a>
            </div>
        `;
        list.innerHTML += card;
    });
}

function filterPoints() {
    const bairro = document.getElementById('bairro-filter').value;
    if (bairro === 'todos') {
        renderPoints(collectionPoints);
    } else {
        const filtered = collectionPoints.filter(p => p.bairro === bairro);
        renderPoints(filtered);
    }
}

// Chame isso dentro do DOMContentLoaded que já criamos
document.addEventListener('DOMContentLoaded', () => {
    // renderCards(wasteData); // do passo anterior
    renderPoints(collectionPoints);
});