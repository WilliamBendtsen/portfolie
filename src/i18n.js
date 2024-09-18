// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    dk: {
      translation: {
        nav: {
          aboutMe: "Om Mig",
          skills: "Evner",
          projects: "Projekter",
          experience: "Hvem er jeg?",
          contact: "Hvorfor ansætte mig?",
        },
        hero: {
          intro1: "Hej, mit navn er William",
          intro2:
            "Jeg laver hjemmesider, dine brugere  ikke har lyst til at klikke væk fra",
          projects: "Mine projekter er hernede",
          techStack: "Og mere på vej...",
        },
        project1: {
          title: "Projekter:",
          h3: "Four Amigos Taco & Tequila",
          p: "Med et fokus på en autentisk spiseoplevelse, skaber denne hjemmeside en atmosfære, der indsætter brugeren i den mexicanske verden. Dette er gjort gennem farver og typografi",
          programs: "Programmer brugt:",
        },
        project2: {
          h3: "Steno Museum Interaktivt Eventyr",
          p: "Med et fokus på storytelling, og at lære børn om månen og universet, følger denne historie Astro Alex på hans rejse mod det uendelige univers",
        },
        project3: {
          h3: "Trøjborg Bryg - Fiktivt Alkoholfrit Bryggeri",
          p: "For dette fiktive bryggeri, var målet at skabe en moderne, minimlistisk hjemmeside, målrettet mod den alt for ofte alkoholiske ungdom nu til dags, og for at få alkoholfrit øl til at se mere attraktivt ud for denne målgruppe ",
        },
        project4: {
          h3: "Nippon - Fiktivt Måltidskasse-Firma",
          p: "For dette fitive måktidskassefirma, var målet at skabe en atmosfære så tæt på den asiatiske kultur som muligt, men stadig appellere til det store europæiske og amerikanske publikum for asiatisk madkultur. Dette var opnået gennem typografi, farver og komposition",
        },
        skills: {
          h2: "Mine evner som udvikler:",
          htmlCss:
            "På det første år af min Multimediedesigner uddannelse fik jeg skabt en stærkt grundlæggende forståelse for html & css. Da vi lærte om begge to på samme tid, har jeg fået en god forståelse for samarbejdet mellem de to sprog, og deres placering i det store billede, samt samarbejdet mellem disse 2 sprog, og de andre jeg kender til",
          javascript:
            "På andet semester af min uddannelse blev jeg introduceret til javascript. Det er et sprog jeg stadig er i gang med at lære, siden det er meget relevant i forhold til React, men det er også et sprog jeg allerede har skabt et godt kendskab til, og er i stand til at løse de fleste opgaver der indebærer sproget",
          react:
            "Jeg er i øjeblikket stadig i gang med at lære React, og har allerede dannet en god forståelse for hvordan sproget hænger sammen, og hvad det er i stand til at skabe. På trods af min manglende information, er det en egenskab jeg er flittigt i gang med at forbedre, dag for dag",
        },
        aboutMe: {
          h2: "Min historie",
          p1: "Lige siden jeg var helt lille har jeg haft en interesse for teknologi. Computerspil og opkomsten af de sociale medier som vi kender dem i dag, har begge bidraget til min interesse i at finde ud af hvordan ting hænger sammen. ",
          p2: "Denne nysgerrighed har dog aldrig forsvundet, og var en stor grund til at jeg valgte Multimediedesigner uddannelsen, for at fordybe mig i frontend-udvikling",
          p3: "Nu ligger mit fokus på at færdiggøre min uddannelse, og blive så skarp på alle elementerne af frontend-udvikling, at du ikke vil kunne nænne at sige nej til hvad jeg har at tilbyde",
        },
        contact: {
          h2: "Hvorfor skal du ansætte mig?",
          timeTitle: "Fleksibel med tid",
          timeText:
            "Jeg kan arbejde på hvilket som helst tidspunkt på dagen, hvilken som helst dag om ugen",
          socialTitle: "Sociale Evner",
          socialText:
            "Jeg er dygtig til at skabe sunde relationer med folkene omkring mig, fremmede eller ej, professionelt eller socialt",
          locationTitle: "Arbejdslokation",
          locationText:
            "Det er ligegyldigt for mig om arbejdet er hjemmefra, eller om det kræver at møde op på en arbejdsplads",
          techTitle: "Kærlighed til teknologi",
          techText:
            "Alt teknologi kommer mig meget nært ved, så jeg har en naturlig interesse i det, ligemeget hvilken opgave det omhandler",
          button: "Få det til at ske",
        },
      },
    },
    en: {
      translation: {
        nav: {
          aboutMe: "About Me",
          skills: "Skills",
          projects: "Projects",
          experience: "Who am i?",
          contact: "Why hire me?",
        },
        hero: {
          intro1: "Hi, my name is William",
          intro2: "I make websites, your users don't want to click away from",
          projects: "Projects down here",
          techStack: "And more to come...",
        },
        project1: {
          title: "Projects:",
          h3: "Four Amigos Taco & Tequila",
          p: "With a focus on crafting an authentic dining experience, this website creates an atmosphere adjacent to mexican culture, with the use of colors and typography",
          programs: "Programs used:",
        },
        project2: {
          h3: "Steno Museum Interactive Adventure",
          p: "With a focus on storytelling, and teaching children about the moon and the universe, this interactive story follows Astro Alex in his journey to the moon and beyond",
        },
        project3: {
          h3: "Trøjborg Bryg - Fictional Non-Alcoholic Brewery",
          p: "For this fictional brewery, the goal was to create a modern, sleek,minimalistic website, targeted towards the often too alcoholic youth,to make non-alcoholic beer seem like a just-as-good substitute",
        },
        project4: {
          h3: "Nippon - Fictional Meal-Kit Provider ",
          p: "For this fictional meal-kit provider, the goal was to create an atmosphere as close to asian cultute as possible, while still appealing to the mass european and american audience for asian cuisine. This was achieved trough the means of typography, colors and composition.",
        },
        skills: {
          h2: "My skills as a developer:",
        },
        aboutMe: {
          h2: "My story",
        },
        contact: {
          h2: "Why should you hire me?",
          p: "I'm a very flexible person when it comes to both time management and what kinds of tasks you provide me. I can work at any given hours of the day you want me to, and i exel equally in both group work involving colleagues with multiple moving parts, and just allowing myself to completely involve myself with a project on my own",
          button: "Make it happen",
        },
      },
    },
  },
  lng: "dk", // default language
  fallbackLng: "dk",

  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
