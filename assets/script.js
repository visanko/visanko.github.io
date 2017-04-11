// JavaScript File

    function goJs() {
      var navs = {
        "#allsweets":2,
        "#allsnacks":1,
        "#alldrinks":0
      }
      var e = window.location.hash;
      $('#carousel-menu').carousel(navs[e]);
      
    }


