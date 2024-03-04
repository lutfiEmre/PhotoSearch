'use client'
import React, {useEffect, useState} from 'react';

const SearcherInput = ({searcher,setSearcher}) => {
    return (
        <input onChange={(e) => {
            setSearcher(e.target.value)
        }} placeholder={'Search with Image Searcher'} className={'active:outline-none manrope600 outline-none z-20 px-[30px] text-white bg-transparent w-full h-full'} type="text"/>

    );
};

export default SearcherInput;
