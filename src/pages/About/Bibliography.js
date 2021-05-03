//This is the bibliography page, the green tags at the bottom cotain the table of contents and the rest are all of the sources

import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';

const Bibliography = () => {
    return(
        <Container>
            <Row>
                <Col class = "row fill" md={{span:2, offset: 0}} sticky="true" position="absolute" top="100px" bottom="0" bg="light" >
                        <Navbar bg="light" sticky="top" position="absolute">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                           <Nav className="flex-column">
                                <b>Table of Contents</b>
                                <Nav.Link href="#1-manuscripts-and-early-print-editions">1. Manuscripts and Early Print Editions</Nav.Link>
                                <Nav.Link href="#2-reference-works">2. Reference Works</Nav.Link>
                                <Nav.Link href="#3-secondary-material">3. Secondary Material</Nav.Link>
                                <br/>
                            </Nav>
                        </Navbar>
                </Col>

                <Col>
                <h1 align="left">Huon d'Auvergne Bibliography</h1>
                    <h2 align= "left" id ="1-manuscripts-and-early-print-editions">
                        1. Manuscripts and Early Print Editions
                    </h2>


                <p class="bib">Conventions used are those of the <i>MLA Handbook for Writers of Research Papers</i>, 7th ed. (New York, NY: 2009), with the addition of “p.” or “pp.” for page numbers, where applicable, to assist in clarity.</p>

                <ul class="bib" name="1-manuscripts-and-early-print-editions">

                            <li class="bibentry"><i>Huon d’Auvergne</i>. 1341. MS 78 D 8 (olim MS Hamilton 337). Kupferstichkabinett, Berlin.</li><br />

                            <li class="bibentry"><i>Huon d’Auvergne</i>. n.d. MS 32. Biblioteca del seminario, Padua.</li><br />

                            <li class="bibentry"><i>Huon d’Auvergne</i>. 1341. MS 78 D 8 (olim MS Hamilton 337). Kupferstichkabinett, Berlin.</li><br />

                            <li class="bibentry"><i>Huon d’Auvergne</i>. n.d. MS 32. Biblioteca del seminario, Padua.</li><br />

                            <li class="bibentry"><i>Huon d’Auvergne</i>. n.d. MS B. 3429. Biblioteca dell’Archiginnasio, Bologna.</li><br />

                            <li class="bibentry"><i>Huon d’Auvergne</i>. 1441. MS N.III.19. Biblioteca Nazionale Universitaria, Turin.</li><br />

                            <li class="bibentry">Andrea da Barberino. <i>Ugone d’Alvernia</i>. Fifteenth century. MS II.II.58. Biblioteca Nationale Centrale, Florence. (Date: Allaire, <i>Andrea</i> p. 126)</li><br />

                            <li class="bibentry">Andrea da Barberino. <i>Ugone d’Alvernia</i>. Mid-fifteenth century, before 1472. Panciatichiano 34. Biblioteca Nazionale Centrale, Florence. (Date: Allaire, <i>Andrea</i> p. 126)</li><br />

                            <li class="bibentry">Andrea da Barberino. <i>Ugone d’Alvernia</i>. 1509. MS 32. Biblioteca Palatina, Parma. (Date: Allaire, <i>Andrea</i> p. 126)</li><br />

                            <li class="bibentry">Andrea da Barberino. <i>Ugone d’Alvernia</i>. 1511. MS II.II.59. Biblioteca Nationale Centrale, Florence. (Date: Allaire, <i>Andrea</i> p. 126)</li><br />

                            <li class="bibentry">Andrea da Barberino. <i>Ugone d’Alvernia</i>. 1515. MS Barb. lat. 4101. Biblioteca Vaticana, Rome. (Date: Allaire, <i>Andrea</i> p. 126)</li><br />

                            <li class="bibentry">Andrea da Barberino. <i>Ugone d’Alvernia</i>. 1520-22. MS Redi 177. Biblioteca Laurenziana, Florence. (Date: Allaire, <i>Andrea</i> p. 126)</li><br />

                            <li class="bibentry">[“Incomincia vna famosa &amp; antica historia chiamata Carlo Martello”]. Vinetia, Marchio Sessa, 1506. Milan, Biblioteca Pinacoteca Accademia Ambrosiana, S.P.XII.19 (Sala della Rosa); olim S.Q.O.V.43.</li><br />

                            <li class="bibentry">[“Incomincia vna famosa &amp; anticha historia chiamata Carlo Martello”]. 1506. A.5.Tab. 1.M.2. 196/2. Vinetia: Marchio Sessa. Biblioteca Universitaria, Bologna.</li><br />

                            <li class="bibentry"><i>Carlo Martello, Ugo Conte Dalvernia</i>. 1507. G.10747. Milano: Johannemaria Farre. British Lib., London. General Reference Collection.</li><br />

                            <li class="bibentry"><i>Carlo Martello, Ugo Conte Dalvernia</i>. 1507. MS AB. 09. 0049. Milano: Iohannemaria Farre ad instantia de Iohanne Antonio da Legnano. Biblioteca Braidense, Milan.</li><br />

                            <li class="bibentry"><i>Carlo Martello ed Ugo Conte [D]alvernia</i>. 1507. MS Res/4 P.o.it 102. Milano: Da Legna[n]o. Bayerische Staatsbibliothek, Munich.</li><br />

                            <li class="bibentry">Michelangiolo di Cristoforo da Volterra. <i>Ugone d’Alvernia</i>. 1487-88. MS Mediceo Palatino 82. Biblioteca Medicea Laurenziana, Florence. (Date: Allaire, <i>Andrea</i> p. 126)</li><br />

                            <li class="bibentry">Rajna, Pio. Transcription of Padua Biblioteca del Seminario Vescovile Cod. 32. n.d. Carte Rajna XII.M.101. Biblioteca Marucelliana (Sala consultazione manoscritti e rari), Florence.</li><br />

                            <li class="bibentry">Rajna, Pio. Transcription of Torino N.III.19. n.d. Carte Rajna XIX.15. Biblioteca Marucelliana (Sala consultazione manoscritti e rari), Florence.</li><br />

                </ul>
                <br/>
                <h2 class="bib" id="2-reference-works">2. Reference Works</h2>

                <h3 class="bib">Siteography</h3>

                <p class="bib">These volumes are available online, including scanned versions of originally printed volumes). In BOLD are standard abbreviations used in the field for reference, though entries are listed by <a href="https://style.mla.org/">Modern Language Association 7th - 8th edition</a> style with altered spacing for web reading).</p>

                <ul class="bib" name="2-reference-works">

                            <li class="bibentry"><a href="https://www.abdn.ac.uk/bestiary/ms24"><i>Aberdeen Bestiary</i></a>. Special Collections, Library, Special Collections and Museums, University of Aberdeen. Consulted 28 Jan 2021.</li><br />

                            <li class="bibentry"><a href="http://www.lessicografia.it/index.jsp">Accademici della Crusca, Vocabolario degli</a> - Lessicografia della Crusca in rete, Accademia della Crusca, Firenze. Florence: Galileiana M. Cellini 1863-19. 11 vols. Link verified 19 Feb. 2021.</li><br />

                            <li class="bibentry"><a href="https://anglo-norman.net/">AND</a>. <i>Anglo-Norman Dictionary</i> (AND Online Edition). Aberystwyth University/Arts and Humanities Research Council, Geert De Wilde, Project Leader. Link verified 26 Feb. 2021.</li><br />

                            <li class="bibentry"><a href="https://web.archive.org/web/20180409014620/https://www.classicitaliani.it/index233.htm">Arcaismi del Due-Trecento</a>. Directed by Giuseppe Bonghi. Link verified 19 Feb. 2021.</li><br />

                            <li class="bibentry"><a href="https://www.arlima.net/">ARLIMA</a>. <i>Archives de littérature du moyen âge</i>. Directed by Laurent Brun, Département de Français, Université d’Ottawa. (See also <a href="https://www.arlima.net/eh/huon_dauvergne.html"><i>Huon d'Auvergne</i></a>; <a href="https://www.arlima.net/ad/andrea_da_barberino.html">Andrea da Barberino's <i>Ugone d'Alvernia</i></a>; and <a href="https://www.arlima.net/mp/michelangelo_da_volterra.html"> Michelangelo da Volterra's <i>Ugone d'Alvernia</i></a>.) Link verified 19 Feb. 2021.</li><br />

                            <li class="bibentry"><a href="https://artfl-project.uchicago.edu/">ARTFL</a>. <i>American and French Research on the Treasury of the French Language</i>. Directed by Robert Morrissey, Dept. of Romance Languages and Literatures. Link verified 19 Feb. 2021.</li><br />

                            <li class="bibentry"><a href="https://cantus.uwaterloo.ca/">Cantus</a>. Cantus: A Database for Latin Ecclesiastical Chant – Inventories of Chant Sources. Link verified 27 Feb. 2021.</li><br />

                            <li class="bibentry"><a href="http://www.deaf-page.de/fr/index.php">DEAFél</a>. <i>Dictionnaire Étymologique de l'Ancien Français</i>. Directed by Prof. Dr. Thomas Städtler. Link verified 19 Feb. 2021.</li><br />

                            <li class="bibentry"><a href="http://micmap.org/dicfro/search/dictionnaire-godefroy/">DLF</a>. <i>Dictionnaire de l’ancienne langue française et de toutes ses dialectes, du IXe au XVe s</i>. 10 vols. Ed. Frédéric Godefroy. F. Vieweg, 1880-1902. Reprint Kraus, 1969. Link verified 23 Feb. 2021.</li><br />

                            <li class="bibentry"><a href="http://zeus.atilf.fr/dmf/">DMF</a>. <i>Dictionnaire du Moyen Français (1330-1500)</i>. ATILF Directed by Alex Boulton. Link verified 19 Feb. 2021.</li><br />

                            <li class="bibentry"><a href="www.dom-en-ligne.de/index.html">DOM</a>. <i>Le Dictionnaire d'Occitan Médiéval</i>. Institut de Philologie romane de l'Université de Munich. Link verified 26 Feb. 2021.</li><br />

                            <li class="bibentry">DuCange, Charles du Fresne, et. al. <a href="http://ducange.enc.sorbonne.fr/"><i>Glossarium mediæ et infimæ latinitatis</i></a>. Niort: L. Favre, 1883-1887. Link verified 19 Feb. 2021.</li><br />

                            <li class="bibentry"><a href="https://apps.atilf.fr/lecteurFEW/">FEW</a>. Wartburg, Walther von. <i>Französisches etymologisches Wörterbuch</i>. Bonn: F. Klopp, 1921-. 25 vols. + Supp. Link verified 19 Feb. 2021.</li><br />

                            <li class="bibentry"><a href="https://loyolanotredamelib.org/fiola/">FIOLA</a>. <i>Franco-Italian On-Line Archive</i>. Dir. Leslie Zarker Morgan and David P. Bénéteau. Link verified 19 Feb. 2021.</li><br />

                            <li class="bibentry"><a href="http://micmap.org/dicfro/search/dictionnaire-godefroy/">Gdf</a>. Godefroy, Frédéric. <i>Dictionnaire de l’ancienne langue française et de toutes ses dialectes, du IXe au XVe s</i>. Paris: F. Vieweg, 1880-1902. Rep. Nendeln, Liechtenstein: Kraus Reprint, 1965. 10 vols. Link verified 19 Feb. 2021. (Scanned version of the original)</li><br />

                            <li class="bibentry"><a href="http://micmap.org/dicfro/search/complement-godefroy/">GdfC</a>. Godefroy, Frédéric. <i>Dictionnaire de l’ancienne langue française et de toutes ses dialectes, du IXe au XVe s</i>. Complément. Paris: Champion, 1982. Link verified 19 Feb. 2021. (Scanned version of the original)</li><br />

                            <li class="bibentry"><a href="http://micmap.org/dicfro/search/lexique-godefroy/">GdfL</a>. Godéfroy, Frédéric. <i>Lexique de l’ancien français</i>. Paris: Champion, 1982. Link verified 23 Feb. 2021. (Scanned version of the original)</li><br />

                            <li class="bibentry"><i><a href="http://cf.itergateway.org/italicum/record.cfm?idx=1">Iter Italicum</a>. A Finding List of Uncatalogued or Incompletely Catalogued Humanistic Manuscripts of the Renaissance in Italian and Other Libraries</i>. Comp. Paul Oscar Kristeller. Volume III. Federal Republic of Germany. Berlin, Kupferstichkabinett (1968). (bibliography useful though our ms. not there) Warburg Institute/Brill, 1963-1997. (Membership required for electronic access.)</li><br />

                            <li class="bibentry">Langlois, E. <a href="https://archive.org/details/tabledesnomsprop00languoft"><i>Table des noms propres de toute nature compris dans les chansons de geste imprimées</i></a>. Paris: Bouillon, 1904. Link verified 19 Feb. 2021.</li><br />

                            <li class="bibentry">Melzi-Tosi Melzi, Gaetano, and Paolo Antonio Tosi. <a href="https://archive.org/details/bibliografiadei00tosigoog/page/n35"><i>Bibliografia dei romanzi e poemi cavallereschi italiani</i></a>. 2a ed, corretta ed accresciuta. Milan: Tosi, 1938. pp. 18-19. Link verified 23 Feb. 2021.</li><br />

                            <li class="bibentry"><a href="http://pld.chadwyck.com/">P-L</a>. <i>Patrologia Latina Database</i>. Alexandria, Va: Chadwyck-Healey, Inc., 1996. Orig. Patrologiae Cursus Completus, sive bibliotheca universalis ... omnium S.S. Patrum, Doctorum, Scriptorumque ecclesiasticorum qui ab aevo apostolico ad Innocentii III tempora floruerunt. Ser. 1a, Patrologiae, Vol. 73. Paris: Ed. in via D'Amboise, prope portam vulgo d'Enfer, or Petit- Montrouge, 1849. Link verified 20 Feb. 2021.</li><br />

                            <li class="bibentry"><a href="http://www.perseus.tufts.edu/hopper/">Perseus</a>. <i>Perseus Digital Library</i>, Gregory R. Crane, editor in chief, Tufts University. Version 4.0. Link verified 28 February 2021.</li><br />

                            <li class="bibentry"><a href="https://archive.org/details/romanischesetymo00meyeuoft">REW</a>. Meyer-Lübke, Wilhelm. <i>Romanisches etymologisches Wörterbuch</i>. Heidelberg: Universitätsverlag C. Winter, 1911 (and other editions). Link verified 19 Feb. 2021.</li><br />

                            <li class="bibentry"><a href="https://www.rialfri.eu/rialfriWP/">RIALFrI</a>. <i>Repertorio informatizzato antica letteratura franco-italiana</i>. Directed by Francesca Gambino, Università di Padova. Link verified 19 Feb. 2021.</li><br />

                            <li class="bibentry"><a href="https://www.ling.uni-stuttgart.de/institut/ilr/toblerlommatzsch/">T-L</a>. <i>Altfranzösisches Wörterbuch</i>. Adolf Toblers nachgelassene Materialien, ed. Erhard Lommatzsch, developed by Hans Helmut Christmann. Stuttgart: Franz-Steiner-Verlag Wiesbaden, 1925 - 1995. Completed with: Godefroy, Frédéric: Dictionnaire de l'ancienne langue française et tous ses dialectes du IXe au XVe siècle. Paris: Vieweg 1898-1902. Edition électronique conçue et réalisée par Peter Blumenthal et Achim Stein.</li><br />

                            <li class="bibentry"><a href="http://atilf.atilf.fr/tlf.htm">TLFi</a>. <i>Trésor de la langue frangaise informatisé</i>. ATILF - CNRS &amp; Université de Lorraine. Link verified 23 Feb. 2021.</li><br />

                            <li class="bibentry"><a href="http://tlio.ovi.cnr.it/TLIO/">TLIO</a>. <i>Tesoro della Lingua Italiana delle Origini</i>. Dir. Pietro G. Beltrami. Link verified 19 Feb. 2021.</li><br />

                            <li class="bibentry"><a href="http://vev.ovi.cnr.it/vocabolario">VEV</a>. <i>Vocabolario storico-etimologico del veneziano</i>, directed by Lorenzo Tomasin and Luca D'Onghia. Link verified 26 Feb. 2021.</li><br />

                </ul>

                <p class="bib">NB: Standard text edition abbreviations are found on the website, DEAFBibél http://www.deaf-page.de/bibl_neu.php for the German version, and http://www.deaf-page.de/fr/bibl_neu.php for the French version, where one can either seek a specific abbreviation or browse by initial letter of the alphabet by clicking on it from the list above the boxes.</p>

                <h3 class="bib">Compendium websites</h3>

                <p class="bib">These sites have multiple links to various resources</p>

                <ul class="bib">

                            <li class="bibentry"><a href="https://www.lexilogos.com/francais_ancien.htm">Lexilogos Old French</a></li><br />

                            <li class="bibentry"><a href="https://www.lexilogos.com/italien_ancien.htm">Lexilogos Old Italian</a></li><br />

                            <li class="bibentry"><a href="https://www.lexilogos.com/english/latin_dictionary.htm">Lexilogos Latin</a> (including Medieval)</li><br />

                            <li class="bibentry"><a href="http://micmap.org/dicfro/dictionaries">TCAF: Middle French Dictionary</a></li><br />

                            <li class="bibentry"><a href="http://micmap.org/dicfro/search/tableaux-de-conjugaison">TCAF: Middle French Verbs</a></li><br />

                </ul>

                <h3 class="bib">Language Reference</h3>

                <p class="bib">The following are printed language-related reference works.</p>

                <ul class="bib">

                            <li class="bibentry">Baldinger, Kurt; Städtler, Thomas, dirs. <i>Dictionnaire étymologique de l’ancien français</i>. Tübingen: Niemeyer, 1974-2010; Berlin/New York: De Gruyter, 2010-. (DEAF)</li><br />

                            <li class="bibentry">Battaglia, Salvatore. <i>Grande dizionario della lingua italiana</i>. 21 vols. Gen. Ed., Giorgio Bárberi Squarotti. Turin: Unione tipografico editrice torinese, 1961-. (GDLI)</li><br />

                            <li class="bibentry">Battisti, Carlo and Giovanni Alessio. <i>Dizionario etimologico italiano</i>. 5 vols. Florence: G. Barbera, 1950-578. (DEI)</li><br />

                            <li class="bibentry">Bezzola, Reto R. <i>Abbozzo di una storia dei gallicismi italiani nei primi secoli (750-1300). Saggio storico-linguistico</i>. Heidelberg: Winter, 1925. Rpt. Bologna: Forni, 1984.</li><br />

                            <li class="bibentry"><a href="http://vulsearch.sourceforge.net/index.html"><i>Biblia Sacra Vulgatam Clementinam, nova editio</i></a>, edited by Alberto Colunga and Laurentio Turrado, 4° ed. Madrid: Biblioteca de autores cristianos, 1965. Link verified 27 Feb. 2021.</li><br />

                            <li class="bibentry">Bloch, O., and W. von Wartburg. <i>Dictionnaire étymologique de la langue française</i>. 2 vols. Paris: Presses Universitaires de France, 1932. (BlWartburg)</li><br />

                            <li class="bibentry">Cortelazzo, Manlio, and Paolo Zolli. <i>Dizionario etimologico della lingua italiana</i>. Bologna: Zanichelli, 1979-85. (DELI)</li><br />

                            <li class="bibentry">DeSole, Corinna. <i>Repertorio ragionato dei personaggi citati nei principali cantari cavallereschi italiani</i>. Alessandria: Edizioni dell’Orso, 1995.</li><br />

                            <li class="bibentry">Di Stefano, Giuseppe. <i>Nouveau dictionnaire historique des locutions. Ancien Français, Moyen Français, Renaissance</i>. 2 vols.Turnhout: Brepols, 2015.</li><br />

                            <li class="bibentry">DuCange, Charles, <i>Glossarium mediae et infimae latinitatis</i>. 10 vols. Graz: Akademische Druck- und Verlagsanstalt, 1954.</li><br />

                            <li class="bibentry">Durante, Dino and Gian Franco Turato. <i>Dizionario etimologico veneto-italiano</i>. Padua: Erredici, 1975.</li><br />

                            <li class="bibentry">Flutre, Ferdinand. <i>Table des noms propres avec toutes leur variantes, figurant dans les romans du moyen âge écrits en français ou en provençal et actuellement publiés ou analysés</i>. Paris: Champion, 1962.</li><br />

                            <li class="bibentry">Foulet, Lucien. <i>Petit syntaxe de l’ancien français</i>. Paris: Champion, 1982.</li><br />

                            <li class="bibentry">Gamillscheg, Ernst. <i>Etymologisches Wörterbuch der französischen Sprache</i>. Heidelberg: Winter, 1969. (EWFS)</li><br />

                            <li class="bibentry">Gilléron, Jules / Édmont, Édmond. <i>Atlas linguistique de la France</i>. 9 vols. Paris: Champion, 1902-1910, with supplément 1920. (ALF)</li><br />

                            <li class="bibentry">Godefroy, Frédéric. <i>Dictionnaire de l’ancienne langue française et de toutes ses dialectes, du IXe au XVe s</i>. 10 vols. 1880-1902. Nendeln, Liechtenstein: Kraus Reprint, 1965. (Gdf)</li><br />

                            <li class="bibentry">Godefroy, Frédéric. <i>Dictionnaire de l’ancienne langue française et de toutes ses dialectes, du IXe au XVe s</i>. Complément. Paris: Émile Bouillon, 1893.</li><br />

                            <li class="bibentry">Greimas, Algirdas Julien. <i>Dictionnaire de l’ancien français</i>. Paris: Larousse, 1992. (multiple editions). (Greimas)</li><br />

                            <li class="bibentry">Hindley, Alan, Frederick W. Langley, and Brian J. Levy. <i>Old French-English Dictionary</i>. Cambridge: Cambridge UP, 2006.</li><br />

                            <li class="bibentry">Holtus, Günter. <i>Lexikalische Untersuchungen zur Interferenz: die franko-italienische Entrée d’Espagne</i>. Tübingen: Niemeyer, 1979. Beihefte zur Zeitschrift für romanische Philologie 170.</li><br />

                            <li class="bibentry">Jaberg, Karl and Jacob Jud. <i>Sprach-und Sachatlas Italiens und der Sudschweiz</i>. 8 vols. Zofingen: Ringier, 1928-1940. (AIS)</li><br />

                            <li class="bibentry">Levy, Emil. <i>Petit dictionnaire provençal-français</i>. Heidelberg: Winter, 1966.</li><br />

                            <li class="bibentry">Matsumura, Takeshi. <i>Dictionnaire du français médiéval</i>. Dir. Michel Zink. Paris: Belles Lettres, 2015.</li><br />

                            <li class="bibentry">Ménard, Philippe. <i>Manuel du français du moyen âge. 1. Syntaxe de l’ancien français</i>. Bordeaux: Sobodi, 1973.</li><br />

                            <li class="bibentry">Meyer-Lübke, Wilhelm. <i>Romanisches etymologisches Wörterbuch</i>. Heidelberg: Universitätsverlag C. Winter, 1911. (Multiple later editions). (REW)</li><br />

                            <li class="bibentry">Moisan, André. <i>Répertoire des noms propres de personnes et de lieux cités dans les chansons de geste françaises et les œuvres étrangères dérivées</i>. 5 vols. Geneva: Droz, 1986.</li><br />

                            <li class="bibentry">Monaci, Ernesto. <i>Crestomazia italiana dei primi secoli. Con prospetto delle flessioni grammaticali e glossario</i>. 1889. Città di Castello: S. Lapi, 1955.</li><br />

                            <li class="bibentry">The Bible. <i>The New Oxford Annotated Bible with Apocrypha, expanded version</i>. NY: Oxford UP, 1977. (ONAB)</li><br />

                            <li class="bibentry">Pellegrini, Giambattista. “Franco-veneto e veneto antico.” <i>Filologia romanza</i>, vol. 3, 1956, pp. 122-40.</li><br />

                            <li class="bibentry">Pfister, Max, et al. <i>Lessico etimologico italiano</i>. Wiesbaden: Reichert, 1984-. (LEI)</li><br />

                            <li class="bibentry">Pope, Mildred K. <i>From Latin to Modern French with Especial Consideration of Anglo-Norman. Phonology and Morphology</i>. Manchester: Manchester UP, 1934.</li><br />

                            <li class="bibentry">Rheinfelder, Hans. <i>Altfranzösische Grammatik</i>. 2 vols. Munich: Hueber, 1976.</li><br />

                            <li class="bibentry">Rohlfs, Gerhard. <i>Grammatica storica della lingua italiana e dei suoi dialetti</i>. 3 vols. Turin: Einaudi, 1966.</li><br />

                            <li class="bibentry">Stussi, Alfredo, ed. <i>Testi veneziani del Duecento e dei primi del Trecento</i>. Pisa: Nistri-Lischi, 1965.</li><br />

                            <li class="bibentry">Tobler, Adolf. <i>Altfranzösisches Wörterbuch</i>. Wiesbaden: Wiesbaden: Franz Steiner, 1969.</li><br />

                            <li class="bibentry">Wartburg, Walther von. <i>Französisches etymologisches Wörterbuch</i>. 25 vols. + Supp. Bonn: F. Klopp, 1921-.  (FEW)</li><br />

                </ul>
                <p class="bib"> </p>
                <h3 class="bib">Editorial Reference</h3>

                <p class="bib">Editing reference volumes and articles, both computational and printed text-related, with catalogues of libraries and collections</p>

                <ul class="bib">

                            <li class="bibentry">Albertini Ottolenghi, M. G. “La Biblioteca dei Visconti e degli Sforza.” <i>Studi petrarcheschi</i>, n. s. vol. 8, 1991, pp. 1-281.</li><br />

                            <li class="bibentry">Ascoli, Graziadio. “Saggi ladini.” <i>Archivio Glottologico Italiano</i>, vol. 1, 1873, pp. 1-537.</li><br />

                            <li class="bibentry">Baker, Craig. “Editing Medieval Texts.” <i>Handbook of Medieval Studies: Terms, Methods, Trends</i>, edited by Albrecht Classen. Berlin: De Gruyter, 2010, pp. 427-50.</li><br />

                            <li class="bibentry">Bartoli, Adolfo. “I codici francesi della Biblioteca Marciana di Venezia.” <i>Archivio veneto</i>, vol. 3, 1872, pp. 331-66.</li><br />

                            <li class="bibentry">Bertoni, Giulio. <i>La Biblioteca estense e la cultura ferrarese ai tempi del duca Ercole I (1471-1505)</i>. Turin: Loescher, 1903.</li><br />

                            <li class="bibentry">Borroni, Fabia. <i>Le Carte Rajna della Biblioteca Marucelliana. Catalogo e Bibliografia</i>. Florence: Sansoni, 1956.</li><br />

                            <li class="bibentry">Bourgain, Pascale, and Françoise Vieillard. <i>Conseils pour l’édition des textes médiévaux. Fascicule III: Textes littéraires</i>. Paris: Éditions du CTHS, École des chartes, 2002.</li><br />

                            <li class="bibentry">Braghirolli, Willelmo, Gaston Paris, and Paul Meyer. "Inventaire des manuscrits en langue française possédés par Francesco Gonzaga I, capitaine de Mantoue, mort en 1407," <i>Romania</i>, vol. 9, 1880, pp. 497-514.</li><br />

                            <li class="bibentry">Brambilla Ageno, Franca. <i>L'edizione critica dei testi volgari</i>. Padua: Antenore, 1975.</li><br />

                            <li class="bibentry">Briquet, Charles-Moïse. <i>Les filigranes: Dictionnaire historique des marques du papier dès leur apparition vers 1282 jusqu’en 1600</i>. 4 vols. 1923. New York, Hacker Art Books, 1966.</li><br />

                            <li class="bibentry">Cappelli, Adriano. “La Biblioteca Estense nella prima metà del secolo XV.” <i>Giornale storico della letteratura italiana</i>, vol. 14, no. 2, 1889, pp. 1-30.</li><br />

                            <li class="bibentry">Castellani, Carlo. “Sul fondo francese della Biblioteca Marciana: a proposito di un codice adesso recentemente aggiunto.” <i>Atti del R. istituto veneto di scienze, lettere ed arti</i>, series 7, vol. 5, 1892-93, pp. 56-94, offprint Venezia: Ferrari, 1893.</li><br />

                            <li class="bibentry"><i>Catalogue of the Magnificent Collection of Manuscripts from Hamilton Palace</i>. London: Dryden Press, 1883. p. 56, #337.</li><br />

                            <li class="bibentry">Ciampoli, Domenico. <i>I codici francesi della Biblioteca Marciana</i>. Venice: Olschki, 1897.</li><br />

                            <li class="bibentry">Coi, A., <i>Catalogus codicum manuscriptorum Bibliothecae Seminarii Patavini cui rerum et nominum index praeponitur</i>. Padua: Seminario Vescovile, n.d. [but 1810-39]. https://www.dropbox.com/sh/qunqi60epfjfwff/AADDY8AQPOEzJqCict_rSisYa Link verified 24 Feb. 2021.</li><br />

                            <li class="bibentry">Contini, Gianfranco. “Le début de la Mort Charlemagne.” <i>La Chanson de geste et le mythe carolingien: Mélanges René Louis</i>, no editor listed. 2 vols. Saint–Père–Sous–Vézelay: Musée archéologique régional, 1982, pp. 303–11.</li><br />

                            <li class="bibentry">Delisle, Léopold. <i>Le cabinet des manuscripts de la bibliothèque impériale</i>, t. 1. Paris: Imprimerie Impériale, 1868. https://archive.org/details/lecabinetdesmanu01deliuoft Link verified 24 Feb. 2021.</li><br />

                            <li class="bibentry">Dionisotti, Carlo. “Appunti su cantari e romanzi.” <i>Italia medievale e umanistica</i>, vol. 32, 1989, pp. 227–61.</li><br />

                            <li class="bibentry">Donello, Andrea, et al. <i>I manoscritti della Biblioteca del Seminario Vescovile di Padova</i>. Venezia: Regione del Veneto, Firenze : SISMEL, Edizioni del Galluzzo, 1998. Biblioteche e archivi 2. Manoscritti medievali del Veneto 1.</li><br />

                            <li class="bibentry">Duval, Frédéric. “Transcrire le français médiéval. De l’“instruction” de Paul Meyer à la description linguistique contemporaine.” <i>Bibliothèque de l’École des chartres</i>, vol. 170, 2012, pp. 321-42.</li><br />

                            <li class="bibentry">Edmunds, Sheila. "The Medieval Library of Savoy." <i>Scriptorium</i>, vol. 24, 1970, pp. 318-27; vol. 25, 1971, pp. 253-84; vol. 26, 1972, pp. 269-93.</li><br />

                            <li class="bibentry">Ferrari, Giorgio Emanuel, ed. <i>Documenti marciani e principale letteratura sui codici veneti di epopea carolingia</i>. Venice: Biblioteca nazionale marciana, 1961.</li><br />

                            <li class="bibentry">Ferrari, Giorgio Emanuel. “La tradizione di studi dei codici marciani francesi d’epopea carolingia: Preludio ad una bibliografia analitica.” <i>Atti del 2<sup>o</sup> Congresso internazionale della Société Rencesvals</i>, no ed. listed, special issue of Cultura neolatina, vol. 21, 1961, pp.105-15.</li><br />

                            <li class="bibentry">Foulet, Alfred, and Mary Blakely Speer. <i>On Editing Old French Texts</i>. Lawrence, KS: Regents Press of Kansas, 1979.</li><br />

                            <li class="bibentry">Frati, Carlo. “Praefatio et Elenchus operum B. Peyroni.” <i>Codices Italici manu exarati qui in bibliotheca Taurinensis Athenaei ante diem XXVI Ianuarii M.CM.IV asservabantur</i>. Turin: Clausen,1904, pp. 88-90.</li><br />

                            <li class="bibentry">Girolla, P. “La biblioteca di Francesco Gonzaga: secondo l’inventario del 1407.” <i>Atti e memorie dell'Accademia Virgiliana di Mantova</i>. n.s. vols. 14-16, 1921-23, pp. 30-72.</li><br />

                            <li class="bibentry">Holden, Anthony J. “L’Édition des textes médiévaux.” <i>Critique et éditions de textes. Actes du XVIIe Congrès International de linguistique et philologie romanes (Aix-en-Provence, 29 août - 3 septembre 1983)</i>. Vol. 9. Aix-en-Provence: Publications Université de Provence, 1986. pp. 377-82.</li><br />

                            <li class="bibentry">Lemm, Siegfried, and Martin Löpelmann. <i>Mitteilungen aus der königlichen Bibliothek, IV. Kurzes Verzeichnis der romanischen Handschriften</i>. Berlin: Weidmannsche Buchhandlung, 1918. p. 14.</li><br />

                            <li class="bibentry">Lepage, Yvan G. <i>Guide de l’édition de textes en ancien français</i>. Paris: Champion, 2001.</li><br />

                            <li class="bibentry">Mazzatinti, G[iuseppe]. “Inventario dei codici della Biblioteca Visconteo-Sforzesca redatto da Ser Facino da Fabriano nel 1459 e 1469.” <i>Giornale Storico della Letteratura Italiana</i>, vol. 1, 1883, pp. 33-59.</li><br />

                            <li class="bibentry">Mazzatinti, Giuseppe. “Inventario dei codici della biblioteca Visconteo-Sforzesca redatto da Ser Facino da Fabriano nel 1459 e 1469.” <i>Giornale storico della letteratura italiana</i>, vol. 1, 1883, pp. 33-59.</li><br />

                            <li class="bibentry">Mazzatinti, Giuseppe. <i>Inventari dei manoscritti delle biblioteche d’Italia</i>. Forlì: Bordandini, 1898, vol. 8.</li><br />

                            <li class="bibentry">Meyer, Paul. “Instruction pour la publication des anciens textes.” <i>Bulletin de la Société des Anciens Textes Français</i>, vol. 34, 1908, pp. 64-79. Reprinted in Bulletin de l’École des chartes, vol. 71, 1910, pp. 224-33.</li><br />

                            <li class="bibentry"><a href="https://www.mla.org/Resources/Research/Surveys-Reports-and-Other-Documents/Publishing-and-Scholarship/Reports-from-the-MLA-Committee-on-Scholarly-Editions/Guidelines-for-Editors-of-Scholarly-Editions"><i>Modern Language Association of America. Guidelines for Editors of Scholarly Editions</i></a>. Modern Language Association, revised 29 June 2011. Link verified 19 Jan. 2021.</li><br />

                            <li class="bibentry">Novati, F. “I codici francesi de’ Gonzagi secondo nuovi documenti.” <i>Romania</i>, vol. 1890, pp. 161-200.</li><br />

                            <li class="bibentry">Paris, Gaston. “Un ancien catalogue de manuscrits français.” <i>Romania</i>, vol. 17 1888, pp. 104-105.</li><br />

                            <li class="bibentry">Pasini, Josephus. <i>Manuscriptorum Codicum Bibliothecae regii Taurinensis Athenaei pars Altera. Complectens Latinos, Italos, &amp; [sic] Gallicos</i>. Turin: Typographia Regia, 1749, pp. 411-12.</li><br />

                            <li class="bibentry">Pellegrin, Elisabeth. <i>Les bibliothèques des Visconti et des Sforza ducs de Milan, au XVe siècle</i>. Paris: Service des publications du CNRS, 1955.</li><br />

                            <li class="bibentry">Pellegrin, Elisabeth, with Tammaro De Marinis. <i>Les bibliothèques des Visconti et des Sforza (Supplément)</i>. Paris: F. de Nobele, Florence: L. S. Olschki, 1969.</li><br />

                            <li class="bibentry">Pellegrini, G. B. “Franco-veneto e veneto antico.” <i>Filologia romanza</i>, vol. 3, 1960, pp. 122-40.</li><br />

                            <li class="bibentry">Peyron, Bernardinus. <i>Codices Italici manu exarati qui in bibliotheca Taurinensis Athenaei ante diem XXVI Ianuarii M.CM.IV asservabantur</i>. Turin: Clausen, 1904. Praemittuntur C. Frati italica Praefatio et Elenchus operum B. Peyroni typis impressorum, pp. 88-90.</li><br />

                            <li class="bibentry">Rajna, Pio. “Ricordi di codici francesi posseduti dagli Estensi nel sec. XV.” <i>Romania</i>, vol. 2, 1873, pp. 49-58.</li><br />

                            <li class="bibentry">Roques, Mario. “Établissement de règles pratiques pour l’édition des anciens textes français et provençaux.” <i>Romania</i>, vol. 52, 1926, pp. 243-49.</li><br />

                            <li class="bibentry">Smith, Marc H. “Conseils pour l’édition des documents en langue italienne (XIVe-XVIIe siècle).” <i>Bibliothèque de l’École des chartes</i>, vol. 159, 2001, pp. 541-78.</li><br />

                            <li class="bibentry">Thomas, Antoine. “Les Manuscrits français et provençaux des ducs de Milan au Château de Pavie.” <i>Romania</i>, vol. 40, 1911, pp. 571-609.</li><br />

                            <li class="bibentry">Veneziale, Marco. “Nuove acquisizioni al fondo francese della biblioteca dei Gonzaga.” <i>Romania</i>, vol. 135, 2017, pp. 412-31.</li><br />

                            <li class="bibentry">Vieillard, Françoise, and Olivier Guyotjeannin, eds. <i>Conseils pour l’édition des textes médiévaux. I. Fascicule I: conseils généraux</i>. Paris: Éd. du CTHS, 2001.</li><br />

                            <li class="bibentry">Varvaro, Alberto. <i>Prima lezione di filologia</i>. Roma-Bari: Laterza, 2012.</li><br />

                            <li class="bibentry">Zaccarello, Michelangelo. <i>L’Edizione critica del testo letterario. Primo corso di filologia italiana</i>. Florence: Le Monnier, 2017.</li><br />

                </ul>

                <h3 class="bib">Digital Scholarship</h3>

                <ul class="bib">

                            <li class="bibentry">Bornstein, George and Theresa Tinkle, eds. <i>The Iconic Page in Manuscript, Print, and Digital Culture.</i> Ann Arbor, MI: University of Michigan Press, 1998.</li><br />

                            <li class="bibentry">Driscoll, Matthew James and Elena Pierazzo, eds. <a href="https://www.openbookpublishers.com/reader/483"><i>Digital Scholarly Edition: Theories and Practices</i></a>. Cambridge: Open Book Publishers, 2016. Link verified 5 March 2021.</li><br />

                            <li class="bibentry">Landow, George P. <i>Hypertext: The Convergence of Contemporary Critical Theory and Technology</i>, Baltimore: JHU, 1992.</li><br />

                            <li class="bibentry"><a href="https://www.digitale-edition.de/exist/apps/editions-browser/$app/$app/index.html"><i>A Catalogue of Digital Scholarly Editions</i></a>, edited by Patrick Sahle et al., Bergische Universität Wuppertal. Link verified 5 March 2021.</li><br />

                            <li class="bibentry">Siemens, Ray, et al. “Toward Modeling the Social Edition: An Approach to Understanding the Electronic Scholarly Edition in the Context of New and Emerging Social Media.” <i>Literary and Linguistic Computing</i>, vol. 27, no. 4, 2012, pp. 445-61.</li><br />

                </ul>

                <h2 class="bib" id="3-secondary-material">3. Secondary Material</h2>

                <p class="bib">Editions, monographs and scholarly essays</p>

                <h3 class="bib">A</h3>

                    <ul class="bib">

                            <li class="bibentry">Adams, Jenny. <i>Power Play: The Literature and Politics of Chess in the Late Middle Ages</i>. Philadelphia: U of Penn P, 2006.</li><br />

                            <li class="bibentry"><i>Aliscans (Rédaction A)</i>. Ed. by Claude Régnier. 2 vols. Paris: Champion, 1990. Rpt. with translation [into French], introduction and notes by Jean Subrenat and Andrée Subrenat. Paris: Champion, 2007. Champion Classiques.</li><br />

                            <li class="bibentry">Allaire, Gloria. “Due testimoni sconosciuti di Andrea da Barberino nel codice barberiniano latino 4101 della Biblioteca Vatican.” <i>Pluteus</i>, vol. 6, 1988, pp. 123-30.</li><br />

                            <li class="bibentry">Allaire, Gloria. "Considerations on Huon d'Auvergne / Ugo d'Alvernia." <i>Viator</i>, vol. 32, 2001, pp. 185-203.</li><br />

                            <li class="bibentry">Andrea da Barberino. <i>Storia d'Ugone d'Alvernia, volgarizzata nel sec. XIV da Andrea da Barberino, non mai fin qui stampata</i>, edited by F. Zambrini. 2 vols. 1882. Bologna: Commissione per i testi di lingua, 1968.</li><br />

                            <li class="bibentry">Andreas Capellanus. <i>The Art of Courtly Love</i>, trans. by John Jay Parry. Columbia U P, 1941; rpt. Norton, 1969.</li><br />

                            <li class="bibentry">Andreas Capellanus. <a href="https://web.archive.org/web/20200718204233/http://www.thelatinlibrary.com/"><i>De amore libri tres</i></a>. Link verified 5 March 2021. (no further information given in credits: “submitted by Angus Graham from an unidentified e-text”)</li><br />

                            <li class="bibentry">Anglade, J. "Notice sur un manuscrit de Ugo d'Alvernia." <i>Romania</i>, vol. 45, 1918-19, pp. 108-16.</li><br />

                            <li class="bibentry"><i>Aquilon de Bavière: Roman franco-italien en prose (1379-1407)</i>, edited by Peter Wunderli. 3 vols. Berlin: DeGruyter, 1982, 2007. Beihefte zur Zeitschrift für romanische Philologie 188,189, 337.</li><br />

                            <li class="bibentry"><i>Aspremont: Chanson de geste du XIIe siècle</i>, edited and translated [into modern French] by François Suard. Paris: Champion, 2008.</li><br />

                            <li class="bibentry"><i>Attila, Guerra di</i>, by Nicola da Casola, edited by Guido Stendardo. 2 vols. Modena: STEM, 1941. (Attila)</li><br />

                            <li class="bibentry"><i>Aye d’Avignon: Chanson de geste anonyme</i>, edited by Sam J. Borg. Geneva: Droz, 1967. Textes littéraires français 134.</li><br />

                    </ul>

                <h3 class="bib">B</h3>

                    <ul class="bib">

                            <li class="bibentry">Barbato, Marcello. “Il Franco-italiano: Storia e teoria: Definizione tipologia fenomenologia (Seminario 2014), In Memoria di Cesare Segre.” <i>Medioevo romanzo</i>, vol. 39, no.1, pp. 20-51.</li><br />

                            <li class="bibentry">Barini, Giorgio. <i>Cantari cavallereschi dei sec. XV e XVI</i>. Bologna: Romagnoli dall’acqua, 1905.</li><br />

                            <li class="bibentry">Bartholomaeis, Vincenzo de, <i>Le carte di Giovanni Maria Barbieri nell’ Archiginnasio di Bologna</i>. Bologna: Cappelli, 1927.</li><br />

                            <li class="bibentry">Bartholomaeis, Vincenzo de. “La Discesa di Ugo d'Alvernia all'inferno secondo il frammento di Giovanni Maria Barbieri.” <i>Memorie. Classe di Scienze morali. Sezione di scienze storico-filologiche e sezioni di scienze giuridiche. Reale accademia delle scienze dell'Istituto di Bologna</i>, ser. 2, vol. 10; ser. 3, Vol 3., 1929, pp. 3-54.</li><br />

                            <li class="bibentry">Bartolucci, Lidia. “Attraverso i volgarizzamenti italiani della ‘Lettera del Prete Gianni’: Annotazioni sui manoscritti della biblioteca marciana (mss. It. IX 142 e IT. XI 6).” <i>Quaderni di Lingue e Letterature</i>, vol. 18, 1993, pp. 137-50.</li><br />

                            <li class="bibentry">Bartolucci, Lidia. “L’Oriente nelle versioni italiane della ‘Lettera del Prete Gianni’. I rifacimenti.” <i>Medioevo romanzo e orientale. Oralità, scrittura, modelli narrativi. Colloquio Internazionale Napoli, 17-19 febbraio 1994</i>, edited by Antonio Pioletti e Francesca Rizzo. Nervo, Soveria Mannelli: Rubbettino, 1999, pp. 221-34.</li><br />

                            <li class="bibentry">Bartolucci, Lidia. “Qualche appunto sulla ‘Lettera del Prete Gianni’ nella versione del manoscritto Cambridge. Fra ‘Anglici’ e ‘Tribus judaerorum’.” <i>Filologia romanza, filologia germanica: intersezioni e diffrazioni. Colloquio internazionale, Verona 3-5 aprile 1995</i>, edited by A. M. Babbi, Adele Cipolla e Marcello Meli. Verona: Edizioni Fiorini, 1997, pp. 309-20.</li><br />

                            <li class="bibentry">Bartolucci, Lidia. “La Ricezione della ‘Lettera del Prete Gianni’ nella letteratura romanza medioevale: il caso di Reinbert.” <i>Quaderni di Lingue e Letterature</i>, vol. 21,1996, pp. 151-56.</li><br />

                            <li class="bibentry">Bassi, Stelio. "La Biblioteca Nazionale di Torino. Formazione delle raccolte e sistemazione nella nuova sede. Parte I: Origini – 1956 ; Parte II: 1957-1975." <i>Associazione Italiana Biblioteche. Bollettino d'informazioni trimestrale</i>, n. s. vol. 1, no. 1, Gennaio-Marzo 1975, pp. 3-24; n.s. vol. 15, no. 2, Aprile-Giugno 1975, pp. 89-107.</li><br />

                            <li class="bibentry">Bédier, Joseph, ed. <i>Le Lai de l’Ombre par Jean Renart</i>. Fribourg: Impr. et libraire de l’œuvre de Saint-Paul,1890.</li><br />

                            <li class="bibentry">Bédier, Joseph, ed. <i>Le Lai de l’Ombre par Jean Renart</i>. Paris: Firmin-Didot, 1913. (with numerous reprints)</li><br />

                            <li class="bibentry">Bédier, Joseph. <i>Les Légendes épiques: Recherches sur les origines des chansons de geste</i>. 1908. Paris: Champion, 1929. 3 vols.</li><br />

                            <li class="bibentry">Beer, Marina. <i>Romanzi di cavalleria. Il ‘Furioso’ e il romanzo itlaiano del primo Cinquecento</i>. Rome: Bulzoni, 1987.</li><br />

                            <li class="bibentry">Bennett, Philip E. “Les Avatars de Guibourc I: Cycle de Guillaume, Wolfram, i Nerbonesi.” <i>In Limine Romaniae : chanson de geste et épopée européenne, Actes du XVIIIe Congrès international de la Société Rencesvals pour l’étude des épopées romanes (20-24 juillet 2009)</i>, edited by Carlos Alvar and Constance Cecile Carta. Bern: Peter Lang, 2011, pp. 93-105.</li><br />

                            <li class="bibentry">Bennett, Philip E. "Guillaume d'Orange: Fighter of Demons and Harrower of Hell." <i>Myth and Legend in French Literature: Essays in Honour of A. J. Steele</i>, edited by Keith Aspley et al. London: The Modern Humanities Research Association, 1982, pp. 24-46. Publications of the Modern Humanities Research Association 11.</li><br />

                            <li class="bibentry">Bennett, Philip E. “Heroism and Sanctity in the Cycle de Guillaume.” <i>Wolfram’s “Willehalm”, fifteen essays</i>, edited by Martin H. Jones and Timothy McFarland. Rochester, NY: Woodbridge Suffolk, 2002, pp. 1–19. Studies in German Literature, Linguistics and Culture.</li><br />

                            <li class="bibentry">Bennett, Philip E. “La Parentèle cyclique de Huon d’Auvergne.” <i>“Par deviers Rome m’en revenrai errant”: Actes du XXe congrès international de la Société Rencesvals pour l’étude des épopées romanes</i>, edited by Maria Careri et al. Rome: Viella, 2017, pp. 475-84.</li><br />

                            <li class="bibentry">Bennett, Philip E., and Leslie Zarker Morgan. “The Avatars of Orable-Guibourc from French chanson de geste to Italian romanzo cavalleresco: A Persistent Multiple Alterity.” <i>Francigena</i>, vol. 1, 2015, pp. 165-213. https://www.francigena-unipd.com/index.php/francigena/article/view/7/7. Link verified 28 February 2021.</li><br />

                            <li class="bibentry">Beretta, Carlo. “Osservazioni sul metro del codice V7 (Marciano Fr. VII) della Chanson de Roland.” <i>La Tradizione epica e cavalleresca in Italia (XII-XVI sec.)</i>, edited by Claudio Gigante and Giovanni Palumbo. Bern: Peter Lang, 2010, pp. 38-71. Destini incrociati 3.</li><br />

                            <li class="bibentry">Beretta, Carlo, ed. <i>Il Testo Assonanzato franco-italiano della Chanson de Roland: cod. Marciano fr. IV (=225)</i>. Pavia: Tipografia Commerciale Pavese, 1995. Università degli Studi di Pavia Dipartimento di Scienza della Letteratura e dell’Arte medioevale e moderna Testi 2.</li><br />

                            <li class="bibentry">Beretta, Carlo, and Giovanni Palumbo. “Il Franco-italiano in area padana: Questioni, problemi e appunti di metodo.” <i>Medioevo Romanzo</i>, vol. 39, no.1, pp. 52-81.</li><br />

                            <li class="bibentry">Bergo, Matteo, ed. <a href="http://tesi.cab.unipd.it/49939/1/MATTEO_BERGO_2015.pdf">“Il <i>Macario</i> della <i>Geste Francor</i> (ms. Marciano Fr. Z 13, 256): Introduzione, revisione del testo, traduzione e glossario.”</a> Laurea Magistrale, Filologia moderna, 2014/2015. Link verified 28 Feb. 2021.</li><br />

                            <li class="bibentry">Bernagou, Eric, Giovanni Palumbo and Paolo Rinoldi. “L’Informatica al servizio dell’ecdotica: l’edizione della Chanson d’Aspremont.” <i>Informatica e saperi umanistici</i>, edited by Sebastiano Italia, special issue of Le Forme e la storia, n.s. vol. 9, no.1, 2016, pp. 39–61.</li><br />

                            <li class="bibentry">Bernstein, Alan E. <i>The Formation of Hell. Death and Retribution in the Ancient and Early Christian Worlds</i>. Ithaca, NY: Cornell UP, 1993.</li><br />

                            <li class="bibentry">Bernstein, Alan E. <i>Hell and Its Rivals. Death and Retribution among Christians, Jews, and Muslims in the Early Middle Ages</i>. Ithaca, NY: Cornell UP, 2017.</li><br />

                            <li class="bibentry">Bernstein, Alan E. “Loi divine, loi humaine: grâce et croisade. Huon d’Auvergne (Fin XIe-début XVe).” <a href="http://www.juslittera.com/crbst_62.html"><i>Le Trésor de Juslittera</i></a>. Link verified 23 Feb. 2021.</li><br />

                            <li class="bibentry">Bernstein, Alan E. "Questions de théodicée dans Huon d'Auvergne." <i>“Par deviers Rome m’en revenrai errant”: Actes du XXe congrès international de la Société Rencesvals pour l’étude des épopées romanes</i>, edited by Maria Careri et al. Rome: Viella, 2017, pp. 485-91.</li><br />

                            <li class="bibentry">Bertoni, Giulio. “Lettori di romanzi francesi nel Quattrocento alla corte estense.” <i>Romania</i>, vol. 45, 1918-19, pp. 117-22.</li><br />

                            <li class="bibentry">Bisson, Sebastiano. <i>Il Fondo francese della Biblioteca Marciana di Venezia</i>. Rome: Edizioni di storia e letteratura, 2008.</li><br />

                            <li class="bibentry">Bloch, Howard, et al., eds. <i>Rethinking the New Medievalism</i>. Baltimore, MD: JHUP, 2014.</li><br />

                            <li class="bibentry">Boese, Helmut. <i>Die lateinischen Handschriften der Sammlung Hamilton zu Berlin</i>. Wiesbaden: Harrassowitz, 1966, p. 164.</li><br />

                            <li class="bibentry">Bologna, Corrado. “La Letteratura dell’Italia settentrionale nel Trecento.” vol. 1, <i>Letteratura italiana: Storia e geografia</i>, edited by A. Asor Rosa. Turin: Einaudi, 1987, pp. 511–600.</li><br />

                            <li class="bibentry">Bratti, R. “Miniatori veneziani.” <i>Nuovo archivio veneto</i>, 2nd ser. vol. 1, 1901, pp. 70-93.</li><br />

                            <li class="bibentry">Breeze, Andrew. "Sir John Paston on 'Ser Hughe Lavernoys'." <i>Notes and Queries</i>, vol. 48, 2001, pp. 10-11.</li><br />

                            <li class="bibentry">Brunetti, Giuseppina. “Un Capitolo dell’espansione del francese in Italia: manoscritti e testi a Bologna fra Duecento e Trecento.” <i>Bologna nel Medioevo</i>, edited by Ovidio Capitani and Renato Zangheri. Bologna: Bononia Univ. Press, 2007, pp. 125-59.</li><br />

                            <li class="bibentry">Busby, Keith. <i>Codex and Context: Reading Old French Verse Narrative in Manuscript</i>. 2 vols. New York: Rodopi, 2002.</li><br />

                            <li class="bibentry">Busby, Keith, and Christopher Kleinhenz. “Medieval French and Italian Literature: Towards a Manuscript History.” <i>The Medieval Manuscript Book: Cultural Approaches</i>, edited by Michael Johnston and Michael Van Dussen. Cambridge: University Press, 2015, pp. 215–42.</li><br />

                    </ul>

                <h3 class="bib">C</h3>

                    <ul class="bib">

                            <li class="bibentry">Capusso, Maria Grazia. “La Produzione franco-italiana dei secoli XIII e XIV: Convergenze letterarie e linguistiche.” <i>Plurilinguismo letterario: Atti del convegno (9-10 novembre 2006)</i>, edited by Oniga Renato and Sergio Vatteroni. Soveria Mannelli: Rubbettino, 2007, pp. 159-204.</li><br />

                            <li class="bibentry">Carlquist, Jonas. "Medieval Manuscripts, Hypertext and Reading. Visions of Digital Editions." <i>Literary and Linguistic Computing</i>, vol 19, no. 1, 2004.</li><br />

                            <li class="bibentry">Cary, George. <i>The Medieval Alexander</i>. 1956. Rpt. Cambridge: Cambridge UP, 1967.</li><br />

                            <li class="bibentry">Casini, Tommaso. Rev. of A. Tobler. “Die Berliner Handschrift des Huon d’Auvergne.” <i>Rivista Critica della Letteratura Italiana</i> vol. 1, no. 3, 1884, cols. 81-82.</li><br />

                            <li class="bibentry">Cattaneo, Antonella Sabina. “Il manoscritto berlinese del <i>Huon d’Auvergne</i> (Berlin, Kupferstichkabinett 78 D8 [Hamilton 337: studio paleografico, linguistico et artistico.” 2015. École doctorale de l’École pratique des hautes études and Università degli studi di Macerata, PhD Dissertation.</li><br />

                            <li class="bibentry">Cattaneo, Antonella. “L’Apparato illustrativo del <i>Huon d’Auvergne</i> di Berlino.” <i>Rivista di Storia della Miniatura</i>, vol. 22, 2018, pp. 78-88.</li><br />

                            <li class="bibentry">Cavagna, A. G., “Il Libro desquadernato: la charta rosechata da rati. Due nuovi inventari della libreria visconteo-sforzesca.” <i>Bollettino della società pavese di storia patria</i>, n. s. 41 (1989), pp. 29-97.</li><br />

                            <li class="bibentry">Cingolani, S., “The ‘Sirventes-ensenhamen’ of Guerau de Cabrera: A Proposal for a New Interpretation”, <i>Journal of Hispanic Research</i>, vol. 1, 1992-93, pp. 191-201.</li><br />

                            <li class="bibentry">Cattaneo, Antonella. “L’apparato illustrativo del Huon d’Auvergne di Berlino.” <i>Rivista di storia della miniatura</i>, vol. 22, 2018, pp. 78-88.</li><br />

                            <li class="bibentry">Cavagna, A. G. “Il libro desquadernato: la charta rosechata da rati. Due nuovi inventari della libreria visconteo-sforzesca.” <i>Bollettino della società pavese di storia patria</i>, n. s. vol. 41, 1989, pp. 29-97.</li><br />

                            <li class="bibentry"><i>Chanson de Roland, The Venice 4 Version</i>, edited by Robert Francis Cook. Vol I, part 2 of <i>La Chanson de Roland: The Song of Roland, French Corpus</i>, general editor Joseph J. Duggan, with other editors. Turnhout, Belgium: Brepols, 2005. 3 volumes, 7 parts. (Roland V4)</li><br />

                            <li class="bibentry">Cingolani, S., “The ‘Sirventes-ensenhamen’ of Guerau de Cabrera: A Proposal for a New Interpretation.” <i>Journal of Hispanic Research</i>, vol. 1, 1992-93, pp. 191-201.</li><br />

                            <li class="bibentry">Collomp, Dennis. “Le Motif du Pape combattant dans l’épopée.” <a href="https://books.openedition.org/pup/2451"><i>Le Clerc au Moyen Age</i></a>, no editor listed. Aix-en-Provence: Publications du Cuer Ma, 1987. Pp. 93-112. Cuer Ma 37. Link verified 23 Feb. 2021.</li><br />

                            <li class="bibentry">Constantinidis, Anna. “Les Signes diacritiques dans l’établissement de textes en franco-italien : l’usage de l’accent dans l’édition de la Chanson d’Aspremont.” <i>Actes du XXVIIe Congrès international de linguistique et de philologie romanes (Nancy, 15-20 juillet 2013).</i> Edited by by Éva Buchi, Jean-Paul Chauveau, Jean-Marie Pierrel, Strasbourg: Editions de linguistique et de philologie, 2016. Vol. 2, pp. 1361-74.</li><br />

                            <li class="bibentry"><i>I Conti di antichi cavalieri</i>, edited by Alberto del Monte. Milan: Cisalpino-Goliardica, 1972.</li><br />

                            <li class="bibentry">Cook, Robert F. “Unity and Aesthetics of the Late chanson de geste.” <i>Olifant</i>, vol. 11, 1986, pp.103-14.</li><br />

                            <li class="bibentry">Crane, T. F. “The Mountain of Nida: An Episode of the Alexander Legend.” <i>The Romanic Review</i>, vol. 9, 1918, pp.129-53.</li><br />

                            <li class="bibentry">Crescini, V. “Orlando nella Chanson de Roland e nei poemi del Bojardo e dell’Ariosto.” <i>Il Propugnatore</i>, vol. 13, 1880, pp. 44-69.</li><br />

                    </ul>

                <h3 class="bib">D</h3>

                    <ul class="bib">

                            <li class="bibentry">D'Adda, Gerolamo. <i>Indagini storiche, artistiche e bibliographiche sulla Liberia Visconteo-Sforzesca del Castello di Pavia</i>. Milan: Brigola, 1875-79.</li><br />

                            <li class="bibentry">D’Ancona, Paolo. <i>La Miniature italienne du Xe au XVIe siècle</i>. Trans. M. P. Porrier. Paris: G. Van Oest, 1925.</li><br />

                            <li class="bibentry">Dante Alighieri. <i>The Divine Comedy of Dante Alighieri</i>, edited and translated by Robert M. Durling and Ronald L. Martinez. 3 vols. Oxford: Oxford UP, 1996-2011.</li><br />

                            <li class="bibentry">Dante Alighieri. <a href="https://dante.princeton.edu/pdp/monarchia.html"><i>Monarchia</i></a>, edited by Pier Giorgio Ricci. Florence: Società Dantesca Italiana, 1965. Link verified 27 Feb. 2021.</li><br />

                            <li class="bibentry">Dante Alighieri. <i>On World Government</i>. Translated by Herbert W. Schneider. Indianapolis, IN; New York: Macmillan/Library of Liberal Arts, 1957.</li><br />

                            <li class="bibentry">Debenedetti, Santorre. "Intorno al testo del frammento Barbieri dell’Ugone d'Alvernia." <i>Archivum Romanicum</i>, vol. 14, 1930, pp. 269-73.</li><br />

                            <li class="bibentry">Delcorno Branca, Daniela. <i>Il Romanzo cavalleresco medievale</i>. Florence: Sansoni, 1974.</li><br />

                            <li class="bibentry">Delisle, Léopold. <i>Le Cabinet des manuscrits de la Bibliothèque impériale [puis nationale]. Étude sur la formation de ce dépôt comprenant les éléments d'une histoire de la calligraphie de la miniature, de la reliure, et du commerce des livres à Paris avant l'invention de l'imprimerie</i>. 3 vol. Paris: Imprimerie impériale [puis nationale], 1868-1881, vol. 1, pp. 125-40.</li><br />

                            <li class="bibentry">DeVries, Kelly and Robert Douglas Smith. <i>Medieval Military Technology</i>. 1992. Toronto: University of Toronto Press, 2012.</li><br />

                    </ul>

                <h3 class="bib">E</h3>

                    <ul class="bib">

                            <li class="bibentry"><i>Entrée d’Espagne: Chanson de geste franco–italienne publiée d'après le manuscrit unique de Venise</i>, edited by Antoine Thomas. Paris: Firmin–Didot, 1913. (EE)</li><br />

                            <li class="bibentry">Everson, Jane E. <i>The Italian Romance Epic in the Age of Humanism. The Matter of Italy and the World of Rome</i>. Oxford: Oxford UP, 2001.</li><br />

                            <li class="bibentry">Everson, Jane. "Prolongements romanesques de la matière épique." <i>Epic Studies: Acts of the Seventeenth International Congress of the Société Rencesvals for the Study of Romance Epic</i>, edited by Anne Berthelot et al. Special issue of Olifant, vol. 25, 2006, pp. 41–68. &lt;https://scholarworks.iu.edu/journals/index.php/olifant/article/view/13884/20056&gt; Link verified 26 Feb. 2021.</li><br />

                    </ul>

                <h3 class="bib">F</h3>

                    <ul class="bib">

                            <li class="bibentry">Fassò, Andrea. “La Materia di Francia nei poemi e nei romanzi italiani.” <i>Sulle orme di Orlando: Leggende e luoghi carolingi in Italia: I paladini de Francia nelle tradizioni italiane: Una proposta storico antropologica</i>, edited by Anna Imelde Galletti and Roberto Roda. Padua: Interbooks, 1987, pp. 65-81.</li><br />

                            <li class="bibentry">Ferrante, Joan M., trans. and intro. <i>Guillaume d’Orange: Four Twelfth Century Epics</i>. NY: Columbia UP, 1974, 1991. Records of Western Civilization Series. [Includes The Coronation of Louis; The Conquest of Orange; Aliscans; William in the Monastery]</li><br />

                            <li class="bibentry">Flores D’Arcais, Francesca. “Les Illustrations des manuscripts français des Gonzague à la bibliothèque de Saint-Marc.” <i>Essor et fortune de la Chanson de geste dans l’Europe et l’Orient latin: Actes du IXeCongrès international de la Société Rencesvals pour l’étude des épopées romanes, Padoue-Venise, 20 août-4 septembre 1982</i>, edited by Alberto Limentani et al. 2 vols. Modena: Mucchi, 1984, vol. 2, pp. 585-616.</li><br />

                    </ul>

                <h3 class="bib">G</h3>

                    <ul class="bib">

                            <li class="bibentry">Gardner, Eileen. <i>Medieval Visions of Heaven and Hell. A Sourcebook</i>. 1993. London: Routledge, 2018.</li><br />

                            <li class="bibentry">Gautier, Léon. <i>Les Épopées françaises: Étude sur les origines et l’histoire de la littérature nationale</i>. 2e éd. Paris: Société générale de librarie catholique, 1880-92.</li><br />

                            <li class="bibentry"><i>La ‘Geste Francor’: Chansons de geste of Ms. Marc. Fr. XIII (=256): Edition with glossary, introduction and notes</i>, edited by Leslie Zarker Morgan. Tempe, AZ: Medieval and Renaissance Texts and Studies, 2009. 2 vols. (GF)</li><br />

                            <li class="bibentry">Ghidoni, Andrea. <i>L’Eroe imberbe: Le enfances nelle chansons de geste: poetica e semiologia di un genere epico medievale</i>. Alessandria: dell’Orso, 2018.</li><br />

                            <li class="bibentry">Giacon, Carla. <i>La Redazione padovana dell’</i>Huon d'Auvergne<i>: Studio, Edizione, Glossario</i>. 1960-61. Università degli studi di Padova, Tesi di Laurea.</li><br />

                            <li class="bibentry">Gilbert, Dorothy, trans. <i>Eric and Enide (Chrétien de Troyes)</i>. Berkeley: U. of California Press, 1992.</li><br />

                            <li class="bibentry">Graf, A. “Di un poema inedito di Carlo Martello e di Ugo conte d'Alvernia.” <i>Giornale di Filologia Romanza</i>, vol. 1, 1878, pp. 92-110.</li><br />

                            <li class="bibentry">Grion, Giusto. “Guido Guinicelli e Dino Campani.” <i>Propugnatore</i>, vol. 2, part 2, 1869, pp. 274-322; p. 305. https://archive.org/stream/ilpropugnatorep12italgoog#page/n751/mode/2up</li><br />

                            <li class="bibentry">Gröber, Gustav. “Französische Literatur.” <i>Grundriss der romanischen Philologie</i>. Strasbourg: Trübner, 1902, vol. 2, part IIIB1, p.813. (p. 829 of pdf).</li><br />

                            <li class="bibentry"><i>Gui de Nanteuil: Chanson de geste</i>, edited by James R. McCormick. Geneva: Droz, 1970.</li><br />

                    <ul class="bib">

                <h3 class="bib">H</h3>

                    </ul>

                            <li class="bibentry">Hammerich, L. L. “Studies to Visiones Georgii. III. The Descent of Guerrino il Meschino into the Purgatory of St. Patrick.” <i>Classica et Medievalia</i>, vol. 1, 1938, pp. 95-118; vol. 2, 1939, pp. 190-220.</li><br />

                            <li class="bibentry">Heijkant, Marie-José. “Der Ritter mit dem Löwen in der Tradition der ritterlichen Dichtung Italiens.” <i>Die Romane von dem Ritter mit dem Löwen</i>, edited by Xenja von Ertzdorff et al. Amsterdam: Rodopi, 1994, pp. 401-17. Chloe. Beihefte zum Daphnis 20.</li><br />

                            <li class="bibentry">Hills, Elijah Clarence. “Irregular Epic Metres: A Comparative Study of the Metre of the Poem of the Cid and of Certain Anglo-Norman, Franco-Italian and Venetian Epic Poems.” <i>Homenaje a Ménendez Pidal: miscelánea de estudios lingüísticos, literarios e históricos, n. ed. Madrid: Libreria y casa editorial Hernando, 1925</i>, vol 1, pp. 759-77.</li><br />

                            <li class="bibentry">Hinks, A. G. “Tisias and Corax and the Invention of Rhetoric.” <i>The Classical Quarterly</i>, vol. 34, nos.1-2, Jan.-Apr. 1940, pp. 61-69.</li><br />

                            <li class="bibentry">Holden, Anthony J. Rev. of Günter Holtus, ed. <i>La Versione franco-italiana della</i> Bataille d’Aliscans<i>: Codex Marcianus fr. VIII (=252)</i>. <i>Medium Ævum</i>, vol. 56, no. 2, 1987, pp. 332-34.</li><br />

                            <li class="bibentry">Holtus, Günter. “Approches métodiques d'une description linguistique du franco-italien.” <i>Festschrift Kurt Baldinger zum 69</i>. Geburtstag, edited by M. Höfler et al.,Tübingen: Niemeyer, 1979, pp. 854-75.</li><br />

                            <li class="bibentry">Holtus, Günter. “Aspects linguistiques du franco-italien.” <i>Essor et fortune de la chanson de geste dans l’Europe et l'Orient latin</i>, edited by Alberto Limentani et al. Modena: Mucchi, 1984, pp. 802-06.</li><br />

                            <li class="bibentry">Holtus, Günter. “Che cos'è il franco-italiano?” <i>Guida ai dialetti veneti</i>, edited by Manlio Cortelazzo. Vol. 10. Padua: CLEUP,1988, pp. 7-60.</li><br />

                            <li class="bibentry">Holtus, Günter. "Considerazioni sulla lingua dell’Huon d’Auvergne (B, T, P)." <i>Cultura dell’Italia padana e la presenza francese nei secoli XIII-XV. (Pavia, 11-14 settembre 1994)</i>, edited by Luigina Morini. Alessandria: Edizioni dell’Orso, 2001, pp. 41-54.</li><br />

                            <li class="bibentry">Holtus, Günter. “L’État actuel des recherches sur le franco-italien: corpus de textes et description linguistique.” <i>La Chanson de Geste: Écriture, Intertextualités, Translations</i>, edited by François Suard. Paris: Centre des sciences de la littérature, 1994, pp. 147-71. Cahiers du département de français. Littérales 14.</li><br />

                            <li class="bibentry">Holtus, Günter. "Ist das Franko-Italienische eine Sprache oder ein Dialekt?" <i>Beiträge zum romanischen Mittelalter</i>, edited by Kurt Baldinger. Tübingen: Max Niemeyer Verlag, 1977, pp. 79-97.</li><br />

                            <li class="bibentry">Holtus, Günter. “Etimologia e lessico franco-italiano.” <i>Etimologia e lessico dialettale: Atti del XII Convegno per gli Studi Dialettali Italiani (Macerata, 10-13 Aprile 1979)</i>. Pisa: Pacini, 1981, pp. 153-63. Consiglio Nazionale delle Ricerche. Centro di Studio per la Dialettologia Italiana 13.</li><br />

                            <li class="bibentry">Holtus, Günter. “L’Influsso del francese sull’italiano settentrionale antico.” <i>Elementi stranieri nei dialetti italiani: Atti del XVI Convegno del C. S. D. I. (Ivrea 17-19 ottobre 1984)</i>. Pisa: Pacini, 1986, pp. 1-19. Consiglio Nazionale delle Ricerche. Centro di Studio per la Dialettologia Italiana 17.</li><br />

                            <li class="bibentry">Holtus, Günter. “Lessico franco-italiano = lessico francese e/o lessico italiano?” <i>XVI Congres International de Lingüistica i Filologia Romaniques, Palma de Mallorca 7- 12 d’abril de 1980. Palma de Mallorca 1982</i>, vol. II, pp. 201-208. Reprinted in Medioevo Romanzo, vol. 10, 1985, pp. 249-56.</li><br />

                            <li class="bibentry">Holtus, Günter. <i>Lexikalische Untersuchungen zur Interferenz: die franko-italienische</i> Entrée d’Espagne. Tübingen: Max Niemeyer, 1979.</li><br />

                            <li class="bibentry">Holtus, Günter. “La ‘matière de Bretagne’ en Italie: quelques réflexions sur la transposition du vocabulaire et des structures sociales.” <i>Sir Gawain and the Green Knight: Actes du 14e Congrès International Arthurien (Rennes 16-27 Août 1984)</i>. Rennes: Presses universitaires de Rennes, 1985, vol. 1, pp. 324-45.</li><br />

                            <li class="bibentry">Holtus, Günter. “Nochmals zur Charakteristik des Franko-Italienischen und franko-italienischer Texte.” <i>Variatio Linguarum: Beiträge zu Sprachvergleich und Sprachentwicklung. Festschrift zum 60. Geburtstag von Gustav Ineichen</i>, edited by Ursula Klenk et al. Stuttgart: Steiner Verlag Wiesbaden, 1989, pp. 103-14.</li><br />

                            <li class="bibentry">Holtus, Günter. “Una Nuova edizione di tre testi franco-italiani.” <i>Zeitschrift für romanische Philologie</i>, vol. 109, nos.1-2, 1993, pp. 590-97.</li><br />

                            <li class="bibentry">Holtus, Günter. “Plan-und Kunstsprachen auf romanischer Basis IV. Franko-Italienisch / Langues artificielles à base romane IV. Le franco-italien.” <i>Lexikon der romanistischen Linguistik</i>, edited by Günter Holtus et. al. Kontrastivität, Klassifikation und Typologie = Langues en contact, langues des migrants et langues artificielles : Analyses contrastives, classification et typologie des langues romanes, vol. 7, Kontakt, Migration und Kunstsprachen. Tübingen: Niemeyer, 1998, pp. 705–56.</li><br />

                            <li class="bibentry">Holtus, Günter. "Les Problèmes posés par l’édition de textes franco-italiens. À propos de quelques leçons problématiques de V 4, V 8, et d’autres manuscrits." <i>Au Carrefour des routes d’Europe: La chanson de geste. Xe Congrès international de la Société Rencesvals pour l’étude des épopées romanes, Strasbourg 1985. Aix-en-Provence: Publications du Cuer Ma, 1987</i>, vol. 2, pp. 675-96.</li><br />

                            <li class="bibentry">Holtus, Günter. “‘Propter sui faciliorem ac delectabiliorem vulgaritatem’: Zur Verbreitung der ‘lingua oïl’ in Italien.” <i>Sive Padi ripis athesim sev propter amoenvm: Festschrift für G. B. Pellegrini</i>, edited by Johannes Kramer. Hamburg: Helmut Buske, 1991, pp. 115-28.</li><br />

                            <li class="bibentry">Holtus, Günter. “Sprachwandel und Sprachgeschichte am Beispiel des Franko-Italienischen.” <i>Sprachwandel und Sprachgeschichte: Festschrift für Helmut Lüdtke zum 65. Geburtstag</i>, edited by Jürgen Schmidt-Radefeldt and Andreas Harder. Tübingen: Narr,1993, pp. 95-102.</li><br />

                            <li class="bibentry">Holtus, Günter. “Lo Stato attuale delle ricerche sul franco-italiano.” <i>La dialettologia italiana oggi. Studi offerti a Manlio Cortelazzo</i>, edited by Günter Holtus et al.Tübingen: Narr,1989, pp. 209-19.</li><br />

                            <li class="bibentry">Holtus, Günter. “Sulla posizione del franco-italiano nella dialettologia italiana.” <i>Scritti linguistici in onore di Giovan Battista Pellegrini</i>, edited by Paola Benincà et al. 2 vols. Pisa: Pacini, 1983, vol. 1, pp. 64-71.</li><br />

                            <li class="bibentry">Holtus, Günter, ed. <i>La Versione franco-italiana della</i> Bataille d’Aliscans<i>: Codex Marcianus fr. VIII (=252)</i>. Tübingen: Max Niemeyer, 1985. Beihefte zur Zeitschrift für romanische Philologie 205.</li><br />

                            <li class="bibentry">Holtus, Günter. “Zu Versuchen der Kodifizierung einer romanischen Kunstsprache: Franko-Italienisch.” <i>Zum Stand der Kodifizierung romanischer Kleinsprachen</i>, edited by Wolfgang Dahmen. Tübingen: Narr, 1991. pp.105-18. Romanistisches Kolloquium1988 Katholische Universität Eichstätt 5.</li><br />

                            <li class="bibentry">Holtus, Günter. “Zur franko-italienischen Sprache und Literatur Forschungsbericht 1959-1974.” <i>Zeitschrift für romanische Philologie</i>, vol. 91, nos. 3-4, 1975, pp. 491-533.</li><br />

                            <li class="bibentry">Holtus, Günter. Review of Aldo Rosellini, <i>Il cosiddetto francoveneto: retrospettive e prospettive, Filologia Moderna 2 (Facoltà di lingue e letterature straniere della Università di Trieste- Sede di Udine)</i>, Pisa (Pacini) 1977, 219-303. <i>Zeitschrift für romanische Philologie</i> vol. 95, 1979, pp. 441-42.</li><br />

                            <li class="bibentry">Holtus, Günter, and Michael Metzeltin. “I Dialetti veneti nella ricerca recenti.” <i>Linguistica e dialettologia veneta: Studi offerti a Manlio Cortelazzo dai colleghi stranieri</i>, edited by Günter Holtus and Michael Metzeltin. Tübingen: Narr, 1983, pp. 1-38.</li><br />

                            <li class="bibentry">Holtus, Günter, and Peter Wunderli. <i>Franco-italien et épopée franco-italienne</i>. Heidelberg: Universitätsverlag C. Winter, 2005. Tome 1 / 2, Fascicule 10 of <i>Les Épopées Romanes</i>, edited by Rita Lejeune, Jeanne Wathelet-Willem, Henning Krauss. Grundriss der romanischen Literaturen des Mittelalters.</li><br />

                            <li class="bibentry">Hope, T. E. <i>Lexical Borrowing in the Romance Languages</i>. 2 vols. Oxford: B Blackwell, 1971.</li><br />

                            <li class="bibentry"><i>Huon de Bordeaux: Chanson de geste du XIIIe siècle. Publiée d’après le manuscrit de Paris BNF fr. 22555 (P)</i>, edited by William W. Kibler and François Suard, eds. Paris: Champion, 2003.</li><br />

                            <li class="bibentry"><i>Huon de Bordeaux</i>, edited by P. Ruelle. Bruxelles-Paris: Presses universitaires de Bruxelles,1960.</li><br />

                    </ul>

                <h3 class="bib">I</h3>

                    <ul class="bib">

                            <li class="bibentry">Infurna, Marco. “La Letteratura franco-veneta.” <i>Lo Spazio letterario del Medioevo. 2. Il Medioevo volgare. III. La Ricezione del testo</i>, edited by Piero Boitani et al. Rome: Salerno, 2003, pp. 405-30.</li><br />

                    </ul>

                <h3 class="bib">J</h3>

                    <ul class="bib">

                            <li class="bibentry"><i>Jacobus de Voragine: The Golden Legend, Readings on the Saints</i>, trans. William Granger Ryan. 2 vols. Princeton: U. Press, 1993.</li><br />

                    </ul>

                <h3 class="bib">K</h3>

                    <ul class="bib">

                            <li class="bibentry">Kay, Sarah. <i>The Chanson de Geste in the Age of Romance: Political Fictions</i>. Oxford: Clarendon, 1995.</li><br />

                            <li class="bibentry">Ker, W. P. “The Craven Angels.” <i>The Modern Language Review</i>, vol. 6, no.1, Jan. 1911, pp. 85-87.</li><br />

                            <li class="bibentry">Kibler, William W. “La ‘Chanson d’aventures’.” <i>Essor et fortune de la chanson de geste dans l’Europe et l’Orient latin. Actes du IXe Congrès international de la Société Rencesvals (Padoue-Venise, 29 août-4 septembre 1982)</i>, edited by Alberto Limentani et al. Modena: Mucchi, 1984, pp. 509-15.</li><br />

                            <li class="bibentry">Krauss, Henning. <i>Epica feudale e pubblico borghese. Per la storia poetica di Carlomagno in Italia</i>. Translated [into Italian] by Andrea Fassò. Padua: Liviana, 1980.</li><br />

                            <li class="bibentry">Krauss, Henning. “Franko-Italienisch: ein Sprach- und Literaturgeschichtliches Kuriosum.” <i>Vox Romanica</i>, vol. 62, 2003, pp. 1-27.</li><br />

                    </ul>

                <h3 class="bib">L</h3>

                    <ul class="bib">

                            <li class="bibentry">Labie-Leurquin, Anne Françoise. “Huon d’Auvergne.” <i>Dictionnaire des lettres françaises, vol. 1: Le Moyen Age</i>, edited by Cardinal Georges Grente, 1964. New editors, Geneviève Hasenohr and Michel Zink. 4 vols. Paris: Fayard, 1994, vol. 1, pp. 702-703.</li><br />

                            <li class="bibentry">Lazzarini, Lino. “La Cultura delle signorie venete e i poeti di corti.” <i>Storia della cultura veneta</i>, edited by Girolamo Arnaldi and Gianfranco Folena. Vicenza: Neri Pozza, 1976, vol. 2, Il Trecento, pp. 477-516.</li><br />

                            <li class="bibentry">Lejeune, Rita. “La Légende de Charles Martel et la <i>Passio Agilolfi</i>.” <i>Recherches sur le thème: les chansons de geste et l’histoire</i>. Liège: Faculté de philosophie et lettres, 1948, pp. 13-42.</li><br />

                            <li class="bibentry">Levi, E. <i>I Cantari leggendari del popolo italiano nei secoli XIV e XV</i>. Turin: Loescher, 1914.</li><br />

                            <li class="bibentry"><i>Il Libro del Cavaliere Errante</i>, by Tommaso III di Saluzzo (BnF ms. fr. 12559), edited by Marco Piccat. Boves: Araba Fenice, 2008.</li><br />

                            <li class="bibentry">Limentani, Alberto. “Franco-veneto e latino.” <i>Atti del Congresso internazionale di lingua e filologia romanza (Napoli 15-20 aprile 1974)</i>, edited by Alberto Varvaro. 2 vols. Naples: Gaetano Macchiaroli, 1976. pp. 505-514. Reprinted in L’Entrée d’Espagne e i signori d’Italia, edited by Marco Infurna and Francesco Zambon. Padua: Antenore, 1992, pp. 203-13.</li><br />

                            <li class="bibentry">Limentani, Alberto. “Problemi dell’epica franco-italiana: appunti sulla tecnica della lassa e della rima.” <i>Atti e memorie dell’Accademia patavina di Scienze, Lettere ed Arti</i>, vol. 95, 1982-83, pp. 155-74. Reprinted in Alberto Limentani: L’“Entrée d’Espagne e i signori d’Italia, edited by Marco Infurna and Francesco Zambon. Padua: Antenori, 1992. pp. 226-42.</li><br />

                            <li class="bibentry">Lomazzi, Anna. “Francoveneta, Letteratura.” <i>Dizionario critico della letteratura italiana</i>, edited by Vittorio Branca. Turin: UTET,1974, vol. 2, pp. 125-32. Revised 1986, 2a ediz., vol. 2 pp. 285-91.</li><br />

                            <li class="bibentry">Louis,René. <i>De l'histoire à la légende</i>. 3 vols. Auxerre: Imprimerie moderne, 1946-47.</li><br />

                            <li class="bibentry">Ludovisi, Idido. <i>L’Ugo d'Alvernia secondo il codice franco-italiano della biblioteca vescovile di Padova</i>. Aquila: Mele, 1895.</li><br />

                    </ul>

                <h3 class="bib">M</h3>

                    <ul class="bib">

                            <li class="bibentry">Mainone, Friedrich. <i>Formenlehre und Syntax in der Berliner franco-venezianischen Chanson de geste von Huon d'Auvergne</i>. Leipzig: Verlag Robert Noske, Borna Bez, 1936. Leipziger romantische Studien I. Sprachwissenschaftliche Reihe 13.</li><br />

                            <li class="bibentry">Mainone, Friedrich. <i>Laut- und Formenlehre in der Berliner franco-venezianischen Chanson de geste von Huon d'Auvergne</i>. Erster Teil: Reimprüfung und Lautlehre. Inaugural-Dissertation zur Erlangung der Doktorwürde, Berlin: Universitäts Buchdruckerei von Gustav Schade, 1911.</li><br />

                            <li class="bibentry">Major, Wilfred. “Epicharmus, Tisias, and the Early History of Rhetoric.” <i>Harvard Studies in Classical Philology</i>, vol. 107, 2013, pp. 55-72.</li><br />

                            <li class="bibentry">Marchand, Jim, editor and translator. <a href="http://faculty.georgetown.edu/jod/texts/distich.trans.html"><i>Catonis distichorum</i></a>. Link verified 1 March 2021.</li><br />

                            <li class="bibentry">Mariani Canova, Giordana. “La Biblioteca di Alfonso Alvarotti.” <i>Gli incunaboli della Biblioteca del Seminario vescovile di Padova: Catalogo e studi</i>, edited by L. Armstrong. Padua: Istituto per la storia ecclesiastica padovana, 2008, pp. IX-XXIX.</li><br />

                            <li class="bibentry">Marie de France, <i>Lais</i>, edited by Karl Warnke, translation [into French] and notes by Laurence Harf-Lancner. Paris: Librarie Générale Française,1990. Livre de Poche: Lettres gothiques.</li><br />

                            <li class="bibentry">Marinoni, Maria Carla, ed. <i>La versione valdese del libro di Tobia</i>. Fasano di Puglia: Schena, 1986. Biblioteca della ricerca: Traduttologia 2.</li><br />

                            <li class="bibentry">Martin, Jean-Pierre. <i>Les Motifs dans la chanson de geste: Définition et utilisation</i>. Paris: Champion, 2017.</li><br />

                            <li class="bibentry">Martin da Canal. <i>Les Estoires de Venise: cronaca veneziana in lingua francese dalle origini al 1275</i>, edited by Alberto Limentani. Florence: L.S. Olschki, 1972.</li><br />

                            <li class="bibentry">Martina, Piero Andrea. “Les Aventures avec le lion. Huon d’Auvergne, Yvain (et les autres).” <i>Reinardus</i>, vol. 26, 2014, pp. 107-24.</li><br />

                            <li class="bibentry">McCormick, Stephen P. "Cartography and Epic in Florentine Humanism and Andrea da Barberino’s <i>Ugone d’Alvernia</i>.” <i>Viator</i>, vol. 45, no. 3, 2014, pp. 339-62.</li><br />

                            <li class="bibentry">McCormick, Stephen P. "Como fa la foja: Versions of Female Authority in the <i>Huon d'Auvergne</i> Manuscript Tradition." <i>Italian Studies</i>, vol. 70, no. 1, 2015, pp. 33-52.</li><br />

                            <li class="bibentry">McCormick, Stephen P. "A Contextual Analysis of Two Franco-Italian Manuscripts of the <i>Huon d'Auvergne</i> Romance Epic." <i>Digital Philology</i>, vol. 5, no. 2, 2016, pp. 208-27.</li><br />

                            <li class="bibentry">McCormick, Stephen P. “A Digital Facsimile Edition of the Franco-Italian <i>Huon d’Auvergne</i> (14th and 15th centuries).” <i>Acts of the 21st Triennial Société Rencesvals Congress (held July 2018, Toronto, Canada), edited by Dorothea Kullmann</i>. To appear.</li><br />

                            <li class="bibentry">McCormick, Stephen P. “Une édition en fac-similé de <i>Huon d’Auvergne</i>: Méthodes de numérisation et d’analyse d’images.” <i>Actes du Congrès: Autour du Roman de Florimont. Approches multidisciplinaires à la complexité textuelle médiévale (13-14 Dec. 2018, Grenoble, FR)</i>, ed. by Marta Materni, special issue, Quaderni di Francigena, vol. 2, 2020, pp. 137-50. https://fc.cab.unipd.it/fedora/objects/o:452058/methods/bdef:Content/download for the entire volume. Link verified 26 Feb. 2021.</li><br />

                            <li class="bibentry">McCormick, Stephen P. "The ‘Franco-Italian’ Epic in Medieval Lombardia." 2011. University of Oregon, PhD Dissertation.</li><br />

                            <li class="bibentry">McCormick, Stephen P. "Les humanités numériques et la tradition manuscrite de <i>Huon d'Auvergne</i>." <i>"Par deviers Rome m’en renvenrai errant": Atti del XXème Congrès International de la Societé Rencesvals pour l’étude des épopées romanes (Rome, Italy, 20-25 July 2015)</i>, edited by M. Careri et al. Rome: Viella, 2017, pp. 571-78.</li><br />

                            <li class="bibentry">McCormick, Stephen P. “The Manuscript Tradition and Reception of the <i>Huon d’Auvergne</i>, a Franco-Italian romance-epic.” The French of Italy, edited by Laura Morreale, Fordham University. https://fit-ace-frenchofitaly-medieval.azurewebsites.net/?page_id=46. 2014. Link verified 24 Feb. 2021.</li><br />

                            <li class="bibentry">McCormick, Stephen P. "Peregrinatio animae: Cartographic Spaces and Epistemological Debates in the Franco-Italian <i>Huon d'Auvergne</i>." Francigena, vol. 3, 2017, pp. 79-109. https://www.francigena-unipd.com/index.php/francigena/article/view/23/25 Link verified 26 Feb. 2021.</li><br />

                            <li class="bibentry"><i>Medieval French Roman d’Alexandre, The</i>, edited by Edward Cooke Armstrong, Alfred Foulet, et al. Princeton, NJ: Princeton UP/ PUF, 1937-1976.</li><br />

                            <li class="bibentry"><i>Méliadus, Livre de: an edition of the Arthurian compilation of B.N.F., f.-fr. 340 attributed to Rusticien de Pise</i>, edited by John Fligelman Levy. 2000. University of California at Berkeley, PhD Dissertation.</li><br />

                            <li class="bibentry">Meneghetti, Maria Luisa, "Fortuna e canone dell'epopea francese in Italia: L’evidenza della tradizione manoscritta.” <i>Carlo Magno in Italia e la fortuna dei libri di cavalleria</i>, edited by Johannes Bartuschat e Franca Strologo. Ravenna: Longo, 2016, pp. 55–66.</li><br />

                            <li class="bibentry">Menzies, Lucy. <i>The Saints in Italy: A Book of Reference to the Saints in Italian Art and Dedication</i>. London: Medici Society, 1924.</li><br />

                            <li class="bibentry">Meregazzi, Luisa A. "L'Episodio del Prete Gianni nell'<i>Ugo’d'Alvernia</i>." <i>Studi romanzi</i>, vol. 26, 1935, pp. 5-69.</li><br />

                            <li class="bibentry">Meregazzi, Luisa A. "L'<i>Ugo d'Alvernia</i>: Poema Franco-Italiano." <i>Studi romanzi</i>, vol. 27, 1937, pp. 5-87.</li><br />

                            <li class="bibentry">Metraux, D. <i>A Critical Edition of Girart d’Amiens: L’Istoire le roy Charlemaine: Poème épique du XIVe siècle</i>. New York: E. Mellen, 2003.</li><br />

                            <li class="bibentry">Meyer, Paul. “De l’expansion de la langue française en Italie pendant le Moyen-Age.” <i>Atti del Congresso Internazionale di Scienze Storiche, 4: Atti della sessione III: Storia della letteratura</i>. Rome: Salviucci, 1904, vol. 4, pp. 61-104.</li><br />

                            <li class="bibentry">Millardet, G. Rev. F. Mainone, <i>Laut- und Formenlehre in der Berliner franco-venezianischen Chanson de geste von Huon d'Auvergne</i>. Erster Teil: Reimprüfung und Lautlehre. Inaugural-Dissertation zur Erlangung der Doktorwürde. Berlin: Universitäts Buchdruckerei von Gustav Schade, 1911. <i>Revue des langues modernes</i>, vol. 55, 1912, pp. 125-28.</li><br />

                            <li class="bibentry">Möhren, Frank Walt. «Huon d'Auvergne» / «Ugo d'Alvernia»: Objet de la lexicographie française ou italienne?" <i>Medioevo Romanzo</i>, vol. 4, 1977, pp. 312-25.</li><br />

                            <li class="bibentry">Morgan, Leslie Zarker. "Les Avatars de Guibourc II. Orable, Guibourc, Tiborga : Métamorphose d’une protagoniste littéraire française en Italie.” <i>In limine Romaniae: chanson de geste et épopée européenne, Actes du XVIIIe Congrès international de la Société Rencesvals pour l’étude des épopées romanes (20-24 juillet 2009)</i>, edited by Carlos Alvar and Constance Cecile Carta. Bern: Peter Lang, 2011, pp. 355-74.</li><br />

                            <li class="bibentry">Morgan, Leslie Zarker. “Cent ans de franco-italien: du Huon d’Auvergne de 1341 au Huon d’Auvergne de 1441.” <i>Actes du Congrès: Autour du Roman de Florimont. Approches multidisciplinaires à la complexité textuelle médiévale (13-14 Dec. 2018, Grenoble, FR)</i>, ed. by Marta Materni, special issue, Quaderni di Francigena, vol. 2, 2020, pp. 75-90. https://fc.cab.unipd.it/fedora/objects/o:452058/methods/bdef:Content/download for the entire volume. Link verified 26 Feb. 2021.</li><br />

                            <li class="bibentry">Morgan, Leslie Zarker. "Chrétien de Troyes comme sous-texte de Huon d’Auvergne?” <i>Les Chansons de Geste: Actes du XVIe Congrès International de la Société Rencesvals pour l’Étude des Épopées Romanes. Granada, 21-25 juillet 2003</i>, edited by Carlos Alvar et Juan Paredes. Granada: Universidad de Granada, 2005, pp. 649-63.</li><br />

                            <li class="bibentry">Morgan, Leslie Zarker. “Crusade as Metaphor: Variations on an Epic Theme in Huon d’Auvergne.” <i>Epic and Crusade: Proceedings of the Colloquium of the Société Rencesvals British Branch, Lucy Cavendish College, Cambridge, 27-28 March 2004</i>, edited by Philip E. Bennett et al. Edinburgh: Société Rencesvals British Branch, 2006, pp. 65-87. British Rencesvals Publications 4.</li><br />

                            <li class="bibentry">Morgan, Leslie Zarker. "Les deux Romes de Huon d'Auvergne et le bon gouvernement." <i>"Par deviers Rome m’en renvenrai errant": Atti del XXème Congrès International de la Societé Rencesvals pour l’étude des épopées romanes (Rome, Italy, 20-25 July 2015)</i>, edited by M. Careri et al. Rome: Viella, 2017. 579-91.</li><br />

                            <li class="bibentry">Morgan, Leslie Zarker. "Dirige gressus meos: The Dialectic of Obedience in Huon d'Auvergne." <i>Neophilologus</i>, vol. 88, 2004, pp. 19-32.</li><br />

                            <li class="bibentry">Morgan, Leslie Zarker. “Una lettera inedita di Pio Rajna, seguita da una breve nota di Gaston Paris alla Biblioteca del Seminario Vescovile di Padova a proposito di Huon d’Auvergne.” <i>Zeitschrift für romanische Philologie</i>, vol. 122, 2006, pp. 184-89.</li><br />

                            <li class="bibentry">Morgan, Leslie Zarker. "Literary Afterlives in Huon d'Auvergne: ‘The Art of [Dantean] Citation.’” <i>“Accessus ad auctores”: Studies in Honor of Christopher Kleinhenz</i>, edited by Fabian Alfie and Andrea Dini. Tempe, AZ: ACMRS, 2011, pp. 61-74.</li><br />

                            <li class="bibentry">Morgan, Leslie Zarker. "Le merveilleux destin de Guiborc d'Orange." <i>Epic Studies: Acts of the Seventeenth International Congress of the Société Rencesvals for the Study of Romance Epic, July 22-28, 2006</i>, edited by Anne Berthelot et. al., special issue of Olifant, vol. 25, no. 1-2, 2006 [2008], pp. 321-37.</li><br />

                            <li class="bibentry">Morgan, Leslie Zarker. “(Mis)Quoting Dante: Early Epic Intertextuality in Huon d’Auvergne.” <i>Neophilologus</i>, vol. 93, 2008, pp. 577-99.</li><br />

                            <li class="bibentry">Morgan, Leslie Zarker. "Nida and Carlo Martello: The Padua Manuscript of Huon d’Auvergne (Ms. 32 of the Biblioteca del Seminario Vescovile, 45R-49V)." <i>Olifant</i>, vol. 23, 2004, pp. 65-114.</li><br />

                            <li class="bibentry">Morgan, Leslie Zarker. "The Passion of Ynide: Ynide's Defense in Huon d'Auvergne (Berlin, Staatsbibliothek, Hamilton 337) (I), (II).” <i>Medioevo Romanzo</i>, vol. 27, 2003, pp. 67-85, pp. 425-62.</li><br />

                            <li class="bibentry">Morgan, Leslie Zarker. "Le Roman d'Alexandre dans Huon d'Auvergne: tourisme et truismes dans une épopée du XIVe siècle." <i>Epic Connections / Rencontres épiques: Proceedings of the Nineteenth International Conference of the Société Rencesvals, Oxford, 13–17 August 2012</i>, edited by Marianne J. Ailes et al. Edinburgh: Société Rencesvals British Branch, 2015, pp. 509-27. Société Rencesvals British Branch Publications 7.</li><br />

                            <li class="bibentry">Morgan, Leslie Zarker. "War is Hell (for Saracens): A Footnote to Aspremont's Afterlife in Italy." <i>"Moult a sans et vallour": Studies in Medieval French Literature in Honor of William W. Kibler</i>, edited by Monica L. Wright et al. Amsterdam: Rodopi, 2012, pp. 289-304.</li><br />

                            <li class="bibentry">Morgan, Leslie Zarker. "Ynide and Charles Martel. Turin, Biblioteca Nazionale N III 19, Folios 72R-89R.” <i>Medioevo Romanzo</i>, vol. 29, 2005, pp. 433-54; vol. 31, 2007, pp. 70-110.</li><br />

                            <li class="bibentry">Morgan, Leslie Zarker, and Philip E. Bennett. “The Avatars of Orable-Guibourc from French chanson de geste to Italian romanzo cavalleresco: A Persistant Multiple Alterity.” <i>Francigena</i>, vol. 1, February 2015, pp. 165-213. https://www.francigena-unipd.com/index.php/francigena/issue/view/2/showToc Link verified 1 Mar 2021.</li><br />

                            <li class="bibentry">Morlino, Luca. “La letteratura francese e provenzale nell’Italia medievale.” <i>Atlante della letteratura italiana</i>. Turin: Einaudi, 2010, pp. 27-40.</li><br />

                    </ul>

                <h3 class="bib">N</h3>

                    <ul class="bib">

                            <li class="bibentry">Nicola da Verona. <i>Opere: Pharsale; Continuazione dell’Entrée d’Espagne; Passion</i>, edited by Franca Di Ninni. Venice: Marsilio, 1992.</li><br />

                            <li class="bibentry">Nichols, Stephen. "Introduction: Philology in a Manuscript Culture." <i>Speculum</i>, vol. 65, no. 1, 1990, pp. 1-10.</li><br />

                    </ul>

                <h3 class="bib">O</h3>

                    <ul class="bib">

                            <li class="bibentry">Obergfell, Sandra Cheshire. “The Problem of Didacticism in the romance Epic: Aiol.” <i>Olifant</i>, vol. 6, 1978, pp. 21-33.</li><br />

                            <li class="bibentry">Olschki, Leonardo. <i>Manuscrits français à peintures des bibliothèques d’Allemagne</i>, Geneva: L.S. Olschki, 1932, pp. 38-39 and plate XLIV.</li><br />

                            <li class="bibentry">Owen, D.D.R. “The Principal Source of Huon de Bordeaux.” <i>French Studies</i>, vol. 7, 1953, pp. 129-39.</li><br />

                            <li class="bibentry">Owen, D.D.R. <i>The Vision of Hell: Infernal Journeys in Medieval French Literature</i>. New York: Barnes and Noble, 1970.</li><br />

                    </ul>

                <h3 class="bib">P</h3>

                    <ul class="bib">

                            <li class="bibentry">Palumbo, Giovanni, and Anna Constantinidis. “La Chanson d’Aspremont: à propos d’une nouvelle édition du corpus français.” <i>In Limine Romaniae : chanson de geste et épopée européenne: Actes du XVIIIe Congrès international de la Société Rencesvals pour l’étude des épopées romanes (20-24 juillet 2009)</i>, edited by Carlos Alvar and Constance Cecile Carta. Bern: Peter Lang, 2012, pp. 533-51.</li><br />

                            <li class="bibentry">Paris, Gaston. <i>Histoire poétique de Charlemagne</i>. 1865. Rpt. Geneva: Slatkine, 1974.</li><br />

                            <li class="bibentry">Paris, Gaston. “Périodiques.” <i>Romania</i>, vol. 7, 1878, pp. 625-29. (pp. 626-27, A Graf. “Di un poema inedito di Carlo Martello e di Ugo conte d’Alvernia.”)</li><br />

                            <li class="bibentry">Pellegrini, Giovan Battista. “Dialetti veneti.” <i>Storia della cultura veneta. I. Dalle origini al Trecento</i>, edited by Girolamo Arnaldi and Manlio Pastore Stocchi. Vicenza: Neri Pozza, 1976, pp. 424-52.</li><br />

                            <li class="bibentry">Pellegrini, Giovan Battista. “Dialetti veneti antichi.” <i>Studi di dialettologia e filologia veneta</i>, edited by G. B. Pellegrini. Pisa: Pacini, 1976, pp. 33-88.</li><br />

                            <li class="bibentry">Pellegrini, Giovan Battista. “Franco-veneto e veneto antico.” <i>Filologia romanza</i>, vol. 3, no. 2, 1956, pp. 122-40.</li><br />

                            <li class="bibentry">Pellegrini, Giovan Battista. “La posizione del veronese antico.” <i>Dante e la cultura veneta: Atti del convegno di studi organizzato dalla Fondazione Giorgio Cini (Firenze, 30 marzo – 5 aprile 1966)</i>, edited by Vittore Branca and Giorgio Padoan. Florence: Olschki, 1967. pp. 95-107.</li><br />

                            <li class="bibentry">Perkins, Nicholas, ed., <i>Medieval Romance and Material Culture</i>. Cambridge: D. S. Brewer, 2015.</li><br />

                            <li class="bibentry">Pfister, Max. “L’Area galloromanza.” <i>Lo Spazio letterario del Medioevo. 2. Il Medioevo volgare. II. La circolazione del testo</i>, edited by Piero Boitani et al. Rome: Salerno, 2003. pp. 13-96.</li><br />

                            <li class="bibentry"><i>Prise de Pampelune: Ein altfranzösiches Gedicht</i>, edited by Adolfo Mussafia. Vienna: Carl Gerold, 1864. Altfranzösische Gedichte aus venezianischen Handschriften 1.</li><br />

                            <li class="bibentry">“Purgatory of Saint Patrick.” <i>Visions of Heaven &amp; Hell Before Dante</i>, edited by Eileen Gardiner. NY: Italica Press, pp.135-48.</li><br />

                    </ul>

                <h3 class="bib">R</h3>

                    <ul class="bib">

                            <li class="bibentry">Rajna, Pio. “Codici francesi posseduti dagli Estensi nel secolo XV.” <i>Romania</i>, vol. 2, 1873, pp. 49-58.</li><br />

                            <li class="bibentry">Rajna, Pio. “Le Origini delle famiglie padovane e gli eroi dei romanzi cavallereschi.” <i>Romania</i>, vol. 4, 1875, pp. 161-83.</li><br />

                            <li class="bibentry">Rajna, Pio. “Ricordi di codici francesi posseduti dagli Estensi nel secolo XV.” <i>Romania</i>, vol. 2, 1873, pp. 49-58.</li><br />

                            <li class="bibentry">Rajna, Pio. “Rotta di Roncisvalle nella letteratura cavalleresca italiana.” <i>Il Propugnatore</i>, vol. 3, no. 2, 1870, pp. 384-409; vol. 4, no. 1, 1872, pp. 52-78, 333-390; vol. 4, no. 2, 1872, pp. 53-133.</li><br />

                            <li class="bibentry">Rajna, Pio. Transcription of Padua Biblioteca del Seminario Vescovile Cod. 32. Date unknown. MS <i>Carte Rajna</i> XII.M.101. Biblioteca Marucelliana, Sala consultazione manoscritti e rari, Florence.</li><br />

                            <li class="bibentry">Rajna, Pio. Transcription of Torino N.III.19. Date unknown. MS <i>Carte Rajna</i> XIX.15. Biblioteca Marucelliana, Sala consultazione manoscritti e rari, Florence.</li><br />

                            <li class="bibentry">Reinhold, Joachim. Review of  Laut- und Formenlehre by F. Mainone. <i>Zeitschrift für romanische Philologie</i>, vol. 39, 1919, pp. 376-77.</li><br />

                            <li class="bibentry">Renier, Rodolfo, ed. <i>La Discesa di Ugo d'Alvernia allo inferno secondo il codice franco-italiano della Nazionale di Torino</i>, Bologna: Gaetano Romagnoli, 1883.</li><br />

                            <li class="bibentry">Renzi, Lorenzo, “Il francese come lingua letteraria e il franco-lombardo. L’epica carolingia nel veneto.” <i>Storia della cultura veneta</i>, edited by Girolamo Arnaldi and Manlio Pastore Stocchi. Vicenza: Neri Pozza, 1976. vol. 1, Dalle origini al Trecento, pp. 563-89.</li><br />

                            <li class="bibentry">Reynolds, Kevin B. <i>Influssi della lingua e della letteratura francesi medievali nell’Italia settentrionale e il fondo francese antico della Biblioteca Nazionale Marciana di Venezia</i>. 2010. University of Toronto, Dept. of Italian Studies, PhD Dissertation.</li><br />

                            <li class="bibentry">Río Zamudio, Sagrario del. “El Papel de la mjuer en la Storia di Ugho da Vernia de Andrea da Barbarino.” <i>Studi offerti ad Alexandru Niculescu dagli amici e allievi di Udine</i>, edited by Sergio Vatteroni. Udine: Forum Editrice Universitaria Udinese, 2001, pp. 185-93.</li><br />

                            <li class="bibentry">Rohlfs, Gerhard. Review of F. Mainone, <i>Formenlehre und Syntax in der Berliner frankovenezianischen Chanson de geste von</i> Huon d’Auvergne. <i>Archiv für das Studium der neuren Sprachen und Literaturen</i>, vol. 179, 1936, pp. 299-300.</li><br />

                            <li class="bibentry"><i>Roman d’Alexandre</i>, translation [into French] and notes by Laurence Harf-Lancner; edited by E. C. Armstrong et al. Paris: Librairie Générale Française, 1994. Livre de Poche: Lettres gothiques.</li><br />

                            <li class="bibentry"><i>Roman d’Alexandre</i>, by Lambert li Tors and Alexandre de Bernay, edited by Heinrich Michelant et al. Stuttgart: Literarischer Verein, 1846. https://books.google.ch/books?vid=BCULVD2235512 Link verified 28 Feb. 2021.</li><br />

                            <li class="bibentry">Roncaglia, Aurelio. “La Letteratura franco-veneta”. <i>Storia della letteratura italiana</i>, edited by Emilio Cecchi e Natalino Sapegno. Milan: Garzanti, 1965-1969, vol. 2, Il Trecento, pp. 725-59.</li><br />

                            <li class="bibentry">Roncaglia, Aurelio. <i>Le Origini della lingua e della letteratura italiana</i>, introduzione di Anna Ferrari. Turin: UTET, 2006, pp. 1-214.</li><br />

                            <li class="bibentry">Rosellini, Aldo. “Il Cosiddetto francoveneto: retrospettive e prospettive.” <i>Filologia moderna</i>, vol. 2, 1977, pp. 219-303.</li><br />

                            <li class="bibentry">Rosellini, Aldo. <i>Codici marciani di epopea carolingia (Ricerche bibliografiche)</i>. Dispensa prima. Udine: Coop. libraria universitaria friulana, 1979.</li><br />

                            <li class="bibentry">Roussel, Claude. “Berthe, Florence, Hélène: trois variations épiques sur le thème de l’épouse persécutée.” <i>Verhandelingen der Koninjlijke Nederlandse Akademie van Wetenschappen, Afd. Letterkunde</i>, vol. 159, 1998, pp. 39-60.</li><br />

                            <li class="bibentry">Roussel, Claude. “Le Mélange des genres dans les chansons de gestes tardives.” <i>Les Chansons de Geste: Actes du XVIe Congrès International de la Société Rencesvals pour l’Étude des Épopées Romanes. Granada, 21-25 juillet 2003</i>, edited by Carlos Alvar et Juan Paredes. Granada: Universidad de Granada, 2005, pp. 65-85.</li><br />

                            <li class="bibentry">Roussel, Claude. “Le Siège de Rome dans les chansons de geste tardives.” <i>La chrétienté au péril sarassin: Actes du colloque de la section française de la société internationale Rencesvals (Aix-en-Provence, 30 septembre-1er octobre 1999)</i>. Aix-en-Provence: Université de Provence CUER MA, 2000, pp. 219-30.</li><br />

                            <li class="bibentry">Ruggieri, Ruggero. <i>L’Influsso francese in Italia nel Medioevo</i>. Corso di filologia romanza, 1968-69. Rome: DeSanctis, n. d.</li><br />

                            <li class="bibentry">Ruggieri, Ruggero. “Origine, struttura e caratteri del Franco-veneto.” <i>Orbis</i>, vol. 10, 1961, pp. 20-30. Reprinted in Ruggero Ruggieri, ed., L’Influsso francese in Italia nel Medioevo, pp. 113-35; and in Ruggero Ruggieri, ed., Saggi di linguistica italiana e italo romanza. Florence, L.S. Olschki, pp. 159-68.</li><br />

                            <li class="bibentry">Ruggieri, Ruggero. “Temi e aspetti della letteratura francoveneta.” <i>Dante e la cultura veneta: Atti del convegno di studi organizzato dalla fondazione ‘Giorgio Cini’</i>, edited by Vittore Branca and Giorgio Padoan. Florence: Leo S. Olschki,1966, pp. 143-56.</li><br />

                            <li class="bibentry">Ryan, William Granger, trans. <i>Jacobus de Voragine. The Golden Legend: Readings on the Saints</i>. 2 vols. Princeton, NJ: Princeton UP, 1993.</li><br />

                    </ul>

                <h3 class="bib">S</h3>

                    <ul class="bib">

                            <li class="bibentry">“Saint Brendan’s Voyage.” <i>Visions of Heaven &amp; Hell Before Dante</i>, edited by Eileen Gardiner. NY: Italica Press, pp. 81-133.</li><br />

                            <li class="bibentry">“Saint Paul’s Apocalypse.” <i>Visions of Heaven &amp; Hell Before Dante</i>, edited by Eileen Gardiner. NY: Italica Press, pp. 13-46.</li><br />

                            <li class="bibentry">Scattolini, Michela G. “Appunti sulla tradizione della <i>Storia di Ugone d’Alvernia</i> di Andrea da Barberino.” <i>Rassegna di letteratura europea</i>, vol. 36, 2010, pp. 25-42.</li><br />

                            <li class="bibentry">Scattolini, Michela G “‘Chorisantes itaque puniuntur’: storia di un ‘exemplum,’ dai ‘danseurs maudits’ all’<i>Huon d’Auvergne</i>.” <i>La Parola del testo</i>, vol. 14, 2010, pp. 333-49.</li><br />

                            <li class="bibentry">Scattolini, Michela G. "Interpretazioni delle varianti e dinamiche della tradizione: l'episodio della discesa all'inferno nell’Huon d'Auvergne.” <i>Codici, testi, interpretazioni: studi dell'epica romanza medievale</i>, edited by Paolo di Luca and Doriana Piacentino. Naples: Photocity Edizioni University Press, 2015, pp. 141-60.</li><br />

                            <li class="bibentry">Scattolini, Michela G. “Note per un’edizione sinottica dell’<i>Huon d’Auvergne</i>.” <i>El texto medieval: de la edicion a la interpretación</i>, edited by Pilar Lorenzo Gradín and Simone Marcenaro. Santiago de Compostela: Universidad de Santiago de Compostela, 2012, pp. 97-112. Verba – Anexo n° 68.</li><br />

                            <li class="bibentry">Scattolini, Michela G. “Il pellegrinaggio di <i>Huon d’Auvergne</i> fra epica e agiografia.” <i>Identitad europea e intercambios culturales en el camino de Santiago de Compostela, siglos XI-XV</i>, edited by Santiago López Martínez-Morás et al., Santiago de Compostela: Universidad de Santiago de Compostela, 2013, pp. 385-404.</li><br />

                            <li class="bibentry">Scattolini, Michela G. <i>Ricerche sulla tradizione dell’</i>Huon d’Auvergne. 2010. Università degli studi di Siena, PhD dissertation.</li><br />

                            <li class="bibentry">Schwam-Baird, Shira. “To Be Emperor: The French-German Rivalry in the Franco-Italian Epic <i>Huon d’Auvergne</i>.” <i>Medieval Perspectives</i>, vol.  33, 2018, pp. 19-29.</li><br />

                            <li class="bibentry">Schwam-Baird, Shira. "La Résistance d'Ynide dans l’épopée franco-italienne <i>Huon d'Auvergne</i> : femme exceptionnelle / femme admirable?" <i>“Par deviers Rome m’en renvenrai errant”: Atti del XXème Congrès International de la Societé Rencesvals pour l’étude des épopées romanes, Rome, Italy, 20-25 July 2015</i>, edited by M. Careri et al. Rome: Viella, 2017, pp. 637-46.</li><br />

                            <li class="bibentry">Segre, Cesare. “La letteratura franco-veneta.” <i>Storia della letteratura italiana</i>, edited by Enrico Malato. Rome: Salerno, 1995, vol. 1, Dalle origini a Dante, pp. 631-47.</li><br />

                            <li class="bibentry">Segre, Cesare, Carlo Beretta, and Giovanni Palumbo. “Les manuscrits de la Chanson de Roland. Une nouvelle édition complète des textes français et franco-vénitiens. Discussione dei volumi <i>La Chanson de Roland. The Song of Roland. The French Corpus</i>, General Editor J.J. Duggan, editors K. Akiyama, I. Short, R.F. Cook, J.J. Duggan, A.C. Rejhon, W. van Emden, W.W. Kibler, Turnhout, Brepols, 2005, 3 voll.” Medioevo romanzo, vol. 32, no. 1, 2008, pp.135-207.</li><br />

                            <li class="bibentry">Seidlitz, W. von. “Die illustrierten handschriften der Hamilton-Sammlung zu Berlin.” <i>Berichte und Mittheilungen aus Sammlungen und Museen</i>, vol. 6, 1883, pp. 256-273.</li><br />

                            <li class="bibentry">Stengel, Edmund. "Eine weitere Textstelle aus der franco-venezianischen Chanson de geste von Huon d'Auvergne. (Nach der Berliner und der Turiner Handschrift)." <i>Festschrift zum 13. Neuphilologentage</i>, edited by R. Philippsthal. Hannover-List and Berlin: C. Meyer, 1908, pp. 35-49.</li><br />

                            <li class="bibentry">Stengel, Edmund. "Huons von Auvergne Keuschheitsprobe, Episode aus der franco-venezianischen Chanson de geste von Huon d'Auvergne nach den drei erhaltenen Fassungen, der Berliner, Turiner und Paduaner." <i>Mélanges offerts à M. Maurice Wilmotte</i>. Paris: Champion, 1910, vol. 2, pp. 685-713.</li><br />

                            <li class="bibentry">Stengel, Edmund. "Karl Martels Entführung in die Hölle und Wilhem Capets Wahl zu seinem Nachfolger. Stelle aus der Chanson von Huon d'Auvergne (1) nach der Berliner Hs." <i>Studi letterari e linguistici dedicati a Pio Rajna nel quarantesimo anno del suo insegnamento</i>, no editor listed. Milan: Hoepli, 1911, pp. 873-91.</li><br />

                            <li class="bibentry">Stengel, Edmund. "Roms Befreiung durch Huon d'Auvergne und dessen Tod. Schlussepisode (1) der franco-venezianischen 'Chanson' von Huon d'Auvergne. Text der Berliner Handschrift, zum ersten Mal veröffentlich." <i>Miscellanea di Studi critici in onore di V. Crescini</i>, no editor listed. Cividale: Fratelli Stagni, 1927, pp. 267-90.</li><br />

                            <li class="bibentry">Stengel, Edmund. <i>Huon's aus Auvergne Suche nach dem Holleneingang nach der Berliner Hs. Festschrift der Universität Greifswald</i>. Greifswald: Emil Hartmann, 1912.</li><br />

                            <li class="bibentry">Stengel, Edmund. Rev. of <i>Floovent-Studien. Untersuchungen zur altfranzösischen Epik</i>. By Gustav Brockstedt. Kiel: Robert Cordes, 1907. Zeitschrift für französische Sprache und Litteratur, vol. 33, 1908, pp. 159-63.</li><br />

                            <li class="bibentry">Sunderland, Luke. <i>Rebel Barons: Resisting Royal Power in Medieval Culture</i>. Oxford: Oxford UP, 2017.</li><br />

                    </ul>

                <h3 class="bib">T</h3>

                    <ul class="bib">

                            <li class="bibentry">Thomas, Antoine. “Le No 44 des manuscrits français des Gonzague.” <i>Romania</i>, vol. 10, 1881, pp. 406-408.</li><br />

                            <li class="bibentry">Thomas, Antoine. “Sur le sort de quelques manuscrits de la famille d’Este.” <i>Romania</i>, vol. 18, 1889, pp. 296-98.</li><br />

                            <li class="bibentry">Tobler, Adolf. “Die Berliner Handschrift des Huon d’Auvergne.” <i>Sitzungsberichte der königlich preussischen Akademie der Wissenschaften zu Berlin Phil.-hist. Kl.</i>, vol. 27, 1884, pp. 605-20.</li><br />

                            <li class="bibentry">Toesca, Pietro. <i>La Pittura e la miniatura nella Lombardia: Dai più antichi monumenti alla metà del Quattrocento</i>. Turin: Einaudi, 1966.</li><br />

                            <li class="bibentry">Tomasoni, Piera. “Veneto.” <i>Storia della lingua italiana</i>. Turin: Einaudi, 1994, Vol. 3: Le Altre lingue, edited by Luca Serianni and Pietro Trifone, pp. 212-40.</li><br />

                    </ul>

                <h3 class="bib">V</h3>

                    <ul class="bib">

                            <li class="bibentry">Valentinelli, Giuseppe. <i>Della biblioteca del Seminario di Padova</i>. Venice: Teresa Gattei, 1849. https://books.google.co.uk/books?vid=BL:A0019380413</li><br />

                            <li class="bibentry">Vallecalle, Jean-Claude. “Les chansons de geste franco-italiennes: héritage et réinterprétation d’une tradition littéraire.” <i>In Limine Romaniae: Chanson de geste et épopée européene</i>, edited by Carlos Alvar et Constance Carta. Bern: Peter Lang, 2012, pp. 61-90.</li><br />

                            <li class="bibentry">Vallecalle, Jean-Claude.“La colère du héros dans l’épopée franco-italienne.” <i>Romania</i>, vol. 135, 2017, pp. 352-62.</li><br />

                            <li class="bibentry">Vallecalle, Jean-Claude.“La divination dans les chansons de geste franco-italiennes du XIVe siècle.” <i>“Moult a sans et vallour”: Studies in Medieval French Literature in Honor of William W. Kibler</i>, edited by Monica L. Wright et al. Amsterdam: Rodopi, 2012, pp. 385-99. Faux Titres 378.</li><br />

                            <li class="bibentry">Vallecalle, Jean-Claude. “Frontières du monde, frontières de l’épique : le voyage en enfer de <i>Huon d’Auvergne</i>.” <i>“Le monde entour et environ”. La geste, la route et le livre dans la littérature médiévale: Mélanges offerts à Claude Roussel</i>, edited by Émilie Goudeau et al. Clermont-Ferrand: Presses de l’Université Blaise Pascal, 2017, pp. 217-25.</li><br />

                            <li class="bibentry">Vallecalle, Jean-Claude. “Le héros et le chef dans l’épopée franco-italienne du XIVe siècle.” <i>Le personnage de chanson de geste: Actes du colloque (12-14 mars 2020)</i>. Paris: Classiques Garnier, in press.</li><br />

                            <li class="bibentry">Vallecalle, Jean-Claude. “Huon d’Auvergne, voyageur immuable.” <i>Ad limina</i>, vol. 12, 2021, in press.</li><br />

                            <li class="bibentry">Vallecalle, Jean-Claude. “L’Inscription du passé dans <i>Huon d’Auvergne</i>.” <i>De la pensée de l’Histoire au jeu littéraire: Études médiévales en l’honneur de Dominique Boutet</i>, edited by Sébastien Douchet et al. Paris: Champion, 2017. pp. 468-77. Nouvelle Bibliothèque du Moyen Âge 127.</li><br />

                            <li class="bibentry">Vallecalle, Jean-Claude. “Le masque et le miroir dans <i>Aquilon de Bavière</i>.” <i>Cahiers de Recherches Médiévales et Humanistes</i>, vol. 35, no. 1, 2018, pp. 271-81.</li><br />

                            <li class="bibentry">Vallecalle, Jean-Claude. “Oiseaux de paradis, les anges neutres dans <i>Huon d’Auvergne</i>.” <i>Du temps que les bestes parloient: Mélanges offerts au professeur Roger Bellon</i>, edited by Valérie Méot-Bourquin and Aurélie Barre. Paris: Classiques Garnier, 2018, pp. 393-402.</li><br />

                            <li class="bibentry">Vallecalle, Jean-Claude. “Ordre terrestre ou sainteté : l’épilogue de <i>Huon d’Auvergne</i>.” Études offertes à Danielle Buschinger, edited by Florent Gabaude et al. Amiens: Publications du Centre d’Études Médiévales de Picardie, 2016, vol. 1, pp. 400-409.</li><br />

                            <li class="bibentry">Vallecalle, Jean-Claude. “Le traître et son destin dans l’épopée franco-italienne.” <i>Crimes et châtiments dans la chanson de geste</i>, edited by Bernard Ribémont. Paris: Klincksieck, 2008, pp. 179-202.</li><br />

                            <li class="bibentry">Vallecalle, Jean-Claude. “Un retour à l’épique: Le manuscrit de Padoue de Huon d’Auvergne.” <i>Uns clers ait dit que chanson en ferait: Mélanges de langue, d’histoire et de littérature offerts à Jean-Charles Herbin</i>, edited by M. G. Grossel et al. Valenciennes: Presses universitaires de Valenciennes, 2019, pp. 739-49.</li><br />

                            <li class="bibentry">Van Heerden, Helga Dieta. <i>L’</i>Inferno <i>e</i> Ugone d’Alvernia<i>: Analisi morfologica di un testo cavalleresco e analisi comparativa di alcuni inferni</i>. 1987. University Of The Witwatersrand, MA thesis.</li><br />

                            <li class="bibentry">Vidossi, Giuseppe, and Felice Arese. “Huon d’Auvergne.” <i>Le Origini. Testi latini, italiani, provenzali e franco-italiani</i>, edited by Antonio Viscardi. Milan / Naples: Riccardi, 1956. vol. 4, pp. 1200-18.</li><br />

                            <li class="bibentry">Villani, Giovanni, and Matteo Villani. <a href="https://www.liberliber.it/mediateca/libri/v/villani/nuova_cronica/pdf/nuova__p.pdf"><i>Nuova Cronica</i></a>, ed. by Giuseppe Porta. Parma: Fondazione Pietro Bembo / Ugo Guanda, 1991. Link verified 27 Feb. 2021.</li><br />

                            <li class="bibentry">Virgilius Maro, P. <i>Aeneis</i>, edited with introduction and notes by Gian Biagio Conte. Berlin/New York: De Gruyter, 2009. Bibliotheca scriptorum Graecorum et Romanorum Teubneriana.</li><br />

                            <li class="bibentry">Virgil. <i>The Aeneid</i>. Translated by Robert Fagles, introduction by Bernard Knox. NY: Penguin, 2008.</li><br />

                            <li class="bibentry">Viscardi, Antonio, ed. <i>Letteratura franco-italiana</i>. Modena: Società tipografia modenese, 1941. Pubblicazioni dell'Istituto di filologia romanza della Università di Roma. Testi e manuali, n. 21.</li><br />

                            <li class="bibentry">Vitale-Brovarone, Alessandro. “De la chanson de Huon d’Auvergne à la <i>Storia di Ugone d’Avernia</i> d’Andrea da Barberino: techniques et méthodes de la traduction et de l’élaboration.” <i>Charlemagne et l’épopée romane. Actes du VIIe Congrès international de la Société Rencesvals (Liège 28 août - 4 septembre 1976)</i>, edited by Madeleine Tyssens and Claude Thiry. Paris: Les Belles lettres, 1978, vol. 2, pp. 393-403.</li><br />

                            <li class="bibentry">Vitullo, Juliann M. <i>The Chivalric Epic in Medieval Italy</i>. Gainesville: UP of Florida, 2000.</li><br />

                            <li class="bibentry">Vitullo, Juliann M. “Orality, Literacy, and the Prose Epic: The Case of Andrea da Barberino’s <i>Ugo d’Alvernia</i>.” <i>The Italianist</i>, vol. 13, 1993, pp. 29-46.</li><br />

                    </ul>

                <h3 class="bib">W</h3>

                    <ul class="bib">

                            <li class="bibentry">Warren, Michelle R. “Philology in Ruins.” <i>Floriligium</i>, vol. 32, 2015, pp. 59-76.</li><br />

                            <li class="bibentry">Wescher, Paul. <i>Beschreibendes Verzeichnis der Miniaturen-Handschriften und Einzelblätter des Kupferstichkabinetts der Staatl. Museen Berlin</i>. Leipzig: J.J. Weber, 1931, pp. 68-70.</li><br />

                            <li class="bibentry">White, T. H., ed., <i>The Book of Beasts: Being a Translation from a Latin  Bestiary of the Twelfth Century</i>. NY: Dover, 1984.</li><br />

                            <li class="bibentry">Wolfzettel, Friedrich. “Zur Stellung und Bedeutung der Enfances in der alt-französischen Epik I, II.” <i>Zeitschrift für französische Sprache und Literatur</i>, vol. 83, 1972, pp. 317-48; vol. 84, 1974, pp. 1-32.</li><br />

                            <li class="bibentry">Wunderli, Peter. “Franko-Italienisch: ein sprach- und literaturgeschichtliches Kuriosum.” <i>Vox Romanica</i>, vol. 62, 1999, pp. 1-27.</li><br />

                            <li class="bibentry">Wunderli, Peter. “‘Interferenze’ in franco-italiano. L’esempio dell’<i>Aquilon de Bavière</i>.” <i>Vox Romanica</i>, vol. 58, 1999, pp. 124-48.</li><br />

                            <li class="bibentry">Wunderli, Peter. <i>Literarische memoria und sozio-kultureller Kontext</i>. Paderborn/München/Wien/Zürich: Ferdinand Schöningh, 2005.</li><br />

                            <li class="bibentry">Wunderli, Peter. “Se omnipersonnel dans l'<i>Aquilon de Bavière</i>." <i>Testi, cotesti e contesti del franco-italiano: Atti del 10 simposio franco-italiano (Bad Homburg, 13-16 aprile, 1987)</i>, edited by Günter Holtus et al. Tübingen: Niemeyer, 1989, pp. 80-111.</li><br />

                            <li class="bibentry">Wunderli, Peter. “Un luogo di ‘interferenze’: il franco-italiano.” <i>La cultura dell’Italia padana e la presenza francese nei secoli 13-15: Pavia, 11-14 settembre 1994)</i>, edited by Luigina Morini. Alessandria: dell’Orso, 2001, pp. 55-66.</li><br />

                            <li class="bibentry">Wunderli, Peter. “Zum Problem der Klassifikation franko-italienischer Epen.” <i>Romanistische Zeitschrift für Literaturgeschichte</i>, vol. 27, 2003, 285-306.</li><br />

                            <li class="bibentry">Wunderli, Peter, and Günter Holtus. “La ‘renaissance’ des études franco-italiennes. Rétrospective et prospective.” <i>Testi, cotesti e contesti del franco-italiano: Atti del 10 simposio franco-italiano (Bad Homburg, 13-16 aprile, 1987)</i>, edited by Günter Holtus et al. Tübingen: Niemeyer, 1989, pp. 3-23.</li><br />

                    </ul>

                <h3 class="bib">Z</h3>

                    <ul class="bib">

                            <li class="bibentry">Zambon, Francesco. “La ‘materia di Francia’ nella letteratura franco-veneta.” <i>Sulle orme di Orlando: Leggende e luoghi carolingi in Italia: I paladinidi Francia nelle tradizioni italiane, una proposta storico-antropologica</i>, edited by A. I. Galletti and R. Roda. Padua: Interbooks, 1987, pp. 53-64.</li><br />

                            <li class="bibentry">Zanetti, Antonio Maria. “Appendice d’alcuni manoscritti in lingua francese antica.” <i>Latina et Italica D. Marci Bibliotheca codicum manu scriptorum per titulos digesta</i>. Venice: Simone Occhi, 1741.</li><br />

                            <li class="bibentry">Zinelli, Fabio. “Espaces franco-italiens: les italianismes du français médiéval.” <i>La régionalité lexicale du français au Moyen Âge: Volume thématique issu du colloque de Zurich, organisé sous le haut patronage de la Société de Linguistique Romane (7/8 sept. 2015)</i>, edited by Martin Glessgen and David Trotter. Strasourg: ÉliPhi, 2016, pp. 207-68.</li><br />

                            <li class="bibentry">Zanichelli, Giuseppa. “Miniatura a Mantova nell’età dei Bonacolsi e dei primi Gonzaga.” <i>Artes</i>, vol. 5, 2007, pp. 36-71.</li><br />

                            <li class="bibentry">Zingarelli, Nicola. “Letteratura franco-italiana nei secoli XIII e XIV.” <i>critti di varia letteratura</i>, raccolti a cura degli amici in occasione del suo commiato dalla scuola. Milan: Hoepli, 1935, pp. 450-68.</li><br />

                            <li class="bibentry">Zuwiyya, David, ed. <i>A Companion to Alexander Literature in the Middle Ages</i>. Boston: Brill, 2011.</li><br />

                    </ul>
                        
                </Col>
            </Row>
        </Container>
    )
}

export default Bibliography