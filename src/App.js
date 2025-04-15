import React, { useState } from 'react';
import SoalPertama from './components/SoalPertama';
import SoalKedua from './components/SoalKedua';
import SoalKetiga from './components/SoalKetiga';
import SoalKeempat from './components/SoalKeempat';
import SoalKelima from './components/SoalKelima';
import { Button, Box } from '@mui/material';

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Test Soal Programmer</h1>
      <Box
        display="flex"
        justifyContent="center"
        gap={2}
        marginTop={2}
        marginBottom={2}
      >
        <Button variant="contained" onClick={() => openModal('soalPertama')}>
          Soal Pertama
        </Button>
        <Button variant="contained" onClick={() => openModal('soalKedua')}>
          Soal Kedua
        </Button>
        <Button variant="contained" onClick={() => openModal('soalKetiga')}>
          Soal Ketiga
        </Button>
        <Button variant="contained" onClick={() => openModal('soalKeempat')}>
          Soal Keempat
        </Button>
        <Button variant="contained" onClick={() => openModal('soalKelima')}>
          Soal Kelima
        </Button>
      </Box>

      {activeModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              width: '80%',
              height: '80%',
              overflowY: 'auto',
            }}
          >
            <Button
              variant="outlined"
              onClick={closeModal}
              style={{ marginBottom: '10px' }}
            >
              Close
            </Button>
            {activeModal === 'soalPertama' && <SoalPertama />}
            {activeModal === 'soalKedua' && <SoalKedua />}
            {activeModal === 'soalKetiga' && <SoalKetiga />}
            {activeModal === 'soalKeempat' && <SoalKeempat />}
            {activeModal === 'soalKelima' && <SoalKelima />}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
