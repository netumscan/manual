selector_to_html = {"a[href=\"#quick-configuration\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Configuration rapide<a class=\"headerlink\" href=\"#quick-configuration\" title=\"Lien vers cette rubrique\">#</a></h2>", "a[href=\"#make-a-connection\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Faire une connexion<a class=\"headerlink\" href=\"#make-a-connection\" title=\"Lien vers cette rubrique\">#</a></h2>", "a[href=\"#using-tcp-server-to-transmit-data\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Utiliser le serveur TCP pour transmettre des donn\u00e9es<a class=\"headerlink\" href=\"#using-tcp-server-to-transmit-data\" title=\"Lien vers cette rubrique\">#</a></h1><h2>Configuration rapide<a class=\"headerlink\" href=\"#quick-configuration\" title=\"Lien vers cette rubrique\">#</a></h2>", "a[href=\"#demo-software\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Logiciel de d\u00e9mo<a class=\"headerlink\" href=\"#demo-software\" title=\"Lien vers cette rubrique\">#</a></h2>"}
skip_classes = ["headerlink", "sd-stretched-link", "sd-rounded-pill"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(`article.bd-article ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
