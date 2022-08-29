// import './App.css';
// import { useState, useEffect, useRef } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import axios from 'axios'
// import { useCookieConsent } from '@use-cookie-consent/core';
// import { BrowserView, MobileView, browserName, browserVersion } from "react-device-detect";


// function Tracker() {
//   //creating IP state
//   const [ip, setIP] = useState('');

//   //testing api connection between React and nodeJs server
//   const [data, setData] = useState(null);

//   //creating function to load ip address from the API
//   const getData = async () => {
//     const res = await axios.get('https://geolocation-db.com/json/')
//     console.log(res.data);
//     setIP(res.data.IPv4)
//   }

//   // browser width and height
//   const refContainer = useRef();
//   const [dimensions, setDimensions] =
//     useState({ width: 0, height: 0 });


//   useEffect(() => {
//     getData()
//     if (refContainer.current) {
//       setDimensions({
//         width: refContainer.current.offsetWidth,
//         height: refContainer.current.offsetHeight,
//       });
//     }

//     fetch("/api")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, [])

//   // Checking cookies on browser
//   const { consent, acceptAllCookies, declineAllCookies, acceptCookies } = useCookieConsent({
//     consentCookieAttributes: { expires: 180 } // 180 days
//   });

//   //users language
//   const language = navigator.language

//   return (
//     <div className="App">
//       <h2>Your IP Address is</h2>
//       <h4>{ip}</h4>

//       <div>
//         <h3>
//           {`Third-party cookies ${consent.thirdParty ? 'approved' : "rejected"}`}
//         </h3>
//         <h3>
//           {`First-party cookies ${consent.firstParty ? 'approved' : 'rejected'}`}
//         </h3>

//         <button onClick={acceptAllCookies}>Accept all</button>
//         <button onClick={() => acceptCookies({ necessary: true, thirdParty: true })}>
//           Accept third-party
//         </button>
//         <button onClick={() => acceptCookies({ necessary: true, firstParty: true })}>
//           Accept first-party
//         </button>
//         <button onClick={declineAllCookies}>Reject all</button>
//       </div>
//       <p>User language is : {language}</p>
//       <BrowserView>I am rendered on: Desktop</BrowserView>
//       <MobileView>I am rendered on: Mobile</MobileView>
//       <p>I'm browseing with {browserName} version {browserVersion}</p>

//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           height: '100%',
//           backgroundColor: '#fafafa',
//           margin: '20px',
//         }}
//         ref={refContainer}>
//         <pre>
//           Container:
//           <br />
//           width: {dimensions.width}
//           <br />
//           height: {dimensions.height}
//         </pre>
//       </div>
//       <p>{!data ? "Loading..." : data}</p>
//     </div>
//   );
// }

// export default Tracker;
