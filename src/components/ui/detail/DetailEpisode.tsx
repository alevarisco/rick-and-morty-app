"use client";

import Carousel from "@/components/ui/carousel/Carousel";
import { postNewComment } from "@/store/comments/thunks";
import { getEpisodesDetail } from "@/store/episodes/thunks";
import { AppDispatch, RootState } from "@/store/store";
import { redirect, RedirectType } from 'next/navigation'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function DetailEpisode({id}) {
    const dispatch: AppDispatch = useDispatch()
  
    const {isLoading, episode, characters} = useSelector<RootState>(state => state.episodes)

    const [name, setNewName] = useState('')
    const [email, setNewEmail] = useState('')
    const [comment, setNewComment] = useState('')

    const [errors, setErrors] = useState({
      name: false,
      email: false,
      comment: false,
    });

    const validateForm = () => {
      const newErrors = {
        name: name.trim() === '',
        email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), 
        comment: comment.trim().length < 1,
      };
      setErrors(newErrors);
      return !Object.values(newErrors).some((error) => error); 
    };

   const onSubmit = ( event ) => {
      if(validateForm()){
        event.preventDefault();
        dispatch(postNewComment({ name, email, comment }) );
        alert('Comentario creado con exito!')
        redirect('/episodes', RedirectType.replace);
      }else {
        alert('No debe haber inputs vacios')
      }
    }

    useEffect(() => {
      dispatch(getEpisodesDetail(id));
    }, [])

    return (
      <div className="">
        {!isLoading && episode && (
          <main className="px-5">
            <h1 className='antialiased text-4xl font-semibold my-7'>
              {episode.name}
            </h1>
            <h3>{episode.air_date}</h3>

            {characters && (
                <div className="py-5">
                    <h3 className="font-bold">Personajes</h3>
                    <Carousel persons={characters}/>
                </div>
            )}
            
            <div className="w-100">
              <form className="py-5 flex flex-col gap-5" onSubmit={onSubmit}>
                <h3 className="font-bold">Comentarios</h3>
                <input 
                  type="text" 
                  value={ name }
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Tu nombre" 
                  className="input form-control" 
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">El nombre no puede estar vacío.</p>
                )}
                <input 
                  type="email" 
                  value={ email }
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="Correo electrónico" 
                  className="input form-control" 
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">El email no puede estar vacío.</p>
                )}
                <textarea 
                  className="textarea" 
                 value={ comment }
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Comentario (máx. 500 caracteres)"
                  maxLength={500}
                  >
                </textarea>
                {errors.comment && (
                  <p className="mt-1 text-sm text-red-500">El comentario no puede estar vacío.</p>
                )}
              <button 
                className="btn btn-primary w-20"
                type="submit"
              >
                Enviar
              </button>
              </form>
            </div>

          </main>
        )}
      </div>
    );
}
