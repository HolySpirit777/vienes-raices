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
    const [files, setFiles] = useState();


    function saveData() {
        
//         const express = require('express');
//         const formidable = require('formidable');

// const app = express();

// app.get('/', (req, res) => {
//   res.send(`
//     <h2>With <code>"express"</code> npm package</h2>
//     <form action="/api/upload" enctype="multipart/form-data" method="post">
//       <div>Text field title: <input type="text" name="title" /></div>
//       <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /></div>
//       <input type="submit" value="Upload" />
//     </form>
//   `);
// });

// app.post('/api/upload', (req, res, next) => {
//   const form = formidable({ multiples: true });

//   form.parse(req, (err, fields, files) => {
//     if (err) {
//       next(err);
//       return;
//     }
//     res.json({ fields, files });
//   });
// });

// app.listen(3000, () => {
//   console.log('Server listening on http://localhost:3000 ...');
// });

        let listOfFiles = [];

        var formData = new FormData();

        // formData.set("title", title);
        // formData.set("description", description);
        // formData.set("beds", beds);
        // formData.set("bathrooms", bathrooms);
        // formData.set("available", available);
        // formData.set("priceByDay", priceByDay);
        // formData.set("priceByWeek", priceByWeek);
        // formData.set("priceByMonth", priceByMonth);
        // formData.append("files", files);


        for (const key in files) {
            if (Object.hasOwnProperty.call(files, key)) {
                // console.log(key, files[key].name);
                formData.append(`picture[${key}]`, files[key], files[key].name);
            }
        }

        // for(var pair of formData.entries()){
        //     console.log(pair);
        // }

        // for(let file; file < files.length; file++) {

        //     // formData.append("files", files);
            
        //     console.log(files[file]);

        // }

        console.log(files);

        const headers = {
            'Content-Type': 'multipart/form-data'
        }

        axios.post('http://localhost:4000/properties/create', formData, headers);

        // axios({
        //     method: 'post',
        //     url: 'http://localhost:4000/properties/create',
        //     header: {
        //         'Content-Type': 'multipart/form-data'
        //     },
        //     data: formData
        //     // data: {
        //     //     title: title,
        //     //     bathrooms: bathrooms,
        //     //     description: description,
        //     //     available: available,
        //     //     priceByDay: priceByDay,
        //     //     priceByWeek: priceByWeek,
        //     //     priceByMonth: priceByMonth,
        //     //     files: formData
        //     // }
        // });
 
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

                    <input onChange={(event) => setFiles( { ...files, ...event.target.files} )  }  type='file'  multiple/>

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
                        <FormControlLabel value="no disponible" control={<Radio />} label="No Disponible" />
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
