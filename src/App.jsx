import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import President from '../components/component'

function App() {
  const [count, setCount] = useState(0)
  const presidentInfo = [
    {
      id:1,
      name:"George Washington",
      years:"1789-1797",
      imgSrc:"https://hips.hearstapps.com/hmg-prod/images/gilbert_stuart_williamstown_portrait_of_george_washington_promo.jpg",
      wikiLink:"https://en.wikipedia.org/wiki/George_Washington"
    },
    {
      id:2,
      name:"John Adams",
      years:"1797-1801",
      imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Gilbert_Stuart%2C_John_Adams%2C_c._1800-1815%2C_NGA_42933.jpg/640px-Gilbert_Stuart%2C_John_Adams%2C_c._1800-1815%2C_NGA_42933.jpg",
      wikiLink:"https://en.wikipedia.org/wiki/John_Adams"
    },
    {
      id:3,
      name:"Thomas Jefferson",
      years:"1801–1809",
      imgSrc:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29%28cropped%29.jpg",
      wikiLink:"https://en.wikipedia.org/wiki/Thomas_Jefferson"
    },
    {
      id:4,
      name:"James Madison",
      years:"1809-1817",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/04_james_madison.jpg",
      wikiLink:"https://en.wikipedia.org/wiki/James_Madison"
    },
    {
      id:5,
      name:"James Monroe",
      years:"1817–1825",
      imgSrc:"https://upload.wikimedia.org/wikipedia/commons/d/d4/James_Monroe_White_House_portrait_1819.jpg",
      wikiLink:"https://en.wikipedia.org/wiki/James_Monroe"
    },
    {
      id:6,
      name:"John Quincy Adams",
      years:"1825-1829",
      imgSrc:"https://cdn.britannica.com/94/198794-050-F83C26A1/John-Quincy-Adams-oil-canvas-George-Caleb-1850.jpg",
      wikiLink:"https://en.wikipedia.org/wiki/John_Quincy_Adams"
    },
    {
      id:7,
      name:"Andrew Jackson",
      years:"1829-1837",
      imgSrc:"https://upload.wikimedia.org/wikipedia/commons/4/43/Andrew_jackson_head.jpg",
      wikiLink:"https://en.wikipedia.org/wiki/Andrew_Jackson"
    },
    {
      id:8,
      name:"Martin Van Buren",
      years:"1837-1841",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/08_martin_van_buren.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Martin_Van_Buren"
    },
    {
      id:9,
      name:"William Henry Harrison",
      years:"1841",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/09_william_henry_harrison.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/William_Henry_Harrison"
    },
    {
      id:10,
      name:"John Tyler",
      years:"1841-1845",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/10_john_tyler.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/John_Tyler"
    },
    {
      id:11,
      name:"James K. Polk",
      years:"1845-1849",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/11_james_k_polk.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/James_K._Polk"
    },
    {
      id:12,
      name:"Zachary Taylor",
      years:"1849-1850",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/12_zachary_taylor.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Zachary_Taylor"
    },
    {
      id:13,
      name:"Millard Fillmore",
      years:"1850-1853",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/13_millard_filmore.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Millard_Fillmore"
    },
    {
      id:14,
      name:"Franklin Pierce",
      years:"1853-1857",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/14_franklin_pierce.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Franklin_Pierce"
    },
    {
      id:15,
      name:"James Buchanan",
      years:"1857-1861",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/15_james_buchanan.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/James_Buchanan"
    },
    {
      id:16,
      name:"Abraham Lincoln",
      years:"1861-1865",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/16_abraham_lincoln.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Abraham_Lincoln"
    },
    {
      id:17,
      name:"Andrew Johnson",
      years:"1865-1869",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/17_andrew_johnson.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Andrew_Johnson"
    },
    {
      id:18,
      name:"Ulysses S. Grant",
      years:"1869–1877",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/18_ulysses_s_grant.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Ulysses_S._Grant"
    },
    {
      id:19,
      name:"Rutherford B. Hayes",
      years:"1877-1881",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/19_rutherford_b_hayes.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Rutherford_B._Hayes"
    },
    {
      id:20,
      name:"James Garfield",
      years:"1881",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/20_james_garfield.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/James_A._Garfield"
    },
    {
      id:21,
      name:"Chester A. Arthur",
      years:"1881-1885",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/21_chester_a_arthur.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Chester_A._Arthur"
    },
    {
      id:22,
      name:"Grover Cleveland",
      years:"1885-1889 ",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/22_grover_cleveland.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Grover_Cleveland"
    },
    {
      id:23,
      name:"Benjamin Harrison",
      years:"1889-1893",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/23_benjamin_harrison.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Benjamin_Harrison"
    },
    {
      id:24,
      name:"Grover Cleveland",
      years:"1893-1897",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/22_grover_cleveland.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Grover_Cleveland"
    },
    {
      id:25,
      name:"William McKinley",
      years:"1897-1901",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/25_william_mckinley.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/William_McKinley"
    },
    {
      id:26,
      name:"Theodore Roosevelt",
      years:"1901-1909",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/26_theodore_roosevelt.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Theodore_Roosevelt"
    },
    {
      id:27,
      name:"William Howard Taft",
      years:"1909-1913",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/27_william_howard_taft.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/William_Howard_Taft"
    },
    {
      id:28,
      name:"Woodrow Wilson",
      years:"1913-1921",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/28_woodrow_wilson.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Woodrow_Wilson"
    },
    {
      id:29,
      name:"Warren G. Harding",
      years:"1921-1923",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/29_warren_g_harding.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Warren_G._Harding"
    },
    {
      id:30,
      name:"Calvin Coolidge",
      years:"1923-1929",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/30_calvin_coolidge.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Calvin_Coolidge"
    },
    {
      id:31,
      name:"Herbert Hoover",
      years:"1929-1933",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/31_herbert_hoover.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Herbert_Hoover"
    },
    {
      id:32,
      name:"Franklin D. Roosevelt",
      years:"1933-1945",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/32_franklin_d_roosevelt.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Franklin_D._Roosevelt"
    },
    {
      id:33,
      name:"Harry S. Truman",
      years:"1945-1953",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/33_harry_s_truman.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Harry_S._Truman"
    },
    {
      id:34,
      name:"Dwight D. Eisenhower",
      years:"1953-1961",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/34_dwight_d_eisenhower.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Dwight_D._Eisenhower"
    },
    {
      id:35,
      name:"John F. Kennedy",
      years:"1961-1963",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/35_john_f_kennedy.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/John_F._Kennedy"
    },
    {
      id:36,
      name:"Lyndon B. Johnson",
      years:"1963-1969",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/36_lyndon_johnson.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Lyndon_B._Johnson"
    },
    {
      id:37,
      name:"Richard M. Nixon",
      years:"1969-1974",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/37_richard_nixon.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Richard_Nixon"
    },
    {
      id:38,
      name:"Gerald R. Ford",
      years:"1974-1977",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/38_gerald_ford.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Gerald_Ford"
    },
    {
      id:39,
      name:"James Carter",
      years:"1977-1981",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/39_jimmy_carter.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Jimmy_Carter"
    },
    {
      id:40,
      name:"Ronald Reagan",
      years:"1981-1989",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/40_ronald_reagan.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Ronald_Reagan"
    },
    {
      id:41,
      name:"George H. W. Bush",
      years:"1989-1993",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/41_george_hw_bush.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/George_H._W._Bush"
    },
    {
      id:42,
      name:"William J. Clinton",
      years:"1993-2001",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/42_bill_clinton.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Bill_Clinton"
    },
    {
      id:43,
      name:"George W. Bush",
      years:"2001-2009",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/43_george_w_bush.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/George_W._Bush"
    },
    {
      id:44,
      name:"Barack Obama",
      years:"2009-2017",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/44_barack_obama.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Barack_Obama"
    },
    {
      id:45,
      name:"Donald Trump",
      years:"2017-2021",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/01/45_donald_trump.jpg?resize=640,640",
      wikiLink:"https://en.wikipedia.org/wiki/Donald_Trump"
    },
    {
      id:46,
      name:"Joe Biden",
      years:"2021-",
      imgSrc:"https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped.jpg?resize=768,576",
      wikiLink:"https://en.wikipedia.org/wiki/Joe_Biden"
    }
  ]
  return (
    presidentInfo.map((el)=>{
      return <President key = {el.id} name = {el.name} years = {el.years} imgSrc={el.imgSrc} wikiLink={el.wikiLink}/>
    })
  )
}

export default App
