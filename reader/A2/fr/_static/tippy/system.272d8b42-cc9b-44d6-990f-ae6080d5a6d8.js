selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/S_CMD_FFFF.png\"><img alt=\"../../media/S_CMD_FFFF.png\" src=\"../../media/S_CMD_FFFF.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Restaurer les param\u00e8tres par d\u00e9faut</span><a class=\"headerlink\" href=\"#id1\" title=\"Lien vers cette image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/T_OUT_CVER.png\"><img alt=\"../../media/T_OUT_CVER.png\" src=\"../../media/T_OUT_CVER.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Obtenir la version du Firmware</span><a class=\"headerlink\" href=\"#id2\" title=\"Lien vers cette image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#get-firmware-version\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Obtenir la version du Firmware<a class=\"headerlink\" href=\"#get-firmware-version\" title=\"Lien vers cette rubrique\">#</a></h2>", "a[href=\"#system-settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Param\u00e8tres du syst\u00e8me<a class=\"headerlink\" href=\"#system-settings\" title=\"Lien vers cette rubrique\">#</a></h1><h2>Restaurer les param\u00e8tres par d\u00e9faut<a class=\"headerlink\" href=\"#restore-default-settings\" title=\"Lien vers cette rubrique\">#</a></h2>", "a[href=\"#restore-default-settings\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Restaurer les param\u00e8tres par d\u00e9faut<a class=\"headerlink\" href=\"#restore-default-settings\" title=\"Lien vers cette rubrique\">#</a></h2>"}
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
