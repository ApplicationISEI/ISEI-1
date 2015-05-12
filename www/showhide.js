            function showOu(){

                
                $('#accueilc').hide();
                $('#appelc').hide();
                $('#mapc').hide();
                $('#ouc').show();
                $('#navbarmap').hide();
                $('#backbutton').hide();
                $('#navbar').show();
                $('#rurgencec').hide();
                $('#numutilec').hide();
                $('#internetc').hide();
                $('#navbar ul li:nth-child(2) a').removeClass("ui-btn-active ui-state-persist")
                $('#navbar ul li:nth-child(1) a').addClass("ui-btn-active ui-state-persist")
                $('#navbar ul li:nth-child(3) a').removeClass("ui-btn-active ui-state-persist")
                $('#navbar ul li:nth-child(4) a').removeClass("ui-btn-active ui-state-persist")


                whereami = 'ou';
                
               // $('#navbaraccueil ul li:nth-child(2) a').addClass("ui-btn-active ui-state-persist")
              //$('#navbaraccueil ul li:nth-child(1) a').removeClass("ui-btn-active ui-state-persist")
                };


        $('#bou').click(showOu);  

        $('#showgeo').click(showOu); 

        $('#showtel').click(showAppel);

        $('#bappel').click(showAppel);

        $('#burgence').click(showUrgence);

        $('#bfiche').click(showFmedi);

        $('#showurg').click(showUrgence);

        $('#showmedi').click(showFmedi);




               
            function showAppel(){

                $('#accueilh').hide();
                $('#ouh').hide();
                $('#appelh').show();
                $('#accueilc').hide();
                $('#ouc').hide();
                $('#appelc').show();
                $('#navbar').show();
                $('#navbarmap').hide();
                $('#backbutton').hide();
                $('#rurgencec').hide();
                $('#numutilec').hide();
                $('#internetc').hide();
                $('#navbar ul li:nth-child(1) a').removeClass("ui-btn-active ui-state-persist")
                $('#navbar ul li:nth-child(3) a').removeClass("ui-btn-active ui-state-persist")
                $('#navbar ul li:nth-child(2) a').addClass("ui-btn-active ui-state-persist")
                $('#navbar ul li:nth-child(4) a').removeClass("ui-btn-active ui-state-persist")

                whereami = 'appel';
             


             }; 

             function showUrgence(){

                $('#accueilh').hide();
                $('#ouh').hide();
                $('#appelh').hide();
                $('#accueilc').hide();
                $('#ouc').hide();
                $('#appelc').hide();
                $('#navbar').show();
                $('#navbarmap').hide();
                $('#backbutton').hide();
                $('#rurgencec').hide();
                $('#numutilec').hide();
                $('#internetc').hide();
                $('#navbar ul li:nth-child(1) a').removeClass("ui-btn-active ui-state-persist");
                $('#navbar ul li:nth-child(3) a').addClass("ui-btn-active ui-state-persist");
                $('#navbar ul li:nth-child(2) a').removeClass("ui-btn-active ui-state-persist");
                $('#navbar ul li:nth-child(4) a').removeClass("ui-btn-active ui-state-persist");

                whereami = 'urgence'


             }; 

            function showFmedi(){

                $('#accueilh').hide();
                $('#ouh').hide();
                $('#appelh').hide();
                $('#accueilc').hide();
                $('#ouc').hide();
                $('#appelc').hide();
                $('#navbar').show();
                $('#navbarmap').hide();
                $('#backbutton').hide();
                $('#rurgencec').hide();
                $('#numutilec').hide();
                $('#internetc').hide();
                $('#navbar ul li:nth-child(1) a').removeClass("ui-btn-active ui-state-persist");
                $('#navbar ul li:nth-child(3) a').removeClass("ui-btn-active ui-state-persist");
                $('#navbar ul li:nth-child(2) a').removeClass("ui-btn-active ui-state-persist");
                $('#navbar ul li:nth-child(4) a').addClass("ui-btn-active ui-state-persist");
                
                whereami = 'fmedi'


             };          
         


            $('#backbutton').click(function(){

                switch (whereami)
                {
                    case 'hopital':
                        showOu();
                    break;

                    case 'InfirmereIndependante':
                        showOu();
                    break 

                    case 'Medecin':
                        showOu();
                    break;

                    case 'Pharmacie':
                        showOu();
                    break;

                    case 'rprive' :
                        showAppel();
                    break;

                    case 'rurgence' :
                        showAppel();
                    break;

                    case 'numutile' :
                        showAppel();
                    break;

                    case 'internet' :
                        showAppel();
                    break;
                    



                }
            });

            
            $('#ouc a:nth-child(1)').click (function(){
                        $('#ouc').hide();
                        $('#mapc')[0].innerHTML = '<iframe src="https://www.google.com/maps/d/embed?mid=z3KGS9jRpI24.kRHiP3jQajoc" id="map" width="100%"></iframe>';
                        $('#mapc').show();

                        var h = $('html').height() - 135;
                        $('#map').css ('height', h);

                        $('#navbar').hide();
                        $('#navbarmap').show(); 
                        $('#backbutton').show();
                        whereami = 'hopital'           
            });

            $('#ouc a:nth-child(2)').click (function(){
                        $('#ouc').hide();
                        $('#mapc')[0].innerHTML = '<iframe src="https://mapsengine.google.com/map/embed?mid=z3KGS9jRpI24.kvZzlrX5gQig" id="map2" width="100%"></iframe>';
                        $('#mapc').show();

                        var h = $('html').height() - 135;
                        $('#map2').css ('height', h);

                        $('#navbar').hide();
                        $('#navbarmap').show();
                        $('#backbutton').show(); 
                         whereami = 'InfirmereIndependante'           
            });

            $('#ouc a:nth-child(3)').click (function(){
                        $('#ouc').hide();
                        $('#mapc')[0].innerHTML = '<iframe src="https://mapsengine.google.com/map/embed?mid=z3KGS9jRpI24.kmLK3LOHEsl0" id="map3" width="100%"></iframe>';
                        $('#mapc').show();

                        var h = $('html').height() - 135;
                        $('#map3').css ('height', h);

                        $('#navbar').hide();
                        $('#navbarmap').show();
                        $('#backbutton').show();
                        whereami = 'Medecin'            
            });

        

            $('#ouc a:nth-child(4)').click (function(){
                        $('#ouc').hide();
                        $('#mapc')[0].innerHTML = '<iframe src="https://mapsengine.google.com/map/embed?mid=z3KGS9jRpI24.kBmlCB8DJqKo" id="map5" width="100%"></iframe>';
                        $('#mapc').show();

                        var h = $('html').height() - 135;
                        $('#map5').css ('height', h);

                        $('#navbar').hide();
                        $('#navbarmap').show();
                        $('#backbutton').show();  
                        whereami ='Pharmacie'          
            });

            $('#appelc ul li:nth-child(1) a').click (function(){ 
                        $('#appelc').hide();
                        $('#backbutton').show();
                         




                        whereami ='rprive'
            });

            $('#appelc ul li:nth-child(2) a').click (function(){ 
                        $('#appelc').hide();
                        $('#backbutton').show(); 
                        $('#rurgencec').show();
                        





                        whereami ='rurgence'
            });

            $('#appelc ul li:nth-child(3) a').click (function(){ 
                        $('#appelc').hide();
                        $('#backbutton').show();  
                        $('#numutilec').show();




                        whereami ='numutile'
            });

            $('#appelc ul li:nth-child(4) a').click (function(){ 
                        $('#appelc').hide();
                        $('#backbutton').show();  
                        $('#internetc').show();




                        whereami ='internet'
            });


            $('#navbarmap ul li:nth-child(1) a').click (function(){

                switch (whereami)
                {
                    case 'hopital':
                         document.location.href = 'geo:https://www.google.be/maps/search/hopital/@50.854975,4.3753899,12z/data=!3m1!4b1?hl=fr'
                    break;

                    case 'InfirmereIndependante':
                         document.location.href = 'geo:https://www.google.be/maps/search/infirmière+à+domicile+bruxeles/@50.8495564,4.3589105,12z?hl=fr'
                    break 

                    case 'Medecin':
                         document.location.href = 'https://www.google.be/maps/search/médecin+de+bruxelles/@50.854975,4.3753899,12z/data=!3m1!4b1?hl=fr'
                    break;

                    case 'Pharmacie':
                        document.location.href = 'https://www.google.be/maps/search/pharmacie+de+bruxelles/@50.854975,4.3753899,12z/data=!3m1!4b1?hl=fr';
                    break;


                }


            });
