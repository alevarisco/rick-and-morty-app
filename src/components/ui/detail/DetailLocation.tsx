"use client";

import Carousel from "@/components/ui/carousel/Carousel";
import { getLocationDetail } from "@/store/locations/thunks";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function DetailLocation({id}) {
    const dispatch: AppDispatch = useDispatch()
  
    const {isLoading, location, residents} = useSelector<RootState>(state => state.locations)

    useEffect(() => {
      dispatch(getLocationDetail(id));
    }, [])

    return (
      <div className="">
        {!isLoading && location && (
          <main className="px-5">
            <h1 className='antialiased text-4xl font-semibold my-7'>
              {location.name}
            </h1>
            <h3>{location.air_date}</h3>

            {residents && (
                <div className="py-5">
                    <h3 className="font-bold">Residentes</h3>
                    <Carousel persons={residents}/>
                </div>
            )}
  
          </main>
        )}
      </div>
    );
}
