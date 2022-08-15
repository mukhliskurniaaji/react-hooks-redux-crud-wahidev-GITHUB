import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteKontak, detailKontak, getListKontak } from '../../actions/kontaAction';
import { useSelector } from 'react-redux/es/exports';

function ListKontak() {

    // memanggil stateGlobal (reducer) :
    const{ getListKontakLoading, getListKontakData, getListKontakError, deleteKontakData } = useSelector((state) => state.KontakReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        //panggil action getListKontak
        dispatch(getListKontak());
    }, [dispatch])

    // auto reload ketika dihapus data :
    useEffect(()=>{
        if (deleteKontakData) {
            dispatch(getListKontak())
        }
    }, [deleteKontakData, dispatch])

  return (
    <>
        <h4>List Kontak</h4>
        {getListKontakData ? (
            getListKontakData.map((kontak) => {
                return (
                    <p key={kontak.id}> 
                        {kontak.nama} - 
                        {kontak.nomorHP} - 
                        <button onClick={ () => dispatch(deleteKontak(kontak.id))} >Hapus</button> 
                        <button onClick={ () => dispatch(detailKontak(kontak))}>Edit</button>
                    </p>
                )
            })
        ) : getListKontakLoading ? (
            <p>Loading ...</p>
        ) : (
            <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
        )}
    </>
  )
}

export default ListKontak;