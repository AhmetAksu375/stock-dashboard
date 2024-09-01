"use client";

import React from 'react'
import { Button } from "@/components/ui/button"

export default function page() {
  const clicked = ()=>{
    alert("basma lan bana !")
  }
  return (
    <div className='bg-slate-50 h-screen px-24 py-24'>
            <button onClick={clicked} onMouseEnter={()=> alert("Bak Sakınn")} className="btn btn-primary">Hello daisyUI!</button>
            <Button>Click me</Button>

    </div>
  )
}
