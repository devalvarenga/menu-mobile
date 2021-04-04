class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.menuMobile = document.querySelector(mobileMenu);
        this.navList  = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active"; 

        this.handleClick = this.handleClick.bind(this);
    }



    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards $ {index / 7 + 0.3}s`);
        });
    }
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.menuMobile.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log("Estou aqui"));
    }

    init (){
        if(this.mobileMenu) {
        this.addClickEvent();
        }
        return this;
    }
}
const mobileNavBar = new MobileNavbar(
    ".molibe-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();
