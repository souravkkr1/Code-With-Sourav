const articles = [
    {
        title: "Keeping Rodents & More Out Of Your Lawn",
        image: "assets/blog/blog1.webp",
        short_desc: "All of these factors are important to consider when permitting your solar system, and can help streamline your process. Take the time to consider these.",
        desc: "The key requirement of this work package is the development of a database (and supporting summary report), compiling information for potential renewable energy business and technology solutions to help overcome environmental and climatic challenges in the NPA programme region. Technology solutions cover installation, operation and maintenance of equipment, not the design and manufacture of components. The objective of the database is to identify the main environmental and climatic challenges, and outline technological and business solutions to these challenges, creating a database of these for 8 different categories of renewable energy technology. It is designed for use by new and existing renewable energy businesses, to inform them of the challenges they may face in developing their business and how these will be overcome. A range of examples (where available) have been highlighted on how the challenges identified have been overcome. Specific regional related innovations and smart solutions from local business on technology driven RE-solutions have been documented, with the intention of passing on this knowledge to other regions in the NPA not involved in the GREBE Project. Global climate change impacts Europe in many ways, including: changes in average and extreme temperature and precipitation, warmer oceans, rising sea level and shrinking snow and ice cover on land and at sea. These weather phenomenons have led to a range of impacts on ecosystems, socio-economic sectors and human health and safety. There is no doubt that the changes in climate will have a strong impact in our daily life, whether we accept extreme weather conditions as a new phenomenon or not. Adaptation to the past history data, present observed and future predicted impacts will in the coming decades be needed, as well as be complementary to global climate mitigation actions. Narvik Science Park has made a report on this in the GREBE-Project.",
        author: "",
        date: "April 30, 2023"
    },
    {
        title: "Keeping Rodents & More Out Of Your Lawn",
        image: "assets/blog/blog2.webp",
        short_desc: "All of these factors are important to consider when permitting your solar system, and can help streamline your process. Take the time to consider these.",
        desc: "The key requirement of this work package is the development of a database (and supporting summary report), compiling information for potential renewable energy business and technology solutions to help overcome environmental and climatic challenges in the NPA programme region. Technology solutions cover installation, operation and maintenance of equipment, not the design and manufacture of components. The objective of the database is to identify the main environmental and climatic challenges, and outline technological and business solutions to these challenges, creating a database of these for 8 different categories of renewable energy technology. It is designed for use by new and existing renewable energy businesses, to inform them of the challenges they may face in developing their business and how these will be overcome. A range of examples (where available) have been highlighted on how the challenges identified have been overcome. Specific regional related innovations and smart solutions from local business on technology driven RE-solutions have been documented, with the intention of passing on this knowledge to other regions in the NPA not involved in the GREBE Project. Global climate change impacts Europe in many ways, including: changes in average and extreme temperature and precipitation, warmer oceans, rising sea level and shrinking snow and ice cover on land and at sea. These weather phenomenons have led to a range of impacts on ecosystems, socio-economic sectors and human health and safety. There is no doubt that the changes in climate will have a strong impact in our daily life, whether we accept extreme weather conditions as a new phenomenon or not. Adaptation to the past history data, present observed and future predicted impacts will in the coming decades be needed, as well as be complementary to global climate mitigation actions. Narvik Science Park has made a report on this in the GREBE-Project.",
        author: "",
        date: "April 30, 2023"
    },
    {
        title: "Keeping Rodents & More Out Of Your Lawn",
        image: "assets/blog/blog3.webp",
        short_desc: "All of these factors are important to consider when permitting your solar system, and can help streamline your process. Take the time to consider these.",
        desc: "The key requirement of this work package is the development of a database (and supporting summary report), compiling information for potential renewable energy business and technology solutions to help overcome environmental and climatic challenges in the NPA programme region. Technology solutions cover installation, operation and maintenance of equipment, not the design and manufacture of components. The objective of the database is to identify the main environmental and climatic challenges, and outline technological and business solutions to these challenges, creating a database of these for 8 different categories of renewable energy technology. It is designed for use by new and existing renewable energy businesses, to inform them of the challenges they may face in developing their business and how these will be overcome. A range of examples (where available) have been highlighted on how the challenges identified have been overcome. Specific regional related innovations and smart solutions from local business on technology driven RE-solutions have been documented, with the intention of passing on this knowledge to other regions in the NPA not involved in the GREBE Project. Global climate change impacts Europe in many ways, including: changes in average and extreme temperature and precipitation, warmer oceans, rising sea level and shrinking snow and ice cover on land and at sea. These weather phenomenons have led to a range of impacts on ecosystems, socio-economic sectors and human health and safety. There is no doubt that the changes in climate will have a strong impact in our daily life, whether we accept extreme weather conditions as a new phenomenon or not. Adaptation to the past history data, present observed and future predicted impacts will in the coming decades be needed, as well as be complementary to global climate mitigation actions. Narvik Science Park has made a report on this in the GREBE-Project.",
        author: "",
        date: "April 30, 2023"
    }
]

const blogpostContainer = document.querySelector(".blogpost");

articles.forEach((ele) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.src = ele.image;
    let content = document.createElement("div")
    let date = document.createElement("p")
    date.innerText = ele.date;
    let title = document.createElement("h2");
    title.innerText = ele.title
    let shortDesc = document.createElement("p");
    shortDesc.innerText = ele.short_desc
    let button = document.createElement("button");
    button.className = "blackWhite-btn"
    button.innerText = "Read more"
    content.append(date, title, shortDesc, button)
    box.append(image, content)
    blogpostContainer.append(box)
})