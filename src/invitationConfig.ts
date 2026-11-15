export type Celebration = {
  id: string; shortName: string; subtitle: string; day: string; date: string;
  start: string; end: string; schedule: {name: string; time: string}[];
  venue: string; address: string; note: string;
};
export const invitationConfig = {
  couple: { first: "Lovepreet Singh Gill", second: "Jaspreet Kaur" },
  parents: "Sardarni Baljinder Kaur & S. Jaswant Singh Gill",
  grandparents: "Late Sardarni Surjit Kaur & Late S. Hardeep Singh Gill",
  brideParents: "Daughter of Sardarni Ravinder Kaur & S. Baljinder Singh",
  brideAddress: "Dharamkot",
  invocation: "ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ ॥",
  prayer: ["ਸਤਿਗੁਰ ਦਾਤੇ ਕਾਜੁ ਰਚਾਇਆ, ਆਪਣੀ ਮਿਹਰ ਕਰਾਈ ॥", "ਦਾਸਾਂ ਕਾਰਜ ਆਪਿ ਸਵਾਰੇ, ਇਹ ਉਸ ਦੀ ਵਡਿਆਈ ॥"],
  residence: "Near Bijli Ghar, V.P.O. Sabhra, Patti, Distt. Tarn Taran",
  contacts: ["7837344935", "8427709560"],
  rsvp: ["Gill Family", "Amarjit Singh Gill", "Harsukhdev Singh Gill"],
  pdf: "/Lovepreet-and-Jaspreet-Wedding-Only.pdf",
  celebrations: [
    {id:"shagun", shortName:"Shagun", subtitle:"A beautiful beginning", day:"Saturday", date:"5 December 2026", start:"20261205T053000Z", end:"20261205T093000Z", schedule:[{name:"Shagun ceremony",time:"11:00 a.m."},{name:"Lunch",time:"1:00 p.m."}], venue:"Sagar Villa",address:"Bhikhiwind Road, Dayalpura, Distt. Tarn Taran",note:"Join us as we begin the celebrations with blessings, love and the warmth of family."},
    {id:"jaago", shortName:"Jaago", subtitle:"An evening of song & celebration",day:"Friday",date:"11 December 2026", start:"20261211T123000Z", end:"20261211T163000Z",schedule:[{name:"Jaago",time:"6:00 p.m."}],venue:"At our residence",address:"Near Bijli Ghar, V.P.O. Sabhra, Patti, Distt. Tarn Taran",note:"An evening of music, dancing and joyful traditions. Come celebrate with the Gill family."},
    {id:"wedding",shortName:"Wedding",subtitle:"Together, with your blessings",day:"Saturday",date:"12 December 2026",start:"20261212T013000Z",end:"20261212T023000Z",schedule:[{name:"Sehra Bandi",time:"7:00 a.m."},{name:"Departure of Barat",time:"8:00 a.m."}],venue:"The Grand Farms",address:"Near Fatehgarh, Korotana & Lohara Chowk, Moga",note:"The Barat departs from our residence for The Grand Farms. We look forward to your gracious presence."}
  ] satisfies Celebration[],
};
