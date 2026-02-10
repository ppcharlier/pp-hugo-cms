---
title: "Virtuaalinen Työntekijä"
date: 2026-02-05
draft: false
episode: 6
series: "Juuripuutarha"
subtitle: "Tekoälyn verottaminen kuin työntekijä"
description: "Ja jos tekoäly joka korvaa työpaikkasi joutuisi maksamaan sosiaalisen vakuutuksen maksuja? Tutkimus tekoälyn verotusmalleista — tokeneittain, tunneittain, vaikutuksittain — ja niiden ekologisista ja humanistisista vaikutuksista."
categories: ["politiikka", "talous", "teknologia"]
tags: ["tekoäly", "verotus", "automatisointi", "työllisyys", "ekologia", "sosiaalivakuutusmaksut", "hiililuotot"]
sources:
  - "Bill Gates, haastattelu Quartz (2017) — World Economic Forum"
  - "Euroopan parlamentti, robottiveron hylkääminen (2017) — CNBC"
  - "Kang ja muut (2024): Korealaisen robottiveron vaikutukset"
  - "MIT Technology Review: AI's energy footprint (2025)"
  - "Carbon Brief: AI and data-centre energy (2025)"
  - "Nature Sustainability: Environmental impact of AI servers (2025)"
  - "Mongabay: Brazil carbon credit fraud investigation (2025)"
  - "Stanford Law: Should Robots Pay Taxes? (2018)"
---

> **Läpinäkyvyyden huomautus**
>
> Tämä kronikka on tuloksena yhteistyöstä ihmisen (Pépé) ja tekoälyn (Claude, Anthropic) välillä. Johtavat ideat, toimituksellinen linja ja lopullinen hyväksyntä ovat ihmisen tekemää. Dokumentaarinen tutkimus ja kirjoittaminen ovat tekoälyn avustamia.
>
> Koska tekoälyt voivat tuottaa epätarkkuuksia, **jokainen faktallinen väite on lähteistetty** tarkastettavista akateemisista, tietosanakirja- tai journalistiasiakirjoista. Lähteet on lueteltu artikkelin lopussa.
>
> Tämä teksti on vain sen ihmisellisen toimittajan vastuulla, joka ottaa sille vastuun.

---

Tällä viikolla luin että suuri yritys oli korvannut 700 työntekijää tekoälyllä. Ei tehdastöitä — kirjoittajia, analyytikkoja, luovia. Ja mielessäni pyöri: nämä 700 palkkaa eivät enää maksa sosiaalivakuutusmaksuja. Kuka maksaa?

Lähtein kaivamaan.

---

## I. Suuri Hiljainen Korvaus

Puhumme paljon teollisuustyöpaikkojen korvaamisesta roboteilla. Mutta todellinen mullistus on muualla: tekoäly hyökkää nyt kognitiivisen työn pariin. Kirjoittaminen, juridinen analyysi, lääketieteellinen diagnoosi, graafinen muotoilu, ohjelmoiminen — ammatit joiden ajattelimme olevan suojatut niiden intelektuaalisen monimutkaisuuden avulla.

Tutkimukset vaihtelevat laajuudessa: jotkut ennustavat 300 miljoonaa työpaikkaa maailmanlaajuisesti[^1], toiset ovat varovaisempia. Mutta yksi asia on varma: jokainen tekoälyn korvaamA työpaikka on palkka joka ei enää maksa maksuja.

Ei eläkemaksuja. Ei työttömyysmaksuja. Ei sairausmaksuja. Tekoäly työskentelee 24/7, ei koskaan sairasta, eikä rahoita mitään sosiaalisen suojan järjestelmää.

**Tämän artikkelin ensimmäinen punainen linja**: tämä kiire tekoälyn puoleen tapahtuu kysymättä sen todellista hintaa — ei sosiaalisesti, ei ympäristöllisesti. Optimoidaan voitot, ulkoistetaan seuraukset.

---

## II. Gatesin ehdotus: Perustavanlaatuinen idea

Vuonna 2017 Bill Gates esittää yksinkertaisen kysymyksen lehdessä Quartz: "Jos ihminen joka ansaitsee 50 000 dollaria verotetaan tuloista, miksi robottia joka tekee täsmälleen saman työn ei veroitettaisi?"[^2]

Gates selventää ettei idea ole kekseliäisyyden rankaiseminen vaan automatisaation hidastaminen antaakseen yhteiskunnille aikaa sopeutua, ja korvaavien työntekijöiden koulutukseen.

Samana vuonna Euroopan parlamentti hylkää "robottivero" -ehdotuksen. Väite? Pelko siitä että Eurooppa menettää kilpailukykyä USA:ta ja Kiinaa vastaan[^3].

Mutta yksi maa otti askelen: Etelä-Korea. Vuonna 2017 se vähensi verokannustimia automatisoinnille — epäsuora robottiverosta. Tutkimus Kang ja muut (2024) osoittaa että tämä toimenpide todellakin loi työpaikkoja ja vähensi epätasa-arvoa ilman merkittävää kilpailukyky-vaikutusta[^4].

