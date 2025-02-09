    var membre = 1;
    var groupe = 1;

    /*
        Script menu responsive. Permet d'ajouter la classe `responsive` a l'element d'id `TopNav`
    */
    function MenuResponsive() {
        var menuDeroulant = document.getElementById("TopNav");
        if (menuDeroulant.className === "navbar") {
            menuDeroulant.className += " responsive";
        } else {
            menuDeroulant.className = "navbar";
        }
    }

    function derouler_graph() {

        document.getElementById("content-graph").style.display = "flex";

        document.getElementById("content-AV").style.display = "none";
        document.getElementById("content-com").style.display = "none";
        document.getElementById("content-prog").style.display = "none";

        document.getElementById("plus-button-graph").style.cursor = "pointer";
        document.getElementById("plus-button-graph").style.display = "none";


        document.getElementById("plus-button-prog").style.display = "block";
        document.getElementById("plus-button-av").style.display = "block";
        document.getElementById("plus-button-com").style.display = "block";


    }

    function derouler_av() {

        document.getElementById("content-AV").style.display = "flex";

        document.getElementById("content-graph").style.display = "none";
        document.getElementById("content-com").style.display = "none";
        document.getElementById("content-prog").style.display = "none";

        document.getElementById("plus-button-av").style.cursor = "pointer";
        document.getElementById("plus-button-av").style.display = "none";


        document.getElementById("plus-button-prog").style.display = "block";
        document.getElementById("plus-button-graph").style.display = "block";
        document.getElementById("plus-button-com").style.display = "block";


    }

    function derouler_com() {

        document.getElementById("content-com").style.display = "flex";

        document.getElementById("content-graph").style.display = "none";
        document.getElementById("content-AV").style.display = "none";
        document.getElementById("content-prog").style.display = "none";

        document.getElementById("plus-button-com").style.cursor = "pointer";
        document.getElementById("plus-button-com").style.display = "none";


        document.getElementById("plus-button-prog").style.display = "block";
        document.getElementById("plus-button-av").style.display = "block";
        document.getElementById("plus-button-graph").style.display = "block";


    }

    function derouler_prog() {

        document.getElementById("content-prog").style.display = "flex";

        document.getElementById("content-graph").style.display = "none";
        document.getElementById("content-AV").style.display = "none";
        document.getElementById("content-com").style.display = "none";

        document.getElementById("plus-button-prog").style.cursor = "pointer";
        document.getElementById("plus-button-prog").style.display = "none";


        document.getElementById("plus-button-graph").style.display = "block";
        document.getElementById("plus-button-av").style.display = "block";
        document.getElementById("plus-button-com").style.display = "block";


    }

    function enrouler_graph() {
        document.getElementById("plus-button-graph").style.display = "block";
        document.getElementById("content-graph").style.display = "none";
    }

    function enrouler_av() {
        document.getElementById("plus-button-av").style.display = "block";
        document.getElementById("content-AV").style.display = "none";
    }

    function enrouler_com() {
        document.getElementById("plus-button-com").style.display = "block";
        document.getElementById("content-com").style.display = "none";
    }

    function enrouler_prog() {
        document.getElementById("plus-button-prog").style.display = "block";
        document.getElementById("content-prog").style.display = "none";
    }


    function MenuResponsive() {
        var menuDeroulant = document.getElementById("TopNav");
        if (menuDeroulant.className === "navbar") {
            menuDeroulant.className += " responsive";
        } else {
            menuDeroulant.className = "navbar";
        }
    }


    function derementation_membre() {
        if (membre > 1) {
            membre--;
        } else {
            if (groupe == 2) {
                membre = 3;
            } else {
                membre = 4;
            }
        }
    }

    function incrementation_membre() {
        if (groupe == 2) {
            if (membre < 3) {
                membre++;
            } else {
                membre = 1;
            }
        } else {
            if (membre < 4) {
                membre++;
            } else {
                membre = 1;
            }
        }

    }

    function derementation_groupe() {
        if (groupe > 1) {
            groupe--;
        } else {
            groupe = 4;
        }
    }

    function incrementation_groupe() {
        if (groupe < 4) {
            groupe++;
        } else {
            groupe = 1;
        }
    }

    function slide_membre() {


        /* 
        groupe 1 = Océanie 
        groupe 2 = Amérique du Sud 
        groupe 3 = Europe 
        groupe 4 = Amérique du Nord 
        */
        if (groupe == 1) {
            document.getElementById("Oceanie").style.display = "block";
            document.getElementById("Amerique_du_Sud").style.display = "none";
            document.getElementById("Europe").style.display = "none";
            document.getElementById("Amerique_du_Nord").style.display = "none";




            document.getElementById("Benjamin").style.display = "none";
            document.getElementById("Maxence_BB").style.display = "none";
            document.getElementById("Nicolas").style.display = "none";

            document.getElementById("Benjamin_desc").style.display = "none";
            document.getElementById("Maxence_BB_desc").style.display = "none";
            document.getElementById("Nicolas_desc").style.display = "none";




            document.getElementById("Corentin").style.display = "none";
            document.getElementById("Hugo").style.display = "none";
            document.getElementById("Noe").style.display = "none";
            document.getElementById("Sean").style.display = "none";

            document.getElementById("Corentin_desc").style.display = "none";
            document.getElementById("Hugo_desc").style.display = "none";
            document.getElementById("Noe_desc").style.display = "none";
            document.getElementById("Sean_desc").style.display = "none";




            document.getElementById("Elliott").style.display = "none";
            document.getElementById("Victoire").style.display = "none";
            document.getElementById("Lauriane_S").style.display = "none";
            document.getElementById("Maxence_F").style.display = "none";

            document.getElementById("Elliott_desc").style.display = "none";
            document.getElementById("Victoire_desc").style.display = "none";
            document.getElementById("Lauriane_S_desc").style.display = "none";
            document.getElementById("Maxence_F_desc").style.display = "none";




            if (membre == 1) {
                document.getElementById("Lauriane_C").style.display = "block";
                document.getElementById("Mathilde").style.display = "none";
                document.getElementById("Loriane_M").style.display = "none";
                document.getElementById("Valentin").style.display = "none";

                document.getElementById("Lauriane_C_desc").style.display = "block";
                document.getElementById("Mathilde_desc").style.display = "none";
                document.getElementById("Loriane_M_desc").style.display = "none";
                document.getElementById("Valentin_desc").style.display = "none";
            }
            if (membre == 2) {
                document.getElementById("Lauriane_C").style.display = "none";

                document.getElementById("Mathilde").style.display = "block";
                document.getElementById("Loriane_M").style.display = "none";
                document.getElementById("Valentin").style.display = "none";

                document.getElementById("Lauriane_C_desc").style.display = "none";
                document.getElementById("Mathilde_desc").style.display = "block";
                document.getElementById("Loriane_M_desc").style.display = "none";
                document.getElementById("Valentin_desc").style.display = "none";
            }
            if (membre == 3) {
                document.getElementById("Lauriane_C").style.display = "none";
                document.getElementById("Mathilde").style.display = "none";
                document.getElementById("Loriane_M").style.display = "block";
                document.getElementById("Valentin").style.display = "none";

                document.getElementById("Lauriane_C_desc").style.display = "none";
                document.getElementById("Mathilde_desc").style.display = "none";
                document.getElementById("Loriane_M_desc").style.display = "block";
                document.getElementById("Valentin_desc").style.display = "none";
            }
            if (membre == 4) {
                document.getElementById("Lauriane_C").style.display = "none";
                document.getElementById("Mathilde").style.display = "none";
                document.getElementById("Loriane_M").style.display = "none";
                document.getElementById("Valentin").style.display = "block";

                document.getElementById("Lauriane_C_desc").style.display = "none";
                document.getElementById("Mathilde_desc").style.display = "none";
                document.getElementById("Loriane_M_desc").style.display = "none";
                document.getElementById("Valentin_desc").style.display = "block";
            }

        }
        if (groupe == 2) {
            document.getElementById("Oceanie").style.display = "none";
            document.getElementById("Amerique_du_Sud").style.display = "block";
            document.getElementById("Europe").style.display = "none";
            document.getElementById("Amerique_du_Nord").style.display = "none";



            document.getElementById("Lauriane_C").style.display = "none";
            document.getElementById("Mathilde").style.display = "none";
            document.getElementById("Loriane_M").style.display = "none";
            document.getElementById("Valentin").style.display = "none";

            document.getElementById("Lauriane_C_desc").style.display = "none";
            document.getElementById("Mathilde_desc").style.display = "none";
            document.getElementById("Loriane_M_desc").style.display = "none";
            document.getElementById("Valentin_desc").style.display = "none";





            document.getElementById("Corentin").style.display = "none";
            document.getElementById("Hugo").style.display = "none";
            document.getElementById("Noe").style.display = "none";
            document.getElementById("Sean").style.display = "none";

            document.getElementById("Corentin_desc").style.display = "none";
            document.getElementById("Hugo_desc").style.display = "none";
            document.getElementById("Noe_desc").style.display = "none";
            document.getElementById("Sean_desc").style.display = "none";




            document.getElementById("Elliott").style.display = "none";
            document.getElementById("Victoire").style.display = "none";
            document.getElementById("Lauriane_S").style.display = "none";
            document.getElementById("Maxence_F").style.display = "none";

            document.getElementById("Elliott_desc").style.display = "none";
            document.getElementById("Victoire_desc").style.display = "none";
            document.getElementById("Lauriane_S_desc").style.display = "none";
            document.getElementById("Maxence_F_desc").style.display = "none";





            if (membre == 1) {
                document.getElementById("Benjamin").style.display = "block";
                document.getElementById("Nicolas").style.display = "none";
                document.getElementById("Maxence_BB").style.display = "none";

                document.getElementById("Benjamin_desc").style.display = "block";
                document.getElementById("Maxence_BB_desc").style.display = "none";
                document.getElementById("Nicolas_desc").style.display = "none";
            }
            if (membre == 2) {
                document.getElementById("Benjamin").style.display = "none";
                document.getElementById("Nicolas").style.display = "block";
                document.getElementById("Maxence_BB").style.display = "none";

                document.getElementById("Benjamin_desc").style.display = "none";
                document.getElementById("Maxence_BB_desc").style.display = "none";
                document.getElementById("Nicolas_desc").style.display = "block";
            }
            /* Cas ou le membre selectionne du groupe precedent etait le 4eme.
             * Afficher le 3eme membre dans tous les cas
             */
            if ((membre == 3) || (membre == 4)) {
                document.getElementById("Benjamin").style.display = "none";
                document.getElementById("Nicolas").style.display = "none";
                document.getElementById("Maxence_BB").style.display = "block";

                document.getElementById("Benjamin_desc").style.display = "none";
                document.getElementById("Maxence_BB_desc").style.display = "block";
                document.getElementById("Nicolas_desc").style.display = "none";
            }

        }

        if (groupe == 3) {
            document.getElementById("Oceanie").style.display = "none";
            document.getElementById("Amerique_du_Sud").style.display = "none";
            document.getElementById("Europe").style.display = "block";
            document.getElementById("Amerique_du_Nord").style.display = "none";


            document.getElementById("Lauriane_C").style.display = "none";
            document.getElementById("Mathilde").style.display = "none";
            document.getElementById("Loriane_M").style.display = "none";
            document.getElementById("Valentin").style.display = "none";

            document.getElementById("Lauriane_C_desc").style.display = "none";
            document.getElementById("Mathilde_desc").style.display = "none";
            document.getElementById("Loriane_M_desc").style.display = "none";
            document.getElementById("Valentin_desc").style.display = "none";





            document.getElementById("Benjamin").style.display = "none";
            document.getElementById("Nicolas").style.display = "none";
            document.getElementById("Maxence_BB").style.display = "none";

            document.getElementById("Benjamin_desc").style.display = "none";
            document.getElementById("Maxence_BB_desc").style.display = "none";
            document.getElementById("Nicolas_desc").style.display = "none";




            document.getElementById("Elliott").style.display = "none";
            document.getElementById("Victoire").style.display = "none";
            document.getElementById("Lauriane_S").style.display = "none";
            document.getElementById("Maxence_F").style.display = "none";

            document.getElementById("Elliott_desc").style.display = "none";
            document.getElementById("Victoire_desc").style.display = "none";
            document.getElementById("Lauriane_S_desc").style.display = "none";
            document.getElementById("Maxence_F_desc").style.display = "none";





            if (membre == 1) {
                document.getElementById("Corentin").style.display = "block";
                document.getElementById("Hugo").style.display = "none";
                document.getElementById("Noe").style.display = "none";
                document.getElementById("Sean").style.display = "none";

                document.getElementById("Corentin_desc").style.display = "block";
                document.getElementById("Hugo_desc").style.display = "none";
                document.getElementById("Noe_desc").style.display = "none";
                document.getElementById("Sean_desc").style.display = "none";
            }
            if (membre == 2) {
                document.getElementById("Corentin").style.display = "none";
                document.getElementById("Hugo").style.display = "block";
                document.getElementById("Noe").style.display = "none";
                document.getElementById("Sean").style.display = "none";

                document.getElementById("Corentin_desc").style.display = "none";
                document.getElementById("Hugo_desc").style.display = "block";
                document.getElementById("Noe_desc").style.display = "none";
                document.getElementById("Sean_desc").style.display = "none";
            }
            if (membre == 3) {
                document.getElementById("Corentin").style.display = "none";
                document.getElementById("Hugo").style.display = "none";
                document.getElementById("Noe").style.display = "block";
                document.getElementById("Sean").style.display = "none";

                document.getElementById("Corentin_desc").style.display = "none";
                document.getElementById("Hugo_desc").style.display = "none";
                document.getElementById("Noe_desc").style.display = "block";
                document.getElementById("Sean_desc").style.display = "none";
            }
            if (membre == 4) {
                document.getElementById("Corentin").style.display = "none";
                document.getElementById("Hugo").style.display = "none";
                document.getElementById("Noe").style.display = "none";
                document.getElementById("Sean").style.display = "block";

                document.getElementById("Corentin_desc").style.display = "none";
                document.getElementById("Hugo_desc").style.display = "none";
                document.getElementById("Noe_desc").style.display = "none";
                document.getElementById("Sean_desc").style.display = "block";
            }

        }
        if (groupe == 4) {
            document.getElementById("Oceanie").style.display = "none";
            document.getElementById("Amerique_du_Sud").style.display = "none";
            document.getElementById("Europe").style.display = "none";
            document.getElementById("Amerique_du_Nord").style.display = "block";



            document.getElementById("Lauriane_C").style.display = "none";
            document.getElementById("Mathilde").style.display = "none";
            document.getElementById("Loriane_M").style.display = "none";
            document.getElementById("Valentin").style.display = "none";

            document.getElementById("Lauriane_C_desc").style.display = "none";
            document.getElementById("Mathilde_desc").style.display = "none";
            document.getElementById("Loriane_M_desc").style.display = "none";
            document.getElementById("Valentin_desc").style.display = "none";




            document.getElementById("Benjamin").style.display = "none";
            document.getElementById("Nicolas").style.display = "none";
            document.getElementById("Maxence_BB").style.display = "none";

            document.getElementById("Benjamin_desc").style.display = "none";
            document.getElementById("Maxence_BB_desc").style.display = "none";
            document.getElementById("Nicolas_desc").style.display = "none";




            document.getElementById("Corentin").style.display = "none";
            document.getElementById("Hugo").style.display = "none";
            document.getElementById("Noe").style.display = "none";
            document.getElementById("Sean").style.display = "none";

            document.getElementById("Corentin_desc").style.display = "none";
            document.getElementById("Hugo_desc").style.display = "none";
            document.getElementById("Noe_desc").style.display = "none";
            document.getElementById("Sean_desc").style.display = "none";



            if (membre == 1) {
                document.getElementById("Elliott").style.display = "block";
                document.getElementById("Victoire").style.display = "none";
                document.getElementById("Lauriane_S").style.display = "none";
                document.getElementById("Maxence_F").style.display = "none";

                document.getElementById("Elliott_desc").style.display = "block";
                document.getElementById("Victoire_desc").style.display = "none";
                document.getElementById("Lauriane_S_desc").style.display = "none";
                document.getElementById("Maxence_F_desc").style.display = "none";
            }
            if (membre == 2) {
                document.getElementById("Elliott").style.display = "none";
                document.getElementById("Victoire").style.display = "block";
                document.getElementById("Lauriane_S").style.display = "none";
                document.getElementById("Maxence_F").style.display = "none";
                document.getElementById("Elliott_desc").style.display = "none";
                document.getElementById("Victoire_desc").style.display = "block";
                document.getElementById("Lauriane_S_desc").style.display = "none";
                document.getElementById("Maxence_F_desc").style.display = "none";
            }
            if (membre == 3) {
                document.getElementById("Elliott").style.display = "none";
                document.getElementById("Victoire").style.display = "none";
                document.getElementById("Lauriane_S").style.display = "block";
                document.getElementById("Maxence_F").style.display = "none";

                document.getElementById("Elliott_desc").style.display = "none";
                document.getElementById("Victoire_desc").style.display = "none";
                document.getElementById("Lauriane_S_desc").style.display = "block";
                document.getElementById("Maxence_F_desc").style.display = "none";
            }
            if (membre == 4) {
                document.getElementById("Elliott").style.display = "none";
                document.getElementById("Victoire").style.display = "none";
                document.getElementById("Lauriane_S").style.display = "none";
                document.getElementById("Maxence_F").style.display = "block";

                document.getElementById("Elliott_desc").style.display = "none";
                document.getElementById("Victoire_desc").style.display = "none";
                document.getElementById("Lauriane_S_desc").style.display = "none";
                document.getElementById("Maxence_F_desc").style.display = "block";
            }
        }
    }


    function slide_rea() {


        /* 
        groupe 1 = Océanie 
        groupe 2 = Amérique du Sud 
        groupe 3 = Europe 
        groupe 4 = Amérique du Nord 
        */
        if (groupe == 1) {
            document.getElementById("Oceanie").style.display = "block";
            document.getElementById("Amerique_du_Sud").style.display = "none";
            document.getElementById("Europe").style.display = "none";
            document.getElementById("Amerique_du_Nord").style.display = "none";

            document.getElementById("Paisible").style.display = "block";
            document.getElementById("rea_Amerique_du_Sud").style.display = "none";
            document.getElementById("Trap").style.display = "none";
            document.getElementById("rea_Amerique_du_Nord").style.display = "none";

            document.getElementById("Paisible_desc").style.display = "block";
            document.getElementById("rea_Amerique_du_Sud_desc").style.display = "none";
            document.getElementById("Trap_desc").style.display = "none";
            document.getElementById("rea_Amerique_du_Nord_desc").style.display = "none";


        }
        if (groupe == 2) {
            document.getElementById("Oceanie").style.display = "none";
            document.getElementById("Amerique_du_Sud").style.display = "block";
            document.getElementById("Europe").style.display = "none";
            document.getElementById("Amerique_du_Nord").style.display = "none";

            document.getElementById("Paisible").style.display = "none";
            document.getElementById("rea_Amerique_du_Sud").style.display = "block";
            document.getElementById("Trap").style.display = "none";
            document.getElementById("rea_Amerique_du_Nord").style.display = "none";

            document.getElementById("Paisible_desc").style.display = "none";
            document.getElementById("rea_Amerique_du_Sud_desc").style.display = "block";
            document.getElementById("Trap_desc").style.display = "none";
            document.getElementById("rea_Amerique_du_Nord_desc").style.display = "none";
        }
        if (groupe == 3) {
            document.getElementById("Oceanie").style.display = "none";
            document.getElementById("Amerique_du_Sud").style.display = "none";
            document.getElementById("Europe").style.display = "block";
            document.getElementById("Amerique_du_Nord").style.display = "none";

            document.getElementById("Paisible").style.display = "none";
            document.getElementById("rea_Amerique_du_Sud").style.display = "none";
            document.getElementById("Trap").style.display = "block";
            document.getElementById("rea_Amerique_du_Nord").style.display = "none";

            document.getElementById("Paisible_desc").style.display = "none";
            document.getElementById("rea_Amerique_du_Sud_desc").style.display = "none";
            document.getElementById("Trap_desc").style.display = "block";
            document.getElementById("rea_Amerique_du_Nord_desc").style.display = "none";

        }
        if (groupe == 4) {
            document.getElementById("Oceanie").style.display = "none";
            document.getElementById("Amerique_du_Sud").style.display = "none";
            document.getElementById("Europe").style.display = "none";
            document.getElementById("Amerique_du_Nord").style.display = "block";

            document.getElementById("Paisible").style.display = "none";
            document.getElementById("rea_Amerique_du_Sud").style.display = "none";
            document.getElementById("Trap").style.display = "none";
            document.getElementById("rea_Amerique_du_Nord").style.display = "block";

            document.getElementById("Paisible_desc").style.display = "none";
            document.getElementById("rea_Amerique_du_Sud_desc").style.display = "none";
            document.getElementById("Trap_desc").style.display = "none";
            document.getElementById("rea_Amerique_du_Nord_desc").style.display = "block";


        }
    }