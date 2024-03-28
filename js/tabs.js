document.addEventListener("DOMContentLoaded", function() {
                var educationTab = document.getElementById("education-tab");
                var worksTab = document.getElementById("works-tab");
                var awardsTab = document.getElementById("awards-tab");

                var educationContent = document.getElementById("education");
                var worksContent = document.getElementById("works");
                var awardsContent = document.getElementById("awards");
        
                educationTab.addEventListener("click", function() {
                    educationTab.classList.add("active");
                    awardsTab.classList.remove("active");
                    worksTab.classList.remove("active");
        
                    educationContent.classList.add("show");
                    educationContent.classList.add("active");
                    awardsContent.classList.remove("show");
                    awardsContent.classList.remove("active");
                    worksContent.classList.remove("show");
                    worksContent.classList.remove("active");
                });
        
                awardsTab.addEventListener("click", function() {
                    awardsTab.classList.add("active");
                    educationTab.classList.remove("active");
                    worksTab.classList.remove("active");
        
                    awardsContent.classList.add("show");
                    awardsContent.classList.add("active");
                    educationContent.classList.remove("show");
                    educationContent.classList.remove("active");
                    worksContent.classList.remove("show");
                    worksContent.classList.remove("active");
                });

                worksTab.addEventListener("click", function() {
                    worksTab.classList.add("active");
                    educationTab.classList.remove("active");
                    awardsTab.classList.remove("active");
        
                    worksContent.classList.add("show");
                    worksContent.classList.add("active");
                    educationContent.classList.remove("show");
                    educationContent.classList.remove("active");
                    awardsContent.classList.remove("show");
                    awardsContent.classList.remove("active");
                });
                
            });