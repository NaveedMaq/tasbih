import { useEffect, useState } from 'react';
import { playNotificationSound } from './NotificationSound';
import Button from './ui/Button';

const mainStyle = {
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  textAlign: 'center',
  width: 'fit-content',
  margin: '2rem auto',
  border: '1px solid #666',
  borderRadius: '7px',
};

const arabicStyle = {
  fontFamily: "'Scheherazade New', serif",
  fontWeight: 700,
};

function App() {
  const [maxCount, setMaxCount] = useState(600);
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState('');

  const [isMaxCountVisible, setIsMaxCountVisible] = useState(false);

  useEffect(() => {
    setCount(localStorage.getItem('count') * 1);
  }, []);

  useEffect(() => {
    if (count === 0) setStatus('Start Dhikr by clicking increment!');
    else if (count >= maxCount) setStatus('Dhikr Completed!');
    else setStatus('Doing Dhikr ...');
  }, [count, maxCount]);

  function increment() {
    setIsMaxCountVisible(false);
    if (count >= maxCount - 1) playNotificationSound();
    if (count >= maxCount) return;

    localStorage.setItem('count', count * 1 + 1);
    setCount((c) => c + 1);
  }

  function reset() {
    localStorage.setItem('count', 0);
    setCount(0);
    playNotificationSound();
    setIsMaxCountVisible((i) => !i);
  }

  return (
    <main style={mainStyle}>
      <h3>Durood e Khizri</h3>
      <h1 style={arabicStyle}>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
      <h1 style={arabicStyle}>
        صَلَّى اللهُ عَلَىٰ حَبِيبِهِ مُحَمَّدٍ وَآلِهِ وَسَلَّمْ
      </h1>
      <Button onClick={reset}>Start / Restart Dhikr</Button>
      {isMaxCountVisible && (
        <input
          type='number'
          placeholder='Enter Dhikr Count'
          value={maxCount}
          onChange={(e) => setMaxCount(e.target.value)}
        />
      )}
      <h3>{status}</h3>
      <h2>
        {count}/{maxCount}
      </h2>
      <Button onClick={increment}>
        <h3>Increment Count</h3>
      </Button>
    </main>
  );
}

export default App;