**Kysymys nousee siis**: verotetaanko ihmistä mutta ei konetta joka hänet korvaa ja joka lisäksi kuluttaa luonnonvaroja?

---

## III. Verotusmallit: Edut ja rajat

Miten verotetaan tekoälyä? Taloustieteellis-oikeudellisessa kirjallisuudessa on ehdotettu useita malleja[^5]. Jokaisella on omat hyodyt ja puutteet.

### A. Verotus tokeneittain tai kyselyittäin

Idea: verotetaan jokaista tekoälyn käyttöä mitattuna tokeneissa (tekstiyksikköinä käsitelty) tai kyselyissä.

**Edut**: Täydellinen tekninen jäljitettävyys. Tekoälyn tarjoajien API laskee jo tokenit fakturointia varten.

**Rajat**:
- Oikeudellinen tokeni (monimutkainen sopimus) ei ole sama arvo kuin luova tokeni (mainoslause). Sektoriaalinen epäoikeudenmukaisuus.
- Tämä malli rankaisee tehokkuutta: tehokas malli joka vastaa vähemmillä tokeneilla maksaisi vähemmän kuin huono ja puhelias malli.
- Se suosii teknisiä jättiläisiä joilla on neuvotteluvoimaa mittakaavaetuja varten.

### B. Verotus säästettyjen työtuntien perusteella

Idea: arvioidaan kuinka monta ihmisen työtuntia tekoäly korvaa ja verotetaan vastaavasti.

**Edut**: Heijastaa suoraan työpaikkojen korvaamista. Käsitteellisesti oikeudenmukaista.

**Rajat**:
- Kuinka mitata? Kuinka monta ihmisen tuntia vastaa yhtä tekoälyn juridista, lääketieteellistä tai luovaa tuntia?
- Oma-ilmoitus avaa oven petokselle. Kuka tarkistaa?

### C. Verotus tuotetun liikevaihdon perusteella

Idea: yritys joka käyttää tekoälyä tulojen tuottamiseen maksaa suhteellisen veron.

**Edut**: Suhteellinen luodun arvon kanssa. Käsitteellisesti yksinkertainen.

**Rajat**:
- Attribuointi on vaikea: mikä osuus liikevaihdosta johtuu tekoälystä vs ihmisistä?
- Klassinen veroväistö: voittojen siirtäminen, transferhinnat.

### D. Hybridi malli: "Virtuaalinen Maksu"

Nouseva ehdotus[^6]: käsitellään tekoälyä kuin "virtuaalista työntekijää" jolla on sosiaalinen maksu laskettu:
- Prosentti tekoälyn käyttökustannuksista
- Indeksoitu korvaavan sektorin mediaanipalkkaan
- Jaettu koulutukseen, ammattinvaihtoon, mahdollisesti universaaliseen peruspalkkaan

Tällä mallilla on filosofisen johdonmukaisuuden ansio: jos tekoäly tekee ihmisen työtä, sen tulisi makaa kuin ihminen.

---

## IV. Ekologinen yhtälö: Piilotettu hinta

**Tässä toinen punainen linja**: tekoälyn ympäristökustannusta jätetään systemaattisesti huomiotta verotuskeskusteluissa.

Numerot ovat huimaavat:
- Maailmanlaajuinen datacenter-sähkökulutus voisi saavuttaa **945 TWh vuoteen 2030** — vastaa Japanin kokonaiskulutusta[^7].
- Tekoäly edustaa nyt 5-15% tästä kulutuksesta mutta voisi saavuttaa **35-50% vuoteen 2030**[^8].
- Tekoälyn hiilijalanjälki vuonna 2025 on arvioitu **32,6-79,7 miljoonan tonnia CO2:ta**[^9].
- Goldman Sachsin mukaan **60% lisäsähköstä** joka tarvitaan datacentereille tulee fossiilisista energialähteistä[^10].
- Yhden tekoälyllä muodostetun kuvan tuottaminen kuluttaa yhtä paljon energiaa kuin **täydellinen älypuhelimen lataus**[^11].

Nämä numerot esittävät perustavanlaatuisen kysymyksen: voidaanko oikeuttaa tämä ekologinen jalanjälki tuottavuuden voitoille joiden hyödyt kaappaa muutama yritys?

**Rehellinen tekoälyverro tulisi sisältää ympäristökomponentin**: bonus-malus järjestelmä energiatehokkuuden mukaan, datacenterin sähkömix, avoimuus hiilijalanjäljestä.

---

## V. Hiililuottojen petos

Tekoälyn jättiläiset väittävät usein olevansa "hiiliekvivalentin" hiilineutraalit ostamalla hiililuottoja. Mutta mitä näiden luottojen arvo on?

Marraskuussa 2024 "Greenwashing" -operaatio Brasiliassa syytti 31 henkilöä 180 miljoonan realin petoksesta harhaanjohtavista hiililuotoista[^12].

