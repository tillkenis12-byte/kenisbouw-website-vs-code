const loadMoreButton = document.getElementById("loadMoreProjects");

if (loadMoreButton) {
    loadMoreButton.addEventListener("click", function () {

        const hiddenProjects = document.querySelectorAll(
            ".projects-gallery .project-photo:nth-child(n+10)"
        );

        hiddenProjects.forEach(function (project) {
            project.style.display = "block";
        });

        loadMoreButton.style.display = "none";
    });
}