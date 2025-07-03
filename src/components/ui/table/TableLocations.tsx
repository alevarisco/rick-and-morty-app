import { getLocations } from '@/store/locations/thunks';
import { AppDispatch, RootState } from '@/store/store';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { redirect, RedirectType } from 'next/navigation'

export const TableLocations = () => {
    const dispatch: AppDispatch = useDispatch()
    const {isLoading, locations = [], page, next, prev} = useSelector<RootState>(state => state.locations)

    const handleRow = (id: number) => {
        redirect(`/locations/${id}`, RedirectType.replace);
    }

    useEffect(() => {
        dispatch(getLocations())
    }, [])


  return (
    <div className="overflow-x-auto">
        <div className='flex flex-row gap-5 justify-end'>
            <button 
                className='btn btn-outline' 
                disabled={prev === null}
                onClick={() => dispatch(getLocations(page - 1))}
            >
                Previa
            </button>
            <button 
                className='btn btn-outline' 
                disabled={isLoading || next === null}
                onClick={() => dispatch(getLocations(page + 1))}
            >
                Siguiente
            </button>
        </div>
        {!isLoading && (
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Nombre</th>
                    <th>Dimensión</th>
                </tr>
                </thead>
                <tbody>
                {/* row */}
                {locations.map((obj, index) =>  (
                    <tr 
                        key={index} 
                        className="hover:bg-base-300" 
                        onClick={() => handleRow(obj.id)}
                    >
                        <th>{obj.type}</th>
                        <td>{obj.name}</td>
                        <td>{obj.dimension}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        )}
        </div>
  )
}