Vielä vakavampaa: tutkimus 2023 arvioi että **vain 12% hiililuotoista vastaa todellista päästöjen vähentämistä**[^13]. Loput? Paperia, metsiä joita olisi säästetty joka tapauksessa, hylättyjä projekteja.

Tekoälyn jättiläiset eivät voi "kompensoida" hiilijalanjälkensä epävarmoilla offset-hankinnoilla. Se on luovia kirjanpitoa, ei ekologiaa.

**Kysymys muuttuu siis**: voiko tekoälyverro olla rehellisempi kuin hiililuotot? Voiko se rahoittaa todellisia muutoksia paremmin kuin virtuaaliset todistukset?

---

## VI. Kuka maksaa? Kuka kerää?

Tekoälyveron soveltaminen nostaa hurjia käytännön kysymyksiä.

**Kuka maksaa?**
- Loppukäyttäjä (yritys joka käyttää ChatGPT:tä korvatakseen kirjoittajansa)?
- Tekoälyn tarjoaja (OpenAI, Anthropic, Google)?
- Työnantaja joka säästää palkkoissa?

**Kuka kerää?**
- Valtio jossa yritys on perustettu?
- Valtio jossa tekoälyä "työskennetään"?
- Lainkäyttöalue jossa palvelin sijaitsee?

Tekoälyagentti voi työskennellä samanaikaisesti 50 maan yrityksille 51. palvelimen sijaintipaikan sijaintisista. "Työpaikka" -käsite romahtaa.

Ennakkotapaukset eivät ole kannustavia. GAFA-vero osoitti kansainvälisen verotusyhteistyön vaikeuden. EU:n AI Act 2024 sääntelee tekoälyn eettisyyttä mutta ei sen verotuista[^14].

---

## VII. Humanistinen argumentti: Miksi säilyttää työpaikat

Talouden lisäksi on sivilisaation kysymys.

Työ ei ole vain ajan vaihto rahaksi. Se on sosiaalinen suhde, kunniakkuuden lähde, merkityksen rakenne. Pitkäaikaisen työttömyyden tutkimukset osoittavat sen tuhoja mielenterveydessä, paljon enemmän kuin vain tulojen menetys.

Tekoäly voi vapauttaa aikaa — mutta kenelle? Mihin? Jos tekoäly työskentelee ja voitot menevät muutamille osakkeenomistajille, mitä yhteiskunta hyötyy?

Automatisoinnin vaaraan hinnalla: sekoittaa **tehokkuuden** ja **ihmisen edistyksen**. Yhteiskunta jossa tekoäly tuottaa kaiken mutta ihmisellä ei ole enää roolia ei ole edistystä — se on dystopia.

---

## Kysymys jonka jätän teille

Haluammeko yhteiskuntaa jossa tekoäly työskentelee jotta ihminen kuluttaa? Vai yhteiskuntaa jossa tekoäly avustaa ihmistä jotta hän voi luoda, hoitaa, opettaa, keksiä?

Vastaus tähän kysymykseen määrittää onko tekoälyverotus vain kirjanpidon mittaus vai sivilisaation valinta.

Kirjoittakaa minulle. Puutarha on suuri ja nämä juuret kulkevat syvälle.

---

*Pépé*

---

## Lähteet

[^1]: Goldman Sachs, "The Potentially Large Effects of Artificial Intelligence on Economic Growth", 2023.

[^2]: Bill Gates, haastattelu Quartz, helmikuu 2017; World Economic Forum, "Bill Gates: This is why we should tax robots", 2017.

[^3]: CNBC, "Bill Gates' robot tax idea gets rejected by European Union", kesäkuu 2017.

[^4]: Kang ja muut, "Effects of Robot Tax: Evidence from South Korea", 2024, lainaus Wikipediasta "Robot tax".

[^5]: Stanford Law School, "Should Robots Pay Taxes?", Robot Conference 2018; Frontiers in Artificial Intelligence, "Inclusive Growth in the Era of Automation and AI", 2022.

[^6]: Tax Notes, "Robot Tax Proposals for Legislative Review", marraskuu 2025.

[^7]: Carbon Brief, "AI: Five charts that put data-centre energy use and emissions into context", 2025.

[^8]: MIT Technology Review, "AI's energy usage and climate footprint", toukokuu 2025.

[^9]: Nature Sustainability, "Environmental impact and net-zero pathways for AI servers in the USA", 2025.

[^10]: Goldman Sachs, "Generational Growth: AI, data centers, and the coming US power demand surge", 2024.

[^11]: MIT News, "Explained: Generative AI's environmental impact", tammikuu 2025.

[^12]: Mongabay, "Brazil charges 31 people in major carbon credit fraud investigation", marraskuu 2025.

[^13]: Tutkimus lainattuna ScienceDirect, "Scandals and greenwashing in carbon offset markets", 2025; eri akateemiset lähteet.

[^14]: EU AI Act, Regulation (EU) 2024/1689, kesäkuu 2024.
