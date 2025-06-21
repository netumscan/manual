selector_to_html = {"a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">3000ms<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id6\"]": "<figure class=\"align-center\" id=\"id6\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E2100100365535..png\"><img alt=\"../../media/3E2100100365535..png\" src=\"../../media/3E2100100365535..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Desactivar escaneo del mismo c\u00f3digo</span><a class=\"headerlink\" href=\"#id6\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#ms\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">0ms<a class=\"headerlink\" href=\"#ms\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E21001003500..png\"><img alt=\"../../media/3E21001003500..png\" src=\"../../media/3E21001003500..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">500ms</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010030..png\"><img alt=\"../../media/3E210010030..png\" src=\"../../media/3E210010030..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">0ms</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#disable-same-code-scanning\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Desactivar escaneo del mismo c\u00f3digo<a class=\"headerlink\" href=\"#disable-same-code-scanning\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#same-code-delay-settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Configuraci\u00f3n del mismo c\u00f3digo de retraso<a class=\"headerlink\" href=\"#same-code-delay-settings\" title=\"Link to this heading\">#</a></h1><p>Para evitar que el mismo c\u00f3digo de barras sea le\u00eddo varias veces seguidas durante el escaneo, puede establecer un l\u00edmite de tiempo antes de permitir que se lea el mismo c\u00f3digo de barras.</p>", "a[href=\"#id5\"]": "<figure class=\"align-center\" id=\"id5\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010033000..png\"><img alt=\"../../media/3E210010033000..png\" src=\"../../media/3E210010033000..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">3000ms</span><a class=\"headerlink\" href=\"#id5\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">500ms<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2>"}
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
