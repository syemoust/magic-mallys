const userLang = navigator.language || navigator.userLanguage;

     
    if (navigator.language.startsWith("fr")) {
       window.location.href = "ms_fr.html";

    } else if(navigator.language.startsWith("de")) {
        window.location.href = "ms_de.html";

    } else {
        window.location.href = "ms_en.html";

    }

