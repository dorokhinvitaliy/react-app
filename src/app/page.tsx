"use client";
import Image from "next/image";
import { useState } from "react";
import { Card } from "./lib/definitions";


export function Input({type, value, placeholder, onChange}:{type: string, value: string, placeholder: string, onChange: any}){
  return <div><input type={type} onChange={(e)=>onChange(e)} value={value} placeholder={placeholder} /></div>;
}


export default function Home() {
  const [val, updVal] = useState("");
  const cards = [{id: 'id1', text: "example", color: 'red' as const}, {id: 'id2', text: "example4", color: 'red' as const}, {id: 'id3', text: "exam5ple", color: 'red' as const}];
  return (
    <div>
      { cards.map((card)=>(
        <Card key={card.id} card={card}></Card>
      )) }
      <div>{ val }</div>
      <Input type={"text"} value={val} onChange={(e)=>updVal(e.target.value)} placeholder={"test"}></Input>

    </div>
  );
}


export function Card({card}: {card: Card}){
  return <div>Card { card.text }</div>;
}


