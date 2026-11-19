# OstryMoto

Strona kanału motocyklowego. Projekt studencki korzysta z trzech frameworków. Pliki bibliotek są w folderze `vendor/`.

## Frameworki

| Framework | Wersja | Do czego służy |
| --- | --- | --- |
| Bootstrap | 5.3.3 | Menu na telefonie, formularz kontaktu, okna modalne |
| jQuery | 3.7.1 | Linki z `config.js`, rok w stopce, wysyłka formularza |
| Vue | 3.5.13 | Dziennik tras: filtry, licznik kilometrów, okno ze zdjęciem |

## Gdzie to widać w kodzie

- Bootstrap: `vendor/bootstrap.min.css`, `vendor/bootstrap.bundle.min.js` — nawigacja, formularz `#contact-form`, modale
- jQuery: `vendor/jquery.min.js`, logika w `main.js`
- Vue: `vendor/vue.global.prod.js`, dziennik tras w `trasy.js`
