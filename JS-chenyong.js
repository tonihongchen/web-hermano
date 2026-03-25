const osevenData = {
    hero: {
        title: "FAMILIA",
        subtitle: "OSEVEN WOOD COATINGS",
        bg: "./fotos/image_c4f13f.jpg" 
    },
    sections: [
        {
            type: "profile",
            title: "Company Profile",
            text: "The story of OSEVEN began in 1999. We don't just sell paint; we provide a lifestyle of elegance and safety for your home."
        },
        {
            type: "grid",
            title: "The Ecosystem",
            items: [
                { name: "Interior Wood", detail: "PU - NC - Waterbased" },
                { name: "Exterior Wood", detail: "UV Resistance - 10 Year Guarantee" },
                { name: "Plax Wood", detail: "Specialized for Plastic surfaces" }
            ]
        }
    ]
};

// Inyectar datos en el Hero
document.getElementById('main-title').innerText = osevenData.hero.title;
document.getElementById('main-subtitle').innerText = osevenData.hero.subtitle;

// Inyectar el resto de secciones
const container = document.getElementById('content');

osevenData.sections.forEach(sec => {
    let html = `<section class="editorial-section" style="padding: 80px 10%; max-width: 1200px; margin: auto;">
                    <h2 style="color: #c4a47c; font-family: 'Playfair Display'; font-size: 2.5rem; text-transform: uppercase;">${sec.title}</h2>`;
    
    if(sec.type === 'profile') {
        html += `<p style="font-size: 1.2rem; line-height: 1.8; color: #444;">${sec.text}</p>`;
    } else {
        html += `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 30px;">
                    ${sec.items.map(i => `
                        <div style="border-left: 2px solid #c4a47c; padding-left: 15px;">
                            <h3 style="margin: 0;">${i.name}</h3>
                            <p style="color: #666;">${i.detail}</p>
                        </div>`).join('')}
                 </div>`;
    }
    
    html += `</section>`;
    container.innerHTML += html;
});