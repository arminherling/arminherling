const translations = {
  "document.title": {
    en: "Armin Herling | Portfolio",
    de: "Armin Herling | Portfolio",
  },
  "document.description": {
    en: "Single-page portfolio with projects, skills, and contact details.",
    de: "Einseitiges Portfolio mit Projekten, Kenntnissen und Kontaktdaten.",
  },
  "nav.primaryAria": {
    en: "Primary navigation",
    de: "Hauptnavigation",
  },
  "nav.toggleAria": {
    en: "Toggle navigation menu",
    de: "Navigationsmenü umschalten",
  },
  "lang.groupAria": {
    en: "Language switcher",
    de: "Sprachauswahl",
  },
  "brand.role": {
    en: "Software Developer",
    de: "Fachinformatiker für Anwendungsentwicklung",
  },
  "nav.menu": {
    en: "Menu",
    de: "Menü",
  },
  "nav.about": {
    en: "About",
    de: "Über mich",
  },
  "nav.experience": {
    en: "Experience",
    de: "Erfahrung",
  },
  "nav.projects": {
    en: "Projects",
    de: "Projekte",
  },
  "nav.skills": {
    en: "Skills",
    de: "Kenntnisse",
  },
  "nav.contact": {
    en: "Contact",
    de: "Kontakt",
  },
  "about.title": {
    en: "About",
    de: "Über mich",
  },
  "about.p1": {
    en: "C++ software engineer specializing in compilers, native desktop applications, and build systems. I design and ship high-performance native tools and maintain open-source projects such as Caracal and CaraTest. My work emphasizes correctness, performance, and maintainability through clean APIs and robust testing.",
    de: "C++-Softwareentwickler mit Schwerpunkt Compiler, native Desktop-Anwendungen und Build-Systeme. Ich entwickle und liefere leistungsfähige native Werkzeuge und betreue Open-Source-Projekte wie Caracal und CaraTest. Meine Arbeit legt Wert auf Korrektheit, Performance und Wartbarkeit durch klare APIs und robuste Tests.",
  },
  "about.p2": {
    en: "At Treesoft since 2017, I advanced from apprentice to C++ developer. I lead end-to-end C++/Qt project development, migrated codebases to CMake, and built internal tooling that measurably improved engineering productivity. I take responsibility for architecture, implementation, and long-term maintenance of core components.",
    de: "Seit 2017 bei Treesoft; vom Auszubildenden zum C++-Entwickler. Ich verantworte die End-to-End C++/Qt-Projektentwicklung, habe mehrere Codebasen auf CMake umgestellt und interne Tools entwickelt, die die Produktivität messbar steigerten. Ich übernehme Architektur, Implementierung und langfristige Wartung zentraler Komponenten.",
  },
  "sidebar.emailLabel": {
    en: "Email:",
    de: "E-Mail:",
  },
  "sidebar.githubLabel": {
    en: "GitHub:",
    de: "GitHub:",
  },
  "sidebar.linkedinLabel": {
    en: "LinkedIn:",
    de: "LinkedIn:",
  },
  "experience.role1": {
    en: "Software Developer C++/Qt · Treesoft GmbH & Co. KG",
    de: "Software-Entwickler C++/Qt · Treesoft GmbH & Co. KG",
  },
  "experience.time1": {
    en: "2020 - Present",
    de: "2020 - Heute",
  },
  "experience.desc1": {
    en: "Development and maintenance of C++/Qt applications; migrated projects to modern build systems (CMake); performance optimizations and close collaboration with QA and product owners.",
    de: "Entwicklung und Wartung von C++/Qt-Anwendungen; Migration auf moderne Build-Systeme (CMake); Performance-Optimierungen und enge Zusammenarbeit mit QA und Produktverantwortlichen.",
  },
  "experience.role2": {
    en: "Apprentice - IT Specialist for Application Development · Treesoft GmbH & Co. KG",
    de: "Auszubildender Fachinformatiker für Anwendungsentwicklung · Treesoft GmbH & Co. KG",
  },
  "experience.time2": {
    en: "2017 - 2020",
    de: "2017 - 2020",
  },
  "experience.desc2": {
    en: "Apprenticeship focused on software development (C++/Qt); contributed to customer projects, internal tooling, testing, and documentation.",
    de: "Ausbildung mit Schwerpunkt Softwareentwicklung (C++/Qt); Mitwirkung an Kundenprojekten, Erstellung interner Tools, Tests und Dokumentation.",
  },
  "experience.role3": {
    en: "Abitur · Rahel-Varnhagen-Kolleg Hagen (Evening School)",
    de: "Abitur an der Abendschule · Rahel-Varnhagen-Kolleg Hagen",
  },
  "experience.time3": {
    en: "2014 - 2016",
    de: "2014 - 2016",
  },
  "experience.desc3": {
    en: "Completed Abitur at Rahel-Varnhagen-Kolleg Hagen (evening school), external branch in Lüdenscheid. Graduated with an overall grade of 2.3 and advanced courses in Mathematics and Biology.",
    de: "Abschluss am Rahel-Varnhagen-Kolleg Hagen (Abendschule), Außenstelle Lüdenscheid. Abitur mit einem Notendurchschnitt von 2,3; Leistungskurse Mathematik und Biologie.",
  },
  "projects.title": {
    en: "Projects",
    de: "Projekte",
  },
  "projects.name1": {
    en: "Caracal Programming Language",
    de: "Caracal Programmiersprache",
  },
  "projects.desc1": {
    en: "Caracal is a compiled, statically typed programming language I'm building from scratch. The goal is a language that feels like dynamically typed code to write, but gives you all the safety and performance of static types under the hood, achieved through aggressive type inference so you rarely need to write types explicitly. The syntax is designed to be clean and minimal, with sensible defaults that offer no surprises: no unexpected behavior, no hidden gotchas. I implement the full pipeline myself: a hand-written lexer and recursive descent parser, a typechecker that handles inference and validation, and a code generator that emits LLVM IR for native compilation.",
    de: "Caracal ist eine kompilierte, statisch typisierte Programmiersprache, die ich von Grund auf entwickle. Ziel ist eine Sprache, die sich beim Schreiben wie dynamisch typisierter Code anfühlt, aber unter der Haube die volle Sicherheit und Performance statischer Typen bietet, ermöglicht durch konsequente Typinferenz, sodass Typangaben meist wegfallen können. Die Syntax ist bewusst schlank und minimal gehalten, mit sinnvollen Standardwerten, die keine Überraschungen bieten: kein unerwartetes Verhalten, kein versteckter Fallstrick. Ich implementiere die gesamte Pipeline selbst: einen handgeschriebenen Lexer und einen rekursiven Abstieg-Parser, einen Typchecker für Inferenz und Validierung sowie einen Codegenerator, der LLVM IR für native Kompilierung erzeugt.",
  },
  "projects.name2": {
    en: "CaraTest Test Framework",
    de: "CaraTest Test-Framework",
  },
  "projects.desc2": {
    en: "CaraTest is a lightweight test framework for C++ I originally built for Caracal, because QTest didn't support printing the combined results of multiple test suites without ugly hacks. It features pretty color output, parameterized tests, and snapshot tests with a dedicated tool for accepting or rejecting snapshots. For debugging, it supports command-line flags like 'break_on_fail', which triggers a debug break inside the failing assertion so you can inspect the call stack, and 'break_and_rerun_on_fail', which breaks on the catch and reruns the test so you can step through it from the start.",
    de: "CaraTest ist ein schlankes C++-Test-Framework, das ich ursprünglich für Caracal entwickelt habe, weil QTest keine kombinierte Ausgabe der Ergebnisse mehrerer Test-Suites ohne hässliche Workarounds unterstützt hat. Es bietet farbige Konsolenausgabe, parametrisierte Tests und Snapshot-Tests mit einem eigenen Tool zum Akzeptieren oder Ablehnen von Snapshots. Zum Debuggen unterstützt es Kommandozeilenparameter wie 'break_on_fail', der einen Debug-Break innerhalb der fehlschlagenden Assertion auslöst, und 'break_and_rerun_on_fail', der im Catch-Block bricht und den Test erneut ausführt, damit man ihn von Anfang an durchsteppen kann.",
  },
  "projects.name3": {
    en: "Migration to CMake",
    de: "Umstellung auf CMake",
  },
  "projects.desc3": {
    en: "Led the full migration of a large C++ codebase from a legacy proprietary build system to CMake, converting around 300 individual projects. The transition unlocked the team's ability to upgrade to Visual Studio 2026, significantly improved build reproducibility, and streamlined IDE integration for the entire development team. As part of the effort, the GitLab CI/CD pipeline was also reworked to fully support the new CMake-based workflow.",
    de: "Vollständige Migration einer großen C++-Codebasis von einem veralteten proprietären Build-System zu CMake, bei der rund 300 einzelne Projekte umgestellt wurden. Die Umstellung ermöglichte den Wechsel auf Visual Studio 2026, verbesserte die Build-Reproduzierbarkeit erheblich und vereinfachte die IDE-Integration im gesamten Entwicklungsteam. Im Zuge des Projekts wurde außerdem die GitLab CI/CD-Pipeline überarbeitet, um den neuen CMake-basierten Workflow vollständig zu unterstützen.",
  },
  "projects.name4": {
    en: "Bulk Email Sender",
    de: "Email Mehrfachversand",
  },
  "projects.desc4": {
    en: "I redesigned the Treesoft Office bulk email sender from the ground up and migrated it from Delphi to C++/Qt. The new implementation is significantly easier to use, includes a test-run mode to validate messages before sending, and its behavior is covered by automated tests to ensure reliability. Recipients are determined using address filters in Treesoft Office; this simplifies maintenance and operation.",
    de: "Ich habe den Mehrfachversand im Treesoft Office von Grund auf neu entwickelt und von Delphi auf C++/Qt portiert. Die neue Umsetzung ist deutlich bedienungsfreundlicher, enthält eine Testlauf-Funktion zum Überprüfen von Nachrichten vor dem Versand und ihr Verhalten wird durch automatisierte Tests abgesichert. Die Empfänger werden über die Adressfilter im Treesoft Office ermittelt; dadurch sind Wartung und Betrieb deutlich vereinfacht.",
  },
  "projects.name5": {
    en: "Automatic Forecast List",
    de: "Automatische Forecastliste",
  },
  "projects.desc5": {
    en: "Lists follow-ups of sent offers. For each address it shows open offers, computes potential profit and displays a risk score from 1-10. Expected profit is calculated as potential profit x (risk x 10%) (e.g. risk 5 → 50% of potential profit). Includes filters for analysis and tracking.",
    de: "Listet Wiedervorlagen zu verschickten Angeboten auf. Für jede Adresse werden offene Angebote angezeigt, der potenzielle Gewinn berechnet und ein Risikowert von 1-10 dargestellt. Der erwartete Gewinn wird aus dem potenziellen Gewinn multipliziert mit 10 % pro Risiko-Punkt berechnet (z. B. Risiko 5 → 50 % des potenziellen Gewinns). Filterfunktionen unterstützen Analyse und Nachverfolgung.",
  },
  "projects.name6": {
    en: "Service Cost Calculation",
    de: "Ermittlung von Servicekosten",
  },
  "projects.desc6": {
    en: "The project determines, for each customer address, the actual hotline time consumed so that aggregated annual totals and service efforts become transparent. Based on these times and other relevant data, ongoing service costs are calculated per customer, and presented as a time series. The reports provide fast, reliable metrics that make recent months' cost trends visible at a glance. All calculations are documented and traceable so deviations can be investigated quickly. Relevant filters such as handling status (e.g. fake/spam) are applied to avoid distorted results.",
    de: "Das Projekt ermittelt für jede Kundenadresse die tatsächlich beanspruchte Hotline-Zeit, sodass kumulierte Jahreswerte und Serviceaufwände transparent werden. Auf Basis dieser Zeiten sowie weiterer relevanter Daten werden die laufenden Servicekosten pro Kunde berechnet und als Zeitreihe dargestellt. Die Auswertungen liefern schnelle, verlässliche Kennzahlen, die Kostenentwicklungen der letzten Monate auf einen Blick sichtbar machen. Alle Berechnungen werden dokumentiert und sind nachvollziehbar, damit Abweichungen zügig geprüft werden können. Relevante Filter wie der Bearbeitungsstatus (z. B. Fake/Spam) werden berücksichtigt, um verzerrte Ergebnisse zu vermeiden.",
  },
  "projects.name7": {
    en: "Syntax Highlighter - Treesoft Macro Language",
    de: "Syntax-Highlighter - Treesoft Makrosprache",
  },
  "projects.desc7": {
    en: "Implemented a syntax highlighter for the Treesoft Macro Language used across Treesoft CAD using a TextMate grammar. I created a Visual Studio extension to distribute the TextMate grammar and enable syntax highlighting within Visual Studio.",
    de: "Implementierung eines Syntax-Highlighters für die Treesoft Makrosprache, die im Treesoft CAD eingesetzt wird, basierend auf einer TextMate-Grammatik. Hierfür habe ich eine Visual-Studio-Erweiterung erstellt, um die TextMate-Grammatik zu verteilen und die Syntaxhervorhebung in Visual Studio zu ermöglichen.",
  },
  "projects.name8": {
    en: "SQL Builder in C++",
    de: "SQL Builder in C++",
  },
  "projects.desc8": {
    en: "A query builder library in C++ for constructing SQL queries in a structured, type-aware way. Reduces the risk of malformed queries and makes query construction more maintainable compared to raw string concatenation. The library also includes an SQL optimizer that rewrites queries to improve performance.",
    de: "Eine Query-Builder-Bibliothek in C++ zur strukturierten Erstellung von SQL-Abfragen. Reduziert das Risiko fehlerhafter Abfragen und macht die Abfragekonstruktion im Vergleich zur reinen String-Konkatenation deutlich wartbarer. Die Bibliothek enthält außerdem einen SQL-Optimierer, der Abfragen zur Verbesserung der Performance umschreibt.",
  },
  "projects.name9": {
    en: "C++ Code Generator",
    de: "C++ Code Generator",
  },
  "projects.desc9": {
    en: "A code generation tool that produces C++ boilerplate from declarative definitions. Eliminates repetitive manual work and ensures generated code stays consistent and in sync with its source definitions.",
    de: "Ein Codegenerierungstool, das C++-Boilerplate aus deklarativen Definitionen erzeugt. Eliminiert repetitive Handarbeit und stellt sicher, dass generierter Code konsistent bleibt und mit seinen Quelldefinitionen synchron ist.",
  },
  "projects.name10": {
    en: "Optimizing SQL Statistics",
    de: "Optimieren von SQL Statistiken",
  },
  "projects.desc10": {
    en: "Analyzed and optimized slow SQL queries and outdated database statistics in Treesoft Office. Identified bottlenecks through query plan analysis and reduced execution times significantly, improving overall application responsiveness.",
    de: "Analyse und Optimierung langsamer SQL-Abfragen und veralteter Datenbankstatistiken in Treesoft Office. Engpässe wurden durch Abfrageplananalyse identifiziert und die Ausführungszeiten deutlich reduziert, was die Reaktionsfähigkeit der Anwendung spürbar verbesserte.",
  },
  "projects.name11": {
    en: "Two-person rule",
    de: "Vier-Augen-Prinzip",
  },
  "projects.desc11": {
    en: "Extended the rights management in Treesoft Office with a two-person rule, requiring a second authorized user to approve sensitive workflows before they can be executed. The implementation is generic and applicable to all relevant scenarios. Every action is logged in non-deletable history entries, recording who performed it, who authorized it, when it occurred, and what was done. Authorizations can be granted either for the entire work session or per individual execution. Includes a database extension, updates to existing rights management dialogs, and a new authorization dialog listing all eligible users. Confirmation takes place on the same PC to ensure both parties are physically present.",
    de: "Erweiterung der Rechteverwaltung in Treesoft Office um ein Vier-Augen-Prinzip, bei dem sicherheitskritische Arbeitsabläufe von einer zweiten autorisierten Person freigegeben werden müssen. Die Implementierung ist allgemeingültig und auf alle relevanten Szenarien anwendbar. Jede Aktion wird in nicht löschbaren Historieneinträgen protokolliert, mit Angabe wer die Funktion durchgeführt hat, wer autorisiert hat, wann es stattfand und was gemacht wurde. Freigaben können für die gesamte Arbeitssitzung oder pro Durchführung erteilt werden. Umfasst eine Datenbankstrukturerweiterung, Anpassungen der bestehenden Optionsdialoge sowie einen neuen Autorisierungsdialog mit expliziter Auflistung aller berechtigten Benutzer. Die Bestätigung erfolgt am selben PC, um sicherzustellen, dass beide Personen physisch anwesend sind.",
  },
  "projects.desc12": {
    en: "Redesign of the Treesoft TEFB editor based on Qt and a modular text component. The goal is a universally applicable text editor that encapsulates the TextControl, ensures backward compatibility, and can automatically convert existing texts. The editor supports variables following the MS Word merge-field standard, a configurable variable/context hierarchy, and outline and style views. Email, fax and letter editors are implemented as separate windows; the mailing system, attachments, bulk sending and a performant assistant for address/fax selection will be provided. Print functionality will be completely replaced, and access control, draft handling and viewers for incoming and outgoing emails will be integrated.",
    de: "Neuentwicklung des Treesoft TEFB-Editors auf Basis von Qt und einer modularen Textkomponente. Ziel ist ein universell einsetzbarer Text-Editor, der das TextControl kapselt, Abwärtskompatibilität sicherstellt und bestehende Texte automatisch konvertieren kann. Der Editor unterstützt Variablen nach MS-Word-Mergefield-Standard, eine konfigurierbare Variablen-/Kontext-Hierarchie sowie Gliederungs- und Formatvorlagenansichten. E-Mail-, Fax- und Brief-Editoren werden als eigenständige Fenster implementiert; Mailing-System, Anhänge, Mehrfachversand und ein performanter Assistent für Adress-/Fax-Auswahl werden umgesetzt. Druckfunktionen werden komplett ersetzt und Rechteverwaltung, Entwurfsfunktionen sowie Viewer für ein-/ausgehende E-Mails integriert.",
  },
  "projects.name13": {
    en: "Address List",
    de: "Adressliste",
  },
  "projects.name12": {
    en: "TEFB Editor (Text, Email, Fax, Letter)",
    de: "TEFB-Editor (Text, E-Mail, Fax, Brief)",
  },
  "projects.desc13": {
    en: "Rebuilt the legacy 'Findlist' address list in C++/Qt to replace multiple Delphi/C++ implementations and provide a single, high-performance Address List. Features include fast search and filtering with paginated loading, a database-backed filter cache to reduce network load, a hierarchical group tree for address groups, multi-selection and improved assignment of addresses and contacts to projects or entries. Implemented using MVVM, a full-text search service, and a bidirectional Delphi–C++ bridge so the new list can be opened from legacy code. SQL migration scripts convert old group/register data to the new tree model. The redesign focuses on consistent UX, easier group handling and measurable performance improvements.",
    de: "Neuentwicklung der früheren 'Findliste Adressen' in C++/Qt zur Ablösung mehrerer Delphi-/C++-Implementierungen und zur Bereitstellung einer einheitlichen, performanten Adressliste. Funktionen: schnelle Suche und Filter mit seitenweiser (paginierter) Ladung, ein datenbankgestützter Filter-Cache zur Reduktion des Netzwerkverkehrs, eine hierarchische Baumstruktur für Adressgruppen, Mehrfachauswahl und verbesserte Zuordnung von Adressen/Ansprechpartnern zu Projekten oder Einträgen. Implementiert mit MVVM, einem Volltext-Suchservice und einer bidirektionalen Delphi-C++ Schnittstelle; SQL-Migrationsskripte konvertieren bestehende Gruppen/Register in das neue Baum-Modell. Fokus auf einheitlicher Bedienung, besserer Gruppenverwaltung und messbaren Performance-Verbesserungen.",
  },
  "projects.name14": {
    en: "Geodata Tool",
    de: "Geodaten-Tool",
  },
  "projects.desc14": {
    en: "Complete redevelopment of the Treesoft Geodata tool. The goal is a clear, intuitive map tool to visualize addresses and address groups on world and country maps, print maps and export locations as KML for Google Earth. Required work includes updating the postal-code database (including neighboring countries), creating internal SVG icons and adding a database-backed configuration and filter system. Key features: save window and column sizes, non-modal window listed in the app window list, named configurations with soft-delete and restore, per-filter icon/opacity/scale and color picker with previews, paginated loading and filter caching, show found/not-found counts, search and sort filters, temporary (non-persisted) single addresses, rights-controlled KML/Google Earth export, internal world/country map views and printable maps.",
    de: "Neuentwicklung des Treesoft Geodaten-Tools. Ziel ist ein klares, intuitiv bedienbares Werkzeug zur grafischen Darstellung einzelner Adressen und Adressgruppen auf Welt- und Länderkarten, mit Druckfunktion und Export als KML für Google Earth. Notwendig ist die Erneuerung der Postleitzahlen-Datenbank (inkl. Nachbarländer), die Erstellung interner SVG-Icons sowie ein datenbankgestütztes Konfigurations- und Filtersystem. Wichtige Funktionen: Speichern von Fenster- und Spaltengrößen, nicht-modales Fenster in der Fensterliste, benannte Konfigurationen mit Soft-Delete und Rücksetzung, pro Filter Icon/Transparenz/Skalierung und Farbauswahl mit Vorschau, seitenweises Laden und Cache für Filterergebnisse, Anzeige gefundener/nicht gefundener Adressen, Suche und Sortierung, temporäre (nicht persistente) Einzeladressen, rechtegesteuerter KML/Google-Earth-Export, interne Welt- und Länderkartenansichten sowie Druckfähigkeit der Karte.",
  },
  "projects.desc15": {
    en: "A C# library for reading Ragnarok Online GRF archive files. Supports lazy and eager loading, all major GRF versions (0x102, 0x103, 0x200), and loading collections of multiple GRF files in priority order, the same way the game client resolves them. Published as a NuGet package.",
    de: "Eine C#-Bibliothek zum Lesen von Ragnarok Online GRF-Archivdateien. Unterstützt Lazy- und Eager-Loading, alle gängigen GRF-Versionen (0x102, 0x103, 0x200) sowie das Laden von Sammlungen mehrerer GRF-Dateien in Prioritätsreihenfolge, genauso wie der Spielclient sie auflöst. Als NuGet-Paket veröffentlicht.",
  },
  "projects.desc16": {
    en: "A WPF desktop application for browsing and viewing items from Ragnarok Online. Loads item data directly from the game's GRF archives using the GRF library, and displays them in a sortable list with item details.",
    de: "Eine WPF-Desktop-Anwendung zum Durchsuchen und Anzeigen von Items aus Ragnarok Online. Liest Item-Daten direkt aus den GRF-Archiven des Spiels über die GRF-Bibliothek und zeigt sie in einer sortierbaren Liste mit Item-Details an.",
  },
  "skills.title": {
    en: "Skills",
    de: "Kenntnisse",
  },
  "skills.databases": {
    en: "Databases",
    de: "Datenbanken",
  },
  "skills.compilers": {
    en: "Compilers",
    de: "Compiler",
  },
  "skills.accessibility": {
    en: "Accessibility (WCAG)",
    de: "Barrierefreiheit (WCAG)",
  },
  "skills.german": {
    en: "German",
    de: "Deutsch",
  },
  "skills.english": {
    en: "English",
    de: "Englisch",
  },
  "skills.typeSystems": {
    en: "Type Systems",
    de: "Typsysteme",
  },
  "skills.codeGeneration": {
    en: "Code Generation",
    de: "Codegenerierung",
  },
  "contact.title": {
    en: "Contact",
    de: "Kontakt",
  },
  "contact.intro": {
    en: "Feel free to reach out via:",
    de: "Du kannst mich gerne erreichen über:",
  },
  "contact.emailLabel": {
    en: "E-mail:",
    de: "E-Mail:",
  },
  "contact.githubLabel": {
    en: "GitHub:",
    de: "GitHub:",
  },
  "contact.linkedinLabel": {
    en: "LinkedIn:",
    de: "LinkedIn:",
  },
  
};
