selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010330..png\"><img alt=\"../../media/3E210010330..png\" src=\"../../media/3E210010330..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Habilitar c\u00f3digo URL</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010331..png\"><img alt=\"../../media/3E210010331..png\" src=\"../../media/3E210010331..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Desactivar c\u00f3digo URL</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#enable-url-code\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Habilitar c\u00f3digo URL<a class=\"headerlink\" href=\"#enable-url-code\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#qr-code-url-settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Configuraci\u00f3n de URL del c\u00f3digo QR<a class=\"headerlink\" href=\"#qr-code-url-settings\" title=\"Link to this heading\">#</a></h1><p>Bloquear el escaneo de c\u00f3digos QR URL comenzando con <code class=\"docutils literal notranslate\"><span class=\"pre\">http://</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">https://</span></code>, <code class=\"docutils literal notranslate\"><span class=\"pre\">www.</span></code></p>", "a[href=\"#disable-url-code\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Desactivar c\u00f3digo URL<a class=\"headerlink\" href=\"#disable-url-code\" title=\"Link to this heading\">#</a></h2>"}
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
