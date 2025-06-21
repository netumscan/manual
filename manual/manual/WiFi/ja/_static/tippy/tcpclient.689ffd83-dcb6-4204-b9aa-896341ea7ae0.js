selector_to_html = {"a[href=\"#quick-configuration\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u30af\u30a4\u30c3\u30af\u8a2d\u5b9a<a class=\"headerlink\" href=\"#quick-configuration\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#use-tcp-client-to-transfer-data\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">TCP\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30c7\u30fc\u30bf\u3092\u8ee2\u9001\u3059\u308b<a class=\"headerlink\" href=\"#use-tcp-client-to-transfer-data\" title=\"Link to this heading\">#</a></h1><h2>\u30af\u30a4\u30c3\u30af\u8a2d\u5b9a<a class=\"headerlink\" href=\"#quick-configuration\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#make-a-connection\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u30b3\u30cd\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210<a class=\"headerlink\" href=\"#make-a-connection\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#demo-software\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">\u30c7\u30e2\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2<a class=\"headerlink\" href=\"#demo-software\" title=\"Link to this heading\">#</a></h2>"}
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
