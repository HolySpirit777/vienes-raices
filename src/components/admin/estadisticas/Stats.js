import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';

const axios = require('axios');


function Stats (props) {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [beds, setBeds] = useState();
    const [bathrooms, setBathrooms] = useState();
    const [available, setAvailable] = useState();
    const [priceByDay, setPriceByDay] = useState();
    const [priceByWeek,setPriceByWeek] = useState();
    const [priceByMonth, setPriceByMonth] = useState();


    return (
        <div>

            <h1>ESTADISTICA</h1>
    
        </div>
    );
}

export default Stats;
