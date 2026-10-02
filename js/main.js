/* Keep the layout aligned with the visible phone viewport, even when the
   browser's layout viewport is narrower because of zoom or embedded preview. */
const visualViewportRoot = document.documentElement;

function syncVisualViewport() {
  const viewport = window.visualViewport;
  visualViewportRoot.style.setProperty(
    "--visual-viewport-width",
    `${viewport?.width || visualViewportRoot.clientWidth}px`
  );
  visualViewportRoot.style.setProperty(
    "--visual-viewport-height",
    `${viewport?.height || window.innerHeight}px`
  );
}

syncVisualViewport();
window.addEventListener("resize", syncVisualViewport, { passive: true });
window.visualViewport?.addEventListener("resize", syncVisualViewport, { passive: true });

const photos = [
              
          {
            id: 25,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/06b38c1d-8789-4262-b458-6d2717cc6d9b.jpg",
            title: "Electric Canopy",
            category: "Night",
            date: "2026",
            location: "Dhubri",
            description: "A striking array of overhead power lines cuts across the deep night sky, contrasting with the vibrant, warm glow of a multi-story storefront along the street."
        },
      {
            id: 1,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/84e70a08-271e-4067-a9da-6102b54ec5a6.png",
            title: "Amber Horizon",
            category: "Nature",
            date: "2026",
            location: "Bilasipara",
            description: "A brilliant orange sky sets the clouds ablaze, casting dark silhouettes of the treeline over a quiet green field."
        },
        {
            id: 21,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/cf2010f0-0087-4f20-b4fb-14d52eb82c85.jpg",
            title: "Sunlit Meadow",
            category: "Nature",
            date: "2026",
            location: "Bilasipara",
            description: "Warm golden sunlight spills across a vibrant green field, casting long shadows from the towering trees as a solitary figure walks through the landscape."
        },

              {
            id: 2,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/9caa8cc4-ef8c-4124-8a45-4e86d7ad4f5d.png",
            title: "Veiled Moon",
            category: "Night",
            date: "2026",
            location: "Bilasipara",
            description: "A bright moon pierces through a thick veil of textured midnight clouds, casting a soft glow in the dark sky."
        },
        {
            id: 22,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/253d9a63-1ace-4393-827b-afc40f55be9a.jpg",
            title: "Roadside Sunset",
            category: "Landscape",
            date: "2026",
            location: "Bilasipara",
            description: "A serene sunset paints the cloudy sky in pastel hues, reflecting beautifully in a roadside waterway beside a quiet stretch of green fields."
        },

              {
            id: 3,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/271b2bc1-8642-43eb-a167-2669f7ea2c05.png",
            title: "River Silhouette",
            category: "Landscape",
            date: "2026",
            location: "Random",
            description: "A vibrant orange sunset reflects across the calm river, contrasting with the dark silhouette of a docked boat, a distant treeline, and a faint crescent moon."
        },
        {
            id: 26,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/b4fc53b1-1675-4bd8-9010-d30e44baf745.jpg",
            title: "Geometric Paws",
            category: "Monochrome",
            date: "2026",
            location: "Bilasipara",
            description: "A fluffy cat looks upward curiously, its soft fur contrasting with the bold, repeating geometric patterns of a tiled floor."
        },

        {
            id: 17,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/36384100-950a-490b-8ce7-dc9749f8be2e.jpg",
            title: "On Display",
            category: "Interior",
            date: "2026",
            location: "Bilasipara",
            description: "A warmly lit retail display featuring rows of eyeglasses and frames neatly arranged in wooden trays on modern shelving."
        },
        {
            id: 19,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/d736cb21-b1b0-4e04-af0b-2ef28df22cf7.jpg",
            title: "Festive Ride",
            category: "Street",
            date: "2026",
            location: "Bilasipara",
            description: "A vehicle heavily adorned with bright lights and floral garlands illuminates a paved street during a vibrant nighttime celebration."
        },

         {
            id: 4,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/61c9fbee-786a-4a2a-b5f1-78ffd3ecf1db.png",
            title: "Harvest Moon",
            category: "Night",
            date: "2026",
            location: "Bilasipara",
            description: "A bright, solitary full moon hangs isolated in a pitch-black sky, its surface details visible in a warm, subtle glow."
        },
        {
            id: 23,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/57de0845-4209-4aa3-81c4-da613e07b889.jpg",
            title: "Evening Rush",
            category: "Street",
            date: "2026",
            location: "Bilasipara",
            description: "E-rickshaws and scooters navigate a bustling, illuminated street under a deep night sky, capturing the energetic blur of the local evening commute."
        },
        {
            id: 28,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/0db83ed4-6667-4c74-b87e-6dff36af8c00.jpg",
            title: "Evening at Gaurang Park",
            category: "Night",
            date: "2026",
            location: "Kokrajhar",
            description: "The entrance to Gaurang Park stands warmly illuminated against a rich, deep blue twilight sky, approached by a wide, checkered tile pathway."
        },

              {
            id: 20,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/82d850d0-477c-4985-b267-972deb1b4785.jpg",
            title: "Canopy Glow",
            category: "Night",
            date: "2026",
            location: "Bilasipara",
            description: "Warm string lights and colorful prayer flags line the edge of a metal roof, sheltering a casual roadside seating area in the evening."
        },

        {
            id: 31,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/169f668d-a7ea-475b-921e-0b487583a211.jpg",
            title: "Azaadi Ka Jashn",
            category: "Monochrome",
            date: "2026",
            location: "Bilasipara",
            description: "Bilasipara ke ek khule maidan mein 15 August ka jashn, jahan dur ek jhanda lehra raha hai aur railing ke piche se logo ki bheed dikh rahi hai."
        },

              {
            id: 15,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/823e5aab-c516-40f3-8ff5-d1ab400a0ec5.jpg",
            title: "Rustic Wheels",
            category: "Interior",
            date: "2026",
            location: "Bilasipara",
            description: "A cozy cafe setting featuring a unique backlit wall installation of overlapping bicycle wheels, accented by hanging rope lights and artificial vines overhead."
        },
              {
            id: 8,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/c788296e-5c04-4767-a25e-bd61d5d96bdf.jpg",
            title: "Framed Stillness",
            category: "Monochrome",
            date: "2026",
            location: "Bilasipara",
            description: "A quiet glimpse of the world outside, captured through the strict geometry of a window frame."
      },
              {
            id: 9,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/927f4a5a-3aa3-4023-8521-954dcb98f380.jpg",
            title: "Neon Watch",
            category: "Night",
            date: "2026",
            location: "Bilasipara",
            description: "The bright glow of the market sign anchors the street as e-rickshaws rest below in the night air."
        },
        
        {
            id: 10,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/dc142bbc-0565-4f77-b455-1eb9b1e19127.jpg",
            title: "Serene Corner",
            category: "Interior",
            date: "2026",
            location: "Bilasipara",
            description: "A detailed wall painting of Buddha brings a calm artistic touch to a casual setting, juxtaposed against everyday service and no-smoking signs."
        },
       
        
        {
            id: 18,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/859811f0-a92e-41f0-9f19-5c189346f0f9.jpg",
            title: "Illuminated Canopy",
            category: "Night",
            date: "2026",
            location: "Bilasipara",
            description: "Bright green leaves are illuminated against a deep blue evening sky, framed by soft, dynamic light streaks sweeping across the lower edge."
        },
                {
            id: 27,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/867816d1-8a51-4ff6-b693-a271a16211a2.jpg",
            title: "Voices for Education",
            category: "Monochrome",
            date: "2026",
            location: "Bilasipara",
            description: "A stark black-and-white capture of a youth protest, showing a crowd holding handmade signs advocating for education under a dramatic, cloudy sky."
        },


                {
            id: 24,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/d4a69bc4-7d4d-4672-935f-69b2b40c0f6a.jpg",
            title: "Azure Horizon",
            category: "Landscape",
            date: "2026",
            location: "Bilasipara",
            description: "A vast blue sky dotted with white clouds stretches over a calm body of water, reflecting the distant trees and hills along a quiet, grassy shoreline."
        },
        {
            id: 29,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/bb863b9a-c4ae-4a67-ba07-267405c59f0a.jpg",
            title: "Rangit Soft Toys",
            category: "Interior",
            date: "2026",
            location: "Bilasipara",
            description: "Dukanatil kachachya shelves var vividh rangit ani aakarachi soft toys aakarshakpane thevleli aahet."
        },

        {
            id: 30,
            src: "https://i.supaimg.com/8e0923ed-9bb9-4654-8b98-67c158f6c70c/58e85086-957a-4ff9-95d1-f01cf39ee34f.jpg",
            title: "Lakeside Pavilion",
            category: "Landscape",
            date: "2026",
            location: "Kokrajhar",
            description: "A wooden boardwalk lined with colorful flags stretches across a calm body of water, leading to a small, red-roofed pavilion under a bright blue sky."
        }


    ];

    /* Keep the first two public statistics tied to the real photo archive. */
    const galleryStats = {
      photos: photos.length,
      locations: new Set(photos.map(photo => photo.location)).size
    };

    document.getElementById("statPhotoCount").textContent = galleryStats.photos;
    document.getElementById("statLocationCount").textContent = galleryStats.locations;

    const heroVideoUrl =
      "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const mobilePerformanceMode = window.matchMedia(
      "(max-width: 760px)"
    ).matches;

    const loadingScreen =
      document.getElementById("loadingScreen");

    const loadingNumber =
      document.getElementById("loadingNumber");

    const loadingProgress =
      document.getElementById("loadingProgress");

    const loadingWord =
      document.getElementById("loadingWord");

    const words = [
      "Observe",
      "Capture",
      "Remember"
    ];

    let wordIndex = 0;
    let loadingStart = performance.now();

    const wordTimer = reduceMotion
      ? null
      : setInterval(() => {
          wordIndex =
            (wordIndex + 1) % words.length;

          loadingWord.textContent =
            words[wordIndex];
        }, 900);

    function loadingFrame(now) {
      const duration =
        reduceMotion ? 350 : 1700;

      const progress = Math.min(
        (now - loadingStart) / duration,
        1
      );

      loadingNumber.textContent =
        String(Math.round(progress * 100))
          .padStart(3, "0");

      loadingProgress.style.transform =
        `scaleX(${progress})`;

      if (progress < 1) {
        requestAnimationFrame(loadingFrame);
      } else {
        if (wordTimer) {
          clearInterval(wordTimer);
        }

        setTimeout(() => {
          loadingScreen.classList.add("is-hidden");
          initAnimations();
        }, reduceMotion ? 0 : 300);
      }
    }

    requestAnimationFrame(loadingFrame);

    /* Hero video */

    const heroVideo =
      document.getElementById("heroVideo");

    if (!reduceMotion) {
      if (window.Hls && Hls.isSupported()) {
        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: true
        });

        hls.loadSource(heroVideoUrl);
        hls.attachMedia(heroVideo);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          heroVideo.play().catch(() => {});
        });

        hls.on(Hls.Events.ERROR, (_, data) => {
          if (data.fatal) {
            hls.destroy();
            heroVideo.load();
            heroVideo.play().catch(() => {});
          }
        });

        window.addEventListener("beforeunload", () => {
          hls.destroy();
        });
      } else if (
        heroVideo.canPlayType(
          "application/vnd.apple.mpegurl"
        )
      ) {
        heroVideo.src = heroVideoUrl;
      }
    }

    /* Gallery rendering */

    const galleryGrid =
      document.getElementById("galleryGrid");

    const filters =
      document.getElementById("filters");

    const categories = [
      "All",
      ...new Set(
        photos.map(photo => photo.category)
      )
    ];

    let activeCategory = "All";

    categories.forEach(category => {
      const button =
        document.createElement("button");

      button.className =
        `filter ${category === "All" ? "active" : ""}`;

      button.type = "button";
      button.textContent = category;

      button.addEventListener("click", () => {
        activeCategory = category;

        document
          .querySelectorAll(".filter")
          .forEach(item => {
            item.classList.toggle(
              "active",
              item === button
            );
          });

        renderGallery();
      });

      filters.appendChild(button);
    });

    function renderGallery() {
      galleryGrid.innerHTML = "";

      const visiblePhotos =
        activeCategory === "All"
          ? photos
          : photos.filter(
              photo =>
                photo.category === activeCategory
            );

      visiblePhotos.forEach(photo => {
        const article =
          document.createElement("article");

        article.className = "photo-card";
        article.tabIndex = 0;
        article.setAttribute(
          "aria-label",
          `Open photograph: ${photo.title}`
        );

        const image =
          document.createElement("img");

        image.src = photo.src;
        image.alt =
          `${photo.title}, ${photo.category}, ${photo.location}`;
        image.loading = "lazy";
        image.decoding = "async";

        const info =
          document.createElement("div");

        info.className = "photo-info";

        const title =
          document.createElement("h3");

        title.className = "photo-title";
        title.textContent = photo.title;

        const meta =
          document.createElement("div");

        meta.className = "photo-meta";
        meta.textContent =
          `${photo.category} / ${photo.date} / ${photo.location}`;

        info.append(title, meta);
        article.append(image, info);

        article.addEventListener("click", () => {
          openLightbox(photo.id);
        });

        article.addEventListener("keydown", event => {
          if (
            event.key === "Enter" ||
            event.key === " "
          ) {
            event.preventDefault();
            openLightbox(photo.id);
          }
        });

        galleryGrid.appendChild(article);
      });

      if (!reduceMotion && window.gsap) {
        gsap.fromTo(
          ".photo-card",
          {
            opacity: 0,
            y: 35,
            scale: .94
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: .65,
            stagger: .07,
            ease: "power3.out"
          }
        );
      }

      attachCardTilt();
    }

    renderGallery();

    /* Journal rendering */

    const journalList =
      document.getElementById("journalList");

    photos.slice(0, 6).forEach(photo => {
      const article =
        document.createElement("article");

      article.className = "journal-card";
      article.tabIndex = 0;
      article.setAttribute("role", "button");
      article.setAttribute(
        "aria-label",
        `Open journal entry: ${photo.title}`
      );

      const image =
        document.createElement("img");

      image.src = photo.src;
      image.alt = photo.title;
      image.loading = "lazy";
      image.decoding = "async";

      const content =
        document.createElement("div");

      const title =
        document.createElement("h3");

      title.className = "journal-title";
      title.textContent = photo.title;

      const details =
        document.createElement("div");

      details.className = "journal-details";
      details.textContent =
        `${photo.date} · ${photo.location} · ${photo.category}`;

      const story =
        document.createElement("p");

      story.className = "journal-story";
      story.textContent =
        `${photo.description} A small story held inside a larger landscape.`;

      content.append(title, details, story);

      const arrow =
        document.createElement("span");

      arrow.className = "arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "↗";

      article.append(image, content, arrow);

      article.addEventListener("click", () => {
        openLightbox(photo.id);
      });

      article.addEventListener("keydown", event => {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();
          openLightbox(photo.id);
        }
      });

      journalList.appendChild(article);
    });

    /* Exploration rendering */

    const explorationGrid =
      document.getElementById("explorationGrid");

    const explorationColumns = [
      photos.slice(0, 3),
      photos.slice(3, 6),
      photos.slice(6, 9)
    ];

    explorationColumns.forEach(columnPhotos => {
      const column =
        document.createElement("div");

      column.className = "exploration-column";

      columnPhotos.forEach(photo => {
        const image =
          document.createElement("img");

        image.className =
          "exploration-image";

        image.src = photo.src;
        image.alt = photo.title;
        image.loading = "lazy";
        image.decoding = "async";
        image.tabIndex = 0;

        image.addEventListener("click", () => {
          openLightbox(photo.id);
        });

        image.addEventListener("keydown", event => {
          if (
            event.key === "Enter" ||
            event.key === " "
          ) {
            event.preventDefault();
            openLightbox(photo.id);
          }
        });

        column.appendChild(image);
      });

      explorationGrid.appendChild(column);
    });


    /* Lightbox */

    const lightbox =
      document.getElementById("lightbox");

    const lightboxImage =
      document.getElementById("lightboxImage");

    const lightboxCaption =
      document.getElementById("lightboxCaption");

    const lightboxClose =
      document.getElementById("lightboxClose");

    const lightboxPrev =
      document.getElementById("lightboxPrev");

    const lightboxNext =
      document.getElementById("lightboxNext");

    let currentPhotoIndex = 0;
    let previouslyFocusedElement = null;

    function openLightbox(id) {
      previouslyFocusedElement =
        document.activeElement;

      currentPhotoIndex =
        photos.findIndex(photo => photo.id === id);

      updateLightbox();

      lightbox.classList.add("open");
      document.body.classList.add("modal-open");
      lightboxClose.focus();
    }

    function setLightboxContent(photo) {
      lightboxImage.src = photo.src;

      lightboxImage.alt =
        `${photo.title}, ${photo.category}, ${photo.location}`;

      lightboxCaption.textContent =
        `${String(currentPhotoIndex + 1).padStart(2, "0")} / ` +
        `${String(photos.length).padStart(2, "0")} · ` +
        `${photo.title} · ${photo.category} · ${photo.location}`;

      if (!reduceMotion && window.gsap) {
        gsap.to(lightboxImage, {
          opacity: 1,
          scale: 1,
          duration: .45,
          ease: "power3.out"
        });
      }
    }

    function updateLightbox() {
      const photo =
        photos[currentPhotoIndex];

      if (!reduceMotion && window.gsap) {
        gsap.to(lightboxImage, {
          opacity: 0,
          scale: .96,
          duration: .16,
          onComplete: () => {
            setLightboxContent(photo);
          }
        });
      } else {
        setLightboxContent(photo);
      }
    }

    function closeLightbox() {
      lightbox.classList.remove("open");
      document.body.classList.remove("modal-open");

      if (
        previouslyFocusedElement &&
        typeof previouslyFocusedElement.focus === "function"
      ) {
        previouslyFocusedElement.focus();
      }
    }

    function showPrevious() {
      currentPhotoIndex =
        (currentPhotoIndex - 1 + photos.length) %
        photos.length;

      updateLightbox();
    }

    function showNext() {
      currentPhotoIndex =
        (currentPhotoIndex + 1) % photos.length;

      updateLightbox();
    }

    lightboxClose.addEventListener(
      "click",
      closeLightbox
    );

    lightboxPrev.addEventListener(
      "click",
      showPrevious
    );

    lightboxNext.addEventListener(
      "click",
      showNext
    );

    lightbox.addEventListener("click", event => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", event => {
      if (!lightbox.classList.contains("open")) {
        return;
      }

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }

      if (event.key === "Tab") {
        const focusable = [
          lightboxClose,
          lightboxPrev,
          lightboxNext
        ];

        const first = focusable[0];
        const last =
          focusable[focusable.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    /* Mobile navigation */

    const menuButton =
      document.getElementById("menuButton");

    const nav =
      document.getElementById("nav");

    menuButton.addEventListener("click", () => {
      const isOpen =
        nav.classList.toggle("mobile-open");

      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    });

    document.querySelectorAll(".nav-link")
      .forEach(link => {
        link.addEventListener("click", () => {
          nav.classList.remove("mobile-open");
          menuButton.setAttribute(
            "aria-expanded",
            "false"
          );
        });
      });

    document.addEventListener("click", event => {
      if (
        nav.classList.contains("mobile-open") &&
        !nav.contains(event.target)
      ) {
        nav.classList.remove("mobile-open");
        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );
      }
    });

    /* Cursor glow */

    const cursorGlow =
      document.getElementById("cursorGlow");

    const hero =
      document.querySelector(".hero");

    if (!reduceMotion) {
      let cursorX = window.innerWidth / 2;
      let cursorY = window.innerHeight / 2;
      let glowX = cursorX;
      let glowY = cursorY;

      window.addEventListener("pointermove", event => {
        cursorX = event.clientX;
        cursorY = event.clientY;

        if (!hero) return;

        const rect =
          hero.getBoundingClientRect();

        hero.style.setProperty(
          "--mouse-x",
          `${((cursorX - rect.left) / rect.width) * 100}%`
        );

        hero.style.setProperty(
          "--mouse-y",
          `${((cursorY - rect.top) / rect.height) * 100}%`
        );
      });

      function animateCursor() {
        glowX += (cursorX - glowX) * .12;
        glowY += (cursorY - glowY) * .12;

        cursorGlow.style.left = `${glowX}px`;
        cursorGlow.style.top = `${glowY}px`;

        requestAnimationFrame(animateCursor);
      }

      animateCursor();
    }

    /* Magnetic controls */

    if (!reduceMotion && window.gsap) {
      document
        .querySelectorAll(
          ".button, .logo, .nav-instagram"
        )
        .forEach(element => {
          element.addEventListener(
            "pointermove",
            event => {
              const rect =
                element.getBoundingClientRect();

              const x =
                event.clientX -
                rect.left -
                rect.width / 2;

              const y =
                event.clientY -
                rect.top -
                rect.height / 2;

              gsap.to(element, {
                x: x * .16,
                y: y * .16,
                duration: .35,
                ease: "power3.out"
              });
            }
          );

          element.addEventListener(
            "pointerleave",
            () => {
              gsap.to(element, {
                x: 0,
                y: 0,
                duration: .6,
                ease: "elastic.out(1, .4)"
              });
            }
          );
        });
    }

    /* Gallery card tilt */

    function attachCardTilt() {
      if (
        reduceMotion ||
        !window.gsap
      ) {
        return;
      }

      document
        .querySelectorAll(".photo-card")
        .forEach(card => {
          card.addEventListener(
            "pointermove",
            event => {
              const rect =
                card.getBoundingClientRect();

              const x =
                event.clientX - rect.left;

              const y =
                event.clientY - rect.top;

              const rotateY =
                ((x / rect.width) - .5) * 8;

              const rotateX =
                ((y / rect.height) - .5) * -8;

              gsap.to(card, {
                rotateX,
                rotateY,
                transformPerspective: 900,
                duration: .35,
                ease: "power2.out"
              });
            }
          );

          card.addEventListener(
            "pointerleave",
            () => {
              gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: .7,
                ease: "elastic.out(1, .4)"
              });
            }
          );
        });
    }

    /* GSAP scroll animations */

    let animationsInitialized = false;

    function initAnimations() {
      document.body.classList.add("page-ready");

      if (
        animationsInitialized ||
        reduceMotion ||
        !window.gsap ||
        !window.ScrollTrigger
      ) {
        return;
      }

      animationsInitialized = true;

      gsap.registerPlugin(ScrollTrigger);

      const intro =
        gsap.timeline({
          defaults: {
            ease: "power3.out"
          }
        });

      intro
        .from(".hero-animate", {
          opacity: 0,
          y: 45,
          filter: "blur(14px)",
          duration: 1.2,
          stagger: .12
        })
        .from(
          ".scroll-indicator",
          {
            opacity: 0,
            y: 20,
            duration: .7
          },
          "-=.45"
        );

      gsap.utils
        .toArray(
          ".section-title, .about-title, .featured-title, .cta h2"
        )
        .forEach(element => {
          gsap.from(element, {
            opacity: 0,
            y: 70,
            filter: "blur(12px)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              toggleActions: "play none none reverse"
            }
          });
        });

      gsap.utils
        .toArray(
          ".section-copy, .about-copy, .eyebrow"
        )
        .forEach(element => {
          gsap.from(element, {
            opacity: 0,
            y: 25,
            duration: .8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              toggleActions: "play none none reverse"
            }
          });
        });

      gsap.utils
        .toArray(".photo-card")
        .forEach((card, index) => {
          gsap.from(card, {
            opacity: 0,
            y: 55,
            scale: .96,
            duration: .8,
            delay: (index % 3) * .08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          });
        });

      gsap.utils
        .toArray(".journal-card")
        .forEach((card, index) => {
          gsap.from(card, {
            opacity: 0,
            x: index % 2 === 0 ? -55 : 55,
            duration: .9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse"
            }
          });
        });

      if (!mobilePerformanceMode) {
        gsap.utils
          .toArray(".exploration-image")
          .forEach((image, index) => {
            gsap.from(image, {
              opacity: 0,
              scale: .8,
              rotate: index % 2 === 0 ? -3 : 3,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: image,
                start: "top 90%",
                toggleActions: "play none none reverse"
              }
            });
          });
      }

      gsap.utils
        .toArray(".stat-number")
        .forEach(number => {
          gsap.from(number, {
            opacity: 0,
            scale: .5,
            y: 30,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: number,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          });
        });

      gsap.to(".hero-video", {
        yPercent: 8,
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to("#featuredImage", {
        yPercent: -12,
        scale: 1.14,
        ease: "none",
        scrollTrigger: {
          trigger: ".featured",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      if (!mobilePerformanceMode) {
        gsap.utils
          .toArray(".exploration-column")
          .forEach((column, index) => {
            gsap.to(column, {
              y:
                index === 1
                  ? -180
                  : index === 2
                    ? 130
                    : -80,
              rotation: index === 1 ? 1 : -1,
              ease: "none",
              scrollTrigger: {
                trigger: ".explorations",
                start: "top bottom",
                end: "bottom top",
                scrub: true
              }
            });
          });
      }

      const sections =
        document.querySelectorAll("main section[id]");

      const navLinks =
        document.querySelectorAll(".nav-link");

      sections.forEach(section => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onToggle: self => {
            if (!self.isActive) return;

            navLinks.forEach(link => {
              link.classList.toggle(
                "active",
                link.getAttribute("href") ===
                  `#${section.id}`
              );
            });
          }
        });
      });

      ScrollTrigger.refresh();
    }

    window.addEventListener("scroll", () => {
      document
        .getElementById("nav")
        .classList.toggle(
          "scrolled",
          window.scrollY > 30
        );
    });

    document.getElementById("copyright").textContent =
      `© ${new Date().getFullYear()} MD Abdulla`;

    window.addEventListener("load", () => {
      if (window.ScrollTrigger) {
        ScrollTrigger.refresh();
      }
    });
