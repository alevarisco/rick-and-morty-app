import { getEpisodes } from '@/store/episodes/thunks';
import { AppDispatch, RootState } from '@/store/store';
import { redirect, RedirectType } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export const TableEpisodes = () => {
    const dispatch: AppDispatch = useDispatch()

    const {isLoading, episodes = [], page, next, prev} = useSelector<RootState>(state => state.episodes)

    const handleRow = (id: number) => {
        redirect(`/episodes/${id}`, RedirectType.replace);
    }

    useEffect(() => {
        dispatch(getEpisodes())
    }, [])


  return (
    <div className="overflow-x-auto">
        <div className='flex flex-row gap-5 justify-end'>
            <button 
                className='btn btn-outline' 
                disabled={prev === null}
                onClick={() => dispatch(getEpisodes(page - 1))}
            >
                Previa
            </button>
            <button 
                className='btn btn-outline'
                disabled={isLoading || next === null}
                onClick={() => dispatch(getEpisodes(page + 1))}
            >
                Siguiente
            </button>
        </div>
        {!isLoading && (
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>Episodio</th>
                    <th>Nombre</th>
                    <th>Fecha emisión</th>
                </tr>
                </thead>
                <tbody>
                {/* row */}
                {episodes.map((obj, index) =>  (
                    <tr 
                        key={index}
                        className="hover:bg-base-300" 
                        onClick={() => handleRow(obj.id)}
                    >
                        <th>{obj.episode}</th>
                        <td>{obj.name}</td>
                        <td>{obj.air_date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        )}
        </div>
  )
}
