# Documentation — Landing Page
## Impresa Edile La Martina Srls
*Testi completi ottimizzati per la conversione · Struttura template Amporia*

---

> **Stack tecnologico di riferimento**
> - **Framer Motion 12** — animazioni e micro-interazioni (indicazioni inline per ogni sezione)
> - **Heroicons** — libreria icone SVG (versione outline/solid indicata per ogni elemento)
> - **Tailwind CSS 4.1+** — utility classes per layout, colori, tipografia e stati interattivi
> - **Font:** Inter (Google Fonts, weights 300/400/500/600/700)
> - **Palette:** `#9ccc98` accent primario · `#2d4a2b` scuro · `#f5a623` CTA · `#f7f4ef` sfondo chiaro

---

## 1. HEADER / NAVIGATION BAR

**Posizione:** Sticky top · sfondo `#2d4a2b` semi-trasparente (opacity 0.95) + backdrop blur 12px

### Logo (sinistra)
```
[Icona: Heroicons — home-modern, outline, colore #9ccc98, 28px]
La Martina
```
- Wordmark: **"La Martina"** · Inter 700 · colore `#fff`
- Sotto il wordmark (opzionale, desktop only): `Impresa Edile` · Inter 400 · 11px · `rgba(255,255,255,0.5)`

### CTA Button (destra)
```
[Icona: Heroicons — phone, solid, 16px]  Richiedi Preventivo
```
- Background: `#9ccc98` · testo: `#2d4a2b` · pill shape · Inter 600 · 14px
- Hover: `translateY(-2px)` + `box-shadow: 0 8px 20px rgba(156,204,152,0.35)`
- **Framer Motion:** `whileHover={{ y: -2 }}` · `transition={{ duration: 0.2 }}`
- Anchor: `#contact`

---

## 2. HERO SECTION

**Background gradient:** `linear-gradient(135deg, #0d1f0e 0%, #1a3a2e 50%, #0f2619 100%)`
**Overlay radial:** radial verde su `#9ccc98` con opacità 0.10–0.08

### Top Tag Line
```
RISTRUTTURAZIONI · TETTI · FACCIATE · FOTOVOLTAICO — LIMBIATE E PROVINCIA
```
- Uppercase · letterspacing 2.5px · Inter 600 · 11px · `rgba(255,255,255,0.6)`
- **Framer Motion:** `initial={{ opacity: 0, y: 10 }}` → `animate={{ opacity: 1, y: 0 }}` · delay 0.1s

### Main Heading (H1)
```
La tua casa merita
chi ci mette la faccia.
```
- "chi ci mette la faccia." → testo accent con gradient `linear-gradient(120deg, #9ccc98, #c5e0c3)`
- Inter 300 · 88px desktop / 64px tablet / 48px mobile · line-height 1.1
- **Framer Motion:** `initial={{ opacity: 0, y: 24 }}` → `animate={{ opacity: 1, y: 0 }}` · delay 0.25s · spring

