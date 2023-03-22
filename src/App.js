import React, {useState} from 'react';
import './App.css';
import List from "./Components/List/List";
import Input from "./Components/InputForm/Input";

function App() {

    function onChange(e){
        console.log(e.target.value);
    }

    function logAll() {
        console.log(Aardbei + " Aardbeien," + Banaan + " Bananen," + Appels + " Appels," + Kiwi + " kiwi's")
        console.log("met deze gegevens:" + voornaam, achternaam, leeftijd, postcode, bezorgfrequentie, opmerking, Voorwaarden)
        reset()
        resetForm()
    }

    // Fruit
    const [Aardbei, setAardbei] = React.useState(0);
    const [Banaan, setBanaan] = React.useState(0);
    const [Appels, setAppels] = React.useState(0);
    const [Kiwi, setKiwi] = React.useState(0);

    // Form
    const [voornaam, setVoornaamValue] = useState('');
    const [achternaam, setAchternaamValue] = useState('');
    const [leeftijd, setLeeftijdValue] = useState('');
    const [postcode, setPostcodeValue] = useState('');
    const [bezorgfrequentie, setBezorgfrequentie] = useState('');
    const [opmerking, setOpmerkingValue] = useState('');
    const [Voorwaarden, checkVoorwaarden] = useState('');

    function reset(){
        setKiwi(0)
        setBanaan(0)
        setAppels(0)
        setAardbei(0)
    }
    function buttonCheck(){
        if (voornaam && achternaam && postcode && bezorgfrequentie && Voorwaarden !== "") {
            if (leeftijd < 10){
                return false }
        }
    }
    function resetForm(){
        setVoornaamValue("")
        setAchternaamValue("")
        setLeeftijdValue("")
        setPostcodeValue("")
        setBezorgfrequentie("")
        setOpmerkingValue("")
        checkVoorwaarden("")
    }



  return (
    <>
        <section className="section">

            <h1>Fruitmand bezorgservice</h1>
        <ul>
            <List setFruitCount={setAardbei} fruitCount={Aardbei} fruitName="Aardbei" />
            <List setFruitCount={setBanaan} fruitCount={Banaan} fruitName="Banaan" />
            <List setFruitCount={setAppels} fruitCount={Appels} fruitName="Appels" />
            <List setFruitCount={setKiwi} fruitCount={Kiwi} fruitName="Kiwi" />
           {/* <li>Aardbeien <button disabled={Aardbei < 1} onClick={() => setAardbei(Aardbei - 1 )}>-</button> {Aardbei} <button onClick={() => setAardbei(Aardbei + 1 )}>+</button></li>*!/*/}
           {/* <li>Bananen <button disabled={Banaan < 1} onClick={() => setBanaan(Banaan - 1 )}>-</button> {Banaan} <button onClick={() => setBanaan(Banaan + 1 )}>+</button></li>*/}
           {/* <li>Appels <button disabled={Appels < 1} onClick={() => setAppels(Appels - 1 )}>-</button> {Appels} <button onClick={() => setAppels(Appels + 1 )}>+</button></li>*/}
           {/* <li>Kiwi <button disabled={Kiwi < 1} onClick={() => setKiwi (Kiwi - 1 )}>-</button> {Kiwi} <button onClick={() => setKiwi(Kiwi + 1 )}>+</button></li>*/}
        </ul>
            <button onClick={() => reset()}>Reset</button>
    </section>

<section className="Form">
    <form onSubmit={(e) => e.preventDefault()}>
    <Input name="voornaam" label="Voornaam" inputType="text" value={voornaam} changeHandler={setVoornaamValue}/>
    <Input name="achternaam" label="Achternaam" inputType="text" value={achternaam} changeHandler={setAchternaamValue}/>
        <Input name="leeftijd" label="Leeftijd" inputType="number" value={leeftijd} changeHandler={setLeeftijdValue}/>
        <Input name="postcode" label="Postcode" inputType="text" value={postcode} changeHandler={setPostcodeValue}/>
        Bezorgfrequentie:
        <select value={bezorgfrequentie}
                onChange={(e) => setBezorgfrequentie(e.target.value)}>
            <option>Maak een keuze...</option>
            <option>Iedere week</option>
            <option>Om de week</option>
            <option>Iedere maand</option>
        </select>
        <div onChange={onChange}>
            <input type="radio" value="overdag" name="bezorgmoment"/> Overdag
            <input type="radio" value="Avonds" name="bezorgmoment"/> s'Avonds
        </div>
        <textarea  name="opmerking" id="opmerking-field" value={opmerking} onChange={(e) => setOpmerkingValue(e.target.value)} rows={6} cols={40}/>
        <label><Input label="Voorwaarden" inputType="checkbox" value={Voorwaarden} changeHandler={checkVoorwaarden}/>Ik ga akkoord met de voorwaarden</label>
         <button type="submit" disabled={buttonCheck} onClick={logAll}> verzend</button>
    </form>

        {/*<form onSubmit={(e) => e.preventDefault()}>*/}
        {/*    Voornaam:*/}
        {/*    <input type="text" id="voornaam"  value={voornaam}*/}
        {/*           onChange={(e) => setVoornaamValue(e.target.value)}/>*/}
        {/*    Achternaam:*/}
        {/*    <input type="text" id="achternaam" value={achternaam}*/}
        {/*           onChange={(e) => setAchternaamValue(e.target.value)}/>*/}
        {/*    Leeftijd:*/}
        {/*    <input type="number" id="leeftijd" value={leeftijd}*/}
        {/*           onChange={(e) => setLeeftijdValue(e.target.value)}/>*/}
        {/*    Postcode:*/}
        {/*    <input type="text" id="Postcode" value={postcode}*/}
        {/*           onChange={(e) => setPostcodeValue(e.target.value)}/>*/}
        {/*    Bezorgfrequentie:*/}
        {/*    <select value={bezorgfrequentie}*/}
        {/*            onChange={(e) => setBezorgfrequentie(e.target.value)}>*/}
        {/*        <option>Iedere week</option>*/}
        {/*        <option>Om de week</option>*/}
        {/*        <option>Iedere maand</option>*/}
        {/*    </select>*/}
        {/*    Opmerking:*/}
        {/*    <input type="text" value={opmerking}*/}
        {/*           onChange={(e) => setOpmerkingValue(e.target.value)}/>*/}
        {/*    <input type="checkbox"value={Voorwaarden}*/}
        {/*           onChange={(e) => checkVoorwaarden(e.target.value)}/>Ik ga akkoord met de voorwaarden*/}
        {/*    */}
        {/*</form>*/}
</section>


    </>
  );
}

export default App;
