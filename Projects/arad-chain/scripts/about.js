const team = [
    {
        name: "Gurmit Singh",
        role: "CEO & Co-Founder",
        image: "assets/team/cropped.png",
        linkedin: "https://www.linkedin.com/in/gurmitsingh1"
    },
    {
        name: "Noman Haq",
        role: "COO & Co-Founder",
        image: "assets/team/nomanHaq.jpg",
        linkedin: "https://www.linkedin.com/in/nomanhaq12"
    },
    {
        name: "Sayyid M Hasan",
        role: "Financial Advisor/ CFO",
        image: "assets/team/mansoobHasan.jpg",
        linkedin: ""
    },
    {
        name: "Azim BaiG",
        role: "Blockchain Developer",
        image: "assets/team/azimBaig.jpg",
        linkedin: ""
    },
    {
        name: "Arslan Haq",
        role: "Graphic Designer",
        image: "assets/team/arslanHaq.jpg",
        linkedin: ""
    },
    {
        name: "Ibrahim Abdullah",
        role: "Javascript Developer/ Web Developer",
        image: "assets/team/ibrahimAbdullah.jpg",
        linkedin: ""
    },
    {
        name: "Tayyaba Khalil",
        role: "Project Manager/ Backend Engineer",
        image: "assets/team/tayyabaKhalil.jpg",
        linkedin: ""
    },
    {
        name: "Abdur Rehman",
        role: "Quality Assurance",
        image: "assets/team/abdurRehman.jpeg",
        linkedin: ""
    },
    {
        name: "Sachin Salvi",
        role: "SMM Manager",
        image: "assets/team/sachin.jpg",
        linkedin: ""
    },
]

let teamPhotosContainer = document.querySelector(".bottom");
team.forEach((ele) => {
    let box = document.createElement("div");
    box.className = "animate__animated animate__bounce"

    let image = document.createElement("img");
    image.src = ele.image;

    let content = document.createElement("div")
    let name = document.createElement("h2");
    name.innerText = ele.name;
    let role = document.createElement("p");
    role.innerText = ele.role

    let social = document.createElement("div");
    let linkedin = document.createElement("i");
    linkedin.className = "fa-brands fa-linkedin";
    linkedin.style.color = "#0a66c2"

    social.append(linkedin);
    content.append(name, role, social);
    box.append(image, content)
    teamPhotosContainer.append(box)
})
