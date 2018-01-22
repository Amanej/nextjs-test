import Layout from '../components/MyLayout.js'

export default () => (
  <div>
    <Layout>
      <section className="topp">
          <div className="topp-background">
              <div className="container">
                  <div className="heading">
                      <h1>Nye <br/><span>Dacia Duster</span></h1>
                      <h2>Norgespremiere</h2>
                      <p>Startpris fra kr<span className="price">199 900,-</span>Pris er inkl. frakt og levering Oslo.</p>
                      <a ng-href="/bestill" className="button blue cta">Reserver nå!</a>
                  </div>
              </div>
          </div>
      </section>
      <section className="competition">
          <div className="container">
              <img src="/images/home/TV.gif" alt="" />
              <div className="competition-text">
                  <h2><span>GRIP SJANSEN <br/>Reserver Dacia Duster i dag!</span></h2>
                  <p>Vi trekker fem heldige vinnere som kan se OL på en helt ny<strong> Samsung 65" 4K UHD Smart-TV</strong><br/> <span>(verdi kr 16 995,-)</span></p>
                  <a href="/bestill">Les mer</a>
              </div>
          </div>
      </section>
      <section className="reviews">
          <h2><span>Omtaler:</span></h2>
          <div className="container center">
              <div className="omtale">
                  <h2>Her kommer den<br/>– Norges billigste SUV</h2>
                  <p><strong>"Det funker pokker så godt, til og med!"</strong><br/> - broom, Tv2</p>
                  <a className="button blue" ng-href="http://www.tv2.no/broom/9520439/">Les mer</a>
              </div>
              <div className="omtale">
                  <h2>Et skikkelig lyspunkt<br/>– Terningkast fem!</h2>
                  <p><strong>" Dette er en bil for folket!"</strong><br/> - VI MENN</p>
                  <a className="button blue" ng-href="http://dacia.no/admin/wp-content/uploads/2018/01/18_no_vm_1_dacia_duster_153775.pdf">Les mer</a>
              </div>
        </div>
      </section>

      <section className="topp-text padded">
          <div className="container center">
              <h2 className="pads">Slipp løs <span>eventyrlysten!</span></h2>
              <p>Dette er en sikker SUV som aldri gir seg! Oppdagelsene står i kø for den som våger seg utenfor allfarvei.
                  Klatre opp bratte stigninger, ta deg frem på vanskelig underlag og ta utfordringene på strak arm!</p>
          </div>
      </section>

      <section className="sales-icons padded">
          <div className="container">
              <div className="icon center">
                  <img src="/assets/icons/ups/USP_4x4monitor.jpg" />
                  <div className="content pads">
                      <h3>4WD-MONITOR</h3>
                      <p>Følg med på bilens posisjon under terrengkjøring.</p>
                  </div>
              </div>
              <div className="icon center">
                  <img src="/assets/icons/ups/USP_MultiView.jpg" />
                  <div className="content pads">
                      <h3>MULTIVISNINGSKAMERA</h3>
                      <p>Fire kameraer hjelper deg på veien og i terrenget.</p>
                  </div>
              </div>
              <div className="icon center">
                  <img src="/assets/icons/ups/USP_HillDescent.jpg" />
                  <div className="content pads">
                      <h3>HILL DESCENT CONTROL</h3>
                      <p>Gir deg jevn og kontrollert bakkenedstigning.</p>
                  </div>
              </div>
          </div>
      </section>

      <section className="style padded">
          <div className="container">
              <div className="content">
                  <div className="left-column">
                  </div>
                  <div className="right-column">
                      <div className="style-text">
                          <h3>Utforsk Duster</h3>
                          <h2>Hjemme i all slags terreng <span>med 4WD</span></h2>
                          <p>Dacia's SUV kommer nå med helt nytt design og nytt utstyr. En utmerket offroader med 4WD, høy bakkeklaring og et robust chassis.
                              Nye Dacia Duster har en offroadkapasitet som er en av de aller beste i sin klasse og er nå enda morsommere å kjøre.</p>
                          <a ng-href="/utforsk" className="button blue">Les mer</a>
                      </div>
                      <img src="/images/home/rough-conditions.jpg" />
                      <img src="/images/home/duster-4wd.jpg" />
                  </div>
              </div>
              <div className="bottom-row">
                  <img className="clearance" src="/images/home/Bakkeklaring.jpg" />
                  <img className="why-used" src="/images/home/hvorfor-brukt.jpg" />
              </div>
          </div>
      </section>

      <section className="equipment-levels-home padded">
          <div className="container">
              <div className="equipment-level-text pads">
                  <h3>UTSTYRSNIVÅER</h3>
                  <h2>Oppdag dine muligheter<br/><span></span></h2>
                  <p>Nye Dacia Duster er utstyrt med Media Nav multimedia system. Et intuitivt system med 7" berøringskjerm,
                  lar deg få tilgang til en rekke funksjoner som navigasjon, telefon, DAB+ radio og Bluetooth.</p>
                  <a ng-href="/utstyrsnivå" className="button blue">Les mer</a>
              </div>
              <img src="/images/home/splash2-600x600.jpg" />
          </div>
      </section>

      <section className="brochures-home padded">
          <div className="container">
              <div className="pricelist">
                  <div className="img"></div>
                  <div className="pricelist-content pads">
                      <h3>PRISLISTE</h3>
                      <h2>Velg riktig modell <br/><span>for deg!</span></h2>
                      <p>Velg mellom Comfort og Prestige, se hvilken Duster som passer ditt behov! Les mer om pris og utstyrsnivå.</p>
                      <a ng-href="http://dacia.no/admin/wp-content/uploads/2017/12/Prisliste-Dacia_Duster-01-2018-oppdatert.pdf" className="button blue">Last ned prisliste</a>
                  </div>
              </div>
              <div className="brochures">
                  <div className="img"></div>
                  <div className="brochures-content pads">
                      <h3>BROSJYRE</h3>
                      <h2>Utforsk mer om<br/><span>Nye Dacia Duster</span></h2>
                      <p>Nye Dacia Duster har en rekke egenskaper som passer alt fra bykjøring til de vanskeligere terrengene. Les mer om nye Dacia Duster's muligheter.</p>
                      <a ng-href="http://dacia.no/admin/wp-content/uploads/2017/12/Duster-hovedbrosjyre-2018-web.pdf" className="button blue">Last ned brosjyre</a>
                  </div>
              </div>
          </div>
      </section>

      <section className="accessories-home padded">
          <div className="container center">
              <h3>TILBEHØR</h3>
              <h2>Oppdag utvalget <span>av tilbehør!</span></h2>
              <p>Nye Dacia Duster har et stort utvalg tilbehør, slik at du kan gjøre din Dacia Duster helt unik for ditt behov. Oppdag utvalget her!</p>
              <a ng-href="http://dacia.no/admin/wp-content/uploads/2018/01/06a-brosjyre-Duster-II-tilbehor-S.pdf" className="button blue">Last ned tilbehørsbrosjyre</a><br/>
              <img src="/images/home/hjul-stor2.jpg" />
          </div>
      </section>
    </Layout>
  </div>
)
