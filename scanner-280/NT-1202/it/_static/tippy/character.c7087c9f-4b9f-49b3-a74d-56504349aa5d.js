selector_to_html = {"a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/TC01.png\"><img alt=\"../../media/TC01.png\" src=\"../../media/TC01.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Nessun Carattere Finale</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#start-setup-figure\"]": "<figure class=\"align-center\" id=\"start-setup-figure\">\n<a class=\"reference internal image-reference\" href=\"../../media/252B24.24.png\"><img alt=\"../../media/252B24.24.png\" src=\"../../media/252B24.24.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Avvia Configurazione</span><a class=\"headerlink\" href=\"#start-setup-figure\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#end-setup-figure\"]": "<figure class=\"align-center\" id=\"end-setup-figure\">\n<a class=\"reference internal image-reference\" href=\"../../media/25242425.png\"><img alt=\"../../media/25242425.png\" src=\"../../media/25242425.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Termina L\u2019Impostazione</span><a class=\"headerlink\" href=\"#end-setup-figure\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#enter-new-line-crlf\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Enter+New Line (CRLF)<a class=\"headerlink\" href=\"#enter-new-line-crlf\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/TC02.png\"><img alt=\"../../media/TC02.png\" src=\"../../media/TC02.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Enter+New Line (CRLF)</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#end-character-settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Impostazioni Dei Caratteri Finali<a class=\"headerlink\" href=\"#end-character-settings\" title=\"Link to this heading\">#</a></h1><p>Il carattere finale viene aggiunto dopo i dati decodificati nel formato dei dati decodificati + carattere finale.</p>", "a[href=\"#start-setup\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Avvia Configurazione<a class=\"headerlink\" href=\"#start-setup\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#no-end-character\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Nessun Carattere Finale<a class=\"headerlink\" href=\"#no-end-character\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#enter-cr\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Enter(CR)<a class=\"headerlink\" href=\"#enter-cr\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../media/TC03.png\"><img alt=\"../../media/TC03.png\" src=\"../../media/TC03.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\"><code class=\"docutils literal notranslate\"><span class=\"pre\">*</span></code> Enter(CR)</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#end-setup\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Termina L\u2019Impostazione<a class=\"headerlink\" href=\"#end-setup\" title=\"Link to this heading\">#</a></h2>"}
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
