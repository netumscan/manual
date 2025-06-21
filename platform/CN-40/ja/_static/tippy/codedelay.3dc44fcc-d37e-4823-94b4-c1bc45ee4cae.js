selector_to_html = {"a[href=\"#id1\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">500ms<a class=\"headerlink\" href=\"#id1\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#ms\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">0ms<a class=\"headerlink\" href=\"#ms\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010030..png\"><img alt=\"../../media/3E210010030..png\" src=\"../../media/3E210010030..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">0ms</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id6\"]": "<figure class=\"align-center\" id=\"id6\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E2100100365535..png\"><img alt=\"../../media/3E2100100365535..png\" src=\"../../media/3E2100100365535..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u540c\u3058\u30b3\u30fc\u30c9\u30b9\u30ad\u30e3\u30f3\u3092\u7121\u52b9\u306b\u3059\u308b</span><a class=\"headerlink\" href=\"#id6\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E21001003500..png\"><img alt=\"../../media/3E21001003500..png\" src=\"../../media/3E21001003500..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">500ms</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">3000ms<a class=\"headerlink\" href=\"#id2\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#same-code-delay-settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u540c\u3058\u30b3\u30fc\u30c9\u306e\u9045\u5ef6\u8a2d\u5b9a<a class=\"headerlink\" href=\"#same-code-delay-settings\" title=\"Link to this heading\">#</a></h1><p>\u30b9\u30ad\u30e3\u30f3\u4e2d\u306b\u540c\u3058\u30d0\u30fc\u30b3\u30fc\u30c9\u304c\u9023\u7d9a\u3057\u3066\u8907\u6570\u56de\u8aad\u307f\u53d6\u3089\u308c\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u3002 \u540c\u3058\u30d0\u30fc\u30b3\u30fc\u30c9\u3092\u8aad\u307f\u53d6\u308b\u524d\u306b\u6642\u9593\u5236\u9650\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002</p>", "a[href=\"#id5\"]": "<figure class=\"align-center\" id=\"id5\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010033000..png\"><img alt=\"../../media/3E210010033000..png\" src=\"../../media/3E210010033000..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">3000ms</span><a class=\"headerlink\" href=\"#id5\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#disable-same-code-scanning\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u540c\u3058\u30b3\u30fc\u30c9\u30b9\u30ad\u30e3\u30f3\u3092\u7121\u52b9\u306b\u3059\u308b<a class=\"headerlink\" href=\"#disable-same-code-scanning\" title=\"Link to this heading\">#</a></h2>"}
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
