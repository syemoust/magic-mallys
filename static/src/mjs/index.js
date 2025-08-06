    $(document).ready(function () {

      const language = navigator.language || navigator.userLanguage; // e.g., "en-US"
      const userAgent = navigator.userAgent; // Full user agent string

      // Simple browser detection (not 100% reliable)
      let browser = "Unknown";

      if (userAgent.includes("Chrome") && !userAgent.includes("Edg") && !userAgent.includes("OPR")) {
          
          alert("Chrome ");

      }else if ( userAgent.includes("Firefox")) {
          if ( language.startsWith("de")){
            $('#de_logo').css({
                               "fontSize": "55px", 
                               "marginLeft": "-18%"
            });
          }
      }else {
        alert("Else not ok ");
      }

    });