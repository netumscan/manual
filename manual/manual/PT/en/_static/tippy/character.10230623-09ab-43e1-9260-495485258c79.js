selector_to_html = {"a[href=\"#terminator\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Terminator<a class=\"headerlink\" href=\"#terminator\" title=\"Link to this heading\">#</a></h1><h2>End Character Settings<a class=\"headerlink\" href=\"#end-character-settings\" title=\"Link to this heading\">#</a></h2><p>The end character is added after the decoded data in the format of decoded data + end character.</p>", "a[href=\"#no-end-character\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">No End Character<a class=\"headerlink\" href=\"#no-end-character\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010202..png\"><img alt=\"../../media/3E210010202..png\" src=\"../../media/3E210010202..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Enter(CR)</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010201..png\"><img alt=\"../../media/3E210010201..png\" src=\"../../media/3E210010201..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Enter+New Line(CRLF)</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010200..png\"><img alt=\"../../media/3E210010200..png\" src=\"../../media/3E210010200..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">No End Character</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#tab-tab\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Tab(TAB)<a class=\"headerlink\" href=\"#tab-tab\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#end-character-settings\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">End Character Settings<a class=\"headerlink\" href=\"#end-character-settings\" title=\"Link to this heading\">#</a></h2><p>The end character is added after the decoded data in the format of decoded data + end character.</p>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../media/3E210010203..png\"><img alt=\"../../media/3E210010203..png\" src=\"../../media/3E210010203..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Tab(TAB)</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#enter-cr\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Enter(CR)<a class=\"headerlink\" href=\"#enter-cr\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#enter-new-line-crlf\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Enter+New Line(CRLF)<a class=\"headerlink\" href=\"#enter-new-line-crlf\" title=\"Link to this heading\">#</a></h3>"}
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
