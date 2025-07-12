import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from './components/InputField';
import ArrowButton from './components/ArrowButton';
import Result from './components/Result';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background:
rgb(160, 160, 160);
`;

const CalculatorContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem 1rem 5rem 1rem;
  box-shadow: 0 4px 10px rgba(255, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

function App() {
  const [date, setDate] = useState({ day: '', month: '', year: '' });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState({ years: '--', months: '--', days: '--' });

  const validateAndCalculate = () => {
    const { day, month, year } = date;
    const dayNum = parseInt(day);
    const monthNum = parseInt(month);
    const yearNum = parseInt(year);
    const currentYear = new Date().getFullYear();

    const newErrors = {};
    if (!day || dayNum < 1 || dayNum > 31) newErrors.day = 'Must be a valid day';
    if (!month || monthNum < 1 || monthNum > 12) newErrors.month = 'Must be a valid month';
    if (!year || yearNum < 1900 || yearNum > currentYear) newErrors.year = 'Must be a valid year';

    const birthDate = new Date(yearNum, monthNum - 1, dayNum);
    const today = new Date();
    const isValidDate = birthDate.getFullYear() === yearNum && birthDate.getMonth() === (monthNum - 1) && birthDate.getDate() === dayNum;

    if (!isValidDate) newErrors.day = 'Must be a valid date';
    if (birthDate > today) newErrors.year = 'Date must be in the past';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setResult({ years: '--', months: '--', days: '--' });
      return;
    }

    let years = today.getFullYear() - yearNum;
    let months = today.getMonth() - (monthNum - 1);
    let days = today.getDate() - dayNum;

    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setErrors({});
    setResult({ years, months, days });
  };

  return (
    <Container>
      <CalculatorContainer>
        <InputGroup>
          <InputField label="DAY" placeholder="DD" value={date.day} onChange={e => setDate({ ...date, day: e.target.value })} error={errors.day} />
          <InputField label="MONTH" placeholder="MM" value={date.month} onChange={e => setDate({ ...date, month: e.target.value })} error={errors.month} />
          <InputField label="YEAR" placeholder="YYYY" value={date.year} onChange={e => setDate({ ...date, year: e.target.value })} error={errors.year} />
        </InputGroup>
        <ArrowButton onClick={validateAndCalculate} />
        <Result years={result.years} months={result.months} days={result.days} />
      </CalculatorContainer>
    </Container>
  );
}

export default App;
