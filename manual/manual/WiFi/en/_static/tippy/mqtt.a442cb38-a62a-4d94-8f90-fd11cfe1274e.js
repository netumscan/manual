selector_to_html = {"a[href=\"#build-broker-server\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Build Broker Server<a class=\"headerlink\" href=\"#build-broker-server\" title=\"Link to this heading\">#</a></h2><h3>Demo software<a class=\"headerlink\" href=\"#demo-software\" title=\"Link to this heading\">#</a></h3><p>EMQX open source version, download address: <a class=\"reference external\" href=\"https://github.com/emqx/emqx/releases\">EMQX</a></p>", "a[href=\"#demo-software\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Demo software<a class=\"headerlink\" href=\"#demo-software\" title=\"Link to this heading\">#</a></h3><p>EMQX open source version, download address: <a class=\"reference external\" href=\"https://github.com/emqx/emqx/releases\">EMQX</a></p>", "a[href=\"#testing-services\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Testing Services<a class=\"headerlink\" href=\"#testing-services\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#modify-the-scanner-publishing-topic\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Modify the scanner publishing topic<a class=\"headerlink\" href=\"#modify-the-scanner-publishing-topic\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#modify-the-mqtt-connection-port\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Modify the MQTT connection port<a class=\"headerlink\" href=\"#modify-the-mqtt-connection-port\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#receiving-data\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Receiving Data<a class=\"headerlink\" href=\"#receiving-data\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#configure-scanner\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Configure Scanner<a class=\"headerlink\" href=\"#configure-scanner\" title=\"Link to this heading\">#</a></h2><h3>Configure WiFi and Broker<a class=\"headerlink\" href=\"#configure-wifi-and-broker\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#configure-wifi-and-broker\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Configure WiFi and Broker<a class=\"headerlink\" href=\"#configure-wifi-and-broker\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#development-reference\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Development Reference<a class=\"headerlink\" href=\"#development-reference\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#modify-the-scanner-subscription-topic\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Modify the scanner subscription topic<a class=\"headerlink\" href=\"#modify-the-scanner-subscription-topic\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#use-mqtt-protocol-to-transmit-data\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Use MQTT protocol to transmit data<a class=\"headerlink\" href=\"#use-mqtt-protocol-to-transmit-data\" title=\"Link to this heading\">#</a></h1><h2>Build Broker Server<a class=\"headerlink\" href=\"#build-broker-server\" title=\"Link to this heading\">#</a></h2><h3>Demo software<a class=\"headerlink\" href=\"#demo-software\" title=\"Link to this heading\">#</a></h3><p>EMQX open source version, download address: <a class=\"reference external\" href=\"https://github.com/emqx/emqx/releases\">EMQX</a></p>"}
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
