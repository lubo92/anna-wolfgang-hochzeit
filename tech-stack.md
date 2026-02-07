# Tech Stack

## Frontend

- **HTML5 + CSS3 + Vanilla JavaScript**
- Responsive Design (Mobile-first)
- Verspielte Animationen und Scroll-Effekte

## Hosting & Domain

- **GitHub Pages** (kostenlos)
- Domain: `<username>-hochzeit.github.io`
- HTTPS automatisch

## RSVP

- **Tally.so** (kostenlos, EU-Server)
- 2 separate Forms:
  - Form 1: Ganztags-Gäste (mit Kirchen- und Party-Transport)
  - Form 2: Abend-Gäste (nur Party-Transport)
- Integration: iframe
- Export: Google Sheets oder CSV

## Foto-Funktionalität

- **Cloudinary** (kostenlos, 25GB Storage)
- Upload Widget (kein Account für Gäste nötig)
- Live-Galerie (Fotos sofort sichtbar)
- Zugang: "versteckter" Link (kein Passwort)
- Display: lightGallery.js

## Zusätzliche Tools

- QRCode.js für QR-Code-Generierung
- Google Maps Embed für Anfahrt
- Leaflet (optional) für interaktive Karte

## Website-Struktur

```plain
/                  → Landing/Redirect
/ganztag           → Vollständiger Ablauf + Form 1
/abend             → Party-Infos + Form 2
/fotos             → Upload + Galerie
```

## Kosten

| Service | Kosten |
| --------- | -------- |
| GitHub Pages | 0€ |
| Tally.so | 0€ |
| Cloudinary | 0€ |
| **Total** | **0€** |

## Datenschutz

- Datenschutzerklärung auf Website
- Daten bei Tally.so (EU) und Cloudinary
- Löschung nach Hochzeit
