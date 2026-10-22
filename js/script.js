document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // TRANSLATION DATA
    // =========================

    const translations = {
        id: {
            page_title: "Portofolio | Muhammad Fathan Edlin",

            nav_home: "Beranda",
            nav_about: "Tentang",
            nav_skills: "Keahlian",
            nav_projects: "Proyek",
            nav_contact: "Kontak",
            nav_cta: "Ayo Terhubung ↗",

            hero_label: "MAHASISWA INFORMATIKA",
            hero_title: "Membangun pengalaman digital yang berbeda.",
            hero_description:
                "Halo, saya Muhammad Fathan Edlin. Saya tertarik pada pengembangan web dan teknologi, serta senang membangun pengalaman digital yang sederhana, fungsional, dan menarik.",

            hero_projects: "Lihat Proyek",
            hero_contact: "Hubungi Saya",
            hero_cv: "Unduh CV",

            profile_role: "Mahasiswa Informatika · Web Developer",
            profile_tag: "PENGEMBANG WEB",
            badge_creative: "Kreatif & Inovatif",

            about_label: "TENTANG SAYA",
            about_title:
                "Belajar, berkembang, dan menciptakan sesuatu yang berarti.",
            about_paragraph:
                "Saya adalah mahasiswa Informatika yang memiliki ketertarikan pada pemrograman dan pengembangan web. Saya terus belajar membangun website yang responsif, mudah digunakan, dan memiliki tampilan menarik. Bagi saya, setiap proyek merupakan kesempatan untuk meningkatkan kemampuan dan mencoba hal baru.",

            stat_one: "Terus Belajar",
            stat_two: "Berpikir Kreatif",
            stat_three: "Berkembang Bersama Teknologi",

            skills_label: "KEAHLIAN",
            skills_title: "Teknologi yang sedang saya pelajari.",
            skills_description:
                "Fondasi yang saya gunakan untuk membangun proyek web.",

            skill_html:
                "Membangun struktur halaman web yang terorganisasi.",
            skill_css:
                "Membuat tampilan web yang menarik dan responsif.",
            skill_js:
                "Menambahkan interaksi dan perilaku dinamis.",
            skill_php:
                "Mempelajari logika backend dan pengelolaan basis data.",

            projects_label: "PROYEK PILIHAN",
            projects_title: "Beberapa hal yang saya bangun.",
            projects_count: "02 PROYEK",

            project_type_webapp: "APLIKASI WEB",
            project_type_website: "WEBSITE",

            project_pos_description:
                "Aplikasi kasir sederhana untuk mengelola produk, transaksi penjualan, dan struk pembayaran.",

            project_web_description:
                "Website pribadi sebagai ruang untuk menampilkan profil, kemampuan, dan perjalanan belajar saya.",

            contact_label: "HUBUNGI SAYA",
            contact_title:
                "Punya ide menarik? Mari kita bicarakan.",
            contact_description:
                "Saya terbuka untuk berdiskusi, berbagi ide, dan belajar bersama mengenai pengembangan web dan teknologi.",
            contact_button: "Kirim Email",

            footer_text: "Dibuat dengan sepenuh hati.",
            back_to_top: "Kembali ke atas"
        },

        en: {
            page_title: "Portfolio | Muhammad Fathan Edlin",

            nav_home: "Home",
            nav_about: "About",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_contact: "Contact",
            nav_cta: "Let's Talk ↗",

            hero_label: "INFORMATICS STUDENT",
            hero_title: "Building digital experiences that stand out.",
            hero_description:
                "Hi, I'm Muhammad Fathan Edlin. I'm interested in web development and technology, and I enjoy building digital experiences that are simple, functional, and engaging.",

            hero_projects: "Explore Projects",
            hero_contact: "Contact Me",
            hero_cv: "Download CV",

            profile_role: "Informatics Student · Web Developer",
            profile_tag: "WEB DEVELOPER",
            badge_creative: "Creative & Innovative",

            about_label: "ABOUT ME",
            about_title:
                "Learning, growing, and creating something meaningful.",
            about_paragraph:
                "I'm an Informatics student interested in programming and web development. I'm continuously learning to build responsive, user-friendly, and visually appealing websites. To me, every project is an opportunity to improve my skills and explore something new.",

            stat_one: "Always Learning",
            stat_two: "Creative Thinking",
            stat_three: "Growing with Technology",

            skills_label: "MY SKILLS",
            skills_title: "Technologies I'm currently learning.",
            skills_description:
                "The foundations I use to build web projects.",

            skill_html:
                "Building well-organized web page structures.",
            skill_css:
                "Creating attractive and responsive web interfaces.",
            skill_js:
                "Adding interactions and dynamic behavior.",
            skill_php:
                "Learning backend logic and database management.",

            projects_label: "SELECTED PROJECTS",
            projects_title: "Some things I've built.",
            projects_count: "02 PROJECTS",

            project_type_webapp: "WEB APPLICATION",
            project_type_website: "WEBSITE",

            project_pos_description:
                "A simple point-of-sale application for managing products, sales transactions, and payment receipts.",

            project_web_description:
                "A personal website to showcase my profile, skills, and learning journey.",

            contact_label: "GET IN TOUCH",
            contact_title:
                "Have an interesting idea? Let's talk.",
            contact_description:
                "I'm open to discussing ideas, sharing knowledge, and learning together about web development and technology.",
            contact_button: "Send an Email",

            footer_text: "Built with passion.",
            back_to_top: "Back to top"
        }
    };


    // =========================
    // LANGUAGE SWITCHER
    // =========================

    const languageButtons = document.querySelectorAll(".language-btn");

    function setLanguage(language) {
        // Gunakan bahasa Indonesia jika kode bahasa tidak tersedia.
        const selectedLanguage = translations[language] ? language : "id";

        // Ubah atribut bahasa pada HTML.
        document.documentElement.lang = selectedLanguage;

        // Ubah judul halaman.
        document.title = translations[selectedLanguage].page_title;

        // Ganti teks seluruh elemen yang memiliki data-i18n.
        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            const translationKey = element.dataset.i18n;
            const translatedText =
                translations[selectedLanguage][translationKey];

            if (translatedText !== undefined) {
                element.textContent = translatedText;
            }
        });

        // Perbarui tampilan tombol bahasa aktif.
        languageButtons.forEach(function (button) {
            const isActive = button.dataset.lang === selectedLanguage;

            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        // Simpan pilihan bahasa agar tetap digunakan saat halaman dibuka lagi.
        try {
            localStorage.setItem("portfolio-language", selectedLanguage);
        } catch (error) {
            console.warn("Pilihan bahasa tidak dapat disimpan.", error);
        }
    }

    // Klik tombol ID atau EN.
    languageButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            setLanguage(button.dataset.lang);
        });
    });

    // Ambil pilihan bahasa yang tersimpan.
    let savedLanguage = "id";

    try {
        savedLanguage = localStorage.getItem("portfolio-language") || "id";
    } catch (error) {
        console.warn("Penyimpanan lokal tidak tersedia.", error);
    }

    // Terapkan bahasa saat halaman pertama kali dibuka.
    setLanguage(savedLanguage);


    // =========================
    // CURRENT YEAR
    // =========================

    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // =========================
    // SCROLL PROGRESS
    // =========================

    const scrollProgress = document.getElementById("scroll-progress");

    function updateScrollProgress() {
        if (!scrollProgress) {
            return;
        }

        const scrollableHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        if (scrollableHeight <= 0) {
            scrollProgress.style.width = "0%";
            return;
        }

        const progress =
            (window.scrollY / scrollableHeight) * 100;

        scrollProgress.style.width = `${Math.min(progress, 100)}%`;
    }

    window.addEventListener("scroll", updateScrollProgress, {
        passive: true
    });

    window.addEventListener("resize", updateScrollProgress);

    updateScrollProgress();


    // =========================
    // MOBILE NAVIGATION
    // =========================

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    function closeMobileMenu() {
        if (!menuToggle || !navMenu) {
            return;
        }

        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Buka menu navigasi");
    }

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            const isOpen =
                menuToggle.getAttribute("aria-expanded") === "true";

            navMenu.classList.toggle("open", !isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Buka menu navigasi" : "Tutup menu navigasi"
            );
        });

        // Tutup menu setelah tautan diklik.
        navLinks.forEach(function (link) {
            link.addEventListener("click", closeMobileMenu);
        });

        // Tutup menu jika pengguna menekan Escape.
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeMobileMenu();
            }
        });

        // Tutup menu jika ukuran layar kembali ke desktop.
        window.addEventListener("resize", function () {
            if (window.innerWidth > 760) {
                closeMobileMenu();
            }
        });
    }


    // =========================
    // ACTIVE NAVIGATION LINK
    // =========================

    const sections = document.querySelectorAll("main section[id]");

    if ("IntersectionObserver" in window) {
        const sectionObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        const currentId = entry.target.id;

                        navLinks.forEach(function (link) {
                            const isCurrent =
                                link.getAttribute("href") === `#${currentId}`;

                            link.classList.toggle("active", isCurrent);
                        });
                    }
                });
            },
            {
                rootMargin: "-30% 0px -60% 0px",
                threshold: 0
            }
        );

        sections.forEach(function (section) {
            sectionObserver.observe(section);
        });
    }


    // =========================
    // REVEAL ANIMATIONS
    // =========================

    const revealElements = document.querySelectorAll(
        ".hero-content, " +
        ".hero-visual, " +
        ".about .section-heading, " +
        ".about-content, " +
        ".skills .section-heading, " +
        ".skill-card, " +
        ".projects .section-heading, " +
        ".project-card, " +
        ".contact-container"
    );

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!reduceMotion && "IntersectionObserver" in window) {
        document.body.classList.add("js-enabled");

        revealElements.forEach(function (element) {
            element.classList.add("reveal");
        });

        const revealObserver = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -25px 0px"
            }
        );

        revealElements.forEach(function (element) {
            revealObserver.observe(element);
        });
    }


    // =========================
    // BACK TO TOP
    // =========================

    const backToTopButton = document.getElementById("back-to-top");

    function updateBackToTop() {
        if (!backToTopButton) {
            return;
        }

        backToTopButton.classList.toggle(
            "visible",
            window.scrollY > 400
        );
    }

    window.addEventListener("scroll", updateBackToTop, {
        passive: true
    });

    updateBackToTop();

    if (backToTopButton) {
        backToTopButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: reduceMotion ? "auto" : "smooth"
            });
        });
    }


    // =========================
    // INITIALIZATION
    // =========================

    console.log("Portofolio berhasil dimuat.");
});