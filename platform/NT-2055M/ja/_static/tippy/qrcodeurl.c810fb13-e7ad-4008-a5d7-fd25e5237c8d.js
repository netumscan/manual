selector_to_html = {"a[href=\"#qr-code-url-settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">QR\u30b3\u30fc\u30c9\u306eURL\u8a2d\u5b9a<a class=\"headerlink\" href=\"#qr-code-url-settings\" title=\"Link to this heading\">#</a></h1><p><code class=\"docutils literal notranslate\"><span class=\"pre\">http://</span></code>\u3001<code class=\"docutils literal notranslate\"><span class=\"pre\">https://</span></code>\u3001<code class=\"docutils literal notranslate\"><span class=\"pre\">www.</span></code>\u3067\u59cb\u307e\u308bURLQR\u30b3\u30fc\u30c9\u306e\u30b9\u30ad\u30e3\u30f3\u3092\u30d6\u30ed\u30c3\u30af\u3057\u307e\u3059</p>", "a[href=\"#enable-url-code\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">URL\u30b3\u30fc\u30c9\u3092\u6709\u52b9\u306b\u3059\u308b<a class=\"headerlink\" href=\"#enable-url-code\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#disable-url-code\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">URL \u30b3\u30fc\u30c9\u3092\u7121\u52b9\u306b\u3059\u308b<a class=\"headerlink\" href=\"#disable-url-code\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010330..png\"><img alt=\"../../media/3E210010330..png\" src=\"../../media/3E210010330..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">URL\u30b3\u30fc\u30c9\u3092\u6709\u52b9\u306b\u3059\u308b</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010331..png\"><img alt=\"../../media/3E210010331..png\" src=\"../../media/3E210010331..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">URL \u30b3\u30fc\u30c9\u3092\u7121\u52b9\u306b\u3059\u308b</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
