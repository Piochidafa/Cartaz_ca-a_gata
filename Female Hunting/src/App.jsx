
import imagi from './assets/Lucas_femea.png'
import './App.css'

function App() {

  return (
    <div className="App">

      <div className="container">
        <div className="caixinha">
          <div className="Infocartaz">
            <span>Procurade</span>
            <div className="image">
                <img src={imagi} alt="Lucas linda" />
            </div>
            <span id='pp'>vivo ou morte</span>
            <span id='name'>LUCAT</span>
            <span id='monetario'>R$ 20.000.000</span>
            <span id='assinatura'>ASS: Cabo Daciolo</span>
          </div>
        </div>
      </div>


    </div>
  )
}

export default App
