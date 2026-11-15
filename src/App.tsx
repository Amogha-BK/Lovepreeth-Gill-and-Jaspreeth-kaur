import { useRef, useState } from "react";
import { ArrowDown, MapPin, Music2, Pause, CalendarDays, Phone, ArrowUpRight } from "lucide-react";
import { invitationConfig as c, type Celebration } from "./invitationConfig";

const maps = (address: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
function Rule() { return <div className="ornament" aria-hidden="true"><span />✧<span /></div>; }
function saveCalendar(event: Celebration) {
  const escape = (s: string) => s.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/,/g,"\\,").replace(/;/g,"\\;");
  const text = ["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Gill Family//Invitation//EN","BEGIN:VEVENT",`UID:${event.id}-2026@iqbal-mandeep.invitation`,`DTSTAMP:${new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,"")}`,`DTSTART:${event.start}`,`DTEND:${event.end}`,`SUMMARY:${escape(`Iqbal & Mandeep — ${event.shortName}`)}`,`LOCATION:${escape(`${event.venue}, ${event.address}`)}`,`DESCRIPTION:${escape(event.schedule.map(s=>`${s.name}: ${s.time}`).join("\n")+"\n"+event.note)}`,"END:VEVENT","END:VCALENDAR"].join("\r\n");
  const url=URL.createObjectURL(new Blob([text],{type:"text/calendar;charset=utf-8"}));const a=document.createElement("a");a.href=url;a.download=`Iqbal-Mandeep-${event.id}.ics`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function EventPage({ event, index }: { event: Celebration; index: number }) {
  return <section className={`stationery event-page print-page event-art-${event.id}`} id={event.id} aria-labelledby={`${event.id}-title`}>
    <p className="eyebrow">The wedding celebrations · 0{index + 1}</p>
    <p className="subtitle">{event.subtitle}</p>
    <h2 id={`${event.id}-title`} className="script">{event.shortName}</h2><Rule />
    <div className="date-block"><p>{event.day}</p><strong>0{event.date.split(" ")[0]}</strong><p>December · 2026</p></div>
    <dl className="schedule">{event.schedule.map(s=><div key={s.name}><dt>{s.name}</dt><dd>{s.time}</dd></div>)}</dl>
    <Rule /><p className="eyebrow">{event.id === "wedding" ? "Barat proceeds to" : "We look forward to welcoming you"}</p>
    <h3 className="venue">{event.venue}</h3><p className="address">{event.address}</p><p className="event-note">{event.note}</p>
    <div className="event-actions screen-only"><a className="button" href={maps(`${event.venue === "At our residence" ? "" : event.venue} ${event.address}`)} target="_blank" rel="noreferrer"><MapPin size={15} />Directions<ArrowUpRight size={13}/></a><button className="button" onClick={()=>saveCalendar(event)}><CalendarDays size={15}/>Save the date</button></div>
    <p className="time-note">All times are in Indian Standard Time</p>
  </section>;
}
export default function App() {
  const [playing,setPlaying]=useState(false);const audio=useRef<HTMLAudioElement>(null);
  const play=()=>{if(!audio.current)return;audio.current.volume=.3;void audio.current.play().then(()=>setPlaying(true)).catch(()=>setPlaying(false));};
  return <>
    <audio ref={audio} src="/assets/kudmayi.mp3" loop preload="none" onPause={()=>setPlaying(false)} onPlay={()=>setPlaying(true)}/>
    <div className="invitation">
      <nav className="screen-only"><a href="#welcome" className="nav-home">Invitation</a><div className="nav-links"><a href="#shagun">Shagun</a><a href="#jaago">Jaago</a><a href="#wedding">Wedding</a></div><button className="music-button" onClick={()=>playing?audio.current?.pause():play()} aria-label={playing?"Pause music":"Play music"}>{playing?<Pause size={17}/>:<Music2 size={17}/>}</button></nav>
      <main>
        <section className="logo-page print-page" id="logo" aria-label="Iqbal and Mandeep floral monogram cover"><img src="/assets/iqbal-mandeep-cover.png" alt="I and M monogram in a vintage floral medallion on sage paper" fetchPriority="high" /></section>
        <section className="cover-page print-page" id="welcome"><img src="/assets/iqbal-mandeep-gurdwara-9x16.png" alt="Watercolor illustration of a Sikh bride and groom seated respectfully in a gurdwara, facing the Guru Granth Sahib" fetchPriority="high"/><div className="cover-copy"><p className="eyebrow">With the blessings of Waheguru</p><h1>Iqbal <span>&amp;</span> Mandeep</h1><p className="cover-full-names">Iqbal Singh Gill &amp; Mandeep Kaur Sandhu</p><p className="cover-date">5 &amp; 7 December 2026</p><a className="screen-only scroll-link" href="#invitation">Join our celebrations <ArrowDown size={15}/></a></div></section>
        <section className="stationery family-page print-page" id="invitation"><p className="invocation" lang="pa">{c.invocation}</p><p className="prayer" lang="pa">{c.prayer[0]}<br/>{c.prayer[1]}</p><Rule/><p className="eyebrow">With the heavenly blessings of our grandparents</p><p className="grandparents">{c.grandparents}</p><p className="host-names">{c.parents}</p><p className="invitation-copy">extend a warm invitation to share in their happiness<br className="wide-only"/> and shower your blessings on the wedding of their son</p><h2 className="couple-name script">{c.couple.first}</h2><p className="with">with</p><h2 className="couple-name script">{c.couple.second}</h2><p className="bride-parents">{c.brideParents}<br/>of {c.brideAddress}</p><Rule/><p className="closing-line">Your presence will make our celebrations complete.</p></section>
        {c.celebrations.map((event,index)=><EventPage key={event.id} event={event} index={index}/>)}
        <section className="stationery contact-page print-page" id="contact"><p className="eyebrow">With love &amp; warm regards</p><h2 className="script">The Gill Family</h2><Rule/><p className="eyebrow">R.S.V.P.</p><p className="rsvp-names">{c.rsvp.map(n=><span key={n}>{n}</span>)}</p><div className="phone-list">{c.contacts.map(n=><a href={`tel:+91${n}`} key={n}><Phone size={14}/>{n.slice(0,5)} {n.slice(5)}</a>)}</div><p className="eyebrow">Our residence</p><p className="address">{c.residence}</p><Rule/><p>With best compliments from</p><p className="compliments">Nanke &amp; Dadke</p><p className="family-flowers">Our family flowers · All kids</p><p className="closing-line">We can't wait to celebrate with you.</p></section>
      </main><footer className="screen-only">Iqbal &amp; Mandeep · December 2026</footer>
    </div>
  </>;
}
