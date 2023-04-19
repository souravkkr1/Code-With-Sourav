// Section 1
// >>>> Black box image boxes

const blackBox = [
    {
        img: "https://demo.cmssuperheroes.com/themeforest/solatec/wp-content/uploads/solatec-30-570x464.jpg",
        title: "Enabling Complete Traceability And Transparency",
        desc: "A tamper-proof record of the origin, journey, and ownership of food products, improving transparency and traceability throughout the supply chain using our tailored AradChain blockchain solutions."
    },
    {
        img: "https://demo.cmssuperheroes.com/themeforest/solatec/wp-content/uploads/solatec-34-570x464.jpg",
        title: "Smart Farming Models",
        desc: "By using IoT-enabled devices and sensors, farmers can make data-driven decisions that increase their efficiency and improve the health of their crops.."
    },
    {
        img: "https://demo.cmssuperheroes.com/themeforest/solatec/wp-content/uploads/solatec-29-570x464.jpg",
        title: "No More Food Wastage",
        desc: "Food lost and wasted could feed 1.26 billion hungry people every year by curbing inefficiencies in the supply chain, lack of storage and transportation infrastructure, and consumer waste. We aim to systematically reduce this."
    },
    {
        img: "https://demo.cmssuperheroes.com/themeforest/solatec/wp-content/uploads/solatec-38-570x464.jpg",
        title: "Biometric Authentication Technology",
        desc: "Fingerprint and facial recognition will secure our DApp and ensure that only authorized users can access its features and data."
    },
    {
        img: "https://demo.cmssuperheroes.com/themeforest/solatec/wp-content/uploads/solatec-30-570x464.jpg",
        title: "Encourage Public-Private Partnerships",
        desc: "It is vital to build partnerships between governments, industry players, and other stakeholders to address common challenges and create synergies."
    },
    {
        img: "https://demo.cmssuperheroes.com/themeforest/solatec/wp-content/uploads/solatec-30-570x464.jpg",
        title: "Financial Inclusion",
        desc: "By providing small farmers with access to financial services, enabling them to improve their operations and participate in global markets."
    }
]

const container = document.querySelector(".mid");

blackBox.map((ele) => {
    let box = document.createElement("div");
    box.className = "discoverBoxes"
    // box.setAttribute("data-aos", "slide-up")
    // box.setAttribute("data-aos-duration", "1000")
    let img = document.createElement("img");
    img.src = ele.img;
    let content = document.createElement("div")
    content.className = "content"

    let title = document.createElement("h2")
    title.innerText = ele.title
    let desc = document.createElement("p")
    desc.innerText = ele.desc

    content.append(title, desc)
    box.append(img, content)
    container.append(box)

})

// Animation
// const blackBoxAnimate = document.querySelector(".blackBoxes");
// blackBoxAnimate.addEventListener("mouseover", (event) => {
//     event.target.classList.add('animate__animated', 'animate__bounce');
// })