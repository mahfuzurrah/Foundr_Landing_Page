"use strict";

_founderInitPopup();


            var foundrLoadAssetsfileHelper = function(e) {
                return new Promise(function(t) {
                    if (e.lastIndexOf("js") > 0) {
                        var n = document.createElement("script");
                        n.setAttribute("type", "text/javascript"),
                        n.setAttribute("src", e)
                    }
                    n.readyState ? n.onreadystatechange = function() {
                        "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null,
                        t())
                    }
                    : n.onload = function() {
                        t()
                    }
                    ,
                    void 0 !== n && document.getElementsByTagName("body")[0].appendChild(n)
                }
                )
            }
              , _founderInitPopup = async function(e) {
                return foundrLoadAssetsfileHelper("https://foundr.com/wp-includes/js/dist/vendor/wp-polyfill.min.js").then(function() {
                    return foundrLoadAssetsfileHelper("https://foundr.com/wp-content/plugins/foundr-addon/build/founder_embed_popup.js?v=6").then(function() {
                        window.founderInitPopup(e)
                    })
                })
                };
            
