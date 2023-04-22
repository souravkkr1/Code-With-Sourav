const team = [
    {
        name: "Gurmit Singh",
        role: "CEO & Co-Founder",
        image: "https://scontent.fixr3-3.fna.fbcdn.net/v/t39.30808-6/307279995_5367925263320551_1800977647927307679_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cqRx2WSKSiwAX_S00q8&_nc_ht=scontent.fixr3-3.fna&oh=00_AfASBzsIqDqri_T7Ugk0KrcPNZxTNjszawXysizGuFa1_A&oe=64496739",
        linkedin: "https://www.linkedin.com/in/gurmitsingh1"
    },
    {
        name: "Noman Haq",
        role: "COO & Co-Founder",
        image: "https://scontent.fixr3-3.fna.fbcdn.net/v/t39.30808-6/307279995_5367925263320551_1800977647927307679_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cqRx2WSKSiwAX_S00q8&_nc_ht=scontent.fixr3-3.fna&oh=00_AfASBzsIqDqri_T7Ugk0KrcPNZxTNjszawXysizGuFa1_A&oe=64496739",
        linkedin: "https://www.linkedin.com/in/nomanhaq12"
    },
    {
        name: "Sayyid Mansoob Hasan",
        role: "Financial Advisor/ CFO",
        image: "https://scontent.fixr3-3.fna.fbcdn.net/v/t39.30808-6/307279995_5367925263320551_1800977647927307679_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cqRx2WSKSiwAX_S00q8&_nc_ht=scontent.fixr3-3.fna&oh=00_AfASBzsIqDqri_T7Ugk0KrcPNZxTNjszawXysizGuFa1_A&oe=64496739",
        linkedin: ""
    },
    {
        name: "Azim BaiG",
        role: "Blockchain Developer",
        image: "https://scontent.fixr3-3.fna.fbcdn.net/v/t39.30808-6/307279995_5367925263320551_1800977647927307679_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cqRx2WSKSiwAX_S00q8&_nc_ht=scontent.fixr3-3.fna&oh=00_AfASBzsIqDqri_T7Ugk0KrcPNZxTNjszawXysizGuFa1_A&oe=64496739",
        linkedin: ""
    },
    {
        name: "Arslan Haq",
        role: "Graphic Designer",
        image: "https://scontent.fixr3-3.fna.fbcdn.net/v/t39.30808-6/307279995_5367925263320551_1800977647927307679_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cqRx2WSKSiwAX_S00q8&_nc_ht=scontent.fixr3-3.fna&oh=00_AfASBzsIqDqri_T7Ugk0KrcPNZxTNjszawXysizGuFa1_A&oe=64496739",
        linkedin: ""
    },
    {
        name: "Ibrahim Abdullah",
        role: "Javascript Developer/ Web Developer",
        image: "https://scontent.fixr3-3.fna.fbcdn.net/v/t39.30808-6/307279995_5367925263320551_1800977647927307679_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cqRx2WSKSiwAX_S00q8&_nc_ht=scontent.fixr3-3.fna&oh=00_AfASBzsIqDqri_T7Ugk0KrcPNZxTNjszawXysizGuFa1_A&oe=64496739",
        linkedin: ""
    },
    {
        name: "Tayyaba Khalil",
        role: "Project Manager/ Backend Engineer",
        image: "https://scontent.fixr3-3.fna.fbcdn.net/v/t39.30808-6/307279995_5367925263320551_1800977647927307679_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cqRx2WSKSiwAX_S00q8&_nc_ht=scontent.fixr3-3.fna&oh=00_AfASBzsIqDqri_T7Ugk0KrcPNZxTNjszawXysizGuFa1_A&oe=64496739",
        linkedin: ""
    },
    {
        name: "Abdur Rehman",
        role: "Quality Assurance",
        image: "https://scontent.fixr3-3.fna.fbcdn.net/v/t39.30808-6/307279995_5367925263320551_1800977647927307679_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cqRx2WSKSiwAX_S00q8&_nc_ht=scontent.fixr3-3.fna&oh=00_AfASBzsIqDqri_T7Ugk0KrcPNZxTNjszawXysizGuFa1_A&oe=64496739",
        linkedin: ""
    },
    {
        name: "Sachin Salvi",
        role: "SMM Manager",
        image: "https://scontent.fixr3-3.fna.fbcdn.net/v/t39.30808-6/307279995_5367925263320551_1800977647927307679_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cqRx2WSKSiwAX_S00q8&_nc_ht=scontent.fixr3-3.fna&oh=00_AfASBzsIqDqri_T7Ugk0KrcPNZxTNjszawXysizGuFa1_A&oe=64496739",
        linkedin: ""
    },
]

let teamPhotosContainer = document.querySelector(".bottom");
team.forEach((ele) => {
    let box = document.createElement("div");

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
