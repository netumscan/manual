selector_to_html = {"a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010203..png\"><img alt=\"../../media/3E210010203..png\" src=\"../../media/3E210010203..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Tab(TAB)</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010200..png\"><img alt=\"../../media/3E210010200..png\" src=\"../../media/3E210010200..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Sin caracteres de fin</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#end-character-settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Configuraci\u00f3n de End Caracter<a class=\"headerlink\" href=\"#end-character-settings\" title=\"Link to this heading\">#</a></h1><p>El car\u00e1cter final se a\u00f1ade despu\u00e9s de los datos decodificados en el formato de datos decodificados + car\u00e1cter final.</p>", "a[href=\"#enter-cr\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Entrar (CR)<a class=\"headerlink\" href=\"#enter-cr\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010202..png\"><img alt=\"../../media/3E210010202..png\" src=\"../../media/3E210010202..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Entrar (CR)</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#enter-new-line-crlf\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Entrar+Nueva l\u00ednea (CRLF)<a class=\"headerlink\" href=\"#enter-new-line-crlf\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010201..png\"><img alt=\"../../media/3E210010201..png\" src=\"../../media/3E210010201..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Entrar+Nueva l\u00ednea (CRLF)</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#no-end-character\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Sin caracteres de fin<a class=\"headerlink\" href=\"#no-end-character\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#tab-tab\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Tab(TAB)<a class=\"headerlink\" href=\"#tab-tab\" title=\"Link to this heading\">#</a></h2>"}
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
