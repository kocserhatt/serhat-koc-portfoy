
    // Projeler bölümüne kaydırmak için bir işlev tanımlayın
    function scrollToProjects() {
        var projectsSection = document.getElementById("projeler");
        projectsSection.scrollIntoView({ behavior: "smooth" });
    }
    
    document.addEventListener("DOMContentLoaded", function() {
        // Tüm bağlantıları seç
        var links = document.querySelectorAll(".items a");

        // Her bağlantıya tıklama olayı ekle
        links.forEach(function(link) {
            link.addEventListener("click", function(event) {
                // Varsayılan davranışı engelle
                event.preventDefault();

                // Hedef bölümün id'sini al
                var targetId = this.getAttribute("href").substring(1); // # işaretini kaldır

                // Hedef bölümü bul
                var targetElement = document.getElementById(targetId);

                // Hedef bölümün yukarısından biraz aşağı kaydır
                var offsetTop = targetElement.offsetTop;
                var offsetHeight = targetElement.offsetHeight;
                var windowHeight = window.innerHeight;
                var scrollPosition = offsetTop - (windowHeight - offsetHeight) / 2;

                // Yavaşça kaydır
                window.scrollTo({
                    top: scrollPosition,
                    behavior: "smooth"
                });
            });
        });
    });
