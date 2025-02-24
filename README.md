# Wochenplan-Angular-Projekt

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.8.

1. [Beschreibung](#Beschreibung)
2. [Hauptmerkmale](#Hauptmerkmale)
3. [Struktur_des_Projekts](#Struktur_des_Projekts)
4. [Basisdateien_und_ihr_Zweck](#Basisdateien_und_ihr_Zweck)
5. [Anwendung_starten](#Anwendung_starten)


## Beschreibung


Meal Plan ist eine Webanwendung, die einen wöchentlichen Essensplan anzeigt. Die Daten werden über eine HTTP-Anfrage empfangen und in einer dynamischen Tabelle angezeigt.

## Hauptmerkmale

- Herunterladen des Menüs von der API https://my.qnips.io/dbapi/ha
- Anzeige der Allergene in Form von Labels
- Automatische Bestimmung der Woche (KW)
- Hinzufügen eines Datums unter den Wochentagen
- Responsive Tabelle mit Unterstützung für mobile Geräte
- Dynamischer Hintergrund, der sich auf mobilen Geräten ändert

## Struktur_des_Projekts
```
meal-plan-angular-master/
│── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── meal-table/
│   │   │   │   ├── meal-table.component.html
│   │   │   │   ├── meal-table.component.ts
│   │   │   │   ├── meal-table.component.spec.ts
│   │   │   │   ├── meal-table.component.css
│   │   ├── services/
│   │   │   ├── meal.service.ts
│   │   ├── app.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.spec.ts
│   │   ├── app.component.сss
│   │   ├── app.component.html
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── app-routing.module.ts
│   ├── assets/
│   │   ├── images/
│   │   │   ├── background.jpg
│   │   │   ├── bg-vertical.jpg
│   ├── index.html
│   ├── styles.css
├── angular.json
├── package.json
├── README.md
```

## Basisdateien_und_ihr_Zweck

- ```meal-table.component.ts``` - holt und zeigt das Menü an;
- ```meal-table.component.html``` - Struktur der Tabelle;
- ```meal-table.component.css``` - Tabellenstile;
- ```meal.service.ts``` - Dienst für den Empfang von Daten von der API;
- ```app.module.ts``` - das Hauptmodul der Anwendung;
- ```index.html``` - HTML-Startseite;
- ```angular.json``` - Konfiguration des Angular-Projekts;
- ```styles.css``` - globale Stile;

## Anwendung_starten

### 1. Projekt im Entwicklungsmodus starten:###
```ng serve```

Standardmäßig wird die Anwendung unter http://localhost:4200/ geöffnet

### 2.Server auf einer anderen Portnummer starten: ###

```ng serve --port=4300```

