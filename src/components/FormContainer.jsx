import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form"
import { SearchListContainer } from './SearchListContainer';


export const FormContainer =  () => {

  const API_KEY = "pub_37454d5426d0dcf63af7cc56e952bc7cce3b6"

    const [Search, setSearch] = useState("")
    const [Pais, setPais] = useState("")
    const [Categoria, setCategoria] = useState("")
    const [notices, setNotices] = useState([])
    const [error, setError] = useState([])


  

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        setSearch(data.Search);
        setPais(data.Pais)
        setCategoria(data.Categoria)
      }

      useEffect(() => {

        const fetchData = async () => {
          try {
            const response = await fetch(`https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${Search}&category=${Categoria}&country=${Pais}`)
            if (!response.ok) {
              throw new Error('La solicitud no fue exitosa');
          }
          const responseData = await response.json();
      
          setNotices(responseData.results);
        } catch (error) {
            setError(error.message);
          }
        }
        if (Search && Categoria && Pais) {
          fetchData();
        } 
          }, [Search, Categoria, Pais])
      

      

  return (
    <>
    <Form onSubmit={handleSubmit(onSubmit)}>
     <Form.Label>Ingresa tu busqueda:</Form.Label>
  <Form.Control
    type="text"
    id="inputSearch"
    {...register("Search")}
    />
  <Form.Text id="passwordHelpBlock" muted>
        La busqueda debera tener minimo 10 caracteres
  </Form.Text>
  <Form.Select 
  aria-label="Default select example"
  {...register("Pais")}
  >
  <option>Pais a seleccionar</option>
  <option value="ar">Argentina</option>
  <option value="br">Brazil</option>
  <option value="cl">Chile</option>
  <option value="es">España</option>
  <option value="us">Estados Unidos</option>
</Form.Select>
<Form.Select 
aria-label="Default select example"
{...register("Categoria")}
>
  <option>Categoria de noticia</option>
  <option value="sports">Deportes</option>
  <option value="food">Comida</option>
  <option value="health">Salud</option>
</Form.Select>
<Button type='submit' variant='primary'>Enviar</Button>
</Form>
<SearchListContainer search={notices} />
  </>
  )
}
