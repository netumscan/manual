selector_to_html = {"a[href=\"#modify-the-scanner-subscription-topic\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Modifier le sujet de l\u2019abonnement au scanner<a class=\"headerlink\" href=\"#modify-the-scanner-subscription-topic\" title=\"Lien vers cette rubrique\">#</a></h3>", "a[href=\"#demo-software\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Logiciel de d\u00e9mo<a class=\"headerlink\" href=\"#demo-software\" title=\"Lien vers cette rubrique\">#</a></h3><p>Version open source EMQX, adresse de t\u00e9l\u00e9chargement : <a class=\"reference external\" href=\"https://github.com/emqx/emqx/releases\">EMQX</a></p>", "a[href=\"#receiving-data\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">R\u00e9ception des donn\u00e9es<a class=\"headerlink\" href=\"#receiving-data\" title=\"Lien vers cette rubrique\">#</a></h2>", "a[href=\"#use-mqtt-protocol-to-transmit-data\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Utiliser le protocole MQTT pour transmettre des donn\u00e9es<a class=\"headerlink\" href=\"#use-mqtt-protocol-to-transmit-data\" title=\"Lien vers cette rubrique\">#</a></h1><h2>Construire un serveur de parrain<a class=\"headerlink\" href=\"#build-broker-server\" title=\"Lien vers cette rubrique\">#</a></h2><h3>Logiciel de d\u00e9mo<a class=\"headerlink\" href=\"#demo-software\" title=\"Lien vers cette rubrique\">#</a></h3><p>Version open source EMQX, adresse de t\u00e9l\u00e9chargement : <a class=\"reference external\" href=\"https://github.com/emqx/emqx/releases\">EMQX</a></p>", "a[href=\"#configure-wifi-and-broker\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Configurer le WiFi et le broker<a class=\"headerlink\" href=\"#configure-wifi-and-broker\" title=\"Lien vers cette rubrique\">#</a></h3>", "a[href=\"#development-reference\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">R\u00e9f\u00e9rence de d\u00e9veloppement<a class=\"headerlink\" href=\"#development-reference\" title=\"Lien vers cette rubrique\">#</a></h2>", "a[href=\"#build-broker-server\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Construire un serveur de parrain<a class=\"headerlink\" href=\"#build-broker-server\" title=\"Lien vers cette rubrique\">#</a></h2><h3>Logiciel de d\u00e9mo<a class=\"headerlink\" href=\"#demo-software\" title=\"Lien vers cette rubrique\">#</a></h3><p>Version open source EMQX, adresse de t\u00e9l\u00e9chargement : <a class=\"reference external\" href=\"https://github.com/emqx/emqx/releases\">EMQX</a></p>", "a[href=\"#modify-the-mqtt-connection-port\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Modifier le port de connexion MQTT<a class=\"headerlink\" href=\"#modify-the-mqtt-connection-port\" title=\"Lien vers cette rubrique\">#</a></h3>", "a[href=\"#modify-the-scanner-publishing-topic\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Modifier le sujet de publication du scanner<a class=\"headerlink\" href=\"#modify-the-scanner-publishing-topic\" title=\"Lien vers cette rubrique\">#</a></h3>", "a[href=\"#configure-scanner\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Configurer le scanner<a class=\"headerlink\" href=\"#configure-scanner\" title=\"Lien vers cette rubrique\">#</a></h2><h3>Configurer le WiFi et le broker<a class=\"headerlink\" href=\"#configure-wifi-and-broker\" title=\"Lien vers cette rubrique\">#</a></h3>", "a[href=\"#testing-services\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Services de test<a class=\"headerlink\" href=\"#testing-services\" title=\"Lien vers cette rubrique\">#</a></h3>"}
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
