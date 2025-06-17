selector_to_html = {"a[href=\"#disable-same-code-scanning\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">D\u00e9sactiver le balayage du m\u00eame code<a class=\"headerlink\" href=\"#disable-same-code-scanning\" title=\"Lien vers cette rubrique\">#</a></h2>", "a[href=\"#id5\"]": "<figure class=\"align-center\" id=\"id5\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010033000..png\"><img alt=\"../../media/3E210010033000..png\" src=\"../../media/3E210010033000..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">3000 ms</span><a class=\"headerlink\" href=\"#id5\" title=\"Lien vers cette image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E21001003500..png\"><img alt=\"../../media/3E21001003500..png\" src=\"../../media/3E21001003500..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">500ms</span><a class=\"headerlink\" href=\"#id4\" title=\"Lien vers cette image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#same-code-delay-settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">R\u00e9glages de d\u00e9lai du m\u00eame code<a class=\"headerlink\" href=\"#same-code-delay-settings\" title=\"Lien vers cette rubrique\">#</a></h1><p>Pour \u00e9viter que le m\u00eame code-barres ne soit lu plusieurs fois dans une ligne lors de la num\u00e9risation, vous pouvez d\u00e9finir une limite de temps avant de permettre la lecture du m\u00eame code-barres.</p>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010030..png\"><img alt=\"../../media/3E210010030..png\" src=\"../../media/3E210010030..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">0 ms</span><a class=\"headerlink\" href=\"#id3\" title=\"Lien vers cette image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#ms\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">0 ms<a class=\"headerlink\" href=\"#ms\" title=\"Lien vers cette rubrique\">#</a></h2>", "a[href=\"#id6\"]": "<figure class=\"align-center\" id=\"id6\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E2100100365535..png\"><img alt=\"../../media/3E2100100365535..png\" src=\"../../media/3E2100100365535..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">D\u00e9sactiver le balayage du m\u00eame code</span><a class=\"headerlink\" href=\"#id6\" title=\"Lien vers cette image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">500ms<a class=\"headerlink\" href=\"#id1\" title=\"Lien vers cette rubrique\">#</a></h2>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">3000 ms<a class=\"headerlink\" href=\"#id2\" title=\"Lien vers cette rubrique\">#</a></h2>"}
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
