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


function Create (props) {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [beds, setBeds] = useState();
    const [bathrooms, setBathrooms] = useState();
    const [available, setAvailable] = useState();
    const [priceByDay, setPriceByDay] = useState();
    const [priceByWeek,setPriceByWeek] = useState();
    const [priceByMonth, setPriceByMonth] = useState();

    function saveData() {

        console.log(title);
        console.log(description);
        console.log(beds);
        console.log(bathrooms);
        console.log(available);
        console.log(priceByDay);
        console.log(priceByWeek);
        console.log(priceByMonth);
        console.log(title);
        console.log(title);
        
    }


    return (
        <div>

            <div className='container'>

                <div className='column'>

                    <Container className='input-field'>

                    <FormControl>

                    <InputLabel htmlFor="titulo">Titulo</InputLabel>
                    <Input onChange={(event) => setTitle( event.target.value )}  id="my-input" aria-describedby="my-helper-text" />

                    </FormControl>

                    </Container>

                    <Container className='input-field'>

                    <FormControl>

                    <Input type='file' id="my-input" aria-describedby="my-helper-text" />

                    </FormControl>

                    </Container>

                    <Container className='input-field'>

                    <FormControl>

                    <InputLabel htmlFor="descripcion">Descripcion</InputLabel>
                    <Input multiline={true} onChange={(event) => {setDescription( event.target.value )}} id="my-input" aria-describedby="my-helper-text" />
                        
                    </FormControl>

                    </Container>

                    <Container className='input-field'>

                    <FormControl>

                    <InputLabel htmlFor="my-input">Camas</InputLabel>
                    <Input onChange={(event) => {setBeds( event.target.value )}} id="my-input" aria-describedby="my-helper-text" />
                        
                    </FormControl>

                    </Container>

                    <Container className='input-field'>

                    <FormControl>

                    <InputLabel htmlFor="my-input">Banos</InputLabel>
                    <Input onChange={(event) => {setBathrooms( event.target.value )}} id="my-input" aria-describedby="my-helper-text" />
                        
                    </FormControl>

                    </Container>


                </div>

                <div className='column'>

                <Container className='input-field'>

                    <FormControl>

                    <FormControl component="fieldset">
                    <FormLabel component="legend">Disponibilidad</FormLabel>
                    <RadioGroup
                        aria-label="disponibilidad"
                        defaultValue="Disponible"
                        name="radio-buttons-group"
                        onChange={(event) => setAvailable(event.target.value)}
                    >
                        <FormControlLabel value="disponible" control={<Radio />} label="Disponile" />
                        <FormControlLabel value="noDisponible" control={<Radio />} label="No Disponible" />
                    </RadioGroup>
                    </FormControl>
                        
                    </FormControl>

                        </Container>

                        <Container className='input-field'>

                        <FormControl>

                        <InputLabel htmlFor="my-input">Precio por dia</InputLabel>
                        <Input onChange={(event) => setPriceByDay( event.target.value )} id="my-input" aria-describedby="my-helper-text" />

                        </FormControl>

                        </Container>

                        <Container className='input-field'>

                        <FormControl>

                        <InputLabel htmlFor="my-input">Precio por semana</InputLabel>
                        <Input onChange={(event) => setPriceByWeek( event.target.value )} id="my-input" aria-describedby="my-helper-text" />
                            
                        </FormControl>

                        </Container>

                        <Container className='input-field'>

                        <FormControl>

                        <InputLabel htmlFor="my-input">Precio por mes</InputLabel>
                        <Input onChange={(event) => setPriceByMonth( event.target.value )} id="my-input" aria-describedby="my-helper-text" />
                            
                        </FormControl>

    </Container>

                </div>

            </div>

            <div className='buttons'>

            <Button onClick={saveData} color="success" variant='contained'>Guardar</Button>
            <Button color="error" variant='contained'>Cancelar</Button>

            </div>
            

        </div>
    );
}

export default Create;
