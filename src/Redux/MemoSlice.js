import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  memos:localStorage.getItem('memos')?JSON.parse(localStorage.getItem('memos')):[],
}

export const memoSlice = createSlice({
  name: 'memo',
  initialState,
  reducers: {
    addMemo: (state,action) => {
      const memo=action.payload;
      state.memos.push(memo);
      localStorage.setItem('memos',JSON.stringify(state.memos));
      toast.success("Memo Added");
     
    },
    deleteMemo: (state,action) => {
      const memo=action.payload;
      const index=state.memos.findIndex((m)=>m._id===memo._id);
      if(index>=0){
        state.memos.splice(index,1);
        localStorage.setItem('memos',JSON.stringify(state.memos));
        toast.success("Memo Deleted");
      }
      else{
        toast.error("Memo not found");
      }
      
    },
   
    
    updateMemo:(state,action) => {   
      const memo=action.payload;
      const index=state.memos.findIndex((m)=>m._id===memo._id);

      if(index>=0){
        state.memos[index]=memo;
        localStorage.setItem('memos',JSON.stringify(state.memos));
        toast.success("Memo Updated");
      }
      else{
        toast.error("Memo not found");
      }

    },
   
  },
})


export const { addMemo, deleteMemo, updateMemo } = memoSlice.actions

export default memoSlice.reducer