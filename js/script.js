/* ==========================================
   FAQS DATA & INITIALIZATION
   ========================================== */
const faqs = [
    {
        q: "What exactly is sustainable packaging?",
        a: "Sustainable packaging refers to the sourcing, development, and use of packaging solutions that have minimal environmental impact. This involves using materials that are recyclable, compostable, biodegradable, or reusable."
    },
    {
        q: "Why is sustainable packaging important?",
        a: "Traditional plastic packaging takes hundreds of years to decompose. Sustainable packaging conserves natural resources, significantly reduces greenhouse gas emissions, and helps transition our industries toward a circular economy."
    },
    {
        q: "What is EcoPack Select?",
        a: "EcoPack Select is an interactive web tool designed to help businesses and individuals choose the most sustainable packaging materials for their specific needs, whether for food, cosmetics, or pharmaceuticals."
    },
    {
        q: "How do you calculate the environmental impact?",
        a: "We use a combination of industry-standard metrics including carbon footprint reduction, biodegradability timeframes, and recycling rates to provide a cumulative impact score."
    }
];

// Initialize FAQs on the homepage
if (document.getElementById('faq-container')) {
    const container = document.getElementById('faq-container');
    faqs.forEach((faq, index) => {
        const item = document.createElement('div');
        item.className = 'faq-item';
        item.innerHTML = `
            <button class="faq-question">
                <span>0${index + 1}. ${faq.q}</span>
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="faq-answer">
                <p>${faq.a}</p>
            </div>
        `;
        container.appendChild(item);

        // Add toggle functionality
        const btn = item.querySelector('.faq-question');
        btn.addEventListener('click', () => {
            // Close others if desired, or keep multiple open. Closing others here.
            document.querySelectorAll('.faq-item').forEach(el => {
                if (el !== item) el.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });
}

/* ==========================================
   MOCK API / TOOL LOGIC
   ========================================== */

// This acts as our API mock for the report version
const mockDatabase = {
    food: {
        name: "Mushroom Mycelium Packaging",
        desc: "Grown from agricultural waste and mushroom roots. It is water-resistant, durable, and naturally composts in 30 days. Replaces styrofoam entirely.",
        biodegradable: "30 Days",
        carbon: "-60%"
    },
    cosmetics: {
        name: "Bamboo Fiber Core",
        desc: "A highly aesthetically pleasing, durable, and biodegradable alternative to plastic compacts and lids. Uses fast-growing organic bamboo.",
        biodegradable: "6 Months",
        carbon: "-45%"
    },
    pharma: {
        name: "PHA Bio-plastics",
        desc: "Medical-grade bio-plastic produced by microorganisms. Offers the same barrier properties as traditional plastics but is ocean-degradable.",
        biodegradable: "1-2 Years",
        carbon: "-50%"
    }
};

function getRecommendation() {
    const category = document.getElementById('category').value;
    
    if (!category) {
        alert("Please select a product category.");
        return;
    }

    // Hide wizard, show spinner
    document.getElementById('wizard-form').classList.add('hidden');
    const resultBox = document.getElementById('result-box');
    const spinner = document.getElementById('spinner');
    const materialResult = document.getElementById('material-result');
    
    resultBox.classList.remove('hidden');
    spinner.classList.remove('hidden');
    materialResult.classList.add('hidden');

    // Simulate API Call delay (1.5 seconds)
    setTimeout(() => {
        spinner.classList.add('hidden');
        
        // Load data from mock DB
        const data = mockDatabase[category];
        document.getElementById('mat-name').textContent = data.name;
        document.getElementById('mat-desc').textContent = data.desc;
        document.getElementById('mat-biodegradable').textContent = data.biodegradable;
        document.getElementById('mat-carbon').textContent = data.carbon;

        materialResult.classList.remove('hidden');
    }, 1500);
}

function resetTool() {
    document.getElementById('result-box').classList.add('hidden');
    document.getElementById('wizard-form').classList.remove('hidden');
    
    // Reset form
    document.getElementById('category').value = "";
    document.getElementById('feature').value = "moisture";
}
