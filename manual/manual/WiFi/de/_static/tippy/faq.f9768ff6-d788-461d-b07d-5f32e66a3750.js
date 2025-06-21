selector_to_html = {"a[href=\"#question-4-scan-successful-uploaded-data-incorrect\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Frage 4:Scan erfolgreich, hochgeladene Daten falsch?<a class=\"headerlink\" href=\"#question-4-scan-successful-uploaded-data-incorrect\" title=\"Link to this heading\">#</a></h2><p><strong>Antwort:</strong></p>", "a[href=\"#faq\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FAQ<a class=\"headerlink\" href=\"#faq\" title=\"Link to this heading\">#</a></h1><h2>Frage 1: Der Scan ist erfolgreich, der Bussen klingt einmal, aber es werden keine Daten hochgeladen?<a class=\"headerlink\" href=\"#question-1-the-scan-is-successful-the-buzzer-sounds-once-but-no-data-is-uploaded\" title=\"Link to this heading\">#</a></h2><p><strong>Antwort:</strong> Der Scanner hat den Speichermodus betreten und muss <a class=\"reference internal\" href=\"working.html#normal-mode\"><span class=\"std std-ref\">Normal Mode</span></a> scannen um sich zu erholen.</p>", "a[href=\"working.html#normal-mode\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Normaler Modus<a class=\"headerlink\" href=\"#normal-mode\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#question-3-the-scanner-beeps-five-times-when-a-button-is-pressed-how-can-i-solve-this-problem\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Frage 3:Der Scanner springt f\u00fcnf Mal auf, wenn ein Knopf gedr\u00fcckt wird. Wie kann ich dieses Problem l\u00f6sen?<a class=\"headerlink\" href=\"#question-3-the-scanner-beeps-five-times-when-a-button-is-pressed-how-can-i-solve-this-problem\" title=\"Link to this heading\">#</a></h2><p><strong>Antwort:</strong> Die Batterie ist niedrig und muss aufgeladen werden, bevor sie wieder verwendet werden kann.</p>", "a[href=\"#question-2-the-scanner-scans-successfully-beeps-twice-and-can-upload-data-normally-what-is-going-on\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Frage 2:Der Scanner scannt erfolgreich zweimal, Piepton und kann Daten normal hochladen. Was geht vor?<a class=\"headerlink\" href=\"#question-2-the-scanner-scans-successfully-beeps-twice-and-can-upload-data-normally-what-is-going-on\" title=\"Link to this heading\">#</a></h2><p><strong>Antwort:</strong> Der Akku der Scannerpistole ist niedrig und es wird verlangt, dass er aufgeladen werden muss.</p>", "a[href=\"#question-1-the-scan-is-successful-the-buzzer-sounds-once-but-no-data-is-uploaded\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Frage 1: Der Scan ist erfolgreich, der Bussen klingt einmal, aber es werden keine Daten hochgeladen?<a class=\"headerlink\" href=\"#question-1-the-scan-is-successful-the-buzzer-sounds-once-but-no-data-is-uploaded\" title=\"Link to this heading\">#</a></h2><p><strong>Antwort:</strong> Der Scanner hat den Speichermodus betreten und muss <a class=\"reference internal\" href=\"working.html#normal-mode\"><span class=\"std std-ref\">Normal Mode</span></a> scannen um sich zu erholen.</p>"}
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
