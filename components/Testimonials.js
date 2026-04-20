"use client";
import { useState } from "react";
import styles from "./Testimonials.module.css";
import TestimonialCard from "./TestimonialCard";
import { Boxes } from "lucide-react";
const testimonials = [
{
 company:"Netflix",
 role:"New Age Startup",
 logo:"NETFLIX",
 author:"Joe Thomas",
 quote:"This platform completely transformed how I manage my work. Everything feels faster, cleaner, and much more intuitive than what I used before. I was impressed by how simple yet powerful the experience is. It saved me so much time and made my daily workflow effortless."
},
{
 company:"Cosmic",
 role:"Edtech Startup",
 logo:"COSMIC",
 author:"Tony Spiro",
 quote:"This platform completely transformed how I manage my work. Everything feels faster, cleaner, and much more intuitive than what I used before."
},
{
 company:"Amazon",
 role:"Ecom Startup",
 logo:"amazon",
 author:"Andy Jassy",
 quote:"This platform completely transformed how I manage my work. Everything feels faster, cleaner, and much more intuitive than what I used before."
},
{
 company:"Loom",
 role:"CEO Loom",
 logo:"loom",
 author:"Peter Mac",
 quote:"This platform completely transformed how I manage my work. Everything feels faster, cleaner, and much more intuitive than what I used before. I was impressed by how simple yet powerful the experience is. It saved me so much time and made my daily workflow effortless."
},
{
 company:"Google",
 role:"Fintech Startup",
 logo:"Google",
 author:"Sundar Pichai",
 quote:"This platform completely transformed how I manage my work. Everything feels faster, cleaner and intuitive than what I used before."
}
];

export default function Testimonials(){

 const [active,setActive]=useState(3);

 return(
<section className={styles.section}>

<div className={styles.header}>

  <div className={styles.badge}>
  <Boxes className={styles.icon}/>
  <span className={styles.label}>
    TESTIMONIALS
  </span>
</div>

  <h2>What Developers Are Saying</h2>

  <p>
    Real experiences from developers who've tried the tool in their everyday<br/>
    workflow from quick fixes to improving productivity.
  </p>

</div>

<div className={styles.grid}>
{testimonials.map((item,i)=>(
<TestimonialCard
key={i}
item={item}
isActive={active===i}
onHover={()=>setActive(i)}
/>
))}
</div>

</section>
 )
}