import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addKontak, getListKontak, detailKontak, updateKontak } from '../../actions/kontaAction';

function AddKontak() {

    const [nama, setNama] = useState('');
    const [nomorHP, setNomorHP] = useState('');
    const [id, setId] = useState('');

    // memanggil stateGlobal (reducer) :
    const{ addKontakData, detailKontakResult, updateKontakData } = useSelector((state)=>state.KontakReducer);

    const dispatch = useDispatch();

    const handleAddSubmit = (event) => {
        event.preventDefault();
        if (id) {
            // update kontak
            dispatch(updateKontak({id : id, nama: nama, nomorHP : nomorHP}));
        } else {
            // memerintahkan dispatch untuk add kontak
            dispatch(addKontak({nama: nama, nomorHP : nomorHP}));
        }
    }

    // Agar auto reload ketika ditambahkan data :
    useEffect(()=>{
        if (addKontakData) {
           
            dispatch(getListKontak());
            setNama('');
            setNomorHP('');
        }    
    }, [addKontakData, dispatch])

    // mengeset inputan setelah diclick EDIT :
    useEffect(()=>{
        if (detailKontakResult) {
            setId(detailKontakResult.id);
            setNama(detailKontakResult.nama);
            setNomorHP(detailKontakResult.nomorHP);
        }
    }, [detailKontakResult, dispatch])

    // Setelah edir selesai
    useEffect(()=>{
        if (updateKontakData) {
           
            dispatch(getListKontak());
            setNama('');
            setNomorHP('');
            setId('');
        }    
    }, [updateKontakData, dispatch])

  return (
    <>
    <h4>{id ? "Update Kontak" : "Add Kontak"}</h4>
    <form onSubmit={(event)=>handleAddSubmit(event)}>
        <input type="text"
            name='nama'
            placeholder='Nama'
            value={nama}
            onChange={(event)=>setNama(event.target.value)} />
        <input type="text"
            name='nomorHP'
            placeholder='Nomor Hp'
            value={nomorHP}
            onChange={(event)=>setNomorHP(event.target.value)} />
        <button type='submit'>{id ? "Update Kontak" : "Add Kontak"}</button>
    </form>
    </>
  )
}

export default AddKontak