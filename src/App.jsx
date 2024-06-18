import './App.css'
// import image ./assets/screen.png
import Image from './assets/screen.png'

function App() {
  return (
    <>
      <h1>Navimind: Navigate with Complete Peace of Mind</h1>
      <h3 style={{ fontStyle: 'italic' }}>
        by Julie Chen, Médéric Peniguel, Xavier Rosengard, Benjamin Rossignol and Camille Salaun
      </h3>
      <p style={{ textAlign: 'justify', marginLeft: '10rem', marginRight: '10rem' }}>
        This is a dashboard for Navimind. It is a project for the Hackaton 2024.

        Our goal is to analyze the traffic in the Parisian metro and to provide a solution to help people navigate with complete peace of mind.

        To do so, we focused our analysis on two main aspects of the travel experience: travaller's wellbeing (air quality, cleanliness) and handicapped accessibility.
      </p>
      <div>
        <h2 style={{ fontStyle: 'italic' }}>1. Repartition of people in 2022</h2>
        <iframe title="Rapport_hackaton_2024_nb_person" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=71201599-4ade-4a05-95ee-ad4eccccf471&autoAuth=true&ctid=413600cf-bd4e-4c7c-8a61-69e73cddf731" frameborder="0" allowFullScreen="true"></iframe>
        <p style={{ textAlign: 'justify', marginLeft: '10rem', marginRight: '10rem' }}>
          We can see that in August it is the moment where there is the least people.
          The Parisian metro is the place where most people use their Navigo card on the 751 stops.
          There is a huge disparity between the navigo card, the median and average are very different.
          We have built a model to predict the number of people, you can see the results above.
        </p>
        <img src={Image} alt="" style={{ width: '50%', height: '50%' }} />
      </div>
      <div>
        <h2 style={{ fontStyle: 'italic' }}>2. Client Satisfaction depending on many aspects</h2>
        <iframe title="A" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=36c5770e-6b8e-4e38-a3dc-0cb912e82512&autoAuth=true&ctid=413600cf-bd4e-4c7c-8a61-69e73cddf731" frameborder="0" allowFullScreen="true"></iframe>
        <p style={{ textAlign: 'justify', marginLeft: '10rem', marginRight: '10rem' }}>
          We analyzed the satisfaction of the clients depending on climatization, line, number of passengers, toilets, stations and months.
          Overall, the satisfaction is 69%, which is quite good. It is globally well disgtributed between lines. However, the T13 line has a very bad satisfaction rate, mainly because it is new so there are a lot of issues / not many people reviewing it.

          The satsfaction is surprisingly the same between the line types.
        </p>
      </div>
      <div>
        <h2 style={{ fontStyle: 'italic' }}>3. Handicap Accessibility: Equipments</h2>
        <iframe title="Equipements" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=573a444b-684d-488c-8778-276bbd3371bf&autoAuth=true&ctid=413600cf-bd4e-4c7c-8a61-69e73cddf731" frameborder="0" allowFullScreen="true"></iframe>
        <p style={{ textAlign: 'justify', marginLeft: '10rem', marginRight: '10rem' }}>
          We can see the number of equipents by station.

          These are systems already presents for the handicapped people. We can see that the stations with the most equipments are the ones with the most people.

          However, we can see the distribution of widened gates for handicapped people, where we can see that half of them are not equiped with widened gates.
          This is a real issue, we should fix the train stations to make them more accessible for everyone.

          We can compare these values with the next graph, which is the number of calls for help by station.
        </p>
      </div>
      <div>
        <h2 style={{ fontStyle: 'italic' }}>4. Handicap Accessibility: Services</h2>
        <iframe title="Services" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=f3808a3b-4e29-4487-9b41-53fd60328543&autoAuth=true&ctid=413600cf-bd4e-4c7c-8a61-69e73cddf731" frameborder="0" allowFullScreen="true"></iframe>
        <p style={{ textAlign: 'justify', marginLeft: '10rem', marginRight: '10rem' }}>
          We can see the number of services by train station.
          We can compare this data with the previous one: Some train stations receive a lot of calls for help, because they have the infrastructure to help handicapped people.
          This means that if more train stations have the equipment to help handicapped people, the number of calls for help will increase.
        </p>
      </div>
      <div>
        <h2 style={{ fontStyle: 'italic' }}>5. Handicap Accessibility: Assistance</h2>
        <iframe title="Accompagnement" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=d1892966-8bcf-43c0-8219-2d7c20336912&autoAuth=true&ctid=413600cf-bd4e-4c7c-8a61-69e73cddf731" frameborder="0" allowFullScreen="true"></iframe>
        <p style={{ textAlign: 'justify', marginLeft: '10rem', marginRight: '10rem' }}>
          We can see the number of services by train station.
          We can see that the number of assistances decreases a lot : this is because the number of application calls increased a lot during the last few years.
          Everything is more digital now, and people prefer to use the application to ask for help.
        </p>
      </div>
      <div>
        <h2 style={{ fontStyle: 'italic' }}>6. Air Quality</h2>
        <iframe title="azertyu" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=89c26712-35a3-4ec5-be7b-f89e50f1cd29&autoAuth=true&ctid=413600cf-bd4e-4c7c-8a61-69e73cddf731" frameborder="0" allowFullScreen="true"></iframe>
        <p style={{ textAlign: 'justify', marginLeft: '10rem', marginRight: '10rem' }}>
          Another aspect of the travel experience is the air quality. We can see that the air quality is quite good in the Parisian metro.
          We can also see that we don't have any data in 2018. Overall, from 2022 to 2024 it decreased.
          To better analyze it, we created a Machine Learning model to predict the air quality in the Parisian metro.
          You can find it here:
        </p>
        <a href='https://ml.azure.com/automl/runs/frank_toe_1v6dfd88vv?wsid=/subscriptions/ff9ce1d8-cb80-47de-9c4f-0a77d469b073/resourcegroups/CIR/providers/Microsoft.MachineLearningServices/workspaces/Hackaton&tid=413600cf-bd4e-4c7c-8a61-69e73cddf731'>Machine Learning model</a>

      </div>
      <h1>Sources</h1>
      <a href='https://data.ratp.fr/explore/dataset/sanitaires-reseau-ratp/table/'>Sanitaires réseau RATP</a>
      <br />
      <a href='https://prim.iledefrance-mobilites.fr/jeux-de-donnees/emplacement-des-gares-idf'>Emplacement des gares IDF</a>
      <br />
      <a href='https://ressources.data.sncf.com/explore/dataset/proprete-en-gare/information/'>Propreté en gare</a>
      <br />
      <a href='https://ressources.data.sncf.com/explore/dataset/barometre-client/information/'>Baromètre client</a>
      <br />
      <a href='https://data.ratp.fr/explore/dataset/qualite-de-lair-mesuree-dans-la-station-chatelet-rer-a0/information/'>Qualité de l'air mesurée dans la station Châtelet RER A</a>
      <br />
      <a href='https://www.data.gouv.fr/fr/datasets/historique-des-donnees-de-validation-sur-le-reseau-ferre-2015-2022/'>Historique des données de validation sur le réseau ferré 2015-2022</a>
      <br />
      <a href='https://ressources.data.sncf.com/explore/dataset/accompagnement-pmr-gares/information/'>Accompagnement PMR gares</a>
      <br />
      <a href='https://ressources.data.sncf.com/explore/dataset/equipements-accessibilite-gares-transilien/information/?disjunctive.gare'>Equipements accessibilité gares Transilien</a>
      <br />
      <a href='https://www.data.gouv.fr/fr/datasets/services-dassistance-dans-les-gares-transilien-1/'>Services d'assistance dans les gares Transilien</a>
      <br />
    </>
  )
}

export default App