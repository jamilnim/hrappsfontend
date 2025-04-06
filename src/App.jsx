import "./App.css";

import Box from './Box';


const App = () => {
  return (
    <div>
      
      <header><h1>Hr Apps</h1></header>
      <main>
        <Box name='Jamil' title='Jr.Devoloper' salary='2000' phone='04566789' email='jamilnimbook2@gmail.com' animal='cat' />
        <Box/>
        <Box/>
        <Box/>
        <Box/>
      </main>
      <footer>
        <p>copyrights RACT25K</p>
      </footer>
    
    </div>
  );
};

export default App;
