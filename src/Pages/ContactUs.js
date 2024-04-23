import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ContactUs() {
    const Location = useLocation();
    console.log (Location);
  return (
    <div>ContactUs</div>
  )
}
