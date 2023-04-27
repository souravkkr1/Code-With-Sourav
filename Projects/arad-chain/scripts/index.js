// Section 1
// >>>> Black box image boxes

const howWill = [
    {
        icon: "assets/icons/howWill1.svg",
        title: "Adoption Of AradChain Blockchain Technologies",
        desc: "To improve supply chain visibility, traceability, and efficiency."
    },
    {
        icon: "assets/icons/howWill2.svg",
        title: "Standardization Of Processes And Data",
        desc: "Establish common standards for operations and data across the agriculture industry to facilitate seamless information exchange and collaboration."
    },
    {
        icon: "assets/icons/howWill3.svg",
        title: "Encourage Public-Private Partnerships",
        desc: "Building partnerships between governments, industry players, and other stakeholders to address common challenges and create synergies."
    },
    {
        icon: "assets/icons/howWill4.svg",
        title: "Promote Sustainable Agriculture Practices",
        desc: "Encouraging the adoption of sustainable agriculture practices to improve the efficiency and resilience of the food system while also ensuring its long-term viability."
    },
    {
        icon: "assets/icons/howWill5.svg",
        title: "Investment In Infrastructure",
        desc: "Providing access to investment in rural infrastructure, such as transportation and communication networks, to improve access to markets for farmers and food producers."
    },
    {
        icon: "assets/icons/howWill6.svg",
        title: "Fostering International Cooperation",
        desc: "Promote international cooperation through digitized trade agreements and other mechanisms to reduce trade barriers and instigate cross-border cooperation in the industry."
    },
    {
        icon: "assets/icons/howWill7.svg",
        title: "AradChain Blockchain Artificial Intelligence Systems",
        desc: "Analyzing data from various stages of the supply chain and making recommendations to optimize the process, reducing costs and improving efficiency. Detect and prevent fraudulent activities in the supply chain by analyzing large amounts of data and identifying anomalies."
    },
    {
        icon: "assets/icons/howWill8.svg",
        title: "Integration With IoT - Internet Of Things",
        desc: "Improving equipment efficiency by analyzing data from IoT devices and predicting when maintenance is necessary. Connect with onsite automated soil and animal sensors to analysis and track and alert on any irregularities."
    }
]
const blackBox = [
    {
        img: "assets/images/discover1.jpg",
        title: "Enabling Complete Traceability And Transparency",
        desc: "A tamper-proof record of the origin, journey, and ownership of food products, improving transparency and traceability throughout the supply chain using our tailored AradChain blockchain solutions."
    },
    {
        img: "assets/images/discover2.jpg",
        title: "Smart Farming Models",
        desc: "By using IoT-enabled devices and sensors, farmers can make data-driven decisions that increase their efficiency and improve the health of their crops.."
    },
    {
        img: "assets/images/discover3.jpg",
        title: "No More Food Wastage",
        desc: "Food lost and wasted could feed 1.26 billion hungry people every year by curbing inefficiencies in the supply chain, lack of storage and transportation infrastructure, and consumer waste. We aim to systematically reduce this."
    },
    {
        img: "assets/images/discover4.jpg",
        title: "Biometric Authentication Technology",
        desc: "Fingerprint and facial recognition will secure our DApp and ensure that only authorized users can access its features and data."
    },
    {
        img: "assets/images/discover5.jpg",
        title: "Encourage Public-Private Partnerships",
        desc: "It is vital to build partnerships between governments, industry players, and other stakeholders to address common challenges and create synergies."
    },
    {
        img: "assets/images/discover6.jpg",
        title: "Financial Inclusion",
        desc: "By providing small farmers with access to financial services, enabling them to improve their operations and participate in global markets."
    }
]

const benefit = [
    {
        img: "assets/images/benefit1.jpg",
        title: "Farmers",
        desc: "Track the origin and quality of produce and maximize yield through real-time performance data. AradChain’s blockchain helps reduce costs and streamline operations for farmers."
    },
    {
        img: "assets/images/benefit2.jpg",
        title: "Manufacturers",
        desc: "Provide a completely secure and transparent platform to track and manage the supply chain. This ensures the traceability and safety of the crops and produce."
    },
    {
        img: "assets/images/benefit3.jpg",
        title: "Funders",
        desc: "Investors can transparently provide finance for MSMEs including farmers, traders, input retailers, and other businesses."
    },
    {
        img: "assets/images/benefit4.jpg",
        title: "Investors",
        desc: "Help investors track and monitor the performance of their investments 24/7/365"
    },
    {
        img: "assets/images/benefit5.jpg",
        title: "Merchants & Traders",
        desc: "Increased efficiency in preventing fraud, transparent transactions, and payments. The entire supply chain is secure for merchants and traders to carry out their operations."
    }
]

const howWillContainer = document.querySelector(".how-will > .right");

howWill.map((ele) => {
    let box = document.createElement("div");
    box.className = "howWillBoxes"
    // box.setAttribute("data-aos", "ease-in");
    // box.setAttribute("data-aos", "slide-up")
    // box.setAttribute("data-aos-duration", "1000")
    let object = document.createElement("object");
    object.data = ele.icon;
    let content = document.createElement("div")
    content.className = "content"

    let title = document.createElement("h2")
    title.innerText = ele.title
    let desc = document.createElement("p")
    desc.innerText = ele.desc

    content.append(title, desc)
    box.append(object, content)
    howWillContainer.append(box)
})


const container = document.querySelector(".mid");

blackBox.map((ele) => {
    let box = document.createElement("div");
    box.className = "discoverBoxes"
    // box.setAttribute("data-aos", "zoom-in-up")
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

const benefitContainer = document.querySelector(".benefit > .bottom");

benefit.map((ele) => {
    let box = document.createElement("div");
    box.className = "benefitBoxes"
    // box.setAttribute("data-aos", "zoom-in-up")
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
    benefitContainer.append(box)

})

const loader = document.querySelector("clock-loader")
function handlePreloader() {
    loader.delay(1000).fadeOut(0);
}


// Ham-Menu-Close
function closeFunc() {
    let menu = document.querySelector(".ham-menu")
    menu.style.display = "none"
}
function openFunc() {
    let menu = document.querySelector(".ham-menu")
    menu.style.display = "block";
}


// Youtube Video
// function openPopup() {
//     document.getElementById("popup").style.display = "flex";
// }

// function closePopup() {
//     document.getElementById("popup").style.display = "none";
// }


// $('a.stop-video').click(function () {
//     $("#popup").hide();
//     $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
// });

function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

$('a.stop-video').click(function () {
    $("#popup").hide();
    $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
});