> **Nota copy:** Il claim è volutamente diretto e umano. "Metterci la faccia" evoca responsabilità, presenza fisica e serietà — valori centrali del brand. Il doppio senso (facciata dell'edificio + faccia = persona) è intenzionale e memorabile.

### Subtitle
```
Ristrutturazioni, tetti, facciate e fotovoltaico con un team completo al tuo fianco:
progettista, avvocato, commercialista e servizi del credito.
Zero subappalti. Tutto seguito da noi, dalla progettazione alla consegna.
```
- Inter 400 · 17px · line-height 1.6 · `rgba(255,255,255,0.75)` · max-width 600px · centrato
- **Framer Motion:** `initial={{ opacity: 0, y: 16 }}` → `animate={{ opacity: 1, y: 0 }}` · delay 0.4s

### Category Pills
```
🏠  Ristrutturazioni
🔺  Tetti e Coperture
🏢  Facciate & Cappotto
☀️  Fotovoltaico
🛡️  Polizza Inclusa
```
- 5 pills · Inter 500 · 13px · border `rgba(255,255,255,0.2)` · background `rgba(255,255,255,0.1)` · backdrop-blur 8px
- **Framer Motion:** `staggerChildren: 0.08` · ogni pill `initial={{ opacity: 0, scale: 0.9 }}` → `animate={{ opacity: 1, scale: 1 }}`
- **Heroicons per pill:** usa `CheckBadgeIcon` (solid, 14px, `#9ccc98`) come decoratore opzionale a sinistra del testo

---

## 3. CARDS SECTION (Hero Cards)

*3 card con overlap negativo sulla hero (-120px). Immagini reali richieste: cantiere ristrutturazione, rifacimento tetto, pannelli fotovoltaici. Aspect ratio 3:4.*

**Framer Motion sull'intera sezione:** `whileInView={{ opacity: 1, y: 0 }}` · `initial={{ opacity: 0, y: 40 }}` · viewport once · stagger 0.15s tra le card.

---

### Card 1 — Ristrutturazioni

**Immagine di sfondo:** Foto reale di un appartamento ristrutturato, finiture moderne, luce naturale. (Placeholder: gradient blu come da template → sostituire)

**Tag categoria:**
```
RISTRUTTURAZIONI
```
- Uppercase · letterspacing 1.5px · `rgba(255,255,255,0.8)` · 11px

**Titolo card:**
```
Ristrutti. Noi
progettiamo tutto.
```
- Inter 600 · 24px · `#fff` · max-width 200px

**CTA Link:**
```
Scopri il servizio  →
```
- Anchor: `#solutions`
- **Heroicons:** `ArrowRightIcon` (16px, inline) al posto del `→` testuale

---

### Card 2 — Tetti e Coperture

**Immagine di sfondo:** Foto di tetto rifatto, tegole nuove, operai in sicurezza. (Placeholder: gradient blu scuro → sostituire)

**Tag categoria:**
```
TETTI & COPERTURE
```

**Titolo card:**
```
Dal sopralluogo
alla garanzia scritta.
```

**CTA Link:**
```
Scopri il servizio  →
```

---

### Card 3 — Fotovoltaico

**Immagine di sfondo:** Pannelli fotovoltaici su tetto residenziale, cielo sereno, impianto curato. (Placeholder: gradient ambra → sostituire)

**Tag categoria:**
```
FOTOVOLTAICO & IMPIANTI
```

**Titolo card:**
```
Energia pulita,
pratiche incluse.
```

**CTA Link:**
```
Scopri il servizio  →
```

---

## 4. STATS SECTION

**Background:** `linear-gradient(180deg, #0a1f14 0%, #1a3a2e 100%)`
**Framer Motion:** ogni colonna `whileInView` con `initial={{ opacity: 0, y: 30 }}` → stagger 0.2s

---

### Colonna 1 — Statistica principale

**Numero:**
```
50km
```
- Inter 300 · 78px · `#fff` · line-height 1

**Descrizione:**
```
Il raggio operativo dalla nostra sede di Limbiate.
Interveniamo in tutta la provincia di Monza e Brianza
e nelle aree limitrofe di Milano e Varese.
```
- Inter 400 · 16px · `rgba(255,255,255,0.75)` · max-width 280px

**Link Esplora:**
```
Verifica se operiamo nella tua zona  →
```
- Anchor: `#contact`
- **Heroicons:** `MapPinIcon` (outline, 14px) prima del testo

---

### Colonna 2 — Statistica secondaria

**Numero:**
```
100%
```
- Inter 300 · 78px · `#fff`

**Descrizione:**
```
Gestione diretta di ogni cantiere.
Nessun subappalto: il nostro team lavora
dalla progettazione alla consegna delle chiavi.
```
- Inter 400 · 16px · `rgba(255,255,255,0.75)` · max-width 280px

**Link Esplora:**
```
Come lavoriamo  →
```
- Anchor: `#solutions`
- **Heroicons:** `WrenchScrewdriverIcon` (outline, 14px) prima del testo

---

### Colonna 3 — Testimonial Box

**Background card:** `rgba(255,255,255,0.05)` · border `rgba(255,255,255,0.1)` · border-radius 16px · backdrop-blur 8px

**Icona virgolette:**
```
"
```
- Colore: `#9ccc98` · font-size 36px
- **Alternativa Heroicons:** `ChatBubbleBottomCenterTextIcon` (solid, 32px, `#9ccc98`)

**Testo testimonial:**
```
"Abbiamo rifatto il tetto del condominio di via Manzoni.
La Martina ha gestito tutto: i permessi, l'assemblea condominiale,
i lavori e le detrazioni fiscali. Mai più senza di loro."
```
- Inter 400 · 16px · line-height 1.7 · `rgba(255,255,255,0.85)`

**Avatar placeholder:** 3 cerchi sovrapposti · gradient `#9ccc98 → #c5e0c3`
*(sostituire con foto reali dei clienti con consenso)*

**Nome + Ruolo:**
```
Marco R. — Amministratore condominiale, Desio · 2024
```
- Inter 600 · 13px · `#fff`

---

## 5. CTA BANNER

**Background:** `linear-gradient(180deg, #1a3a2e 0%, #0a1f14 100%)`

**Testo link:**
```
Scopri tutti i servizi de La Martina  →
```
- Inter 600 · 15px · `#fff`
- Anchor: `#solutions`
- **Framer Motion:** `whileHover={{ x: 4 }}` sull'icona freccia per effetto slide
- **Heroicons:** `ArrowLongRightIcon` (20px, inline) al posto del `→`

---

## 6. PARTNERS SECTION

**Background:** `#f7f4ef`
**Heading:**
```
Un team professionale completo, tutto in casa.
```
- Inter 400 · 15px · centrato · `rgba(0,0,0,0.5)` · margin-bottom 48px

**5 "loghi" (placeholder testuale → sostituire con loghi reali se disponibili):**
```
PROGETTAZIONE    LEGALE    FISCALE    CREDITO    ASSICURAZIONE
```

> **Nota visiva:** In assenza di loghi partner esterni, questa sezione può essere reinterpretata come **"Il tuo team in un solo cantiere"** con 5 icone Heroicons in riga, ognuna con label breve sotto. Questo differenzia ulteriormente La Martina dalla concorrenza.

**Icone suggerite (Heroicons outline, 36px, colore `#2d4a2b`, opacity 0.5 → 0.9 su hover):**
- `PencilSquareIcon` → Progettazione
- `ScaleIcon` → Consulenza Legale
- `CalculatorIcon` → Fiscale & Detrazioni
- `CreditCardIcon` → Servizi del Credito
- `ShieldCheckIcon` → Polizza Assicurativa

**Framer Motion:** `whileInView` fade-in stagger 0.1s per ogni logo/icona

---

## 7. IMPACT NUMBER SECTION

**Background:** `#fff`

**Grande numero:**
```
150m²
```
- Inter 300 · 140px desktop / 80px mobile · `#1a1a1a` · letterspacing -2px
- **Framer Motion:** `useInView` + counter animato da 0 a 150 · duration 1.8s · easing `easeOut`

**Subtitle con icona:**
```
🏢  Il nostro ufficio con vetrina su strada a Limbiate — vieni a trovarci, siamo qui.
```
- Inter 400 · 16px · `rgba(0,0,0,0.6)` · centrato · margin-top 20px
- **Heroicons:** sostituire emoji con `BuildingOffice2Icon` (solid, 20px, `#9ccc98`)

> **Perché questo numero:** 150m² di sede fisica trasmette solidità, presenza reale, struttura consolidata. È un segnale di fiducia fortissimo in un settore dove molte imprese non hanno nemmeno un ufficio fisso.

---

## 8. SOLUTIONS CARDS SECTION

**ID:** `#solutions`
**Background:** `#f7f4ef`
**Layout:** Grid 2 colonne desktop / 1 colonna mobile

**Framer Motion:** `whileInView` · `initial={{ opacity: 0, y: 20 }}` → stagger 0.2s tra le due card

---

### Solution Card 1 — Ristrutturazioni, Tetti e Facciate

**Icona:**
- `HomeModernIcon` (Heroicons solid, 28px, `#fff`)
- Sfondo icona: gradient `linear-gradient(135deg, #9ccc98, #c5e0c3)` · border-radius 12px · 60×60px

**Categoria:**
```
— EDILIZIA RESIDENZIALE & CONDOMINIALE
```
- Uppercase · letterspacing 1.5px · `rgba(0,0,0,0.5)` · 12px

**Titolo:**
```
Ristrutturazioni, Tetti
e Facciate chiavi in mano.
```
- Inter 600 · 28px · `#1a1a1a`

**Descrizione:**
```
Gestiamo ogni intervento dall'inizio alla fine: progettazione, direzione lavori,
pratiche burocratiche e fiscali. Appartamenti, ville, condomini e immobili commerciali.
Lavoriamo solo con il nostro team — nessun subappalto, nessuna sorpresa.

Il nostro progettista interno elabora il progetto. Il nostro avvocato amministrativista
gestisce i permessi. Il nostro commercialista ottimizza le detrazioni fiscali (50%, Ecobonus,
Sismabonus). Tu pensi solo al risultato finale.
```
- Inter 400 · 16px · line-height 1.7 · `rgba(0,0,0,0.7)`

**CTA Link:**
```
Richiedi il sopralluogo gratuito  →
```
- Anchor: `#contact`
- **Heroicons:** `ArrowRightIcon` (16px, inline)
- **Framer Motion:** `whileHover={{ x: 4 }}` sull'icona

---

### Solution Card 2 — Fotovoltaico e Team Multidisciplinare

**Icona:**
- `SunIcon` (Heroicons solid, 28px, `#fff`)
- Sfondo: gradient `linear-gradient(135deg, #f5a623, #f7c96a)` · 60×60px

**Categoria:**
```
— FOTOVOLTAICO & SERVIZI INTEGRATI
```

**Titolo:**
```
Impianto fotovoltaico
e tutto quello che serve.
```

**Descrizione:**
```
Pannelli fotovoltaici, batterie di accumulo, colonnine di ricarica EV, impianti elettrici
e termici. Gestiamo gli incentivi GSE, le pratiche con il gestore di rete e l'allaccio
alla rete elettrica. Dalla progettazione alla messa in funzione.

E se hai bisogno di un mutuo o finanziamento per i lavori? Anche quello è gestito
internamente dal nostro esperto di servizi del credito. Un unico referente per tutto.
```

**CTA Link:**
```
Scopri come funziona  →
```
- Anchor: `#contact`

---

## 9. CONTACT FORM SECTION

**ID:** `#contact`
**Background:** `#fff`

### Form Heading
```
Richiedi il Sopralluogo Gratuito
```
- Inter 600 · 40px · centrato · `#1a1a1a`
- **Framer Motion:** `initial={{ opacity: 0, y: 16 }}` → `whileInView={{ opacity: 1, y: 0 }}`

### Form Subtitle
```
Nessun impegno, nessun costo nascosto.
Operiamo entro 50 km da Limbiate — ti ricontattiamo entro 24 ore.
```
- Inter 400 · 16px · centrato · `rgba(0,0,0,0.6)` · margin-bottom 40px

---

### Campi del Form

| # | Label | Tipo | Placeholder | Required |
|---|---|---|---|---|
| 1 | Nome completo | text | Es. Mario Rossi | ✅ |
| 2 | Email | email | Es. mario@email.com | ✅ |
| 3 | Telefono | tel | Es. 333 123 4567 | ✅ |
| 4 | Azienda / Condominio *(opzionale)* | text | Es. Condominio Via Roma 12 | ❌ |
| 5 | Tipo di intervento | select | Seleziona il servizio... | ✅ |
| 6 | Messaggio | textarea | Descrivici brevemente il lavoro... | ✅ |

**Opzioni select — "Tipo di intervento":**
```
— Seleziona il servizio —
Ristrutturazione appartamento / villa
Rifacimento o riparazione tetto
Facciata e cappotto termico
Impianto fotovoltaico
Più servizi combinati
Altro
```

**Focus state:** border-color `#9ccc98` · background `#fff`

---

### Privacy Checkbox
```
☐  Ho letto e accetto la Privacy Policy e i Termini di Servizio.
    I tuoi dati sono al sicuro e non verranno condivisi con terzi.
```
- Inter 400 · 13px · `rgba(0,0,0,0.7)` · line-height 1.5
- "Privacy Policy" → link con colore `#9ccc98`

---

### Submit Button
```
📋  Invia Richiesta — Ti richiamiamo entro 24h
```
- Background: gradient `linear-gradient(135deg, #9ccc98, #c5e0c3)` · testo `#2d4a2b`
- Inter 600 · 16px · full-width · border-radius 12px
- **Heroicons:** `PaperAirplaneIcon` (solid, 18px) a sinistra del testo
- **Framer Motion:** `whileHover={{ y: -2 }}` + `box-shadow: 0 8px 24px rgba(156,204,152,0.4)`
- **Loading state:** spinner animato + testo "Invio in corso..." durante il submit

---

### Trust Signal sotto il form
```
🔒  Dati protetti e mai condivisi  ·  📍  Sede fisica a Limbiate  ·  ⚡ Risposta entro 24h
```
- Inter 400 · 13px · `rgba(0,0,0,0.5)` · centrato · flex row con gap
- **Heroicons:** `LockClosedIcon`, `MapPinIcon`, `BoltIcon` (outline, 14px, `#9ccc98`)

---

## 10. FOOTER

**Background:** `#1a1a1a`

### Links Row
```
Privacy Policy  |  Cookie Policy
```
- Inter 500 · 14px · `rgba(255,255,255,0.7)` → `#fff` su hover

### Powered By
```
powered by meravigliäLab
```
- Inter 400 · 13px · `rgba(255,255,255,0.5)`

---

## RIEPILOGO ANIMAZIONI FRAMER MOTION 12

| Elemento | Animazione | Trigger |
|---|---|---|
| Top tag line | fade-in + slide-up (y: 10→0) | mount, delay 0.1s |
| H1 headline | fade-in + slide-up (y: 24→0) | mount, delay 0.25s, spring |
| Subtitle | fade-in + slide-up (y: 16→0) | mount, delay 0.4s |
| Category pills | stagger scale-in (0.9→1) | mount, stagger 0.08s |
| Hero cards | stagger fade + slide-up | whileInView, stagger 0.15s |
| Stats colonne | stagger fade + slide-up | whileInView, stagger 0.2s |
| Impact number | counter 0→150 | useInView, duration 1.8s |
| Solution cards | fade + slide-up | whileInView, stagger 0.2s |
| Partner icons | stagger fade | whileInView, stagger 0.1s |
| Form container | fade + slide-up | whileInView |
| Submit button | translateY(-2px) su hover | whileHover |
| CTA nav button | translateY(-2px) su hover | whileHover |
| Freccia nei link | translateX(+4px) su hover | whileHover (solo icona) |

---

## RIEPILOGO HEROICONS UTILIZZATI

| Sezione | Icona | Variante | Dimensione |
|---|---|---|---|
| Header — logo | `HomeModernIcon` | outline | 28px |
| Header — CTA | `PhoneIcon` | solid | 16px |
| Stats — zona | `MapPinIcon` | outline | 14px |
| Stats — metodo | `WrenchScrewdriverIcon` | outline | 14px |
| Stats — testimonial | `ChatBubbleBottomCenterTextIcon` | solid | 32px |
| CTA banner | `ArrowLongRightIcon` | outline | 20px |
| Partners — progettazione | `PencilSquareIcon` | outline | 36px |
| Partners — legale | `ScaleIcon` | outline | 36px |
| Partners — fiscale | `CalculatorIcon` | outline | 36px |
| Partners — credito | `CreditCardIcon` | outline | 36px |
| Partners — assicurazione | `ShieldCheckIcon` | outline | 36px |
| Impact section | `BuildingOffice2Icon` | solid | 20px |
| Solution card 1 | `HomeModernIcon` | solid | 28px |
| Solution card 2 | `SunIcon` | solid | 28px |
| Solution links | `ArrowRightIcon` | outline | 16px |
| Form — submit | `PaperAirplaneIcon` | solid | 18px |
| Form — trust | `LockClosedIcon` | outline | 14px |
| Form — trust | `MapPinIcon` | outline | 14px |
| Form — trust | `BoltIcon` | outline | 14px |

---

## CHECKLIST CONTENUTI DA COMPLETARE

Prima del go-live, sostituire i seguenti placeholder:

- [ ] Logo SVG/PNG definitivo (header)
- [ ] 3 foto reali per le hero cards (aspect ratio 3:4, min 800×1067px)
- [ ] Foto team / ufficio / cantieri (sezione stats o about opzionale)
- [ ] Testimonial reale con nome, città e consenso scritto
- [ ] Valutazione Google My Business aggiornata
- [ ] Indirizzo sede completo (footer + form trust signal)
- [ ] Numero di telefono (header CTA + form)
- [ ] Email di ricezione form
- [ ] Endpoint backend per submit form
- [ ] URL Privacy Policy e Cookie Policy (footer)
- [ ] P.IVA (footer — opzionale)
- [ ] Anni di attività o anno fondazione (da inserire eventualmente nelle stats)

---

## NOTE PALETTE — ADATTAMENTO AL BRAND LA MARTINA

Sostituire nel template i colori di default con:

| Token template | Valore La Martina |
|---|---|
| `#4CAF50` (accent primario) | `#9ccc98` |
| `#81C784` (accent secondario) | `#c5e0c3` |
| `#0a1f14` (scuro base) | invariato ✅ compatibile |
| `#1a3a2e` (scuro mid) | invariato ✅ compatibile |
| gradient CTA buttons | `linear-gradient(135deg, #9ccc98, #c5e0c3)` |
| submit button gradient | `linear-gradient(135deg, #9ccc98, #c5e0c3)` · testo `#2d4a2b` |
| CTA nav button | background `#9ccc98` · testo `#2d4a2b` |
| focus state form | border-color `#9ccc98` |

**Colore CTA principale (bottone "Richiedi Preventivo" e azioni primarie ad alta priorità):**
`#f5a623` (ambra dorata) · testo `#2d4a2b` — da usare per il bottone principale nella hero e nelle sezioni su sfondo scuro dove il verde rischia di perdersi.

---

*Documento preparato da meravigliäLab per Impresa Edile La Martina Srls*
*Versione 1.0 — Giugno 2025*
