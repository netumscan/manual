selector_to_html = {"a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/T_OUT_CVER.png\"><img alt=\"../../media/T_OUT_CVER.png\" src=\"../../media/T_OUT_CVER.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u30d5\u30a1\u30fc\u30e0\u30a6\u30a7\u30a2\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u53d6\u5f97</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#system-settings\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">\u30b7\u30b9\u30c6\u30e0\u8a2d\u5b9a<a class=\"headerlink\" href=\"#system-settings\" title=\"Link to this heading\">#</a></h1><h2>\u65e2\u5b9a\u306e\u8a2d\u5b9a\u306b\u623b\u3059<a class=\"headerlink\" href=\"#restore-default-settings\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#get-firmware-version\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u30d5\u30a1\u30fc\u30e0\u30a6\u30a7\u30a2\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u53d6\u5f97<a class=\"headerlink\" href=\"#get-firmware-version\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#restore-default-settings\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u65e2\u5b9a\u306e\u8a2d\u5b9a\u306b\u623b\u3059<a class=\"headerlink\" href=\"#restore-default-settings\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/S_CMD_FFFF.png\"><img alt=\"../../media/S_CMD_FFFF.png\" src=\"../../media/S_CMD_FFFF.png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">\u65e2\u5b9a\u306e\u8a2d\u5b9a\u306b\u623b\u3059</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
