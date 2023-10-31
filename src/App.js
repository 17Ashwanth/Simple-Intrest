import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';



function App() {
  const [interest,setinterest]= useState(0)
  const [principal, setPrincipal]= useState(0)
  const [rate, setRate]= useState(0)
  const [year, setYear]= useState(0)
  const [IsPrincipal ,setIsPrincipal]= useState(true)
  const [ IsRate ,setIsRate]= useState(true)
  const [ IsYear ,setIsYear]= useState(true)

  const getValidate =(e)=>{
    const {name,value}=e.target
   /*console.log(name, value);
    setPrincipal(value)*/
    if(!!value.match(/^[0-9]*.?[0-9]+$/))
      if(name==='principal'){
      setPrincipal(value)
      setIsPrincipal(true)
      }else if (name==='rate'){
        setRate(value)
        setIsRate(true)
      }else{
        setYear(value)
        setIsYear(true)
      }
      
    
    else{
      /* setPrincipal(value)
      setIsPrincipal(false) */
      if(name==='principal'){
        setPrincipal(value)
        setIsPrincipal(false)
        }else if (name==='rate'){
          setRate(value)
          setIsRate(false)
        }else{
          setYear(value)
          setIsYear(false)
        }
    }
  }

  const handleCalculate = (e)=>{
    e.preventDefault();
    if(!principal || !rate || !year)
    {
      alert('Please Fill The Form')
    }
    else{
      setinterest(principal*rate*year/100)
    }
    
  }

  const handleReset =(e)=>{
    setinterest(0)
    setPrincipal(0)
    setRate(0)
    setYear(0)
    setIsPrincipal(true)
    setIsRate(true)
    setIsYear(true)

  }
  return (
    <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center w-100 bg-dark">
      <div className='bg-light p-5 rounded'>
      <h1 >Simple Interest App</h1>
    <p> Calculate simple interest easily</p>
    <div className='bg-warning justify-content-center align-items-center w-100 p-3 flex-column rounded mt-4'> 
 <h1 className='d-flex justify-content-center align-items-center'>₹{''}{interest}</h1>
 <p className='d-flex justify-content-center align-items-center'>Total Simple interest</p>
  </div>
  <form className='mt-4'>
    <div className='mb-3'>
    <TextField value={principal || ""} onChange={(e)=>getValidate(e)} name='principal' className='w-100 mt-3' id="outlined-basic" label="₹ Principal Amount" variant="outlined" />
    {
      !IsPrincipal &&
      <div>
        <p className='text-danger fw-bolder'>*Invalid Input</p>
        </div>
    }
    <TextField value={rate || ""} onChange={(e)=>getValidate(e)} name='rate' className='w-100 mt-3' id="outlined-basic" label="Rate Of Interest (p.a) %" variant="outlined" />
    {
      !IsRate &&
      <div>
        <p className='text-danger fw-bolder'>*Invalid Input</p>
        </div>
    }
    <TextField value={year || ""} onChange={(e)=>getValidate(e)} name='year' className='w-100 mt-3' id="outlined-basic" label="Year" variant="outlined" />
    {
      !IsYear &&
      <div>
        <p className='text-danger fw-bolder'>*Invalid Input</p>
        </div>
    }
    </div>
    <Stack direction="row" spacing={2}>
    <Button onClick={handleCalculate} disabled={IsPrincipal && IsRate && IsYear?false:true} className='bg-success' variant="contained" style={{width:"400px",height:'50px'}}>CALCULATE</Button>
<Button onClick={handleReset} className='bg-danger' variant="outlined"  style={{width:"400px",height:'50px'}}>RESET</Button>
</Stack>
  </form>
      </div>
    </div>
  );
}

export default App;

