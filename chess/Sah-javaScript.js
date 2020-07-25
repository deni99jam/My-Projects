let klasa={

    varijable:{
        potez: 'a',
        izabranaFigura: '',
        istaknuto: [],
        figure:{
            a_kralj:{
                pozicija: '5_1',
                img: '&#9812;',
                uhvacen: false,
                pomjeren: false,
                tip: 'a_kralj'
            },
            a_kraljica:{
                pozicija: '4_1',
                img: '&#9813;',
                uhvacen: false,
                pomjeren: false,
                tip: 'a_kraljica'
            },
            a_lovac1:{
                pozicija: '3_1',
                img: '&#9815;',
                uhvacen: false,
                pomjeren: false,
                tip: 'a_lovac'
            },
            
            a_lovac2:{
                pozicija: '6_1',
                img: '&#9815;',
                uhvacen: false,
                pomjeren: false,
                tip: 'a_lovac'
            },
            a_skakac1:{
                pozicija: '2_1',
                img: '&#9816;',
                uhvacen: false,
                pomjeren: false,
                tip: 'a_skakac'   
            },
            a_skakac2:{
                pozicija: '7_1',
                img: '&#9816;',
                uhvacen: false,
                pomjeren: false,
                tip: 'a_skakac'   
            },
            a_top1:{
                pozicija: '1_1',
                img: '&#9814;',
                uhvacen: false,
                pomjeren: false,
                tip: 'a_top'      
            },
            a_top2:{
                pozicija: '8_1',
                img: '&#9814;',
                uhvacen: false,
                pomjeren: false,
                tip: 'a_top'      
            },
            a_pijun1:{
                pozicija: '1_2',
                img: '&#9817;',
                uhvacen: false,
                pomjeren: false,
                tip: 'a_pijun'      
            },
            a_pijun2:{
                pozicija: '2_2',
                img: '&#9817;',
                uhvacen: false,
                pomjeren: false,
                tip: 'a_pijun'      
            },
            a_pijun3:{
                pozicija: '3_2',
                img: '&#9817;',
                uhvacen: false,
                pomjeren: false,
                tip: 'a_pijun'      
            },
            a_pijun4:{
                pozicija: '4_2',
                img: '&#9817;',
                uhvacen: false,
                pomjeren: false,
                tip: 'a_pijun'      
            },
            a_pijun5:{
                pozicija: '5_2',
                img: '&#9817;',
                uhvacen: false,
                pomjeren: false,
                tip: 'a_pijun'      
            },
            a_pijun6:{
                pozicija: '6_2',
                img: '&#9817;',
                uhvacen: false,
                pomjeren: false,
                tip: 'a_pijun'      
            },
            a_pijun7:{
                pozicija: '7_2',
                img: '&#9817;',
                uhvacen: false,
                pomjeren: false,
                tip: 'a_pijun'      
            },
            a_pijun8:{
                pozicija: '8_2',
                img: '&#9817;',
                uhvacen: false,
                pomjeren: false,
                tip: 'a_pijun'      
            },

            b_kralj:{
                pozicija: '5_8',
                img: '&#9818;',
                uhvacen: false,
                pomjeren: false,
                tip: 'b_kralj'
            },
            b_kraljica:{
                pozicija: '4_8',
                img: '&#9819;',
                uhvacen: false,
                pomjeren: false,
                tip: 'b_kraljica'
            },
            b_lovac1:{
                pozicija: '3_8',
                img: '&#9821;',
                uhvacen: false,
                pomjeren: false,
                tip: 'b_lovac'
            },
            b_lovac2:{
                pozicija: '6_8',
                img: '&#9821;',
                uhvacen: false,
                pomjeren: false,
                tip: 'b_lovac'
            },
            b_skakac1:{
                pozicija: '2_8',
                img: '&#9822;',
                uhvacen: false,
                pomjeren: false,
                tip: 'b_skakac'   
            },
            b_skakac2:{
                pozicija: '7_8',
                img: '&#9822;',
                uhvacen: false,
                pomjeren: false,
                tip: 'b_skakac'   
            },
            b_top1:{
                pozicija: '1_8',
                img: '&#9820;',
                uhvacen: false,
                pomjeren: false,
                tip: 'b_top'      
            },
            b_top2:{
                pozicija: '8_8',
                img: '&#9820;',
                uhvacen: false,
                pomjeren: false,
                tip: 'b_top'      
            },
            b_pijun1:{
                pozicija: '1_7',
                img: '&#9823;',
                uhvacen: false,
                pomjeren: false,
                tip: 'b_pijun'      
            },
            b_pijun2:{
                pozicija: '2_7',
                img: '&#9823;',
                uhvacen: false,
                pomjeren: false,
                tip: 'b_pijun'      
            },
            b_pijun3:{
                pozicija: '3_7',
                img: '&#9823;',
                uhvacen: false,
                pomjeren: false,
                tip: 'b_pijun'      
            },
            b_pijun4:{
                pozicija: '4_7',
                img: '&#9823;',
                uhvacen: false,
                pomjeren: false,
                tip: 'b_pijun'      
            },
            b_pijun5:{
                pozicija: '5_7',
                img: '&#9823;',
                uhvacen: false,
                pomjeren: false,
                tip: 'b_pijun'      
            },
            b_pijun6:{
                pozicija: '6_7',
                img: '&#9823;',
                uhvacen: false,
                pomjeren: false,
                tip: 'b_pijun'      
            },
            b_pijun7:{
                pozicija: '7_7',
                img: '&#9823;',
                uhvacen: false,
                pomjeren: false,
                tip: 'b_pijun'      
            },
            b_pijun8:{
                pozicija: '8_7',
                img: '&#9823;',
                uhvacen: false,
                pomjeren: false,
                tip: 'b_pijun'      
            },
        }
    },

    metode:{
        postavka: function(){
            $('.polje').attr('chess', 'null');
            for(let figurica in klasa.varijable.figure){
                $('#'+ klasa.varijable.figure[figurica].pozicija).html(klasa.varijable.figure[figurica].img);
                $('#'+ klasa.varijable.figure[figurica].pozicija).attr('chess',figurica);
               
            }
    },

    mogucnostiKretanja:function(izabranaFigura) {
        let position={x: '', y: '' };
        position.x=klasa.varijable.figure[izabranaFigura].pozicija.split('_')[0];
        position.y=klasa.varijable.figure[izabranaFigura].pozicija.split('_')[1];

        var options=[];
        var koordinate=[];
        var pocetak=klasa.varijable.figure[izabranaFigura].pozicija;
        var c1,c2,c3,c4,c5,c6,c7,c8;

        if(klasa.varijable.istaknuto.length!=0){
            klasa.metode.togglehighlight(klasa.varijable.istaknuto);
        }

        switch (klasa.varijable.figure[izabranaFigura].tip) {
            case 'a_kralj':
                if($('#6_1').attr('chess')=='null' && $('#7_1').attr('chess')=='null' 
                && klasa.varijable.figure['a_kralj'].pomjeren==false && klasa.varijable.figure['a_top2'].pomjeren==false){
                    koordinate=[{x:1, y:1},{x:1,y:0},{x:1,y:-1},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:0},{x:-1,y:1},{x:0,y:1},{x:2,y:0}].map(function(val){
                        return (parseInt(position.x)+parseInt(val.x))+ '_' + (parseInt(position.y)+parseInt(val.y));
                    });
                } 
                else{
                    koordinate=[{x:1, y:1},{x:1,y:0},{x:1,y:-1},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:0},{x:-1,y:1},{x:0,y:1}].map(function(val){
                        return (parseInt(position.x)+parseInt(val.x))+ '_' + (parseInt(position.y)+parseInt(val.y));
                    });
                }

                options=(klasa.metode.options(pocetak,koordinate,klasa.varijable.figure[izabranaFigura].tip)).slice(0);
                klasa.varijable.istaknuto=options.slice(0);
                klasa.metode.togglehighlighted(options);

                break;
            case 'b_kralj':

                if($('#6_8').attr('chess')=='null' && $('#7_8').attr('chess')=='null' 
                && klasa.varijable.figure['b_kralj'].pomjeren==false && klasa.varijable.figure['b_top2'].pomjeren==false){
                    koordinate=[{x:1, y:1},{x:1,y:0},{x:1,y:-1},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:0},{x:-1,y:1},{x:0,y:1},{x:2,y:0}].map(function(val){
                        return (parseInt(position.x)+parseInt(val.x))+ '_' + (parseInt(position.y)+parseInt(val.y));
                    });
                } 
                else{
                    koordinate=[{x:1, y:1},{x:1,y:0},{x:1,y:-1},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:0},{x:-1,y:1},{x:0,y:1}].map(function(val){
                        return (parseInt(position.x)+parseInt(val.x))+ '_' + (parseInt(position.y)+parseInt(val.y));
                    });
                }

                options=(klasa.metode.options(pocetak,koordinate,klasa.varijable.figure[izabranaFigura].tip)).slice(0);
                klasa.varijable.istaknuto=options.slice(0);
                klasa.metode.togglehighlighted(options);

                break;
            case 'a_kraljica':
                
                c1 = klasa.metode.a_options(position,[{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
                c2 = klasa.metode.a_options(position,[{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
                c3 = klasa.metode.a_options(position,[{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
                c4 = klasa.metode.a_options(position,[{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);
                c5 = klasa.metode.a_options(position,[{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
                c6 = klasa.metode.a_options(position,[{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
                c7 = klasa.metode.a_options(position,[{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
                c8 = klasa.metode.a_options(position,[{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);
      
                koordinate = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);
                
                options=koordinate.slice(0);
                klasa.varijable.istaknuto=options.slice(0);
                klasa.metode.togglehighlight(options);

                break;
            case 'b_kraljica':
                c1 = klasa.metode.b_options(position,[{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
                c2 = klasa.metode.b_options(position,[{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
                c3 = klasa.metode.b_options(position,[{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
                c4 = klasa.metode.b_options(position,[{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);
                c5 = klasa.metode.b_options(position,[{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
                c6 = klasa.metode.b_options(position,[{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
                c7 = klasa.metode.b_options(position,[{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
                c8 = klasa.metode.b_options(position,[{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);
      
                koordinate = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);
                
                options=koordinate.slice(0);
                klasa.varijable.istaknuto=options.slice(0);
                klasa.metode.togglehighlight(options);
                break;
            case 'a_lovac':
                c1 = klasa.metode.a_options(position,[{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
                c2 = klasa.metode.a_options(position,[{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
                c3 = klasa.metode.a_options(position,[{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
                c4 = klasa.metode.a_options(position,[{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);
      
                koordinate=c1.concat(c2).concat(c3).concat(c4);

                options=koordinate.slice(0);
                klasa.varijable.istaknuto=options.slice(0);
                klasa.metode.togglehighlight(options);
                break;

            case 'b_lovac':
                c1 = klasa.metode.b_options(position,[{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
                c2 = klasa.metode.b_options(position,[{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
                c3 = klasa.metode.b_options(position,[{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
                c4 = klasa.metode.b_options(position,[{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);
      
                koordinate=c1.concat(c2).concat(c3).concat(c4);

                options=koordinate.slice(0);
                klasa.varijable.istaknuto=options.slice(0);
                klasa.metode.togglehighlight(options);
                break;

            case 'a_skakac':
                koordinate = [{ x: -1, y: 2 },{ x: 1, y: 2 },{ x: 1, y: -2 },{ x: -1, y: -2 },{ x: 2, y: 1 },{ x: 2, y: -1 },{ x: -2, y: -1 },{ x: -2, y: 1 }].map(function(val){
                    return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                  });
                  options=(klasa.metode.options(pocetak,koordinate,klasa.varijable.figure[izabranaFigura].tip)).slice(0);
                  klasa.varijable.istaknuto=options.slice(0);
                  klasa.metode.togglehighlight(options);
                  break;

            case 'b_skakac':
                koordinate = [{ x: -1, y: 2 },{ x: 1, y: 2 },{ x: 1, y: -2 },{ x: -1, y: -2 },{ x: 2, y: 1 },{ x: 2, y: -1 },{ x: -2, y: -1 },{ x: -2, y: 1 }].map(function(val){
                    return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                  });
                  options=(klasa.metode.options(pocetak,koordinate,klasa.varijable.figure[izabranaFigura].tip)).slice(0);
                  klasa.varijable.istaknuto=options.slice(0);
                  klasa.metode.togglehighlight(options);
                  break;

            case 'a_top':
                c1 = klasa.metode.a_options(position,[{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
                c2 = klasa.metode.a_options(position,[{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
                c3 = klasa.metode.a_options(position,[{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
                c4 = klasa.metode.a_options(position,[{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);
      
                koordinate = c1.concat(c2).concat(c3).concat(c4);
      
                options = koordinate.slice(0);
                klasa.varijable.istaknuto = options.slice(0);
                klasa.metode.togglehighlight(options);
                break;

            case 'b_top':
                c1 = klasa.metode.b_options(position,[{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
                c2 = klasa.metode.b_options(position,[{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
                c3 = klasa.metode.b_options(position,[{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
                c4 = klasa.metode.b_options(position,[{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);
      
                koordinate = c1.concat(c2).concat(c3).concat(c4);
      
                options = koordinate.slice(0);
                klasa.varijable.istaknuto = options.slice(0);
                klasa.metode.togglehighlight(options);
                break;

                case 'a_pijun':
                    if(klasa.varijable.figure[izabranaFigura].pomjeren==false){
                        koordinate=[{ x: 0, y: 1 },{ x: 0, y: 2 },{ x: 1, y: 1 },{ x: -1, y: 1 }].map(function(val){
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    }
                    else if(klasa.varijable.figure[izabranaFigura].pomjeren==true){
                        koordinate=[{ x: 0, y: 1 },{ x: 1, y: 1 },{ x: -1, y: 1 }].map(function(val){
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    }
                    options=(klasa.metode.options(pocetak,koordinate,klasa.varijable.figure[izabranaFigura].tip)).slice(0);
                    klasa.varijable.istaknuto=options.slice(0);
                    klasa.metode.togglehighlight(options);
                    return;

                case 'b_pijun':
                if(klasa.varijable.figure[izabranaFigura].pomjeren==false){
                    koordinate=[{ x: 0, y: -1 },{ x: 0, y: -2 },{ x: 1, y: -1 },{ x: -1, y: -1 }].map(function(val){
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                    });
                }
                else if(klasa.varijable.figure[izabranaFigura].pomjeren==true){
                    koordinate=[{ x: 0, y: -1 },{ x: 1, y: 1 },{ x: -1, y: -1 }].map(function(val){
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                    });
                }
                options=(klasa.metode.options(pocetak,koordinate,klasa.varijable.figure[izabranaFigura].tip)).slice(0);
                klasa.varijable.istaknuto=options.slice(0);
                klasa.metode.togglehighlight(options);
                return;
            }
    },

    options: function(pocetak,koordinate,figura){
        koordinate=koordinate.filter(val=> {
            let pos={x:0, y:0 };
            pos.x=parseInt(val.split('_')[0]);
            pos.y=parseInt(val.split('_')[1]);

            if(!(pos.x<1)&& !(pos.x>8) && !(pos.y<1) && !(pos.y>8)){
                return val;
            }
        });

        switch(figura){

            case 'a_kralj':
                koordinate=koordinate.filter(val=>{
                    return($('#'+val).attr('chess')=='null' || ($('#'+val).attr('chess')).slice(0,1)=='b');
                });
                break;
            
            case 'b_kralj':
                koordinate=koordinate.filter(val=>{
                        return($('#'+val).attr('chess')=='null' || ($('#'+val).attr('chess')).slice(0,1)=='a');
                });
                break;

            case 'a_skakac':
                koordinate=koordinate.filter(val=>{
                    return($('#'+val).attr('chess')=='null' || ($('#'+val).attr('chess')).slice(0,1)=='b');
                });              
                break;

            case 'b_skakac':
                koordinate=koordinate.filter(val=>{
                    return($('#'+val).attr('chess')=='null' || ($('#'+val).attr('chess')).slice(0,1)=='a');
                });              
                break;

            case 'a_pijun':
                koordinate=koordinate.filter(val=> {
                    let poc={x:0, y:0};
                    let koordinata=val.split('_');

                    poc.x=pocetak.split('_')[0];
                    poc.y=pocetak.split('_')[1];

                    if(koordinata[0]<poc.x || koordinata[0]>poc.x){
                return ($('#' + val).attr('chess') != 'null' && ($('#' + val).attr('chess')).slice(0,1) == 'b');
                    }
                    else{
                if (koordinata[1] == (parseInt(poc.y) + 2) && $('#' + poc.x + '_' + (parseInt(poc.y) + 1)).attr('chess') != 'null'){

                    }
                    else{
                  return ($('#' + val).attr('chess') == 'null'); 
                    }
                }
                });
                break;

            
                case 'b_pijun':
                    koordinate=koordinate.filter(val=> {
                        let poc={x:0, y:0};
                        let koordinata=val.split('_');
    
                        poc.x=pocetak.split('_')[0];
                        poc.y=pocetak.split('_')[1];
    
                        if(koordinata[0]<poc.x || koordinata[0]>poc.x){
                    return ($('#' + val).attr('chess') != 'null' && ($('#' + val).attr('chess')).slice(0,1) == 'b');
                        }
                        else{
                    if (koordinata[1] == (parseInt(poc.y) - 2) && $('#' + poc.x + '_' + (parseInt(poc.y) - 1)).attr('chess') != 'null'){
    
                        }
                        else{
                      return ($('#' + val).attr('chess') == 'null'); 
                        }
                    }
                    });
                    break;
        }
        return koordinate;
    },
    a_options: function(position, koordinate){
        let zastava=false;
        koordinate=koordinate.map(function(val){
          return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
        }).filter(val=> {
            let pos={x:0, y:0 };
            pos.x = parseInt(val.split('_')[0]);
            pos.y = parseInt(val.split('_')[1]);

            if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { 
                return val;
              }
        }).filter(val=> {
            if(zastava==false){
                if ($('#' + val).attr('chess') == 'null'){
                    console.log(val)
                    return val;
                  } else if (($('#' + val).attr('chess')).slice(0,1) == 'b') {
                    zastava = true;
                    console.log(val)
                    return val;
                  } else if (($('#' + val).attr('chess')).slice(0,1) == 'a') {
                    console.log(val+'-3')
                    zastava = true;
                  }
                }            
        });
        return koordinate;
    },

    b_options: function (position,koordinate) {
      
        let zastava = false;
        
        koordinate = koordinate.map(function(val){ 
            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
          }).filter(val => {
            let pos = { x: 0, y: 0 };
            pos.x = parseInt(val.split('_')[0]);
            pos.y = parseInt(val.split('_')[1]);
    
            if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { 
              return val;
            }
          }).filter(val => { 
            if (zastava == false){
              if ($('#' + val).attr('chess') == 'null'){
                return val;
              } else if (($('#' + val).attr('chess')).slice(0,1) == 'a') {
                zastava = true;
                return val;
              } else if (($('#' + val).attr('chess')).slice(0,1) == 'b') {
                zastava = true;
              }
            }
          });
  
        return koordinate;
    },

  hvatanje: function(meta)  {
    let izabranaFigura={
        ime:$('#'+klasa.varijable.izabranaFigura).attr('chess'),
        id: klasa.varijable.izabranaFigura
        };
        //stari div
        $('#'+meta.id).html(klasa.varijable.figure[izabranaFigura.ime].img);
        $('#'+meta.id).attr('chess',izabranaFigura.ime);
        //novi div
        $('#'+izabranaFigura.id).html('');
        $('#'+izabranaFigura.id).attr('chess','null');
        //pomjeranje
        klasa.varijable.figure[izabranaFigura.ime].pozicija=meta.id;
        klasa.varijable.figure[izabranaFigura.ime].pomjeren=true;
        //hvatanje
        klasa.varijable.figure[meta.ime].uhvacen=true;
     },

     pomjeranje: function(meta){
         let izabranaFigura=$('#' + klasa.varijable.izabranaFigura).attr('chess');


          $('#' + meta.id).html(klasa.varijable.figure[izabranaFigura].img);
          $('#' + meta.id).attr('chess',izabranaFigura);
      
          $('#' + klasa.varijable.izabranaFigura).html('');
          $('#' + klasa.varijable.izabranaFigura).attr('chess','null');
          klasa.varijable.figure[izabranaFigura].pozicija = meta.id;
          klasa.varijable.figure[izabranaFigura].pomjeren = true;
     },

     krajpoteza: function(){
        if (klasa.varijable.potez == 'a') {
            klasa.varijable.potez = 'b';
            
            
            klasa.metode.togglehighlight(klasa.varijable.istaknuto);
            klasa.varijable.istaknuto.length = 0;
            
            klasa.varijable.izabranaFigura = '';
    
            $('#potez').html("Na potezu je crni");
    
            $('#potez').addClass('turnhighlight');
            window.setTimeout(function(){
              $('#potez').removeClass('turnhighlight');
            }, 1500);
    
          } else if (klasa.varijable.potez = 'b'){
            klasa.varijable.potez = 'a';
    
            klasa.metode.togglehighlight(klasa.varijable.istaknuto);
            klasa.varijable.istaknuto.length = 0;
            
            klasa.varijable.izabranaFigura = '';
    
            $('#potez').html("Na potezu je bijeli");
    
            $('#potez').addClass('turnhighlight');
            window.setTimeout(function(){
              $('#potez').removeClass('turnhighlight');
            }, 1500);
    
          }
        },
        togglehighlight: function(options) {
            options.forEach(function(element, index, array) {
              $('#' + element).toggleClass("green shake-little neongreen_txt");
            });
          },
       
    }
};

$(document).ready(function() {
    klasa.metode.postavka();
  
    $('.polje').click(function(e) {
  
      var izabranaFigura = {
        ime: '',
        id: klasa.varijable.izabranaFigura
      };
  
      if (klasa.varijable.izabranaFigura == '')
      {
        izabranaFigura.ime = $('#' + e.target.id).attr('chess');
      } 
      else 
      {
        izabranaFigura.ime = $('#' + klasa.varijable.izabranaFigura).attr('chess');
      }
  
      var target = {
        ime: $(this).attr('chess'),
        id: e.target.id
      };
  
      if (klasa.varijable.izabranaFigura == '' && target.ime.slice(0,1) == klasa.varijable.potez) { // show options
  
        klasa.varijable.izabranaFigura = e.target.id;
        klasa.metode.mogucnostiKretanja($(this).attr('chess'));
  
      } else if (klasa.varijable.izabranaFigura !='' && target.ime == 'null') { // move selected piece piece
  
        if (izabranaFigura.ime == 'a_kralj' || izabranaFigura.ime == 'b_kralj'){
          
          let t0 = (izabranaFigura.ime = 'a_kralj');
          let t1 = (izabranaFigura.ime = 'b_kralj');
          let t2 = (klasa.varijable.figure[izabranaFigura.ime].pomjeren == false);
          let t3 = (klasa.varijable.figure['b_top2'].pomjeren == false);
          let t4 = (klasa.varijable.figure['a_top2'].pomjeren == false);
          let t5 = (target.id == '7_8');
          let t6 = (target.id == '7_1');
    
          if (t0 && t2 && t4 &&t6){
    
            let k_position = '5_1';
            let k_target = '7_1';
            let r_position = '8_1';
            let r_target = '6_1';
    
            klasa.varijable.figure['a_kralj'].pozicija = '7_1';
            klasa.varijable.figure['a_kralj'].pomjeren = true;
            $('#'+k_position).html('');
            $('#'+k_position).attr('chess','null');
            $('#'+k_target).html(klasa.varijable.figure['a_kralj'].img);
            $('#'+k_target).attr('chess','a_kralj');
    
            klasa.varijable.figure['a_top2'].pozicija = '6_1';
            klasa.varijable.figure['a_top2'].pomjeren = true;
            $('#'+r_position).html('');
            $('#'+r_position).attr('chess','null');
            $('#'+r_target).html(klasa.varijable.figure['a_top2'].img);
            $('#'+r_target).attr('chess','a_top2');
    
            klasa.metode.krajpoteza();
    
          } else if (t1 && t2 && t3 && t5){
    
            let k_position = '5_8';
            let k_target = '7_8';
            let r_position = '8_8';
            let r_target = '6_8';
    
            klasa.varijable.figure['a_kralj'].pozicija = '7_8';
            klasa.varijable.figure['a_kralj'].pomjeren = true;
            $('#'+k_position).html('');
            $('#'+k_position).attr('chess','null');
            $('#'+k_target).html(klasa.varijable.figure['a_kralj'].img);
            $('#'+k_target).attr('chess','a_kralj');
    
            klasa.varijable.figure['b_top2'].pozicija = '6_8';
            klasa.varijable.figure['b_top2'].pomjeren = true;
            $('#'+r_position).html('');
            $('#'+r_position).attr('chess','null');
            $('#'+r_target).html(klasa.varijable.figure['b_top2'].img);
            $('#'+r_target).attr('chess','b_top2');
    
            klasa.metode.krajpoteza();
            
          } else {
            klasa.metode.pomjeranje(target);
            klasa.metode.krajpoteza();

          }
    
        } else { 
  
          klasa.metode.pomjeranje(target);
          klasa.metode.krajpoteza();
  
        }
          
      } else if (klasa.varijable.izabranaFigura !='' && target.ime != 'null' && target.id != izabranaFigura.id && izabranaFigura.ime.slice(0,1) != target.ime.slice(0,1)){ // capture a piece
        
        if (izabranaFigura.id != target.id && klasa.varijable.istaknuto.indexOf(target.id) != (-1)) { // if it's not trying to capture pieces not in its movement range
          
          klasa.metode.hvatanje(target)
          klasa.metode.krajpoteza();
          
        }
  
      } else if (klasa.varijable.izabranaFigura !='' && target.ime != 'null' && target.id != izabranaFigura.id && izabranaFigura.ime.slice(0,1) == target.ime.slice(0,1)){ // toggle move options
  
        klasa.metode.togglehighlight(klasa.varijable.istaknuto);
        klasa.varijable.istaknuto.length = 0;
  
        klasa.varijable.izabranaFigura = target.id;
        klasa.metode.mogucnostiKretanja(target.ime);
  
      }
  
    });
  
    $('body').contextmenu(function(e) {
      e.preventDefault();
    });
  
  });